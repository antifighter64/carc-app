// =============================================
// CARC.COM — Affiliate Link Builder
// Phase 1 programs (apply immediately):
//   - LendingTree Auto (CJ Affiliate, $30–$70/lead)
//   - Capital One Auto Finance (Direct, $20–$50/lead)
//   - The Zebra insurance (Direct widget, $3–$15/lead)
//   - Jerry.ai insurance (Direct, $10–$30/lead)
//   - CarGurus (CPC, $0.50–$2/click)
//   - AutoTrader (CPC, $0.50–$3/click)
//   - Cars.com (CPC, $0.50–$2/click)
// =============================================

export interface AffiliateLink {
  name: string
  url: string
  badge?: string      // e.g. "Up to $70/lead"
  cta: string
  description: string
  category: 'loan' | 'insurance' | 'listing' | 'warranty'
  phase: 1 | 2 | 3
}

// UTM source tag for all affiliate clicks
const UTM = (program: string) =>
  `utm_source=carc&utm_medium=affiliate&utm_campaign=${encodeURIComponent(program)}`

// -----------------------------------------------
// Auto Loan Affiliates (Phase 1 — highest payout)
// -----------------------------------------------
export function getLoanAffiliates(params?: {
  year?: number
  price?: number
  zip?: string
}): AffiliateLink[] {
  return [
    {
      name: 'LendingTree Auto',
      url: `https://www.lendingtree.com/auto/?${UTM('lendingtree')}`,
      badge: '$30–$70 per lead',
      cta: 'Get pre-approved in 60 seconds',
      description: 'Compare rates from multiple lenders. No hard credit pull to check rates.',
      category: 'loan',
      phase: 1,
    },
    {
      name: 'Capital One Auto',
      url: `https://www.capitalone.com/cars/financing/?${UTM('capitalone')}`,
      badge: 'As low as 4.9% APR',
      cta: 'Pre-qualify with Capital One',
      description: 'Real pre-qualification without affecting your credit score.',
      category: 'loan',
      phase: 1,
    },
  ]
}

// -----------------------------------------------
// Insurance Affiliates (Phase 1)
// -----------------------------------------------
export function getInsuranceAffiliates(params?: {
  zip?: string
  year?: number
  make?: string
  model?: string
}): AffiliateLink[] {
  const makeModel = params?.make && params?.model
    ? `&make=${encodeURIComponent(params.make)}&model=${encodeURIComponent(params.model)}`
    : ''

  return [
    {
      name: 'Jerry.ai',
      url: `https://getjerry.com/?${UTM('jerry')}${makeModel}`,
      badge: 'Avg save $887/year',
      cta: 'Compare insurance quotes',
      description: 'AI-powered insurance comparison. Takes 45 seconds. No spam calls.',
      category: 'insurance',
      phase: 1,
    },
    {
      name: 'The Zebra',
      url: `https://www.thezebra.com/?${UTM('zebra')}`,
      badge: 'Free quote in 2 min',
      cta: 'Get free insurance quotes',
      description: 'Compare 100+ insurance companies instantly. No personal info required to start.',
      category: 'insurance',
      phase: 1,
    },
  ]
}

// -----------------------------------------------
// Warranty Affiliates (Phase 2)
// -----------------------------------------------
export function getWarrantyAffiliates(params?: {
  year?: number
  mileage?: number
}): AffiliateLink[] {
  const highMileage = (params?.mileage ?? 0) > 60000
  return [
    {
      name: 'Endurance Warranty',
      url: `https://www.endurancewarranty.com/?${UTM('endurance')}`,
      badge: '$50–$150 per sale',
      cta: 'Get a free warranty quote',
      description: highMileage
        ? 'Protect your high-mileage vehicle — coverage available up to 200K miles.'
        : 'Extended warranty protection starting from $99/mo.',
      category: 'warranty',
      phase: 2,
    },
    {
      name: 'CARCHEX',
      url: `https://www.carchex.com/?${UTM('carchex')}`,
      badge: 'Plans from $99/mo',
      cta: 'Compare warranty plans',
      description: 'Top-rated extended warranty. A+ BBB rating. Compare multiple plans.',
      category: 'warranty',
      phase: 2,
    },
  ]
}

// -----------------------------------------------
// Listing/Comparison Affiliates (Phase 1 — CPC)
// -----------------------------------------------
export function getListingAffiliates(params?: {
  year?: number
  make?: string
  model?: string
  zip?: string
}): AffiliateLink[] {
  const makeModel = params?.make && params?.model
    ? `${encodeURIComponent(params.make)}+${encodeURIComponent(params.model)}`
    : 'cars'
  const zip = params?.zip ? `&zip=${params.zip}` : ''

  return [
    {
      name: 'CarGurus',
      url: `https://www.cargurus.com/Cars/new/nl#listing=${makeModel}${zip}&${UTM('cargurus')}`,
      badge: '$0.50–$2.00/click',
      cta: 'View on CarGurus',
      description: 'See price history and dealer reputation scores.',
      category: 'listing',
      phase: 1,
    },
    {
      name: 'AutoTrader',
      url: `https://www.autotrader.com/cars-for-sale/used-cars/${makeModel}${zip}?${UTM('autotrader')}`,
      badge: '$0.50–$3.00/click',
      cta: 'View on AutoTrader',
      description: "America's largest used car marketplace.",
      category: 'listing',
      phase: 1,
    },
    {
      name: 'Cars.com',
      url: `https://www.cars.com/shopping/results/?${UTM('cars_com')}`,
      badge: '$0.50–$2.00/click',
      cta: 'Search on Cars.com',
      description: 'Compare local listings with dealer reviews.',
      category: 'listing',
      phase: 1,
    },
  ]
}

// -----------------------------------------------
// All Phase 1 affiliates for a given listing
// -----------------------------------------------
export function getAllAffiliatesForListing(listing: {
  year?: number
  make?: string
  model?: string
  price?: number
  mileage?: number
  dealer_zip?: string
}) {
  return {
    loans: getLoanAffiliates({ year: listing.year, price: listing.price, zip: listing.dealer_zip }),
    insurance: getInsuranceAffiliates({ zip: listing.dealer_zip, year: listing.year, make: listing.make, model: listing.model }),
    warranty: getWarrantyAffiliates({ year: listing.year, mileage: listing.mileage }),
    listings: getListingAffiliates({ year: listing.year, make: listing.make, model: listing.model, zip: listing.dealer_zip }),
  }
}
