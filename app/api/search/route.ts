import { NextRequest, NextResponse } from 'next/server'
import { parseSearchQuery, batchScoreListings } from '@/lib/claude'
import { searchInventory } from '@/lib/marketcheck'
import { checkSearchRateLimit } from '@/lib/ratelimit'
import { supabase } from '@/lib/supabase'
import { searchBankedVehicles } from '@/lib/banked-search'
import { BRANDS } from '@/lib/brands'
import type { SearchQuery } from '@/types'


// ── Phase 1: Banked-data search ──────────────────────────────────────────────
// When MARKETCHECK_API_KEY / ANTHROPIC_API_KEY are not configured (no paid
// data yet), search our banked EPA/NHTSA vehicle database instead of 503ing.
// Returns matching vehicles with fair-price estimates so the homepage search
// actually works from day one.
async function bankedSearch(query: string) {
  const results = searchBankedVehicles(query, 20)
  // Map banked vehicles to the CarListing shape the search UI renders.
  // Banked rows carry no dealer/listing data, so fill those fields with
  // safe defaults and use the private-party mid estimate as the price.
  const listings = results.map(v => {
    const price = v.privateParty?.mid ?? v.privateParty?.msrpWhenNew ?? 0
    return {
      ...v,
      id: v.slug,
      vin: '',
      trim: v.class ?? '',
      mileage: 0,
      price,
      market_price: price,
      price_delta: 0,
      price_is_estimate: true,
      dealer_name: '',
      dealer_city: '',
      dealer_state: '',
      dealer_zip: '',
      exterior_color: '',
      interior_color: '',
      transmission: v.trans ?? '',
      fuel_type: v.fuel ?? '',
      days_on_market: 0,
      photos: [] as string[],
      source: 'banked',
      listing_url: `/car/${v.slug}`,
    }
  })
  return NextResponse.json({
    listings,
    total: listings.length,
    source: 'banked',
    note: 'Showing vehicles from our database with estimated fair pricing. Live dealer listings coming soon.',
  })
}


// ── Local query parser (no Claude key needed) ────────────────────────────────
// Extracts make/model/year from the raw query so live MarketCheck search works
// even when ANTHROPIC_API_KEY is not configured. Listings are returned
// unscored in that case.
function parseQueryLocal(raw: string): SearchQuery {
  const lower = raw.toLowerCase()
  const years = [...lower.matchAll(/\b(19|20)\d{2}\b/g)]
    .map(m => parseInt(m[0], 10))
    .filter(n => n >= 1990 && n <= 2027)
  const parsed: SearchQuery = { raw }
  for (const b of BRANDS) {
    if (lower.includes(b.name.toLowerCase())) {
      parsed.make = b.name
      const model = b.models.find(m => m.name && lower.includes(m.name.toLowerCase()))
      if (model) parsed.model = model.name
      break
    }
  }
  if (!parsed.make) {
    for (const b of BRANDS) {
      const model = b.models.find(m => m.name && lower.includes(m.name.toLowerCase()))
      if (model) {
        parsed.make = b.name
        parsed.model = model.name
        break
      }
    }
  }
  if (years.length > 0) {
    parsed.year_min = Math.min(...years)
    parsed.year_max = Math.max(...years)
  }
  return parsed
}


export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    // No MarketCheck key → banked-data search (never 503)
    if (!process.env.MARKETCHECK_API_KEY) {
      return bankedSearch(query)
    }

    const hasAnthropic = !!process.env.ANTHROPIC_API_KEY

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

    // Parse natural language query (Claude when available, local fallback otherwise)
    const parsed: SearchQuery = hasAnthropic
      ? await parseSearchQuery(query)
      : parseQueryLocal(query)

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

    // Score listings with Claude when available; otherwise return unscored
    const isPro = ['pro', 'growth', 'dealer', 'enterprise'].includes(plan)
    const scored = hasAnthropic ? await batchScoreListings(listings, isPro) : listings

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
