import { NextRequest, NextResponse } from 'next/server'
import { analyzeInvestment } from '@/lib/v1-investment'
import { getPrimaryClass, getVehicleSpecs } from '@/lib/v1-vehicle-data'
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

    // Verify the vehicle exists in banked data
    const specs = getVehicleSpecs(year, makeDec, modelDec)
    if (!specs) {
      return v1Error(req, `No vehicle data for ${year} ${makeDec} ${modelDec}`, 404)
    }

    const vclass = getPrimaryClass(year, specs.make, specs.model)
    const analysis = analyzeInvestment(specs.make, specs.model, vclass)

    return v1Ok(req, {
      vehicle: { year, make: specs.make, model: specs.model },
      investment: {
        ...analysis,
        methodology:
          'Modeled 5-year value retention from CARC depreciation engine (MSRP, age curve, EPA class adjustment). Not financial advice.',
      },
    })
  }
)
