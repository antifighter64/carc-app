// ── Private Party Valuation Engine (Phase 1, $0 data cost) ─────────────────
// Step 1 of the deal flow (per Boris): user enters year/make/model/trim +
// mileage → gets ACCURATE PRIVATE PARTY price. This number is the anchor.
// Step 2 (Phase 2): live dealer listings shown side-by-side vs this baseline.
//
// WOW FACTOR: the deal-score gauge, punchy headlines, negotiation scripts,
// depreciation forecast — all driven by this module. People screenshot it.

export interface PrivatePartyInput {
  year: number
  make: string
  model: string
  trim?: string
  mileage?: number        // actual miles on the car
  condition?: 'excellent' | 'good' | 'fair'
  vehicleClass?: string | null  // EPA class, for depreciation adjustment
}

export interface PrivatePartyResult {
  low: number
  mid: number
  high: number
  msrpWhenNew: number | null
  depreciationPct: number | null
  methodology: string
  isEstimate: boolean
}

// ── Curated base-MSRP lookup (approximate new-car MSRP, labeled estimates) ──
// Key: "MAKE|MODEL" uppercase. Values: { [year]: msrp }. Covers top ~50 models.
// These are BASE trim MSRPs from training knowledge — marked as estimates.
const MSRP: Record<string, Record<number, number>> = {
  'TOYOTA|CAMRY': { 2022: 26000, 2023: 26400, 2024: 28000, 2025: 29000, 2026: 29500 },
  'HONDA|ACCORD': { 2022: 26500, 2023: 28000, 2024: 28500, 2025: 29000, 2026: 29500 },
  'HONDA|CIVIC': { 2022: 22500, 2023: 24000, 2024: 24500, 2025: 25000, 2026: 25500 },
  'TOYOTA|COROLLA': { 2022: 21000, 2023: 22000, 2024: 22500, 2025: 23000, 2026: 23500 },
  'FORD|F-150': { 2022: 34000, 2023: 35000, 2024: 36000, 2025: 37500, 2026: 38500 },
  'CHEVROLET|SILVERADO 1500': { 2022: 33500, 2023: 34500, 2024: 37000, 2025: 38000, 2026: 39000 },
  'RAM|1500': { 2022: 35000, 2023: 37000, 2024: 40000, 2025: 41000, 2026: 42000 },
  'TOYOTA|RAV4': { 2022: 27500, 2023: 28500, 2024: 29500, 2025: 30500, 2026: 31000 },
  'HONDA|CR-V': { 2022: 27000, 2023: 29000, 2024: 30000, 2025: 31000, 2026: 31500 },
  'NISSAN|ROGUE': { 2022: 27500, 2023: 28500, 2024: 29500, 2025: 30000, 2026: 30500 },
  'TESLA|MODEL Y': { 2022: 54000, 2023: 48000, 2024: 45000, 2025: 45000, 2026: 45000 },
  'TESLA|MODEL 3': { 2022: 46000, 2023: 40000, 2024: 39000, 2025: 42000, 2026: 42000 },
  'JEEP|WRANGLER': { 2022: 31000, 2023: 32000, 2024: 33000, 2025: 34000, 2026: 35000 },
  'TOYOTA|TACOMA': { 2022: 27500, 2023: 28500, 2024: 32000, 2025: 33000, 2026: 34000 },
  'FORD|EXPLORER': { 2022: 35000, 2023: 37000, 2024: 39000, 2025: 41000, 2026: 42000 },
  'CHEVROLET|EQUINOX': { 2022: 26500, 2023: 27500, 2024: 28500, 2025: 30000, 2026: 31000 },
  'HYUNDAI|TUCSON': { 2022: 26500, 2023: 27500, 2024: 28000, 2025: 29000, 2026: 29500 },
  'KIA|TELLURIDE': { 2022: 34000, 2023: 36000, 2024: 37000, 2025: 38000, 2026: 39000 },
  'SUBARU|OUTBACK': { 2022: 28000, 2023: 29000, 2024: 30000, 2025: 30000, 2026: 31000 },
  'SUBARU|FORESTER': { 2022: 26000, 2023: 27000, 2024: 28000, 2025: 30000, 2026: 31000 },
  'MAZDA|CX-5': { 2022: 27000, 2023: 28000, 2024: 29000, 2025: 30000, 2026: 31000 },
  'TOYOTA|HIGHLANDER': { 2022: 36000, 2023: 37000, 2024: 40000, 2025: 46000, 2026: 47000 },
  'HONDA|PILOT': { 2022: 38000, 2023: 40000, 2024: 41000, 2025: 42000, 2026: 43000 },
  'FORD|MUSTANG': { 2022: 28000, 2023: 29000, 2024: 32000, 2025: 33000, 2026: 34000 },
  'CHEVROLET|CORVETTE': { 2022: 62000, 2023: 65000, 2024: 69000, 2025: 70000, 2026: 72000 },
  'PORSCHE|911': { 2022: 102000, 2023: 107000, 2024: 115000, 2025: 122000, 2026: 128000 },
  'BMW|3 SERIES': { 2022: 42000, 2023: 43000, 2024: 44000, 2025: 46000, 2026: 47000 },
  'BMW|X3': { 2022: 44000, 2023: 46000, 2024: 48000, 2025: 50000, 2026: 51000 },
  'MERCEDES-BENZ|C-CLASS': { 2022: 44000, 2023: 46000, 2024: 48000, 2025: 50000, 2026: 51000 },
  'MERCEDES-BENZ|GLE': { 2022: 57000, 2023: 60000, 2024: 63000, 2025: 65000, 2026: 67000 },
  'MERCEDES-BENZ|S-CLASS': { 2022: 110000, 2023: 115000, 2024: 118000, 2025: 121000, 2026: 124000 },
  'AUDI|Q5': { 2022: 44000, 2023: 45000, 2024: 46000, 2025: 53000, 2026: 55000 },
  'LEXUS|RX': { 2022: 46000, 2023: 48000, 2024: 50000, 2025: 51000, 2026: 52000 },
  'LEXUS|ES': { 2022: 41000, 2023: 42000, 2024: 43000, 2025: 44000, 2026: 59000 },
  'TOYOTA|4RUNNER': { 2022: 38000, 2023: 40000, 2024: 41000, 2025: 43000, 2026: 44000 },
  'GMC|SIERRA 1500': { 2022: 35000, 2023: 37000, 2024: 39000, 2025: 40000, 2026: 41000 },
  'NISSAN|ALTIMA': { 2022: 25000, 2023: 26000, 2024: 27000, 2025: 28000, 2026: 28500 },
  'HYUNDAI|ELANTRA': { 2022: 20000, 2023: 21000, 2024: 22000, 2025: 22000, 2026: 22500 },
  'HYUNDAI|SONATA': { 2022: 24500, 2023: 25000, 2024: 27000, 2025: 28000, 2026: 28500 },
  'KIA|K5': { 2022: 24500, 2023: 25000, 2024: 26000, 2025: 28000, 2026: 28500 },
  'KIA|SPORTAGE': { 2022: 26000, 2023: 27000, 2024: 28000, 2025: 29000, 2026: 30000 },
  'KIA|SORENTO': { 2022: 30000, 2023: 31000, 2024: 32000, 2025: 33000, 2026: 34000 },
  'MAZDA|3': { 2022: 22000, 2023: 23000, 2024: 24000, 2025: 25000, 2026: 25500 },
  'MAZDA|MX-5 MIATA': { 2022: 28000, 2023: 29000, 2024: 30000, 2025: 30000, 2026: 31000 },
  'VOLKSWAGEN|TIGUAN': { 2022: 27000, 2023: 28000, 2024: 29000, 2025: 30000, 2026: 31000 },
  'VOLKSWAGEN|JETTA': { 2022: 21000, 2023: 21000, 2024: 22000, 2025: 23000, 2026: 23500 },
  'DODGE|CHARGER': { 2022: 32000, 2023: 34000, 2024: 36000, 2025: 0, 2026: 0 },
  'DODGE|CHALLENGER': { 2022: 31000, 2023: 32000, 2024: 34000, 2025: 0, 2026: 0 },
  'CHEVROLET|TAHOE': { 2022: 52000, 2023: 55000, 2024: 58000, 2025: 60000, 2026: 62000 },
  'FORD|BRONCO': { 2022: 32000, 2023: 34000, 2024: 39000, 2025: 40000, 2026: 41000 },
  'RIVIAN|R1T': { 2022: 68000, 2023: 74000, 2024: 71000, 2025: 70000, 2026: 70000 },
}

// Depreciation: cumulative % of MSRP lost by age (years since new)
export function baseDepreciation(ageYears: number): number {
  if (ageYears <= 0) return 0
  if (ageYears === 1) return 0.20
  if (ageYears === 2) return 0.30
  if (ageYears === 3) return 0.40
  if (ageYears === 4) return 0.48
  if (ageYears === 5) return 0.55
  // After year 5: ~7%/yr of remaining value
  let dep = 0.55
  let remaining = 0.45
  for (let y = 6; y <= ageYears; y++) {
    const loss = remaining * 0.07
    dep += loss
    remaining -= loss
  }
  return Math.min(dep, 0.92) // floor at 8% of MSRP
}

// Class-based depreciation adjustment (percentage points)
export function classAdjustment(vehicleClass: string | null | undefined, make: string, model: string): number {
  const c = (vehicleClass ?? '').toLowerCase()
  const mm = `${make} ${model}`.toLowerCase()
  // Sports/performance: depreciate faster
  if (/sport|performance|convertible|roadster/.test(c)) return 0.05
  if (/corvette|mustang|911|m4|supra|miata|challenger|charger|brz|86\b/.test(mm)) return 0.05
  // Luxury: depreciate faster
  if (/luxury|premium/.test(c)) return 0.05
  if (/mercedes|bmw|audi|porsche|cadillac|lexus|infiniti|acura|genesis|jaguar|land rover|range rover/.test(make.toLowerCase())) return 0.04
  // Trucks/SUVs: hold value better
  if (/pickup|truck/.test(c)) return -0.05
  if (/suv|sport utility/.test(c)) return -0.03
  // EVs: volatile, depreciate faster (Tesla price cuts)
  if (/tesla|rivian|lucid/.test(make.toLowerCase())) return 0.06
  return 0
}

const CURRENT_YEAR = 2026
const AVG_MILES_PER_YEAR = 12000
const PER_MILE_ADJ = 0.12 // $ per mile vs baseline

export function estimatePrivatePartyValue(input: PrivatePartyInput): PrivatePartyResult | null {
  const key = `${input.make.toUpperCase()}|${input.model.toUpperCase()}`
  const msrpTable = MSRP[key]
  if (!msrpTable) return null

  const msrp = msrpTable[input.year]
  if (!msrp) return null // model didn't exist this year (e.g. Charger 2025+)

  const age = Math.max(0, CURRENT_YEAR - input.year)
  const adj = classAdjustment(input.vehicleClass, input.make, input.model)
  const depPct = Math.min(0.92, Math.max(0, baseDepreciation(age) + adj))

  let value = msrp * (1 - depPct)

  // Mileage adjustment
  const mileage = input.mileage ?? age * AVG_MILES_PER_YEAR
  const expectedMiles = Math.max(age, 1) * AVG_MILES_PER_YEAR
  const mileDiff = expectedMiles - mileage
  value += mileDiff * PER_MILE_ADJ

  // Condition adjustment
  if (input.condition === 'excellent') value *= 1.05
  else if (input.condition === 'fair') value *= 0.90

  value = Math.max(value, 500) // floor

  const methodology =
    'Private party estimate based on original MSRP, age-based depreciation, ' +
    'mileage adjustment ($0.12/mile vs 12K/yr), and condition. ' +
    'Live market pricing coming soon.'

  return {
    low: Math.round(value * 0.92),
    mid: Math.round(value),
    high: Math.round(value * 1.08),
    msrpWhenNew: msrp,
    depreciationPct: Math.round(depPct * 100),
    methodology,
    isEstimate: true,
  }
}

// ── WOW FACTOR: Deal scoring ───────────────────────────────────────────────
// Phase 2: compare a dealer asking price against the private party baseline.
// Score 0-100: how good is this deal?

export interface DealScore {
  score: number           // 0-100
  verdict: 'STEAL' | 'GREAT' | 'FAIR' | 'HIGH' | 'OVERPAY'
  headline: string        // punchy, emotional: "This dealer is charging $2,300 over market"
  diffVsPrivateParty: number  // dealer price - private party mid (negative = below)
  diffPct: number
  negotiationScript: string[]
  depreciationForecast: { in1yr: number; in3yr: number; in5yr: number }
}

export function scoreDealerPrice(
  dealerPrice: number,
  pp: PrivatePartyResult,
  input: PrivatePartyInput
): DealScore {
  const diff = dealerPrice - pp.mid
  const diffPct = (diff / pp.mid) * 100

  let score: number
  let verdict: DealScore['verdict']
  let headline: string

  if (diffPct <= -15) {
    score = 95; verdict = 'STEAL'
    headline = `STEAL — priced ${fmt$(Math.abs(diff))} BELOW private party value. Move fast.`
  } else if (diffPct <= -7) {
    score = 82; verdict = 'GREAT'
    headline = `Great deal — ${fmt$(Math.abs(diff))} under private party value.`
  } else if (diffPct <= 7) {
    score = 65; verdict = 'FAIR'
    headline = `Fair price — right around private party value.`
  } else if (diffPct <= 15) {
    score = 40; verdict = 'HIGH'
    headline = `This dealer is charging ${fmt$(diff)} over private party value. Negotiate.`
  } else {
    score = 18; verdict = 'OVERPAY'
    headline = `OVERPAYING by ${fmt$(diff)} — that's ${Math.round(diffPct)}% over what this car is worth.`
  }

  return {
    score, verdict, headline,
    diffVsPrivateParty: Math.round(diff),
    diffPct: Math.round(diffPct * 10) / 10,
    negotiationScript: buildNegotiationScript(input, dealerPrice, pp, diff),
    depreciationForecast: forecastDepreciation(pp.mid, input),
  }
}

function fmt$(n: number): string {
  return '$' + Math.round(Math.abs(n)).toLocaleString()
}

function buildNegotiationScript(
  input: PrivatePartyInput,
  dealerPrice: number,
  pp: PrivatePartyResult,
  diff: number
): string[] {
  const car = `${input.year} ${input.make} ${input.model}`
  const lines: string[] = []
  lines.push(`Open with: "I've done my homework on this ${car}. Private party value is around ${fmt$(pp.mid)}."`)
  if (diff > 0) {
    lines.push(`"You're asking ${fmt$(diff)} over what this car is worth in a private sale — and I'm paying your dealer premium on top of that."`)
    lines.push(`"I'll sign today at ${fmt$(pp.mid * 1.03)} — that's fair for both of us."`)
    lines.push(`Walk-away line: "I have two other ${input.model}s lined up this week. Call me if you can get to ${fmt$(pp.mid)}."`)
  } else {
    lines.push(`"Your price is competitive — but I need you to beat it by ${fmt$(500)} to sign today."`)
    lines.push(`"Throw in the all-weather mats and a full tank and we have a deal."`)
  }
  lines.push(`Always: get the out-the-door number in writing before you visit. Never negotiate monthly payment — negotiate the car price.`)
  return lines
}

function forecastDepreciation(currentValue: number, input: PrivatePartyInput): { in1yr: number; in3yr: number; in5yr: number } {
  // Project forward using the same curve
  const ageNow = Math.max(0, CURRENT_YEAR - input.year)
  const adj = classAdjustment(input.vehicleClass, input.make, input.model)
  const depNow = Math.min(0.92, Math.max(0, baseDepreciation(ageNow) + adj))
  // Back out implied MSRP, then project
  const impliedMsrp = currentValue / (1 - depNow)
  const project = (yearsOut: number) => {
    const dep = Math.min(0.92, Math.max(0, baseDepreciation(ageNow + yearsOut) + adj))
    return Math.max(500, Math.round(impliedMsrp * (1 - dep)))
  }
  return { in1yr: project(1), in3yr: project(3), in5yr: project(5) }
}

// ── WOW FACTOR: Price history chart data ───────────────────────────────────
// Monthly value estimates from new → now (for the chart)
export function priceHistory(input: PrivatePartyInput): { label: string; value: number }[] {
  const key = `${input.make.toUpperCase()}|${input.model.toUpperCase()}`
  const msrpTable = MSRP[key]
  if (!msrpTable?.[input.year]) return []
  const msrp = msrpTable[input.year]
  const adj = classAdjustment(input.vehicleClass, input.make, input.model)
  const points: { label: string; value: number }[] = []
  const ageNow = Math.max(0, CURRENT_YEAR - input.year)
  for (let age = 0; age <= ageNow; age++) {
    const dep = Math.min(0.92, Math.max(0, baseDepreciation(age) + adj))
    points.push({
      label: `${input.year + age}`,
      value: Math.max(500, Math.round(msrp * (1 - dep))),
    })
  }
  return points
}
