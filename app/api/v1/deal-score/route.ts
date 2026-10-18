import { NextRequest, NextResponse } from 'next/server'
import { estimatePrivatePartyValue, scoreDealerPrice, priceHistory } from '@/lib/private-party'
import { v1Ok, v1Error, v1Options, withV1, reqParam, reqInt, reqFloat } from '../lib'

export function OPTIONS(req: NextRequest) {
  return v1Options(req)
}

export const GET = withV1(async (req: NextRequest): Promise<NextResponse> => {
  const price = reqFloat(req, 'price')
  const year = reqInt(req, 'year')
  const make = reqParam(req, 'make')
  const model = reqParam(req, 'model')

  if (price === null || price <= 0) {
    return v1Error(req, 'Missing or invalid required param: price (listing price)', 400)
  }
  if (!year || year < 1990 || year > 2027) {
    return v1Error(req, 'Missing or invalid required param: year (1990-2027)', 400)
  }
  if (!make) return v1Error(req, 'Missing required param: make', 400)
  if (!model) return v1Error(req, 'Missing required param: model', 400)

  const mileage = reqInt(req, 'mileage')
  const input = { year, make, model, mileage: mileage ?? undefined }

  const pp = estimatePrivatePartyValue(input)
  if (!pp) {
    return v1Error(req, `No valuation data for ${year} ${make} ${model}`, 404)
  }

  const deal = scoreDealerPrice(price, pp, input)
  const history = priceHistory(input)

  return v1Ok(req, {
    vehicle: { year, make, model, mileage: mileage ?? null },
    listingPrice: Math.round(price),
    privateParty: { low: pp.low, mid: pp.mid, high: pp.high },
    dealScore: {
      score: deal.score,
      verdict: deal.verdict,
      headline: deal.headline,
      diffVsPrivateParty: deal.diffVsPrivateParty,
      diffPct: deal.diffPct,
      negotiationScript: deal.negotiationScript,
      depreciationForecast: deal.depreciationForecast,
    },
    priceHistory: history,
  })
})
