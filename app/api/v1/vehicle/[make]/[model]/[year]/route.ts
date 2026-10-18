import { NextRequest, NextResponse } from 'next/server'
import { estimatePrivatePartyValue } from '@/lib/private-party'
import {
  getVehicleSpecs,
  getSafety,
  getRecalls,
  getComplaints,
} from '@/lib/v1-vehicle-data'
import { v1Ok, v1Error, v1Options, withV1 } from '../../../../lib'

export function OPTIONS(req: NextRequest) {
  return v1Options(req)
}

export const GET = withV1(
  async (
    req: NextRequest,
    ctx: { params: Promise<{ make: string; model: string; year: string }> }
  ): Promise<NextResponse> => {
    const { make, model, year: yearRaw } = await ctx.params
    const year = parseInt(decodeURIComponent(yearRaw), 10)
    const makeDec = decodeURIComponent(make)
    const modelDec = decodeURIComponent(model)

    if (!Number.isFinite(year) || year < 1990 || year > 2027) {
      return v1Error(req, 'Invalid year in path (1990-2027)', 400)
    }

    const specs = getVehicleSpecs(year, makeDec, modelDec)
    if (!specs) {
      return v1Error(req, `No vehicle data for ${year} ${makeDec} ${modelDec}`, 404)
    }

    const pp = estimatePrivatePartyValue({ year, make: specs.make, model: specs.model })

    return v1Ok(req, {
      vehicle: { year, make: specs.make, model: specs.model },
      specs: specs.trims,
      safety: getSafety(year, specs.make, specs.model),
      recalls: getRecalls(year, specs.make, specs.model),
      complaints: getComplaints(year, specs.make, specs.model),
      privateParty: pp
        ? { low: pp.low, mid: pp.mid, high: pp.high, msrpWhenNew: pp.msrpWhenNew, depreciationPct: pp.depreciationPct }
        : null,
      sources: ['EPA fueleconomy.gov', 'NHTSA ODI', 'NHTSA recalls', 'NHTSA crash ratings'],
    })
  }
)
