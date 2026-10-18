// ── Banked-data vehicle search (Phase 1, $0 data cost) ──────────────────────
// Searches the banked EPA/NHTSA vehicle database (data/vehicles-2015plus.json)
// and returns matching vehicles with PRIVATE PARTY value estimates.
// This powers /api/search until MarketCheck is live (Phase 2).
//
// The deal flow (per Boris):
//   Step 1: private party valuation = the anchor (what the car is worth)
//   Step 2: dealer listings shown side-by-side vs that baseline (Phase 2)

import vehicles from '@/data/vehicles-2015plus.json'
import { estimatePrivatePartyValue } from '@/lib/private-party'

export interface BankedVehicle {
  year: number
  make: string
  model: string
  displ: string | null
  cyl: string | null
  fuel: string | null
  city: string | null
  hwy: string | null
  comb: string | null
  annualFuelCost: string | null
  class: string | null
  drive: string | null
  trans: string | null
}

export interface BankedSearchResult extends BankedVehicle {
  slug: string
  privateParty: {
    low: number
    mid: number
    high: number
    msrpWhenNew: number | null
    depreciationPct: number | null
    methodology: string
  } | null
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// Parse a natural-language-ish query into make/model/year tokens.
// Handles: "2024 Camry", "Toyota Camry 2024", "camry", "F-150", "Model 3", etc.
function tokenize(query: string): { years: number[]; terms: string[] } {
  const lower = query.toLowerCase().trim()
  const years: number[] = []
  const yearMatches = lower.match(/\b(19|20)\d{2}\b/g)
  if (yearMatches) {
    for (const y of yearMatches) {
      const n = parseInt(y, 10)
      if (n >= 1990 && n <= 2027) years.push(n)
    }
  }
  const terms = lower
    .replace(/\b(19|20)\d{2}\b/g, ' ')
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length >= 2)
  return { years, terms }
}

function scoreVehicle(v: BankedVehicle, years: number[], terms: string[]): number {
  let score = 0
  const makeLower = v.make.toLowerCase()
  const modelLower = v.model.toLowerCase()

  if (years.length > 0) {
    if (years.includes(v.year)) score += 10
    else return -1 // year specified but doesn't match → exclude
  }

  for (const t of terms) {
    if (makeLower === t) score += 8
    else if (makeLower.includes(t) || t.includes(makeLower)) score += 4
    if (modelLower === t) score += 8
    else if (modelLower.includes(t) || t.includes(modelLower)) score += 4
    // Handle common aliases
    if (t === 'f150' && modelLower.includes('f-150')) score += 8
    if (t === 'f-150' && modelLower.includes('f-150')) score += 8
  }

  return score
}

// Dedupe: one row per year/make/model (keep the most common trim variant,
// prefer the one with the most complete data)
function dedupe(results: BankedVehicle[]): BankedVehicle[] {
  const seen = new Map<string, BankedVehicle>()
  for (const v of results) {
    const key = `${v.year}|${v.make}|${v.model}`
    const existing = seen.get(key)
    if (!existing) {
      seen.set(key, v)
    } else {
      // Prefer the row with more complete data
      const completeness = (x: BankedVehicle) =>
        [x.displ, x.cyl, x.city, x.hwy, x.drive, x.trans].filter(Boolean).length
      if (completeness(v) > completeness(existing)) seen.set(key, v)
    }
  }
  return [...seen.values()]
}

export function searchBankedVehicles(query: string, limit = 20): BankedSearchResult[] {
  const { years, terms } = tokenize(query)
  if (terms.length === 0 && years.length === 0) return []

  const scored: { v: BankedVehicle; score: number }[] = []
  for (const v of vehicles as BankedVehicle[]) {
    const score = scoreVehicle(v, years, terms)
    if (score > 0) scored.push({ v, score })
  }

  scored.sort((a, b) => b.score - a.score || b.v.year - a.v.year)

  const top = dedupe(scored.map((s) => s.v)).slice(0, limit)

  return top.map((v) => {
    const pp = estimatePrivatePartyValue({
      year: v.year,
      make: v.make,
      model: v.model,
      vehicleClass: v.class,
    })
    return {
      ...v,
      slug: `/${slugify(v.make)}/${slugify(v.model)}/${v.year}/`,
      privateParty: pp,
    }
  })
}
