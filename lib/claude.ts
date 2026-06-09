import Anthropic from '@anthropic-ai/sdk'
import { CarListing, DealScore, SearchQuery } from '@/types'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// -----------------------------------------------
// Parse natural language search query
// -----------------------------------------------
export async function parseSearchQuery(raw: string): Promise<SearchQuery> {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 512,
    system: `You extract car search parameters from natural language queries.
Return ONLY valid JSON with these optional fields:
{
  "raw": string,
  "make": string,
  "model": string,
  "year_min": number,
  "year_max": number,
  "price_max": number,
  "mileage_max": number,
  "zip": string,
  "radius": number,
  "transmission": "automatic" | "manual",
  "fuel_type": "gasoline" | "electric" | "hybrid" | "diesel"
}
Omit fields not mentioned. For zip: if a city is mentioned (e.g. "Boca Raton"), output the well-known zip code.`,
    messages: [{ role: 'user', content: raw }],
  })

  try {
    const text = message.content[0].type === 'text' ? message.content[0].text : '{}'
    const parsed = JSON.parse(text)
    return { ...parsed, raw }
  } catch {
    return { raw }
  }
}

// -----------------------------------------------
// Score a batch of listings (free tier: basic)
// -----------------------------------------------
export async function scoreListingBasic(listing: CarListing): Promise<DealScore> {
  const priceDiff = listing.price - listing.market_price
  const pctOff = ((priceDiff / listing.market_price) * 100).toFixed(1)

  const prompt = `Score this car deal from 1-10.

Listing:
- ${listing.year} ${listing.make} ${listing.model} ${listing.trim}
- Price: $${listing.price.toLocaleString()} (market avg: $${listing.market_price.toLocaleString()}, diff: ${priceDiff >= 0 ? '+' : ''}$${priceDiff.toLocaleString()} / ${pctOff}%)
- Mileage: ${listing.mileage.toLocaleString()} miles
- Days on market: ${listing.days_on_market}
- Location: ${listing.dealer_city}, ${listing.dealer_state}

Return ONLY JSON:
{
  "score": number (1-10),
  "rating": "excellent" | "good" | "fair" | "overpriced",
  "summary": "1-2 sentence plain English summary"
}`

  const msg = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 256,
    messages: [{ role: 'user', content: prompt }],
  })

  try {
    const text = msg.content[0].type === 'text' ? msg.content[0].text : '{}'
    return JSON.parse(text)
  } catch {
    return { score: 5, rating: 'fair', summary: 'Unable to score this listing.' }
  }
}

// -----------------------------------------------
// Full deal analysis (Pro+)
// -----------------------------------------------
export async function scoreListingFull(listing: CarListing): Promise<DealScore> {
  const priceDiff = listing.price - listing.market_price

  const prompt = `You are an expert car buying advisor. Analyze this listing and give a comprehensive deal score.

Listing:
- ${listing.year} ${listing.make} ${listing.model} ${listing.trim}
- Price: $${listing.price.toLocaleString()} (market avg: $${listing.market_price.toLocaleString()}, diff: ${priceDiff >= 0 ? '+' : ''}$${priceDiff.toLocaleString()})
- Mileage: ${listing.mileage.toLocaleString()} miles
- Days on market: ${listing.days_on_market}
- Transmission: ${listing.transmission}
- Fuel type: ${listing.fuel_type}
- Exterior: ${listing.exterior_color}, Interior: ${listing.interior_color}
- Dealer: ${listing.dealer_name}, ${listing.dealer_city} ${listing.dealer_state}

Return ONLY JSON:
{
  "score": number (1-10),
  "rating": "excellent" | "good" | "fair" | "overpriced",
  "summary": "1-2 sentence summary",
  "why_good": ["reason 1", "reason 2", "..."] or [],
  "red_flags": ["flag 1", "..."] or [],
  "market_context": "paragraph about market context for this make/model",
  "negotiation_tips": ["tip 1", "tip 2", "tip 3"],
  "offer_suggestion": number (suggested offer price)
}`

  const msg = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  })

  try {
    const text = msg.content[0].type === 'text' ? msg.content[0].text : '{}'
    return JSON.parse(text)
  } catch {
    return scoreListingBasic(listing)
  }
}

// -----------------------------------------------
// Batch score listings (rate-limited)
// -----------------------------------------------
export async function batchScoreListings(
  listings: CarListing[],
  full = false
): Promise<CarListing[]> {
  const scored = await Promise.all(
    listings.slice(0, 20).map(async (listing) => {
      const score = full
        ? await scoreListingFull(listing)
        : await scoreListingBasic(listing)
      return { ...listing, deal_score: score }
    })
  )
  return scored.sort((a, b) => (b.deal_score?.score ?? 0) - (a.deal_score?.score ?? 0))
}
