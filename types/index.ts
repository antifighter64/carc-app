// =============================================
// CARC.COM — Core Types
// =============================================

export type PlanTier = 'free' | 'pro' | 'growth' | 'dealer' | 'enterprise'

export interface User {
  id: string
  email: string
  plan: PlanTier
  searches_today: number
  created_at: string
}

export interface CarListing {
  id: string
  vin: string
  year: number
  make: string
  model: string
  trim: string
  mileage: number
  price: number
  market_price: number
  price_delta: number       // price - market_price (negative = below market = good deal)
  dealer_name: string
  dealer_city: string
  dealer_state: string
  dealer_zip: string
  exterior_color: string
  interior_color: string
  transmission: string
  fuel_type: string
  days_on_market: number
  photos: string[]
  source: 'marketcheck' | 'cargurus' | 'autotrader' | 'cars_com'
  listing_url: string
  deal_score?: DealScore
}

export interface DealScore {
  score: number            // 1–10
  rating: 'excellent' | 'good' | 'fair' | 'overpriced'
  summary: string          // 1-2 sentence AI summary
  why_good?: string[]      // bullet points (Pro+)
  red_flags?: string[]     // bullet points (Pro+)
  market_context?: string  // Pro+
  negotiation_tips?: string[] // Pro+
  offer_suggestion?: number   // Pro+
}

export interface SearchQuery {
  raw: string              // "RAV4 under $28K near Boca Raton"
  make?: string
  model?: string
  year_min?: number
  year_max?: number
  price_max?: number
  mileage_max?: number
  zip?: string
  radius?: number
  transmission?: string
  fuel_type?: string
}

export interface SavedSearch {
  id: string
  user_id: string
  query: SearchQuery
  name: string
  alert_enabled: boolean
  last_checked: string
  created_at: string
}

export interface WaitlistEntry {
  email: string
  zip: string
  created_at?: string
}

export interface PricingPlan {
  id: PlanTier
  name: string
  price_monthly: number
  price_annual: number
  description: string
  features: PricingFeature[]
  cta: string
  popular?: boolean
}

export interface PricingFeature {
  label: string
  value: string | boolean
  highlight?: boolean
}
