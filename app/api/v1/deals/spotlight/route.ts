import { NextRequest, NextResponse } from 'next/server'
import { estimatePrivatePartyValue } from '@/lib/private-party'
import { retention5yrPct } from '@/lib/v1-investment'
import { getComplaints, getPrimaryClass } from '@/lib/v1-vehicle-data'
import { v1Ok, v1Options, withV1 } from '../../lib'

export function OPTIONS(req: NextRequest) {
  return v1Options(req)
}

// Models eligible for the spotlight (curated from the MSRP table's top sellers).
// Ranked by a composite "smart buy" score: value retention + reliability + affordability.
const SPOTLIGHT_MODELS: [string, string, number][] = [
  // [make, model, reference year]
  ['Toyota', 'Camry', 2022], ['Honda', 'Accord', 2022], ['Honda', 'Civic', 2022],
  ['Toyota', 'Corolla', 2022], ['Ford', 'F-150', 2022], ['Toyota', 'RAV4', 2022],
  ['Honda', 'CR-V', 2022], ['Toyota', 'Tacoma', 2022], ['Jeep', 'Wrangler', 2022],
  ['Subaru', 'Outback', 2022], ['Subaru', 'Forester', 2022], ['Mazda', 'CX-5', 2022],
  ['Toyota', '4Runner', 2022], ['Honda', 'Pilot', 2022], ['Kia', 'Telluride', 2022],
  ['Hyundai', 'Tucson', 2022], ['Nissan', 'Rogue', 2022], ['Ford', 'Maverick', 2023],
  ['Toyota', 'Prius', 2023], ['Mazda', '3', 2022],
]

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export const GET = withV1(async (req: NextRequest): Promise<NextResponse> => {
  const scored = []
  for (const [make, model, year] of SPOTLIGHT_MODELS) {
    const vclass = getPrimaryClass(year, make, model)
    const retention = retention5yrPct(make, model, vclass)
    const cmp = getComplaints(year, make, model)
    const pp = estimatePrivatePartyValue({ year, make, model, vehicleClass: vclass ?? undefined })
    if (!pp) continue
    // Smart-buy score: retention weighted most, penalize complaints, reward affordability
    const complaintPenalty = Math.min(30, cmp.complaints / 40)
    const affordabilityBonus = Math.max(0, 20 - pp.mid / 2500)
    const score = retention * 1.5 - complaintPenalty + affordabilityBonus
    scored.push({
      rank: 0,
      vehicle: { year, make, model },
      privatePartyMid: pp.mid,
      retention5yrPct: retention,
      complaints: cmp.complaints,
      smartBuyScore: Math.round(score * 10) / 10,
      url: `https://carc.com/${slugify(make)}/${slugify(model)}/${year}/`,
      why: `${retention}% value retention after 5 years${cmp.complaints < 200 ? ', low owner complaints' : ''}.`,
    })
  }
  scored.sort((a, b) => b.smartBuyScore - a.smartBuyScore)
  const top10 = scored.slice(0, 10).map((d, i) => ({ ...d, rank: i + 1 }))

  return v1Ok(
    req,
    { deals: top10 },
    {
      modeled: true,
      note: 'Smart-buy ranking from banked EPA/NHTSA data + CARC depreciation engine. Live listing-level deals arrive with MarketCheck integration.',
    }
  )
})
