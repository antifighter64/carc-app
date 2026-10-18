export interface BrandModel {
  name: string
  type: string
  priceFrom: string
  blurb: string
}

export interface Brand {
  slug: string
  name: string
  tagline: string
  description: string
  country: string
  founded: string
  knownFor: string[]
  models: BrandModel[]
}

export const BRANDS: Brand[] = [
  {
    slug: 'toyota',
    name: 'Toyota',
    tagline: 'The reliability benchmark',
    description:
      'The world\'s best-selling automaker and the gold standard for reliability and resale value. Toyota\'s hybrid lineup — from the Prius to the RAV4 Hybrid — dominates fuel-economy charts, and models like the Camry and Corolla routinely run 200,000+ miles with basic maintenance.',
    country: 'Japan',
    founded: '1937',
    knownFor: ['Reliability', 'Resale value', 'Hybrids'],
    models: [
      { name: 'Camry', type: 'Sedan', priceFrom: 'from ~$29,000', blurb: 'America\'s best-selling sedan for decades. The hybrid is the one to get — 47+ MPG combined.' },
      { name: 'Corolla', type: 'Sedan', priceFrom: 'from ~$23,000', blurb: 'The world\'s best-selling car nameplate. Cheap to buy, cheaper to own.' },
      { name: 'RAV4', type: 'SUV', priceFrom: 'from ~$30,000', blurb: 'The default compact SUV pick. Hybrid-only for 2026 with stellar efficiency.' },
      { name: 'Highlander', type: 'SUV', priceFrom: 'from ~$40,000', blurb: 'Three-row family hauler with Toyota\'s bulletproof reputation.' },
      { name: 'Tacoma', type: 'Truck', priceFrom: 'from ~$33,000', blurb: 'The midsize truck that holds its value like nothing else.' },
      { name: '4Runner', type: 'SUV', priceFrom: 'from ~$42,000', blurb: 'Body-on-frame off-roader with a cult following and legendary durability.' },
    ],
  },
  {
    slug: 'honda',
    name: 'Honda',
    tagline: 'Engineering you can trust',
    description:
      'Honda pairs Toyota-level reliability with sharper driving dynamics. The Civic and Accord are perennial best-sellers, the CR-V is a compact-SUV staple, and Honda\'s hybrids are among the most efficient on the road.',
    country: 'Japan',
    founded: '1948',
    knownFor: ['Reliability', 'Driving dynamics', 'Resale value'],
    models: [
      { name: 'Civic', type: 'Sedan/Hatchback', priceFrom: 'from ~$25,000', blurb: 'The enthusiast\'s economy car — fun to drive, cheap to run.' },
      { name: 'Accord', type: 'Sedan', priceFrom: 'from ~$29,000', blurb: 'The thinking person\'s family sedan. Hybrid version is superb.' },
      { name: 'CR-V', type: 'SUV', priceFrom: 'from ~$31,000', blurb: 'Spacious, efficient, and nearly indestructible. A top CARC pick for families.' },
      { name: 'Pilot', type: 'SUV', priceFrom: 'from ~$41,000', blurb: 'Three-row SUV with real space for real families.' },
      { name: 'Odyssey', type: 'Minivan', priceFrom: 'from ~$42,000', blurb: 'Still the best minivan for families who prioritize driving feel.' },
    ],
  },
  {
    slug: 'ford',
    name: 'Ford',
    tagline: 'America\'s truck leader',
    description:
      'Ford has sold America\'s best-selling truck — the F-150 — for nearly five decades. Beyond trucks, Ford\'s Mustang keeps the muscle-car flame alive and the Maverick redefined the affordable pickup.',
    country: 'United States',
    founded: '1903',
    knownFor: ['Trucks', 'Mustang', 'Value'],
    models: [
      { name: 'F-150', type: 'Truck', priceFrom: 'from ~$38,000', blurb: 'The best-selling vehicle in America, full stop. Endless configurations.' },
      { name: 'Mustang', type: 'Sports car', priceFrom: 'from ~$33,000', blurb: 'The icon. V8 models remain the affordable performance bargain.' },
      { name: 'Explorer', type: 'SUV', priceFrom: 'from ~$41,000', blurb: 'Three-row SUV with strong towing for the money.' },
      { name: 'Maverick', type: 'Truck', priceFrom: 'from ~$28,000', blurb: 'The small hybrid pickup that started a segment. Tremendous value.' },
      { name: 'Bronco', type: 'SUV', priceFrom: 'from ~$41,000', blurb: 'The Wrangler rival with retro looks and serious off-road chops.' },
    ],
  },
  {
    slug: 'tesla',
    name: 'Tesla',
    tagline: 'The EV benchmark',
    description:
      'Tesla made EVs mainstream and still leads US electric sales by a wide margin. The Supercharger network remains its killer advantage, and over-the-air updates keep cars improving after purchase.',
    country: 'United States',
    founded: '2003',
    knownFor: ['EV range', 'Supercharger network', 'Software'],
    models: [
      { name: 'Model Y', type: 'Electric SUV', priceFrom: 'from ~$40,000', blurb: 'America\'s best-selling EV — 262,000+ sold in 2026 so far. The benchmark.' },
      { name: 'Model 3', type: 'Electric sedan', priceFrom: 'from ~$39,000', blurb: 'Efficient, quick, and the second best-selling EV in the US.' },
      { name: 'Cybertruck', type: 'Electric truck', priceFrom: 'from ~$80,000', blurb: 'Polarizing stainless-steel pickup with serious capability.' },
      { name: 'Model S', type: 'Electric sedan', priceFrom: 'from ~$95,000', blurb: 'The luxury flagship with Plaid performance.' },
      { name: 'Model X', type: 'Electric SUV', priceFrom: 'from ~$100,000', blurb: 'Falcon-wing doors and family-sized electric luxury.' },
    ],
  },
  {
    slug: 'bmw',
    name: 'BMW',
    tagline: 'The ultimate driving machine',
    description:
      'BMW built its reputation on sports sedans that are genuinely fun to drive. The 3 Series remains the segment benchmark, and BMW\'s EVs (i4, iX) are among the best electric luxury cars you can buy.',
    country: 'Germany',
    founded: '1916',
    knownFor: ['Driving dynamics', 'Luxury', 'Performance'],
    models: [
      { name: '3 Series', type: 'Luxury sedan', priceFrom: 'from ~$46,000', blurb: 'The sports sedan all others are judged against.' },
      { name: 'X3', type: 'Luxury SUV', priceFrom: 'from ~$50,000', blurb: 'The right-sized luxury SUV — practical without being boring.' },
      { name: 'X5', type: 'Luxury SUV', priceFrom: 'from ~$68,000', blurb: 'The benchmark midsize luxury SUV.' },
      { name: 'i4', type: 'Electric sedan', priceFrom: 'from ~$58,000', blurb: 'An EV that drives like a BMW should. Excellent range.' },
      { name: 'M4', type: 'Sports car', priceFrom: 'from ~$80,000', blurb: 'Track-capable coupe that is still usable daily.' },
    ],
  },
  {
    slug: 'chevrolet',
    name: 'Chevrolet',
    tagline: 'American value, full lineup',
    description:
      'Chevy covers everything from the affordable Trax to the Corvette supercar. The Silverado battles Ford and Ram for truck supremacy, and the Equinox is a strong mainstream SUV value.',
    country: 'United States',
    founded: '1911',
    knownFor: ['Trucks', 'Corvette', 'Value'],
    models: [
      { name: 'Silverado 1500', type: 'Truck', priceFrom: 'from ~$38,000', blurb: 'Chevy\'s full-size truck workhorse with deep discounts common.' },
      { name: 'Equinox', type: 'SUV', priceFrom: 'from ~$30,000', blurb: 'Mainstream compact SUV — often thousands less than Honda/Toyota rivals.' },
      { name: 'Trax', type: 'SUV', priceFrom: 'from ~$22,000', blurb: 'One of the cheapest new SUVs in America. Surprisingly nice inside.' },
      { name: 'Tahoe', type: 'SUV', priceFrom: 'from ~$60,000', blurb: 'The full-size family SUV standard.' },
      { name: 'Corvette', type: 'Sports car', priceFrom: 'from ~$70,000', blurb: 'Mid-engine supercar performance for sports-car money.' },
    ],
  },
  {
    slug: 'hyundai',
    name: 'Hyundai',
    tagline: 'Value with a warranty to match',
    description:
      'Hyundai went from budget punchline to segment leader in two decades. Industry-leading warranty (10yr/100k powertrain), bold EVs like the Ioniq 5, and the Palisade — arguably the best three-row SUV for the money.',
    country: 'South Korea',
    founded: '1967',
    knownFor: ['Warranty', 'Value', 'EVs'],
    models: [
      { name: 'Elantra', type: 'Sedan', priceFrom: 'from ~$22,000', blurb: 'Sharp-looking compact sedan that undercuts Civic/Corolla on price.' },
      { name: 'Sonata', type: 'Sedan', priceFrom: 'from ~$28,000', blurb: 'Stylish midsize sedan, hybrid version is a 50+ MPG bargain.' },
      { name: 'Tucson', type: 'SUV', priceFrom: 'from ~$29,000', blurb: 'Compact SUV with hybrid power and a great warranty.' },
      { name: 'Palisade', type: 'SUV', priceFrom: 'from ~$38,000', blurb: 'Three-row luxury feel at mainstream prices. A CARC favorite.' },
      { name: 'Ioniq 5', type: 'Electric SUV', priceFrom: 'from ~$35,000', blurb: '800V ultra-fast charging, retro-futuristic design, huge value.' },
    ],
  },
  {
    slug: 'kia',
    name: 'Kia',
    tagline: 'Design-led value',
    description:
      'Kia shares Hyundai\'s platforms and warranty but leads on design. The Telluride redefined the three-row SUV, the EV6 is a top-tier electric, and the K5 remains a style standout among midsize sedans.',
    country: 'South Korea',
    founded: '1944',
    knownFor: ['Design', 'Warranty', 'Value'],
    models: [
      { name: 'Forte/K4', type: 'Sedan', priceFrom: 'from ~$22,000', blurb: 'Budget-friendly compact with upscale styling.' },
      { name: 'K5', type: 'Sedan', priceFrom: 'from ~$28,000', blurb: 'The best-looking midsize sedan for the money.' },
      { name: 'Sportage', type: 'SUV', priceFrom: 'from ~$29,000', blurb: 'Compact SUV with hybrid option and bold styling.' },
      { name: 'Telluride', type: 'SUV', priceFrom: 'from ~$37,000', blurb: 'The three-row SUV that made everyone take Kia seriously.' },
      { name: 'EV6', type: 'Electric SUV', priceFrom: 'from ~$43,000', blurb: '800V charging, striking design, genuinely fun to drive.' },
    ],
  },
  {
    slug: 'nissan',
    name: 'Nissan',
    tagline: 'Discount-friendly mainstream',
    description:
      'Nissan competes on price — big discounts are common, making models like the Rogue and Sentra strong value plays. The Ariya EV and the Z sports car show the brand still has range.',
    country: 'Japan',
    founded: '1933',
    knownFor: ['Value', 'Discounts', 'Rogue'],
    models: [
      { name: 'Sentra', type: 'Sedan', priceFrom: 'from ~$22,000', blurb: 'Cheap, comfortable compact sedan — big discounts common.' },
      { name: 'Altima', type: 'Sedan', priceFrom: 'from ~$27,000', blurb: 'Midsize sedan value with available AWD.' },
      { name: 'Rogue', type: 'SUV', priceFrom: 'from ~$30,000', blurb: 'Nissan\'s best-seller; shop the discounts, not the sticker.' },
      { name: 'Pathfinder', type: 'SUV', priceFrom: 'from ~$40,000', blurb: 'Rugged-styled three-row with real towing ability.' },
      { name: 'Z', type: 'Sports car', priceFrom: 'from ~$43,000', blurb: 'Twin-turbo retro sports coupe — a performance bargain.' },
    ],
  },
  {
    slug: 'subaru',
    name: 'Subaru',
    tagline: 'Symmetrical AWD, standard',
    description:
      'Every Subaru (except the BRZ) comes with standard all-wheel drive, making the brand a favorite in snow states. The Outback and Forester are wagon/SUV legends, and resale values are among the industry\'s best.',
    country: 'Japan',
    founded: '1953',
    knownFor: ['AWD standard', 'Resale value', 'Safety'],
    models: [
      { name: 'Impreza', type: 'Hatchback', priceFrom: 'from ~$25,000', blurb: 'AWD hatchback value — great in snow country.' },
      { name: 'Crosstrek', type: 'SUV', priceFrom: 'from ~$27,000', blurb: 'The lifted adventure hatchback America loves. Hybrid now available.' },
      { name: 'Forester', type: 'SUV', priceFrom: 'from ~$31,000', blurb: 'Boxy, practical, safe — the sensible AWD SUV.' },
      { name: 'Outback', type: 'Wagon', priceFrom: 'from ~$30,000', blurb: 'The wagon that invented a segment. Standard AWD, standard loyalty.' },
      { name: 'WRX', type: 'Sports sedan', priceFrom: 'from ~$36,000', blurb: 'Rally-bred turbo fun with a manual option.' },
    ],
  },
  {
    slug: 'mazda',
    name: 'Mazda',
    tagline: 'Premium feel, mainstream price',
    description:
      'Mazda builds the most premium-feeling mainstream cars — interiors that embarrass luxury brands costing $15k more. The CX-5 and CX-50 are standout compact SUVs, and the MX-5 Miata is a living legend.',
    country: 'Japan',
    founded: '1920',
    knownFor: ['Interior quality', 'Driving feel', 'Design'],
    models: [
      { name: 'Mazda3', type: 'Sedan/Hatchback', priceFrom: 'from ~$25,000', blurb: 'The premium compact — interior rivals Audi.' },
      { name: 'CX-5', type: 'SUV', priceFrom: 'from ~$30,000', blurb: 'The driver\'s compact SUV. Still great after all these years.' },
      { name: 'CX-50', type: 'SUV', priceFrom: 'from ~$32,000', blurb: 'Rugged-styled CX-5 sibling with hybrid power.' },
      { name: 'CX-90', type: 'SUV', priceFrom: 'from ~$41,000', blurb: 'Three-row flagship with inline-six power and gorgeous cabin.' },
      { name: 'MX-5 Miata', type: 'Sports car', priceFrom: 'from ~$30,000', blurb: 'The answer is always Miata. Pure driving joy.' },
    ],
  },
  {
    slug: 'mercedes-benz',
    name: 'Mercedes-Benz',
    tagline: 'Luxury\'s benchmark',
    description:
      'The inventors of the automobile remain luxury\'s benchmark. The C-Class and GLC are the volume sellers, the S-Class defines flagship luxury, and the EQ electric line is finding its footing.',
    country: 'Germany',
    founded: '1926',
    knownFor: ['Luxury', 'Prestige', 'Comfort'],
    models: [
      { name: 'C-Class', type: 'Luxury sedan', priceFrom: 'from ~$49,000', blurb: 'The classic compact luxury sedan.' },
      { name: 'E-Class', type: 'Luxury sedan', priceFrom: 'from ~$63,000', blurb: 'Midsize luxury with S-Class tech trickling down.' },
      { name: 'GLC', type: 'Luxury SUV', priceFrom: 'from ~$50,000', blurb: 'The best-selling Mercedes in America.' },
      { name: 'GLE', type: 'Luxury SUV', priceFrom: 'from ~$63,000', blurb: 'Midsize luxury SUV with real presence.' },
      { name: 'S-Class', type: 'Luxury sedan', priceFrom: 'from ~$118,000', blurb: 'The flagship. What the future of cars looks like, today.' },
    ],
  },
]

export function getBrand(slug: string): Brand | null {
  return BRANDS.find(b => b.slug === slug) ?? null
}
