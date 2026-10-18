/**
 * v1 investment analysis — TS port of investment_score.py.
 * Inverts the depreciation engine: 5-year value retention %.
 * Tiers are percentile-based across all models in the MSRP table.
 */
import { baseDepreciation, classAdjustment } from '@/lib/private-party'
import { getPrimaryClass } from '@/lib/v1-vehicle-data'

// MSRP keys live in private-party.ts (not exported). Reconstruct the model list
// from the banked EPA data + a curated make/model registry instead.
// For retention we only need make/model/class — MSRP value itself isn't needed
// because retention % is MSRP-independent (same curve for all).
export type InvestmentTier = 'blue-chip' | 'investment-grade' | 'strong-holder' | 'average' | 'fast-depreciator'

export interface InvestmentAnalysis {
  retention5yrPct: number
  depreciation5yrPct: number
  tier: InvestmentTier
  tierLabel: string
  vsSegmentAvgPctPoints: number
  segmentAvgDepreciationPct: number
  investmentGrade: boolean
}

const TIER_LABELS: Record<InvestmentTier, string> = {
  'blue-chip': '🏆 Blue-chip',
  'investment-grade': '💎 Investment grade',
  'strong-holder': '✅ Strong holder',
  'average': '➖ Average',
  'fast-depreciator': '📉 Fast depreciator',
}

export function retention5yrPct(make: string, model: string, vehicleClass?: string | null): number {
  const vclass = vehicleClass ?? getPrimaryClass(new Date().getFullYear(), make, model)
  const dep = Math.min(0.92, Math.max(0, baseDepreciation(5) + classAdjustment(vclass, make, model)))
  return Math.round((1 - dep) * 100)
}

// Curated registry of models for segment ranking (mirrors the Python 200-model list
// at the granularity the TS MSRP table supports). Retention is class-driven, so we
// rank by (make, model) pairs with EPA class lookup.
const RANK_MODELS: [string, string][] = [
  ['Toyota', 'Camry'], ['Honda', 'Accord'], ['Honda', 'Civic'], ['Toyota', 'Corolla'],
  ['Ford', 'F-150'], ['Chevrolet', 'Silverado 1500'], ['Ram', '1500'], ['Toyota', 'RAV4'],
  ['Honda', 'CR-V'], ['Nissan', 'Rogue'], ['Tesla', 'Model Y'], ['Tesla', 'Model 3'],
  ['Jeep', 'Wrangler'], ['Toyota', 'Tacoma'], ['Ford', 'Explorer'], ['Chevrolet', 'Equinox'],
  ['Hyundai', 'Tucson'], ['Kia', 'Telluride'], ['Subaru', 'Outback'], ['Subaru', 'Forester'],
  ['Mazda', 'CX-5'], ['Toyota', 'Highlander'], ['Honda', 'Pilot'], ['Ford', 'Mustang'],
  ['Chevrolet', 'Corvette'], ['Porsche', '911'], ['BMW', '3 Series'], ['BMW', 'X3'],
  ['Mercedes-Benz', 'C-Class'], ['Mercedes-Benz', 'GLE'], ['Mercedes-Benz', 'S-Class'],
  ['Audi', 'Q5'], ['Lexus', 'RX'], ['Lexus', 'ES'], ['Toyota', '4Runner'],
  ['GMC', 'Sierra 1500'], ['Nissan', 'Altima'], ['Hyundai', 'Elantra'], ['Hyundai', 'Sonata'],
  ['Kia', 'K5'], ['Kia', 'Sportage'], ['Kia', 'Sorento'], ['Mazda', '3'],
  ['Mazda', 'MX-5 Miata'], ['Volkswagen', 'Tiguan'], ['Volkswagen', 'Jetta'],
  ['Dodge', 'Charger'], ['Dodge', 'Challenger'], ['Chevrolet', 'Tahoe'], ['Ford', 'Bronco'],
]

let rankCache: { retention: number; avgDep: number } | null = null

function segmentStats(): { avgRetention: number; avgDep: number; sorted: number[] } {
  if (rankCache) {
    // Recompute sorted each call is cheap (50 items); cache the expensive part
  }
  const retentions = RANK_MODELS.map(([mk, md]) => retention5yrPct(mk, md))
  const avgRetention = retentions.reduce((a, b) => a + b, 0) / retentions.length
  const sorted = [...retentions].sort((a, b) => b - a)
  return { avgRetention, avgDep: 100 - avgRetention, sorted }
}

function tierForPercentile(retention: number, sorted: number[]): InvestmentTier {
  const n = sorted.length
  // rank = 1-based position (1 = best). sorted is descending.
  const idx = sorted.findIndex((r) => r <= retention)
  // idx === -1 means retention beats everything → rank 1
  const rank = idx === -1 ? 1 : idx + 1
  const pct = rank / n
  if (pct <= 0.05) return 'blue-chip'
  if (pct <= 0.2) return 'investment-grade'
  if (pct <= 0.45) return 'strong-holder'
  if (pct <= 0.75) return 'average'
  return 'fast-depreciator'
}

export function analyzeInvestment(
  make: string,
  model: string,
  vehicleClass?: string | null
): InvestmentAnalysis {
  const retention = retention5yrPct(make, model, vehicleClass)
  const { avgDep, sorted } = segmentStats()
  const tier = tierForPercentile(retention, sorted)
  const depPct = 100 - retention
  return {
    retention5yrPct: retention,
    depreciation5yrPct: depPct,
    tier,
    tierLabel: TIER_LABELS[tier],
    vsSegmentAvgPctPoints: Math.round((avgDep - depPct) * 10) / 10,
    segmentAvgDepreciationPct: Math.round(avgDep * 10) / 10,
    investmentGrade: tier === 'blue-chip' || tier === 'investment-grade',
  }
}
