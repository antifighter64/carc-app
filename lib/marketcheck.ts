import { CarListing, SearchQuery } from '@/types'

const BASE_URL = 'https://mc-api.marketcheck.com/v2'
const API_KEY = process.env.MARKETCHECK_API_KEY!

export interface MarketCheckSearchParams {
  make?: string
  model?: string
  year_min?: number
  year_max?: number
  price_max?: number
  mileage_max?: number
  zip?: string
  radius?: number
  rows?: number
  start?: number
  sort_by?: 'price' | 'miles' | 'dom'
  sort_order?: 'asc' | 'desc'
}

interface MCListing {
  id: string
  vin: string
  heading: string
  price: number
  miles: number
  msrp?: number
  vdp_url: string
  seller: {
    name: string
    city: string
    state: string
    zip: string
  }
  build: {
    year: number
    make: string
    model: string
    trim: string
    transmission: string
    ext_color: string
    int_color: string
    fuel_type: string
  }
  media?: { photo_links: string[] }
  dom?: number
  price_stats?: {
    mean: number
  }
}

export async function searchInventory(
  params: MarketCheckSearchParams
): Promise<{ listings: CarListing[]; total: number }> {
  const qs = new URLSearchParams({
    api_key: API_KEY,
    rows: String(params.rows ?? 20),
    start: String(params.start ?? 0),
    ...(params.make && { make: params.make }),
    ...(params.model && { model: params.model }),
    ...(params.year_min && { year_min: String(params.year_min) }),
    ...(params.year_max && { year_max: String(params.year_max) }),
    ...(params.price_max && { price_max: String(params.price_max) }),
    ...(params.mileage_max && { miles_max: String(params.mileage_max) }),
    ...(params.zip && { zip: params.zip }),
    ...(params.radius && { radius: String(params.radius) }),
    sort_by: params.sort_by ?? 'price',
    sort_order: params.sort_order ?? 'asc',
  })

  const res = await fetch(`${BASE_URL}/search/car/active?${qs}`, {
    next: { revalidate: 300 }, // 5-min cache
  })

  if (!res.ok) {
    throw new Error(`MarketCheck API error: ${res.status}`)
  }

  const data = await res.json()
  const listings: CarListing[] = (data.listings ?? []).map(mapListing)

  return { listings, total: data.num_found ?? 0 }
}

export async function getListingById(id: string): Promise<CarListing | null> {
  const res = await fetch(
    `${BASE_URL}/listing/car/${id}?api_key=${API_KEY}`,
    { next: { revalidate: 600 } }
  )
  if (!res.ok) return null
  const data: MCListing = await res.json()
  return mapListing(data)
}

function mapListing(mc: MCListing): CarListing {
  const marketPrice = mc.price_stats?.mean ?? mc.msrp ?? mc.price
  return {
    id: mc.id,
    vin: mc.vin,
    year: mc.build.year,
    make: mc.build.make,
    model: mc.build.model,
    trim: mc.build.trim ?? '',
    mileage: mc.miles,
    price: mc.price,
    market_price: marketPrice,
    price_delta: mc.price - marketPrice,
    dealer_name: mc.seller.name,
    dealer_city: mc.seller.city,
    dealer_state: mc.seller.state,
    dealer_zip: mc.seller.zip,
    exterior_color: mc.build.ext_color ?? 'Unknown',
    interior_color: mc.build.int_color ?? 'Unknown',
    transmission: mc.build.transmission ?? 'Unknown',
    fuel_type: mc.build.fuel_type ?? 'Gasoline',
    days_on_market: mc.dom ?? 0,
    photos: mc.media?.photo_links ?? [],
    source: 'marketcheck',
    listing_url: mc.vdp_url,
  }
}
