import { NextRequest, NextResponse } from 'next/server'
import { parseSearchQuery, batchScoreListings } from '@/lib/claude'
import { searchInventory } from '@/lib/marketcheck'
import { checkSearchRateLimit } from '@/lib/ratelimit'
import { supabase } from '@/lib/supabase'
import { searchBankedVehicles } from '@/lib/banked-search'

// ── Phase 1: Banked-data search ──────────────────────────────────────────────
// When MARKETCHECK_API_KEY / ANTHROPIC_API_KEY are not configured (no paid
// data yet), search our banked EPA/NHTSA vehicle database instead of 503ing.
// Returns matching vehicles with fair-price estimates so the homepage search
// actually works from day one.
async function bankedSearch(query: string) {
  const results = searchBankedVehicles(query, 20)
  return NextResponse.json({
    listings: results,
    total: results.length,
    source: 'banked',
    note: 'Showing vehicles from our database with estimated fair pricing. Live dealer listings coming soon.',
  })
}

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // Phase 1: no paid keys → banked-data search (never 503)
    if (!process.env.MARKETCHECK_API_KEY || !process.env.ANTHROPIC_API_KEY) {
      return bankedSearch(query)
    }

    // Get current user (if logged in)
    const authHeader = req.headers.get('authorization')
    let userId: string | null = null
    if (authHeader?.startsWith('Bearer ')) {
      const token = authHeader.slice(7)
      const { data } = await supabase.auth.getUser(token)
      userId = data.user?.id ?? null
    }

    // Rate limit check
    const { allowed, remaining, plan } = await checkSearchRateLimit(userId)
    if (!allowed) {
      return NextResponse.json(
        { error: 'Daily search limit reached. Upgrade to Pro for unlimited searches.' },
        { status: 429 }
      )
    }

    // Parse natural language query via Claude
    const parsed = await parseSearchQuery(query)

    // Search MarketCheck
    const { listings, total } = await searchInventory({
      make: parsed.make,
      model: parsed.model,
      year_min: parsed.year_min,
      year_max: parsed.year_max,
      price_max: parsed.price_max,
      mileage_max: parsed.mileage_max,
      zip: parsed.zip,
      radius: parsed.radius ?? 50,
      rows: 20,
      sort_by: 'price',
      sort_order: 'asc',
    })

    // Score listings (full scoring for Pro+, basic for free)
    const isPro = ['pro', 'growth', 'dealer', 'enterprise'].includes(plan)
    const scored = await batchScoreListings(listings, isPro)

    // Limit free tier to top 5
    const visibleListings = isPro ? scored : scored.slice(0, 5)

    return NextResponse.json({
      listings: visibleListings,
      total,
      remaining,
      plan,
      parsed_query: parsed,
      source: 'live',
    })
  } catch (err) {
    console.error('Search error:', err)
    return NextResponse.json(
      { error: 'Search failed. Please try again.' },
      { status: 500 }
    )
  }
}
