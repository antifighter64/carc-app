/**
 * CARC API v1 — shared utilities.
 *
 * - Consistent JSON envelope: { data } on success, { error, code } on failure
 * - CORS enabled for future app domains
 * - In-memory rate limiting: 100 req/min per IP
 * - Route registry (V1_ROUTES) powers /api/docs
 */
import { NextRequest, NextResponse } from 'next/server'

export const V1_VERSION = '1.0.0'

// ── CORS ──────────────────────────────────────────────────────────────────
const ALLOWED_ORIGINS = [
  'https://carc.com',
  'https://www.carc.com',
  // Future iOS app / web clients — add domains here, or set CORS_ALLOW_ALL=true
]

function corsHeaders(req: NextRequest): Record<string, string> {
  const origin = req.headers.get('origin') ?? ''
  const allowAll = process.env.CORS_ALLOW_ALL === 'true'
  const allowed =
    allowAll || ALLOWED_ORIGINS.includes(origin) ? origin || '*' : ALLOWED_ORIGINS[0]
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  }
}

export function v1Options(req: NextRequest): NextResponse {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req) })
}

// ── Rate limiting (in-memory, 100 req/min per IP) ─────────────────────────
const RATE_LIMIT = 100
const WINDOW_MS = 60_000
const hits = new Map<string, number[]>()

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

export function checkRateLimit(req: NextRequest): { allowed: boolean; remaining: number } {
  const ip = clientIp(req)
  const now = Date.now()
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (arr.length >= RATE_LIMIT) {
    hits.set(ip, arr)
    return { allowed: false, remaining: 0 }
  }
  arr.push(now)
  hits.set(ip, arr)
  // Opportunistic cleanup
  if (hits.size > 10_000) {
    for (const [k, v] of hits) {
      if (v.length === 0 || now - v[v.length - 1] > WINDOW_MS) hits.delete(k)
    }
  }
  return { allowed: true, remaining: RATE_LIMIT - arr.length }
}

// ── Response helpers ──────────────────────────────────────────────────────
export function v1Ok(req: NextRequest, data: unknown, meta?: Record<string, unknown>): NextResponse {
  return NextResponse.json(
    { data, meta: { version: V1_VERSION, ...meta } },
    { headers: corsHeaders(req) }
  )
}

export function v1Error(req: NextRequest, message: string, code = 400): NextResponse {
  return NextResponse.json(
    { error: message, code },
    { status: code, headers: corsHeaders(req) }
  )
}

/** Wraps a GET handler with rate limiting + CORS error handling. */
export function withV1(
  handler: (req: NextRequest, ctx?: any) => Promise<NextResponse>
): (req: NextRequest, ctx?: any) => Promise<NextResponse> {
  return async (req: NextRequest, ctx?: any) => {
    const rl = checkRateLimit(req)
    if (!rl.allowed) {
      return v1Error(req, 'Rate limit exceeded. Max 100 requests/minute.', 429)
    }
    try {
      return await handler(req, ctx)
    } catch (err) {
      console.error('[v1] handler error:', err)
      return v1Error(req, 'Internal server error', 500)
    }
  }
}

// ── Param helpers ─────────────────────────────────────────────────────────
export function reqParam(req: NextRequest, name: string): string | null {
  const v = req.nextUrl.searchParams.get(name)
  return v && v.trim() ? v.trim() : null
}

export function reqInt(req: NextRequest, name: string): number | null {
  const v = reqParam(req, name)
  if (!v) return null
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : null
}

export function reqFloat(req: NextRequest, name: string): number | null {
  const v = reqParam(req, name)
  if (!v) return null
  const n = parseFloat(v)
  return Number.isFinite(n) ? n : null
}

// ── Route registry (powers /api/docs) ─────────────────────────────────────
export interface V1RouteDoc {
  method: string
  path: string
  summary: string
  params?: { name: string; required: boolean; type: string; description: string }[]
  body?: { name: string; required: boolean; type: string; description: string }[]
  example: string
}

export const V1_ROUTES: V1RouteDoc[] = [
  {
    method: 'GET',
    path: '/api/v1/valuation',
    summary: 'Private party valuation — the anchor number. Year/make/model (+mileage/condition) → what the car is worth in a private sale.',
    params: [
      { name: 'year', required: true, type: 'integer', description: 'Model year (e.g. 2022)' },
      { name: 'make', required: true, type: 'string', description: 'Make (e.g. Toyota)' },
      { name: 'model', required: true, type: 'string', description: 'Model (e.g. Camry)' },
      { name: 'trim', required: false, type: 'string', description: 'Trim level (informational)' },
      { name: 'mileage', required: false, type: 'integer', description: 'Actual miles. Defaults to 12k/yr.' },
      { name: 'condition', required: false, type: 'string', description: 'excellent | good (default) | fair' },
    ],
    example: '/api/v1/valuation?year=2022&make=Toyota&model=Camry&mileage=45000',
  },
  {
    method: 'GET',
    path: '/api/v1/deal-score',
    summary: 'Deal score — is this listing a steal or a ripoff? Returns 0–100 score, verdict, headline, negotiation script, depreciation forecast.',
    params: [
      { name: 'price', required: true, type: 'number', description: 'Asking/listing price' },
      { name: 'year', required: true, type: 'integer', description: 'Model year' },
      { name: 'make', required: true, type: 'string', description: 'Make' },
      { name: 'model', required: true, type: 'string', description: 'Model' },
      { name: 'mileage', required: false, type: 'integer', description: 'Miles on the car' },
    ],
    example: '/api/v1/deal-score?price=18500&year=2022&make=Honda&model=Civic&mileage=40000',
  },
  {
    method: 'GET',
    path: '/api/v1/vehicle/{make}/{model}/{year}',
    summary: 'Full vehicle profile — EPA specs, MPG, safety stars, recalls, complaints, private party value.',
    params: [
      { name: 'make', required: true, type: 'string', description: 'URL path segment (e.g. toyota)' },
      { name: 'model', required: true, type: 'string', description: 'URL path segment (e.g. camry)' },
      { name: 'year', required: true, type: 'string', description: 'URL path segment (e.g. 2022)' },
    ],
    example: '/api/v1/vehicle/toyota/camry/2022',
  },
  {
    method: 'GET',
    path: '/api/v1/investment/{make}/{model}/{year}',
    summary: 'Investment analysis — 5-year value retention %, investment-grade flag, vs-segment comparison.',
    params: [
      { name: 'make', required: true, type: 'string', description: 'URL path segment' },
      { name: 'model', required: true, type: 'string', description: 'URL path segment' },
      { name: 'year', required: true, type: 'string', description: 'URL path segment' },
    ],
    example: '/api/v1/investment/toyota/4runner/2022',
  },
  {
    method: 'POST',
    path: '/api/v1/newsletter',
    summary: 'Newsletter signup — joins the "Best Deals" weekly. Same backend as the waitlist.',
    body: [
      { name: 'email', required: true, type: 'string', description: 'Email address' },
      { name: 'zip', required: false, type: 'string', description: 'ZIP code' },
      { name: 'placement', required: false, type: 'string', description: 'Where the signup happened' },
    ],
    example: 'POST /api/v1/newsletter  {"email":"you@email.com"}',
  },
  {
    method: 'GET',
    path: '/api/v1/deals/spotlight',
    summary: 'Top 10 spotlight deals — smartest buys this week, for the newsletter and app home screen. Modeled from banked data until live listings are wired.',
    example: '/api/v1/deals/spotlight',
  },
]
