// Vehicle comparison data - pulled from FREE US government APIs, September 25, 2026:
// fueleconomy.gov (DOE/EPA fuel economy, official) + NHTSA SafetyRatings.
// Numbers are for the specific tested configuration noted per vehicle.

export interface VehicleSpec {
  year: number
  make: string
  model: string
  type: string
  trim_tested: string
  mpg_city: string | null
  mpg_hwy: string | null
  mpg_comb: string | null
  engine: string | null
  drive: string | null
  fuel: string | null
  range_mi: string | null
  annual_fuel_cost: string | null
  safety_overall?: string | null
  safety_front?: string | null
  safety_side?: string | null
  safety_rollover?: string | null
}

export interface ComparePair {
  slug: string
  a: string
  b: string
}

export const VEHICLES: Record<string, VehicleSpec> = {
  "Toyota RAV4": {
    "year": 2025,
    "make": "Toyota",
    "model": "RAV4",
    "type": "SUV",
    "trim_tested": "Auto (S8), 4 cyl, 2.5 L",
    "mpg_city": "27",
    "mpg_hwy": "35",
    "mpg_comb": "30",
    "engine": "4-cyl 2.5L SIDI & PFI",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2150",
    "safety_overall": "5",
    "safety_front": "4",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Honda CR-V": {
    "year": 2025,
    "make": "Honda",
    "model": "CR-V",
    "type": "SUV",
    "trim_tested": "Auto (variable gear ratios), 4 cyl, 1.5 L, Turbo",
    "mpg_city": "26",
    "mpg_hwy": "31",
    "mpg_comb": "28",
    "engine": "4-cyl 1.5L SIDI",
    "drive": "All-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2300",
    "safety_overall": "5",
    "safety_front": "4",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Ford F-150": {
    "year": 2025,
    "make": "Ford",
    "model": "F-150",
    "type": "Truck",
    "trim_tested": "Auto (S10), 6 cyl, 3.5 L, Turbo",
    "mpg_city": "17",
    "mpg_hwy": "25",
    "mpg_comb": "20",
    "engine": "6-cyl 3.5L SIDI & PFI",
    "drive": "Rear-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "3250"
  },
  "Ram 1500": {
    "year": 2025,
    "make": "Ram",
    "model": "1500",
    "type": "Truck",
    "trim_tested": "Auto 8-spd, 6 cyl, 3.0 L, Turbo",
    "mpg_city": "17",
    "mpg_hwy": "24",
    "mpg_comb": "19",
    "engine": "6-cyl 3.0L SIDI",
    "drive": "4-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "3400"
  },
  "Honda Civic": {
    "year": 2025,
    "make": "Honda",
    "model": "Civic",
    "type": "Sedan",
    "trim_tested": "Auto (AV-S7), 4 cyl, 2.0 L, SIDI",
    "mpg_city": "31",
    "mpg_hwy": "39",
    "mpg_comb": "34",
    "engine": "4-cyl 2.0L SIDI",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "1900"
  },
  "Toyota Corolla": {
    "year": 2025,
    "make": "Toyota",
    "model": "Corolla",
    "type": "Sedan",
    "trim_tested": "Auto (AV-S10), 4 cyl, 2.0 L, SIDI & PFI; 3-mode",
    "mpg_city": "31",
    "mpg_hwy": "38",
    "mpg_comb": "34",
    "engine": "4-cyl 2.0L SIDI & PFI; 3-mode",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "1900",
    "safety_overall": "5",
    "safety_front": "5",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Chevrolet Silverado 1500": {
    "year": 2025,
    "make": "Chevrolet",
    "model": "Silverado 1500",
    "type": "Truck",
    "trim_tested": "Auto 10-spd, 8 cyl, 5.3 L, SIDI; with Sport Mode",
    "mpg_city": "16",
    "mpg_hwy": "19",
    "mpg_comb": "17",
    "engine": "8-cyl 5.3L SIDI; with Sport Mode",
    "drive": "4-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "3800",
    "safety_overall": "5",
    "safety_front": "4",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Tesla Model 3": {
    "year": 2025,
    "make": "Tesla",
    "model": "Model 3",
    "type": "Sedan (EV)",
    "trim_tested": "Auto (A1)",
    "mpg_city": "145",
    "mpg_hwy": "128",
    "mpg_comb": "137",
    "engine": "",
    "drive": "Rear-Wheel Drive",
    "fuel": "Electricity",
    "range_mi": "363",
    "annual_fuel_cost": "550"
  },
  "Tesla Model Y": {
    "year": 2025,
    "make": "Tesla",
    "model": "Model Y",
    "type": "SUV (EV)",
    "trim_tested": "Auto (A1)",
    "mpg_city": "134",
    "mpg_hwy": "117",
    "mpg_comb": "125",
    "engine": "",
    "drive": "Rear-Wheel Drive",
    "fuel": "Electricity",
    "range_mi": "337",
    "annual_fuel_cost": "600",
    "safety_overall": "5",
    "safety_front": "5",
    "safety_side": "5",
    "safety_rollover": "5"
  },
  "Toyota Camry": {
    "year": 2025,
    "make": "Toyota",
    "model": "Camry",
    "type": "Sedan (hybrid)",
    "trim_tested": "Auto (AV-S6), 4 cyl, 2.5 L",
    "mpg_city": "53",
    "mpg_hwy": "50",
    "mpg_comb": "51",
    "engine": "4-cyl 2.5L SIDI & PFI; Hybrid",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "1250"
  },
  "Honda Accord": {
    "year": 2025,
    "make": "Honda",
    "model": "Accord",
    "type": "Sedan",
    "trim_tested": "Auto (variable gear ratios), 4 cyl, 1.5 L, Turbo",
    "mpg_city": "29",
    "mpg_hwy": "37",
    "mpg_comb": "32",
    "engine": "4-cyl 1.5L SIDI",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2050"
  },
  "Kia Telluride": {
    "year": 2025,
    "make": "Kia",
    "model": "Telluride",
    "type": "SUV",
    "trim_tested": "Auto (S8), 6 cyl, 3.8 L",
    "mpg_city": "20",
    "mpg_hwy": "26",
    "mpg_comb": "22",
    "engine": "6-cyl 3.8L SIDI",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2950",
    "safety_overall": "5",
    "safety_front": "4",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Hyundai Palisade": {
    "year": 2025,
    "make": "Hyundai",
    "model": "Palisade",
    "type": "SUV",
    "trim_tested": "Auto (S8), 6 cyl, 3.8 L",
    "mpg_city": "19",
    "mpg_hwy": "26",
    "mpg_comb": "22",
    "engine": "6-cyl 3.8L SIDI",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2950",
    "safety_overall": "5",
    "safety_front": "5",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Subaru Outback": {
    "year": 2025,
    "make": "Subaru",
    "model": "Outback",
    "type": "Wagon/SUV",
    "trim_tested": "Auto (AV-S8), 4 cyl, 2.5 L",
    "mpg_city": "26",
    "mpg_hwy": "32",
    "mpg_comb": "28",
    "engine": "4-cyl 2.5L SIDI",
    "drive": "All-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2300",
    "safety_overall": "5",
    "safety_front": "5",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Subaru Forester": {
    "year": 2025,
    "make": "Subaru",
    "model": "Forester",
    "type": "SUV",
    "trim_tested": "Auto (AV-S8), 4 cyl, 2.5 L",
    "mpg_city": "26",
    "mpg_hwy": "33",
    "mpg_comb": "29",
    "engine": "4-cyl 2.5L SIDI",
    "drive": "All-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2250",
    "safety_overall": "5",
    "safety_front": "5",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Mazda CX-5": {
    "year": 2025,
    "make": "Mazda",
    "model": "CX-5",
    "type": "SUV",
    "trim_tested": "Auto (S6), 4 cyl, 2.5 L, SIDI",
    "mpg_city": "23",
    "mpg_hwy": "29",
    "mpg_comb": "25",
    "engine": "4-cyl 2.5L SIDI",
    "drive": "4-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2600",
    "safety_overall": "5",
    "safety_front": "5",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Toyota Highlander": {
    "year": 2025,
    "make": "Toyota",
    "model": "Highlander",
    "type": "SUV",
    "trim_tested": "Auto (S8), 4 cyl, 2.4 L, Turbo, SIDI & PFI; with Stop-Start",
    "mpg_city": "22",
    "mpg_hwy": "29",
    "mpg_comb": "25",
    "engine": "4-cyl 2.4L SIDI & PFI; with Stop-Start",
    "drive": "Front-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "2600",
    "safety_overall": "5",
    "safety_front": "4",
    "safety_side": "5",
    "safety_rollover": "4"
  },
  "Honda Pilot": {
    "year": 2025,
    "make": "Honda",
    "model": "Pilot",
    "type": "SUV",
    "trim_tested": "Auto (S10), 6 cyl, 3.5 L",
    "mpg_city": "19",
    "mpg_hwy": "25",
    "mpg_comb": "21",
    "engine": "6-cyl 3.5L SIDI",
    "drive": "All-Wheel Drive",
    "fuel": "Regular Gasoline",
    "range_mi": null,
    "annual_fuel_cost": "3100",
    "safety_overall": "5",
    "safety_front": "4",
    "safety_side": "5",
    "safety_rollover": "4"
  }
} as Record<string, VehicleSpec>

export const PAIRS: ComparePair[] = [
  {
    "slug": "toyota-rav4-vs-honda-cr-v",
    "a": "Toyota RAV4",
    "b": "Honda CR-V"
  },
  {
    "slug": "ford-f-150-vs-ram-1500",
    "a": "Ford F-150",
    "b": "Ram 1500"
  },
  {
    "slug": "honda-civic-vs-toyota-corolla",
    "a": "Honda Civic",
    "b": "Toyota Corolla"
  },
  {
    "slug": "chevrolet-silverado-1500-vs-ford-f-150",
    "a": "Chevrolet Silverado 1500",
    "b": "Ford F-150"
  },
  {
    "slug": "tesla-model-3-vs-tesla-model-y",
    "a": "Tesla Model 3",
    "b": "Tesla Model Y"
  },
  {
    "slug": "toyota-camry-vs-honda-accord",
    "a": "Toyota Camry",
    "b": "Honda Accord"
  },
  {
    "slug": "kia-telluride-vs-hyundai-palisade",
    "a": "Kia Telluride",
    "b": "Hyundai Palisade"
  },
  {
    "slug": "subaru-outback-vs-subaru-forester",
    "a": "Subaru Outback",
    "b": "Subaru Forester"
  },
  {
    "slug": "mazda-cx-5-vs-honda-cr-v",
    "a": "Mazda CX-5",
    "b": "Honda CR-V"
  },
  {
    "slug": "toyota-highlander-vs-honda-pilot",
    "a": "Toyota Highlander",
    "b": "Honda Pilot"
  }
]

export function getPair(slug: string): { a: VehicleSpec; b: VehicleSpec } | null {
  const p = PAIRS.find(x => x.slug === slug)
  if (!p) return null
  const a = VEHICLES[p.a]
  const b = VEHICLES[p.b]
  if (!a || !b) return null
  return { a, b }
}

function num(s: string | null | undefined): number {
  return s ? parseFloat(s) : 0
}

export function verdict(a: VehicleSpec, b: VehicleSpec): string {
  const parts: string[] = []
  const an = `${a.year} ${a.make} ${a.model}`
  const bn = `${b.year} ${b.make} ${b.model}`
  const aMpg = num(a.mpg_comb), bMpg = num(b.mpg_comb)
  const mpgLabel = (v: VehicleSpec) => (v.fuel === 'Electricity' ? 'MPGe' : 'MPG combined')
  if (aMpg && bMpg) {
    if (aMpg > bMpg)
      parts.push(`The ${an} wins on efficiency: ${a.mpg_comb} vs ${b.mpg_comb} ${mpgLabel(a)} in the tested configurations.`)
    else if (bMpg > aMpg)
      parts.push(`The ${bn} wins on efficiency: ${b.mpg_comb} vs ${a.mpg_comb} ${mpgLabel(b)} in the tested configurations.`)
    else parts.push(`Both return the same combined efficiency (${a.mpg_comb}).`)
  }
  const aCost = num(a.annual_fuel_cost), bCost = num(b.annual_fuel_cost)
  if (aCost && bCost && aCost !== bCost) {
    const cheaper = aCost < bCost ? an : bn
    const diff = Math.abs(aCost - bCost).toLocaleString()
    parts.push(`The EPA estimates the ${cheaper} costs about $${diff} less per year to fuel.`)
  }
  const aS = num(a.safety_overall), bS = num(b.safety_overall)
  if (aS && bS) {
    if (aS === bS) parts.push(`Both earn the same NHTSA overall safety rating (${a.safety_overall} of 5 stars).`)
    else {
      const winner = aS > bS ? an : bn
      parts.push(`On safety, the ${winner} rates higher overall in NHTSA crash testing.`)
    }
  } else if (aS || bS) {
    const rated = aS ? an : bn
    const unrated = aS ? bn : an
    parts.push(`The ${rated} carries an NHTSA overall rating; the ${unrated} has not been rated for this model year.`)
  }
  if (a.fuel === 'Electricity' || b.fuel === 'Electricity') {
    parts.push('Note: one of these is fully electric - total cost depends heavily on your local electricity rate vs gas prices and available tax credits.')
  }
  return parts.join(' ')
}
