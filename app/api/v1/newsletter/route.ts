import { NextRequest, NextResponse } from 'next/server'
import { signupEmail } from '@/lib/signup'
import { v1Ok, v1Error, v1Options, withV1 } from '../lib'

export function OPTIONS(req: NextRequest) {
  return v1Options(req)
}

export const POST = withV1(async (req: NextRequest): Promise<NextResponse> => {
  let body: any
  try {
    body = await req.json()
  } catch {
    return v1Error(req, 'Invalid JSON body', 400)
  }

  const result = await signupEmail({
    email: body.email,
    zip: body.zip ?? null,
    source: 'newsletter',
    placement: body.placement ?? 'api-v1',
  })

  if (!result.ok) {
    return v1Error(req, result.error ?? 'Signup failed', result.status ?? 400)
  }

  return v1Ok(req, {
    subscribed: true,
    message: "You're in! First Best Deals issue lands Sunday.",
  })
})
