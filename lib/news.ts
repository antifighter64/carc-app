export interface NewsArticle {
  slug: string
  title: string
  description: string
  date: string
  dateISO: string
  author: string
  category: string
  readMinutes: number
  excerpt: string
  body: string[]
  sources: string[]
}

export const ARTICLES: NewsArticle[] = [
  {
    slug: 'hyundai-genesis-fire-recall-october-2026',
    title: 'Hyundai Recalls 94,622 Genesis and G80 Sedans Over Fire Risk',
    description:
      'Hyundai is recalling nearly 95,000 Genesis and G80 sedans in the US after NHTSA warned that overheating front power seat motors could cause a fire, even while parked.',
    date: 'October 15, 2026',
    dateISO: '2026-10-15',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Front power seat motors may overheat due to a stuck control switch. Owners are advised to park outdoors until a fix is ready.',
    body: [
      'Hyundai Motor America is recalling 94,622 vehicles in the United States over a fire risk linked to overheating front power seat motors, the National Highway Traffic Safety Administration said on October 15, 2026.',
      'According to NHTSA, the front power seat motors may overheat if the power seat control switch sticks, which can result in a fire while the vehicle is parked or being driven. The affected vehicles include certain 2015–2016 Hyundai Genesis and 2017–2020 Genesis G80 sedans.',
      'Hyundai has advised owners to park their vehicles outdoors and away from other vehicles or structures until the repair is performed. NHTSA said the recall remedy is currently being developed.',
      'If you own one of these vehicles, check your VIN on NHTSA\'s recall lookup site or contact your Genesis/Hyundai dealer. Recalls are always repaired free of charge — and a vehicle with an open fire-risk recall is worth less on the market, so getting it fixed protects both your safety and your resale value.',
    ],
    sources: ['NHTSA', 'Reuters'],
  },
  {
    slug: 'tesla-model-y-best-selling-ev-2026',
    title: 'Tesla Model Y Is Still America\'s Best-Selling EV by a Mile in 2026',
    description:
      'Cox Automotive data shows the Tesla Model Y sold over 262,000 units so far in 2026 — more than the next 24 best-selling EVs combined — as high gas prices push shoppers electric.',
    date: 'October 16, 2026',
    dateISO: '2026-10-16',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'With gas at $4.33 a gallon, EVs hit 6.4% of US new-car sales in Q3. Tesla still owns the segment.',
    body: [
      'Electric vehicles accounted for 6.4% of all US new-car sales in the third quarter of 2026, up from 5.8% in the second quarter, according to Cox Automotive data reported by Kelley Blue Book. Total Q3 EV sales reached 262,649 units, up 6.1% from Q2.',
      'The most popular electric car so far this year is the Tesla Model Y, with over 262,000 units sold year to date — more than the next 24 best-selling EVs combined, per Cox. The Tesla Model 3 follows at roughly 107,000 units, with the Hyundai Ioniq 5 in third at about 31,000.',
      'High pump prices are a big part of the story. Gas averaged $4.33 a gallon nationally on October 15, according to AAA — up from $3.06 a year earlier. "With gas prices well above $4 a gallon, electric vehicles look better than ever," said Stephanie Valdez Streaty, Cox Automotive\'s director of Industry Insights.',
      'For deal hunters, the takeaway is clear: mainstream EVs like the Model Y (starting around $39,990), Model 3 (around $38,990), and Ioniq 5 (around $35,000) are holding value well as demand climbs. Run any of them through CARC\'s deal score before you buy — strong demand means dealers have less reason to discount.',
    ],
    sources: ['Cox Automotive', 'Kelley Blue Book', 'AAA', 'USA Today'],
  },
  {
    slug: 'new-car-prices-september-2026-50562',
    title: 'Average New-Car Price Hits $50,562 — Just Shy of the All-Time Record',
    description:
      'The average new-vehicle transaction price rose for the fourth straight month in September 2026 to $50,562, only $52 below the December 2025 record, Cox Automotive reports.',
    date: 'October 14, 2026',
    dateISO: '2026-10-14',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'Prices keep climbing, but stronger sales of smaller, cheaper vehicles are tempering the growth.',
    body: [
      'The average new-vehicle transaction price rose for the fourth consecutive month in September, increasing 0.9% from August to $50,562 — just $52 below the record set in December 2025, according to Cox Automotive.',
      'Prices were up 0.7% from a year ago. Incentive spending increased to 6.6% of the average transaction price, though it remained below last year\'s level. Cox chief economist Jeremy Robb noted that demand hasn\'t disappeared — it has shifted, with consumers making different trade-offs based on budget.',
      'One bright spot: stronger sales of lower-priced vehicles, including subcompact SUVs, compact cars, and small/midsize pickups, helped temper overall price growth. Cox also noted over the summer that smaller vehicle classes were posting notable sales gains while full-size pickups and SUVs stayed flat.',
      'Meanwhile, used-car prices remain elevated but flat — the average listed used-vehicle price was $27,239 in August, and Cox trimmed its Manheim Used Vehicle Value Index outlook to just 0.2% growth for the year. With new cars averaging over $50K, knowing the fair market price before you negotiate matters more than ever.',
    ],
    sources: ['Cox Automotive', 'Kelley Blue Book'],
  },
  {
    slug: 'volkswagen-affordable-evs-150000-orders',
    title: 'Volkswagen\'s Cheap EVs Are a Hit: Nearly 150,000 Orders for ID. Polo Family',
    description:
      'Volkswagen\'s new lineup of affordable electric cars — the ID. Polo, ID. Cross, Cupra Raval, and Skoda Epiq — has pulled in nearly 150,000 orders in Europe.',
    date: 'October 12, 2026',
    dateISO: '2026-10-12',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'One in five VW Group cars delivered in Europe last quarter was electric. The budget EV offensive is working.',
    body: [
      'Volkswagen is betting its future on smaller, more affordable electric cars — and early returns suggest the bet is paying off, at least in Europe. The Group\'s Electric Urban Car Family has received nearly 150,000 orders since series production began in June.',
      'The lineup includes the Volkswagen ID. Polo and ID. Cross, plus the Cupra Raval and Skoda Epiq, all sharing the same underpinnings. The ID. Polo starts at just €24,995 (about $29,000) with a 37 kWh battery and 207 miles of WLTP range; the ID. Cross starts at €27,995 (about $32,000).',
      'The numbers back it up: one in five Volkswagen Group vehicles delivered in Europe in Q3 was all-electric, with the EV order-book share around 40%. The Group delivered 209,100 EVs in Europe in Q3 — up 20% from a year earlier — and 586,100 through September, up 12%. EV orders were up 60% year over year.',
      'In Germany, orders for pure electric cars now exceed those for internal-combustion vehicles. None of these budget models are sold in the US yet, but the playbook is clear: affordable EVs sell. American shoppers waiting for a sub-$30,000 EV should watch what VW does next.',
    ],
    sources: ['Volkswagen Group', 'Electrek'],
  },
  {
    slug: 'ram-promaster-vw-id4-recalls-october-2026',
    title: 'Ram ProMaster (265,000 Vans) and VW ID.4 Lead Early-October Recall Wave',
    description:
      'NHTSA logged 32 recall campaigns in two weeks covering 443,000 vehicles, led by 265,512 Ram ProMaster vans with steering issues and 22,524 VW ID.4 EVs with battery fire risk.',
    date: 'October 10, 2026',
    dateISO: '2026-10-10',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 4,
    excerpt:
      'Water in steering wiring, battery fire risk, and bad headlight chips: the biggest campaigns from the latest NHTSA batch.',
    body: [
      'NHTSA received 32 safety recall campaigns between September 22 and October 5, 2026, covering 443,321 vehicles, engines, and equipment items in total, according to NHTSA recall data.',
      'The largest: 2022–2026 Ram ProMaster and 2024–2026 ProMaster EV vans — 265,512 units — where water may enter the electric power steering wiring harness and disable power steering assist. A related Mopar steering column module recall covers another 8,378 replacement parts.',
      'Also notable: 2023–2026 Volkswagen ID.4 (22,524 units), where the high-voltage battery may fail and lead to a vehicle fire; and 2025–2027 Ford Expedition plus 2026 F-250 through F-550 Super Duty (41,748 units), where a contaminated LED chip in the headlight assembly can knock out daytime running lights, parking lights, or high/low beams.',
      'One campaign carries a rare "Do Not Drive" advisory: 2024–2025 Rosenbauer Commander and 2024 Warrior fire engines (10 units), where a rim weld may crack and the wheel could separate. Shopping used? Always run the VIN through NHTSA\'s free recall lookup before you buy.',
    ],
    sources: ['NHTSA'],
  },
  {
    slug: 'gas-cars-minority-global-sales-2026',
    title: 'Gasoline Cars Are Now a Minority of Global New-Car Sales for the First Time',
    description:
      'Gasoline-only vehicles made up just 49% of global new-car sales in the first half of 2026 — down from 73% in 2021 — as hybrids and EVs take over.',
    date: 'October 13, 2026',
    dateISO: '2026-10-13',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The tipping point is here: fewer than half of new cars sold worldwide this year run on gasoline alone.',
    body: [
      'For the first time on record, gasoline-only vehicles are a minority of global new-car sales. They accounted for 49% of worldwide sales in the first half of 2026, down from 73% in 2021, according to Mobility Global data first reported by Nikkei.',
      'Gasoline-only car sales fell 10% from a year earlier to 20.25 million units between January and June, with their share dropping three full points in a single year — from 52% to 49%.',
      'There\'s a catch, though: most of the vehicles taking their place still have a gas tank. Hybrids are doing the heavy lifting in this transition, which is exactly why Toyota\'s hybrid-heavy lineup — including the now hybrid-only 2026 RAV4 — is so well positioned.',
      'What it means for buyers: resale values are starting to reflect the shift. Efficient hybrids and EVs are holding value better than thirsty gas-only models in many segments. If you\'re buying a gas-only car today, make sure the deal score justifies it.',
    ],
    sources: ['Mobility Global', 'Nikkei'],
  },
  {
    slug: '2026-toyota-rav4-vs-mazda-cx5-redesign',
    title: '2026 Toyota RAV4 vs Mazda CX-5: Both Redesigned, Totally Different Bets',
    description:
      'The two best-selling compact SUVs were both redesigned for 2026. Toyota went hybrid-only; Mazda skipped the hybrid entirely. Here\'s how they compare.',
    date: 'October 11, 2026',
    dateISO: '2026-10-11',
    author: 'CARC Editorial Team',
    category: 'Comparisons',
    readMinutes: 5,
    excerpt:
      'Hybrid-only RAV4 at 43 mpg vs gas-only CX-5 at 26 mpg — a 17-mpg gap, the widest in the class.',
    body: [
      'The two giants of the compact SUV segment both got ground-up redesigns for 2026 — and went in opposite directions. Toyota made every RAV4 a hybrid. Mazda launched the new CX-5 with no hybrid at all.',
      'The 2026 Toyota RAV4 is hybrid-only across six trims, from the $33,350 LE to the $44,750 Limited (including destination). Output is 226 hp with front-wheel drive and 236 hp with all-wheel drive, with up to 43 mpg combined. AWD costs $1,400 on lower trims.',
      'The redesigned Mazda CX-5 rides on a wheelbase stretched 4.5 inches, drops the old turbo engine, and runs a 187-hp 2.5-liter four with standard AWD and a six-speed automatic — returning 26 mpg combined. Pricing opens at $31,485 including destination. Mazda\'s hybrid doesn\'t arrive until the 2027 model year.',
      'That\'s a 17-mpg gap between the volume versions. But the CX-5 counters with what reviewers call the best cabin in the class and a lower entry price. Our take: if fuel economy is the priority, the RAV4 Hybrid is the obvious pick — and strong demand means you should check its CARC deal score before paying sticker. If you love the Mazda\'s interior and can wait, the 2027 hybrid could be worth it.',
    ],
    sources: ['Toyota', 'Mazda', 'Edmunds', 'Road Ethos'],
  },
  {
    slug: 'slate-26400-electric-pickup-showroom',
    title: 'Slate Opens First Showroom for Its $26,400 Electric Pickup',
    description:
      'EV startup Slate opened its first showroom in Chicago for its $26,400 electric pickup with 205 miles of range — one of the cheapest new EVs promised for the US.',
    date: 'October 17, 2026',
    dateISO: '2026-10-17',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'A $26,400 electric truck with optional SUV conversion kits — Slate is taking the radically simple approach.',
    body: [
      'Electric vehicle startup Slate has opened its first showroom in Chicago ahead of sales planned for later this year, showcasing its $26,400 electric pickup — destination fees included — with a projected EPA range of 205 miles.',
      'The truck takes a radically back-to-basics approach: a simple, affordable work vehicle with optional kits that can convert it into a five-seat SUV. Servicing will run through RepairPal\'s independent network, including more than 100 workshops capable of working on high-voltage EV systems.',
      'At $26,400, it would be one of the cheapest new EVs available in the US — undercutting even the most affordable mainstream electrics by thousands. The trade-off is modest range and a spartan feature set, but for buyers who want cheap electric transportation, little else comes close on price.',
      'Startup vehicles carry real risk — delivery timelines slip and companies fail. But if Slate delivers, it could reset expectations for what an affordable EV costs. We\'ll be watching closely.',
    ],
    sources: ['ev.news'],
  },
]

export function getArticle(slug: string): NewsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export const CATEGORIES = ['All', 'EVs', 'Recalls', 'Prices', 'Industry', 'Comparisons']
