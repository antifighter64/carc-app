import { NextRequest, NextResponse } from 'next/server'
import { estimatePrivatePartyValue } from '@/lib/private-party'
import { v1Ok, v1Error, v1Options, withV1, reqParam, reqInt } from '../lib'

export function OPTIONS(req: NextRequest) {
  return v1Options(req)
}

export const GET = withV1(async (req: NextRequest): Promise<NextResponse> => {
  const year = reqInt(req, 'year')
  const make = reqParam(req, 'make')
  const model = reqParam(req, 'model')

  if (!year || year < 1990 || year > 2027) {
    return v1Error(req, 'Missing or invalid required param: year (1990-2027)', 400)
  }
  if (!make) return v1Error(req, 'Missing required param: make', 400)
  if (!model) return v1Error(req, 'Missing required param: model', 400)

  const mileage = reqInt(req, 'mileage')
  const conditionRaw = (reqParam(req, 'condition') ?? 'good').toLowerCase()
  const condition = (['excellent', 'good', 'fair'] as const).includes(conditionRaw as any)
    ? (conditionRaw as 'excellent' | 'good' | 'fair')
    : 'good'
  const trim = reqParam(req, 'trim') ?? undefined

  const pp = estimatePrivatePartyValue({ year, make, model, trim, mileage: mileage ?? undefined, condition })
  if (!pp) {
    return v1Error(req, `No valuation data for ${year} ${make} ${model}`, 404)
  }

  return v1Ok(req, {
    vehicle: { year, make, model, trim: trim ?? null, mileage: mileage ?? null, condition },
    privateParty: {
      low: pp.low,
      mid: pp.mid,
      high: pp.high,
      msrpWhenNew: pp.msrpWhenNew,
      depreciationPct: pp.depreciationPct,
      methodology: pp.methodology,
      isEstimate: pp.isEstimate,
    },
  })
})
