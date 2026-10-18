/**
 * v1 API vehicle data — joins banked EPA/NHTSA JSON for a single vehicle.
 * Shared by /api/v1/vehicle and /api/v1/investment (dogfooding: one code path).
 */
import vehicles from '@/data/vehicles-2015plus.json'
import safetyRatings from '@/data/safety-ratings.json'
import recallsAll from '@/data/recalls-all.json'
import complaintsAgg from '@/data/complaints-agg.json'

export interface VehicleSpecs {
  year: number
  make: string
  model: string
  trims: {
    trim: string
    engine: string | null
    mpgCity: string | null
    mpgHwy: string | null
    mpgCombined: string | null
    annualFuelCost: string | null
    drivetrain: string | null
    transmission: string | null
    vehicleClass: string | null
    fuel: string | null
  }[]
}

export interface SafetyData {
  overall: number | null
  front: number | null
  side: number | null
  rollover: number | null
  description: string | null
}

export interface RecallCampaign {
  campaign: string
  component: string
  summary: string
}

function norm(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '')
}

function modelMatches(epaModel: string, queryModel: string): boolean {
  const e = norm(epaModel)
  const q = norm(queryModel)
  return e === q || e.startsWith(q)
}

export function getVehicleSpecs(year: number, make: string, model: string): VehicleSpecs | null {
  const rows = (vehicles as any[]).filter(
    (r) => r.year === year && norm(r.make) === norm(make) && modelMatches(r.model, model)
  )
  if (!rows.length) return null
  return {
    year,
    make: rows[0].make,
    model: rows[0].model,
    trims: rows.map((r) => ({
      trim: r.model,
      engine:
        r.displ && r.cyl ? `${r.displ}L ${r.cyl}-cyl` : r.displ ? `${r.displ}L` : null,
      mpgCity: r.city ?? null,
      mpgHwy: r.hwy ?? null,
      mpgCombined: r.comb ?? null,
      annualFuelCost: r.annualFuelCost ?? null,
      drivetrain: r.drive ?? null,
      transmission: r.trans ?? null,
      vehicleClass: r.class ?? null,
      fuel: r.fuel ?? null,
    })),
  }
}

export function getPrimaryClass(year: number, make: string, model: string): string | null {
  const specs = getVehicleSpecs(year, make, model)
  if (!specs) return null
  // Most common class across trims
  const counts = new Map<string, number>()
  for (const t of specs.trims) {
    if (t.vehicleClass) counts.set(t.vehicleClass, (counts.get(t.vehicleClass) ?? 0) + 1)
  }
  let best: string | null = null
  let bestN = 0
  for (const [c, n] of counts) {
    if (n > bestN) { best = c; bestN = n }
  }
  return best
}

export function getSafety(year: number, make: string, model: string): SafetyData | null {
  const data = safetyRatings as Record<string, any>
  // Exact key first, then fuzzy model match
  const key = `${year}|${make.toUpperCase()}|${model.toUpperCase()}`
  if (data[key]) return sanitizeSafety(data[key])
  const prefix = `${year}|${make.toUpperCase()}|`
  for (const k of Object.keys(data)) {
    if (k.startsWith(prefix)) {
      const m = k.slice(prefix.length)
      if (modelMatches(m, model)) return sanitizeSafety(data[k])
    }
  }
  return null
}

function sanitizeSafety(s: any): SafetyData {
  const star = (v: any): number | null => {
    const n = parseInt(String(v ?? ''), 10)
    return n >= 0 && n <= 5 ? n : null
  }
  return {
    overall: star(s.overall),
    front: star(s.front),
    side: star(s.side),
    rollover: star(s.rollover),
    description: s.description ?? null,
  }
}

export function getRecalls(year: number, make: string, model: string): RecallCampaign[] {
  const data = recallsAll as Record<string, any>
  const prefix = `${year}|${make.toUpperCase()}|`
  const out: RecallCampaign[] = []
  const seen = new Set<string>()
  for (const k of Object.keys(data)) {
    if (!k.startsWith(prefix)) continue
    const m = k.slice(prefix.length)
    if (!modelMatches(m, model)) continue
    const campaigns = data[k]?.campaigns ?? []
    for (const c of campaigns) {
      if (c.campaign && !seen.has(c.campaign)) {
        seen.add(c.campaign)
        out.push({
          campaign: c.campaign,
          component: c.component ?? 'Unknown',
          summary: (c.summary ?? '').slice(0, 500),
        })
      }
    }
  }
  return out.slice(0, 25)
}

export function getComplaints(year: number, make: string, model: string): {
  complaints: number
  injuries: number
  deaths: number
} {
  let complaints = 0, injuries = 0, deaths = 0
  for (const r of complaintsAgg as any[]) {
    if (String(r.year) !== String(year)) continue
    if (norm(r.make) !== norm(make)) continue
    if (!modelMatches(r.model, model)) continue
    complaints += r.complaints ?? 0
    injuries += r.injuries ?? 0
    deaths += r.deaths ?? 0
  }
  return { complaints, injuries, deaths }
}
