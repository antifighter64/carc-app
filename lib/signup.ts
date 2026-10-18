/**
 * Shared email signup logic — used by both /api/waitlist and /api/v1/newsletter.
 * Single code path for all email capture (dogfooding).
 */
import { getSupabaseAdmin } from '@/lib/supabase'
import { promises as fs } from 'fs'
import path from 'path'

export type SignupSource = 'waitlist' | 'newsletter'

export interface SignupInput {
  email: string
  zip?: string | null
  source?: SignupSource
  placement?: string | null
}

export interface SignupResult {
  ok: boolean
  error?: string
  status?: number
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function saveToLocalBackup(email: string, zip: string | null, source: string) {
  try {
    const dir = path.join('/tmp', 'carc-waitlist')
    await fs.mkdir(dir, { recursive: true })
    const file = path.join(dir, 'signups.jsonl')
    await fs.appendFile(
      file,
      JSON.stringify({ email, zip, source, ts: new Date().toISOString() }) + '\n'
    )
    return true
  } catch (e) {
    console.error('[signup] backup save failed:', e)
    return false
  }
}

async function sendConfirmationEmail(email: string, source: SignupSource) {
  if (!process.env.RESEND_API_KEY) return
  try {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    const isNewsletter = source === 'newsletter'
    await resend.emails.send({
      from: `CARC.com <${process.env.RESEND_FROM_EMAIL ?? 'hello@carc.com'}>`,
      to: email,
      subject: isNewsletter
        ? "You're in! First Best Deals issue lands Sunday 🚗"
        : "You're on the CARC waitlist 🚗",
      html: isNewsletter ? `
        <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; background: #0D0F12; color: #E8ECF4;">
          <h1 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">
            <span style="color: #1E6BFF;">CARC</span>.com
          </h1>
          <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 16px;">You're in! 🎉</h2>
          <p style="color: #6B7280; line-height: 1.6; margin-bottom: 24px;">
            Every Sunday you'll get the 10 best below-market car deals we found that week,
            one investment-grade spotlight, and one overpriced listing to avoid.
          </p>
          <p style="color: #6B7280; font-size: 14px;">First issue lands this Sunday. Happy hunting.</p>
          <p style="color: #6B7280; font-size: 14px; margin-top: 32px;">— The CARC team</p>
        </div>
      ` : `
        <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; background: #0D0F12; color: #E8ECF4;">
          <h1 style="font-size: 28px; font-weight: 700; margin-bottom: 8px;">
            <span style="color: #1E6BFF;">CARC</span>.com
          </h1>
          <h2 style="font-size: 22px; font-weight: 600; margin-bottom: 16px;">You're on the list!</h2>
          <p style="color: #6B7280; line-height: 1.6; margin-bottom: 24px;">
            Thanks for joining. When CARC launches, you'll get 30 days of Pro free —
            unlimited AI car searches, deal scoring, negotiation scripts, and price alerts.
          </p>
          <p style="color: #6B7280; font-size: 14px;">We'll reach out when the doors open.</p>
          <p style="color: #6B7280; font-size: 14px; margin-top: 32px;">— The CARC team</p>
        </div>
      `,
    })
  } catch (emailErr) {
    console.error('[signup] email send error:', emailErr)
  }
}

export async function signupEmail(input: SignupInput): Promise<SignupResult> {
  const { email } = input
  if (!email || typeof email !== 'string') {
    return { ok: false, error: 'Email required', status: 400 }
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: 'Invalid email address', status: 400 }
  }

  const src: SignupSource = input.source === 'newsletter' ? 'newsletter' : 'waitlist'
  const row = {
    email: email.toLowerCase(),
    zip: input.zip ?? null,
    source: src,
    placement: typeof input.placement === 'string' ? input.placement.slice(0, 50) : null,
  }

  let saved = false

  // 1. Supabase admin (service role)
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const admin = getSupabaseAdmin()
      const { error } = await admin.from('waitlist').upsert(row, { onConflict: 'email' })
      if (error) console.error('[signup] admin insert error:', error.message)
      else saved = true
    } catch (e) {
      console.error('[signup] admin client error:', e)
    }
  }

  // 2. Supabase anon
  if (!saved && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    try {
      const { getSupabaseClient } = await import('@/lib/supabase')
      const { error } = await getSupabaseClient().from('waitlist').upsert(row, { onConflict: 'email' })
      if (error) console.error('[signup] anon insert error:', error.message)
      else saved = true
    } catch (e) {
      console.error('[signup] anon client error:', e)
    }
  }

  // 3. Local backup (never lose a signup)
  if (!saved) {
    saved = await saveToLocalBackup(row.email, row.zip, src)
  }

  if (!saved) {
    return { ok: false, error: 'Could not save your signup. Please try again later.', status: 503 }
  }

  // Fire-and-forget confirmation email
  sendConfirmationEmail(email, src).catch(() => {})

  return { ok: true }
}
