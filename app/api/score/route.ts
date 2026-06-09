import { NextRequest, NextResponse } from 'next/server'
import { getListingById } from '@/lib/marketcheck'
import { scoreListingFull } from '@/lib/claude'

export async function POST(req: NextRequest) {
  try {
    const { listing_id } = await req.json()
    if (!listing_id) {
      return NextResponse.json({ error: 'listing_id required' }, { status: 400 })
    }

    const listing = await getListingById(listing_id)
    if (!listing) {
      return NextResponse.json({ error: 'Listing not found' }, { status: 404 })
    }

    const score = await scoreListingFull(listing)
    return NextResponse.json({ score, listing })
  } catch (err) {
    console.error('Score error:', err)
    return NextResponse.json({ error: 'Scoring failed' }, { status: 500 })
  }
}
