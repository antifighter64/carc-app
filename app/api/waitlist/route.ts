import { NextRequest, NextResponse } from 'next/server'
import { signupEmail } from '@/lib/signup'

export async function POST(req: NextRequest) {
  try {
    const { email, zip, source, placement } = await req.json()
    const result = await signupEmail({ email, zip, source, placement })
    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status ?? 400 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[waitlist] error:', err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
