import { NextRequest, NextResponse } from 'next/server'
import { parseSearchQuery, batchScoreListings } from '@/lib/claude'
import { searchInventory } from '@/lib/marketcheck'
import { checkSearchRateLimit } from '@/lib/ratelimit'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
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
    })
  } catch (err) {
    console.error('Search error:', err)
    return NextResponse.json(
      { error: 'Search failed. Please try again.' },
      { status: 500 }
    )
  }
}
