import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { email, zip } = await req.json()

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    const row = { email: email.toLowerCase(), zip: zip ?? null }

    // Insert to waitlist (ignore duplicate). Prefer the service role; fall
    // back to the anon client in case RLS allows public waitlist inserts.
    let saved = false
    try {
      const admin = getSupabaseAdmin()
      const { error } = await admin
        .from('waitlist')
        .upsert(row, { onConflict: 'email' })
      if (error) console.error('Waitlist admin insert error:', error)
      else saved = true
    } catch (adminErr) {
      console.error('Waitlist admin client error:', adminErr)
    }
    if (!saved) {
      try {
        const { getSupabaseClient } = await import('@/lib/supabase')
        const { error } = await getSupabaseClient()
          .from('waitlist')
          .upsert(row, { onConflict: 'email' })
        if (error) console.error('Waitlist anon insert error:', error)
        else saved = true
      } catch (anonErr) {
        console.error('Waitlist anon client error:', anonErr)
      }
    }
    if (!saved) {
      return NextResponse.json(
        { error: 'Could not save your signup. Please try again later.' },
        { status: 503 }
      )
    }

    // Send confirmation email via Resend (lazy import)
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: `CARC.com <${process.env.RESEND_FROM_EMAIL ?? 'hello@carc.com'}>`,
        to: email,
        subject: "You're on the CARC waitlist 🚗",
        html: `
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
      console.error('Email send error:', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
