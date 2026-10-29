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
    slug: 'musk-confirms-tesla-spacex-merger-talks-october-2026',
    title: 'Musk Confirms Tesla-SpaceX Merger Talks: Special Committees Formed for a Potential $3.5 Trillion Union',
    description:
      'Elon Musk confirmed Oct 20 that independent committees at Tesla and SpaceX are exploring a merger — but cautioned no deal is certain.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Musk says a merger has "a lot of merit" — but as a conflicted party he cannot take part in the talks, and no terms have been agreed.',
    body: [
      'Elon Musk confirmed on October 20 that special committees of independent directors have been formed at both Tesla and SpaceX to explore a potential merger of his two flagship companies. Speaking during SpaceX\u2019s quarterly earnings call — the first time he has addressed the long-rumored tie-up this forcefully — Musk said combining the companies made strategic sense, while stressing he was a conflicted party who cannot participate in the discussions. \u201CI do think there is a lot of merit to combining the companies,\u201D he said, adding that the committees \u201Chave not reached agreement on terms of any transaction and there\u2019s no guarantee that they will.\u201D',
      'The scale is hard to overstate. With Tesla valued at roughly $1.5 trillion and SpaceX at about $2 trillion, a merger would create a combined company worth approximately $3.5 trillion — one of the largest corporate unions in history. The two companies are already collaborating: Tesla and SpaceX are jointly developing the Terafab chip plant, and both are rapidly converging on artificial intelligence and autonomous systems. AI now makes up more than half of SpaceX\u2019s revenue, and Musk pointed to shared technology, manufacturing expertise and infrastructure as the logic for a union. CoinDesk noted the merger would also unite the companies\u2019 bitcoin holdings into a treasury of 30,221 BTC.',
      'Investors liked the idea: SpaceX shares jumped as much as 9% in after-hours and premarket trading following the comments, while Tesla gained about 1% premarket. Analysts broadly describe a deal as a matter of time — some expect one by the end of next year — though Musk himself warned against assuming it happens. \u201CI think it would be a good idea, but the decision ultimately rests with the special committees of both companies,\u201D he said. Musk called a Tesla shareholder vote \u201Ca high hurdle,\u201D noting the committees he cannot join stand in the way of his own preference.',
      'What it would mean: control is part of the appeal. Musk holds about 85% of SpaceX\u2019s voting power through super-voting shares but only roughly 20% at Tesla; one analysis estimates a merger would give him about 57% of the combined company\u2019s voting rights. A deal would also pool the enormous capital spending both companies face — SpaceX guided to $35–40 billion in fourth-quarter capex alone — and let them borrow and share services jointly. Wall Street pointed to last week\u2019s Roadster unveiling, where a Tesla car with SpaceX rocket thrusters flipped and leapt over a line of trucks, as a teaser for what a combined company could build.',
    ],
    sources: ['Reuters', 'CNN', 'CoinDesk', 'LiveMint'],
  },
  {
    slug: 'spacex-q3-2026-results-super-intelligence-blockbuster',
    title: 'SpaceX Posts Blockbuster Q3: Revenue Up 161% to $14.6B as Super Intelligence Becomes Its Biggest Business',
    description:
      'SpaceX swung to a $4.4B profit in Q3 on $14.6B revenue, with its AI segment growing 830% to $7.6B and Starlink at 13.6M subscribers.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'The rocket company is now, by revenue, an AI company first: Super Intelligence out-earned Starlink for the first time.',
    body: [
      'SpaceX delivered a blockbuster third quarter on October 20, reporting revenue of $14.58 billion — up 161% from $5.6 billion a year earlier and well ahead of the roughly $12.7–13 billion analysts expected. Net income hit $4.4 billion versus a $1.1 billion loss in the prior-year quarter, with adjusted EBITDA up 306% to $8.8 billion and adjusted earnings per share of about $0.35, more than double the roughly $0.13–0.16 consensus. It was SpaceX\u2019s second quarterly report since its June IPO, and its first solidly profitable quarter as a public company.',
      'The defining shift: the Super Intelligence (SI) segment — the company\u2019s renamed AI business, covering cloud services, Grok models, the Cursor coding tools acquired earlier this year and the Grok Bot personal agent — generated $7.56 billion in revenue, an 830% year-over-year increase, making it the company\u2019s largest segment for the first time. Connectivity, primarily Starlink, produced $5.25 billion, up 69%, while the legacy Space segment grew a modest 6% to $1.77 billion. Starlink ended the quarter with 13.6 million consumer subscribers, adding 1.6 million in the quarter and growing 89% year over year. Nameplate compute capacity reached 1.7 GW, up from 1.4 GW in June and 0.6 GW a year ago.',
      'The growth has a price tag. Capital expenditures totaled $19.6 billion in the quarter, with $16.4 billion directed to AI infrastructure including the Colossus facilities — and management guided fourth-quarter capex of $35 billion to $40 billion. SpaceX expects first-quarter 2027 revenue of $33 billion to $37 billion and says it remains on track for $100 billion in annual recurring revenue by the end of 2026, measured by annualizing December revenue. Musk also floated an eye-popping target: $500 billion to $1 trillion in recurring annual revenue by the end of 2027. The quarter even produced space hardware history: Starship Flight 14, the first orbital Starship mission, delivered 26 Starlink V3 satellites — about 10 times the downlink capacity added per launch as a Falcon 9.',
      'The honest caveats: only $2.79 billion of the $4.4 billion net income was operating profit, with the rest including interest income, tax benefits and unexplained items — the headline number is real but flattered. And the AI revenue surge leans heavily on cloud-services agreements that are lumpy by nature. Still, $63 billion in backlog and roughly $90 billion in cash and marketable securities give SpaceX enormous room to keep building. The same call where these numbers dropped is where Musk confirmed Tesla-SpaceX merger talks — AI, not rockets, is now the center of gravity for both companies.',
    ],
    sources: ['Teslarati', 'The Hindu BusinessLine', 'CNN', 'Teslanewswire'],
  },
  {
    slug: 'gm-q3-2026-earnings-net-income-151-20b-buyback',
    title: 'GM Q3 Net Income Surges 151% to $3.3B, Board Approves $20 Billion Buyback',
    description:
      'GM reported Q3 revenue of $50B (+2.9%), authorized a $20B share repurchase, and narrowed its 2026 EBIT guidance.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Profit doubled, the board opened a $20B buyback, and wholesale deliveries rose 5.2% — GM is the auto sector\u2019s Q3 standout.',
    body: [
      'General Motors reported third-quarter 2026 results on October 20 with net income attributable to stockholders of $3.3 billion — up 151% from $1.32 billion a year earlier — on revenue of $50.02 billion, up 2.9% and ahead of the $48.78 billion consensus. Adjusted EBIT rose 22% to $4.1 billion, diluted EPS reached $3.73, and total wholesale deliveries increased 5.2% to 1,028,000 vehicles. Alongside the results, the board authorized a $20 billion multiyear share repurchase program — enough to buy back roughly 27.5% of outstanding shares — and declared a $0.18 quarterly dividend payable December 17.',
      'The quarter\u2019s performance was driven almost entirely by North America, where EBIT-adjusted grew 43.4% to $3.59 billion. GM International moved the other way: EBIT-adjusted fell 87.7% to $28 million, and China equity income dropped 60.3% to $32 million. For the full year, GM narrowed its adjusted EBIT guidance to $14.5–15.5 billion from the prior $14–16 billion range, and raised its adjusted automotive free cash flow outlook to $11.5–12.5 billion. Adjusted diluted EPS is now projected at $12.75 to $13.75.',
      'A less-visible line item is also growing: GM Defense. The business, separate since 1996, expanded its U.S. Army contract for Infantry Squad Vehicles to a cumulative face value of $915.6 million on September 21, and Lockheed Martin confirmed it accepted first delivery of mission-critical components produced by GM Defense after inking a deal weeks earlier. Ford and Stellantis report earnings on October 28, which will show whether GM\u2019s quarter was company-specific or sector-wide.',
    ],
    sources: ['Detroit Free Press', 'Just-Auto', 'GM Investor Relations'],
  },
  {
    slug: 'toyota-land-cruiser-hybrid-fuel-tube-fire-recall-2026',
    title: 'Toyota Recalls 105,794 Land Cruiser Hybrids Over Fuel-Tube Fire Risk',
    description:
      'Toyota is recalling certain 2024–2027 Land Cruiser Hybrids because a fuel tube connection near the tank could disconnect and leak.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A fuel tube that can disconnect and leak: dealers will install a supplemental clamp or replace the tube free of charge.',
    body: [
      'Toyota is recalling 105,794 vehicles in the United States over a potential fuel leak that could raise the risk of a fire if the leaking fuel reaches an ignition source, the National Highway Traffic Safety Administration said on October 21. The recall covers certain 2024–2027 Toyota Land Cruiser Hybrid vehicles, according to Reuters\u2019 reporting of the federal announcement.',
      'The defect is in the fuel tube connection near the fuel tank, which could disconnect and leak fuel. As part of the remedy, dealers will install a supplemental clamp or replace the resin fuel tube entirely, free of charge to owners. Fire-risk recalls are the category where speed matters most: a leaking fuel tube near hot exhaust components is a hazard that grows worse with age and vibration, not better.',
      'Owners of affected Land Cruisers should not wait for a letter to take this seriously. Check the vehicle\u2019s VIN in NHTSA\u2019s recall database now, and if it\u2019s included, schedule the clamp or tube replacement promptly. If you smell fuel or see wetness near the rear of the vehicle, do not drive it — call the dealer for a tow.',
    ],
    sources: ['Reuters', 'NHTSA'],
  },
  {
    slug: 'ford-f-series-102k-instrument-cluster-recall-2026',
    title: 'Ford Recalls 102,159 F-Series Trucks for Stuck or Erratic Analog Gauges',
    description:
      'NHTSA recall 26V653 covers certain 2025–2026 F-Series trucks whose analog speedometers and tachometers can give inaccurate readings.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Stuck needles can\u2019t be fixed over the air — and replacement parts won\u2019t be ready until December.',
    body: [
      'Ford is recalling 102,159 F-Series trucks because their analog instrument clusters can lie about how fast the truck is going. The NHTSA campaign (26V653; Ford number 26C46) covers certain 2025–2026 F-250, F-350, F-450, F-550 and F-600 Super Duty trucks, plus certain 2026 F-150 and F-750 Super Duty models, whose analog tachometer and speedometer needles may become stuck or move erratically, providing inaccurate readings. NHTSA says the trucks fail to comply with Federal Motor Vehicle Safety Standard No. 101, which covers controls and displays.',
      'The fix is a dealer-only job: because the fault lies in the cluster module itself, it cannot be resolved with an over-the-air software update. Dealers will replace the instrument cluster modules free of charge — but replacement parts are not expected to be ready for installation until December 7–11, 2026. Interim owner letters explaining the risk go out October 26, with a follow-up once the remedy is available. In the meantime, owners should be alert for needles that stick, lag or jump, and treat any erratic gauge as a reason to drive conservatively until the module is replaced.',
      'The recall is a reminder of how old-school defects survive in high-tech trucks. A speedometer that reads low by 10 mph on a 7,000-pound truck is not a minor nuisance — it changes braking distance, speed judgment and traffic flow. Check the VIN at nhtsa.gov to see whether a specific truck is included.',
    ],
    sources: ['Autoblog', 'Reuters', 'NHTSA'],
  },
  {
    slug: 'ram-2500-steering-module-recall-expansion-2026',
    title: 'Ram Recalls 8,329 Ram 2500 Pickups for Steering Modules That Kill Stability Control',
    description:
      'Certain 2026 Ram 2500s may lose electronic stability control when the steering column control module fails — an expansion of an earlier recall.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'No warning before failure: the stability-control light only comes on after the module has already reset.',
    body: [
      'FCA US is recalling 8,329 model-year 2026 Ram 2500 pickup trucks because their steering column control modules can cause a loss of electronic stability control. According to the October 6 NHTSA recall notice covered by USA Today, there is no warning before failure — once the module resets, the ESC warning light illuminates on the instrument cluster, by which point the system is already unavailable.',
      'The campaign (NHTSA 26V651; FCA number 90D) is an expansion of an earlier recall, 26V244, and covers a wider population of the heavy-duty pickups. The remedy is straightforward: dealers will replace the steering column control module free of charge. Owner notification letters are expected to go out November 24. FCA US customer service can be reached at 800-853-1403.',
      'Loss of electronic stability control on a heavy-duty truck is not a minor defect. ESC is the system that keeps a truck from spinning or rolling when a driver swerves or hits slick pavement — and it matters most on vehicles with a high center of gravity and heavy loads. If the ESC light comes on in an affected Ram 2500, drive with extra care and get to a dealer promptly.',
    ],
    sources: ['USA Today', 'NHTSA', 'Motales'],
  },
  {
    slug: 'ford-f-150-seat-bolt-recall-80th-recall-2026',
    title: 'Ford Hits 80 Recalls in 2026 as F-150 Seat Bolts May Be Loose',
    description:
      'Ford\u2019s 80th U.S. recall of the year covers 2,276 F-150s whose front seat bolts may not be properly secured. Stellantis is next at 39.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Fifty-six warranty reports of loose front seats pushed Ford\u2019s 2026 recall count to 80 — more than double any other automaker.',
    body: [
      'Ford has officially hit 80 recalls in the United States in 2026, leading all other automakers by a wide margin. The latest covers 2,276 examples of the 2025–2027 Ford F-150 whose front seat-to-body bolts may not be properly secured, produced between August 25, 2025 and September 23, 2026. \u201CAn improperly secured seat may have degraded seat stability and occupant restraint performance in a crash, which increases the risk of injury,\u201D the NHTSA recall report states. Ford first learned of the issue from a warranty report on a 2026 F-150; there have been 56 warranty reports and 16 field reports so far, but no accidents or injuries.',
      'The fix is an inspection: owners will be notified by mail between October 26 and 30, then take their trucks to a Ford or Lincoln dealer, where technicians will check seat-bolt torque and retighten or replace the bolts as needed. Occupants may notice physical movement of the seat or a noise from the unsecured area — symptoms worth reporting to a dealer even before the letter arrives.',
      'The milestone number invites the obvious question, and Ford has an answer: the automaker attributes its high recall count to strengthened quality-control procedures and a proactive approach to identifying defects, rather than deteriorating build quality — and it can point to being ranked the highest-rated mainstream brand in J.D. Power\u2019s 2026 U.S. Initial Quality Study. Still, 80 recalls is more than double the next-closest automaker, Stellantis, at 39. Separately, 741,195 Ford and Lincoln vehicles were recalled over a potential rollaway risk tied to a module\u2019s software — another reminder that Ford\u2019s recall volume is driven by both hardware and software finds.',
    ],
    sources: ['Autoblog', 'AutoWorldJournal'],
  },
  {
    slug: 'vw-id-unyx-09-xpeng-launch-october-24-china',
    title: 'Volkswagen ID. UNYX 09 Launches Oct 24: Second VW–Xpeng Co-Developed EV, Up to 755 km Range',
    description:
      'VW Anhui launches the ID. UNYX 09 on Oct 24 in China — a sleek electric sedan with Xpeng\u2019s 750-TOPS driving chip, from ¥199,900.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The German-Chinese partnership\u2019s second model: fastback styling, CATL LFP batteries, and serious smart-driving hardware.',
    body: [
      'Volkswagen Anhui will officially launch the ID. UNYX 09, its second model jointly developed with Xpeng, in China on October 24, 2026. The joint venture, in which Volkswagen holds a 75% stake, confirmed the date with a three-day countdown poster on Weibo. Pre-sales began September 24 with prices from 199,900 yuan (about $29,750) to 249,900 yuan. The model follows the ID. UNYX 08 SUV, the first product of the VW–Xpeng partnership, as Volkswagen expands its electric lineup in the world\u2019s largest EV market.',
      'The UNYX 09 is positioned as a sleek electric sports sedan with smart technology: a fastback design measuring 5,081 mm long with a 3,030 mm wheelbase. Both single-motor rear-wheel-drive (230 kW / 308 hp) and dual-motor all-wheel-drive (140 kW front, 230 kW rear) versions are offered, each with a 91.963-kWh lithium-iron-phosphate battery with cells supplied by CATL. CLTC ranges are 755 km for the RWD version and 705 km for the AWD version.',
      'The headline tech is the driver-assistance hardware: the UNYX 09 uses Xpeng\u2019s Turing AI chip with 750 TOPS of total computing power. That is the partnership\u2019s real story — Volkswagen brings the brand, the manufacturing scale and the dealer network; Xpeng brings the software and silicon that Chinese buyers now expect. Whether the formula works will be visible in October and November sales figures.',
    ],
    sources: ['CnEVPost'],
  },
  {
    slug: 'byd-second-generation-seagull-launch-october-2026',
    title: 'BYD\u2019s New Seagull Debuts: Bigger, Five Seats, RWD — Still Around $10,000 in China',
    description:
      'BYD launched the second-generation Seagull EV on Oct 20: 425 mm longer, 127 hp, rear-wheel drive, and a roomier five-seat cabin.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The world\u2019s sixth best-selling EV just grew up — more power, more space, same disruptive price.',
    body: [
      'BYD launched the second-generation Seagull in China on October 20 at the Zhengzhou International Circuit, after opening pre-orders on October 9. The update matters because the Seagull — sold in Europe and the UK as the Dolphin Surf and elsewhere as the Dolphin Mini — is one of the world\u2019s top-selling EVs, ranking sixth globally through the first eight months of 2026. In China it starts at just 69,900 yuan, roughly $10,000.',
      'The generational changes are substantial. The new Seagull is 4,205 mm long with a 2,650 mm wheelbase — 425 mm longer overall and 150 mm more between the axles than its predecessor — and it gains a fifth seat. The permanent-magnet motor now produces 95 kW (127 hp), up from 55 kW, and the drive layout switches from front-wheel drive to rear-wheel drive, with a multi-link independent rear suspension to improve ride and handling. One of the two versions even offers optional LiDAR hardware, a remarkable feature at this price point.',
      'The Seagull\u2019s challenge is not technology but competition: low-cost rivals are flooding the segment. BYD\u2019s answer — more size, more power, more tech, same aggressive price — is the playbook that made the Seagull a phenomenon. The European Dolphin Surf, currently among BYD\u2019s lowest-priced EVs at €22,900, will be worth watching for a similar update.',
    ],
    sources: ['Electrek', 'CnEVPost'],
  },
  {
    slug: 'leapmotor-a10s-launch-lidar-13800-china',
    title: 'Leapmotor A10s Launches in China at Just $13,810 — With LiDAR and 505 km Range',
    description:
      'Leapmotor launched the sporty A10s electric SUV on Oct 18 at ¥92,800, packing LiDAR, a 53 kWh battery and urban driving assistance.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'A $13,800 EV with LiDAR, an 800-volt platform and parking-space-to-parking-space assisted driving.',
    body: [
      'Leapmotor has launched the A10s, a sporty variant of its A10 small electric SUV, in China at a list price of 92,800 yuan — about $13,810. The launch on October 18 comes as the company pushes for year-end sales momentum: A10 deliveries fell 24% month-on-month to 24,457 units in September, still nearly a quarter of Leapmotor\u2019s monthly total.',
      'The A10s pairs a single 90 kW (121 hp) front motor with a 53 kWh lithium-iron-phosphate battery for 505 km of CLTC range. The real story is the hardware at this price: LiDAR, a Qualcomm SA8295 cockpit chip and an SA8650 driver-assistance chip enabling urban navigation on autopilot, automated highway cruising and memory parking — effectively parking-space-to-parking-space assisted driving. An 800-volt platform means 30–80% charging in as little as 16 minutes.',
      'Differentiation from the A10 is mostly styling and comfort: exclusive Mirror Night Black paint, gunmetal-gray emblems, 18-inch black sport wheels, a red S badge, and a Modern Gray cabin with red stitching and ventilated front seats. The A10s is a case study in how China\u2019s price war has moved upmarket — where the battle is now over driver-assistance chips and charge speed, not just sticker price.',
    ],
    sources: ['CnEVPost'],
  },
  {
    slug: 'kia-pv5-philippines-launch-electric-vehicle-summit',
    title: 'Kia PV5 Electric Van Launches in the Philippines at the Oct 22–24 EV Summit',
    description:
      'Kia Philippines will launch the PV5 electric van at the 2026 Philippine EV Summit — starting with the Cargo variant at up to 524 km range.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 2,
    excerpt:
      'Kia\u2019s first dedicated electric van lands in Southeast Asia — and fleet buyers are the first target.',
    body: [
      'Kia Philippines will officially launch the all-electric PV5 van at the 2026 Philippine Electric Vehicle Summit, running October 22–24 at the SMX Convention Center in Pasay City. The company confirmed the PV5 will be available in Cargo form first — a telling choice in a market where fuel costs swing constantly and delivery fleets run on tight margins.',
      'The specs: a single 163-horsepower motor with 250 Nm of torque. The standard-range Cargo gets a 51.5 kWh battery for up to 384 km of range; an extended-range 71.2 kWh version stretches that to 524 km. Whether passenger variants will join the lineup may be announced at the summit itself.',
      'The PV5 is the first vehicle on Kia\u2019s dedicated PBV (Platform Beyond Vehicle) architecture — a modular electric skateboard designed for vans, not adapted from a car. Fleet electrification in Southeast Asia is one of the industry\u2019s quiet growth stories, and the PV5\u2019s arrival gives it its most serious contender yet.',
    ],
    sources: ['TheAutoPH'],
  },
  {
    slug: 'joby-archer-faa-certification-endgame-2026',
    title: 'The eVTOL Certification Race Is in the Endgame: Joby in Final FAA Stage, Archer Close Behind',
    description:
      'Joby is in Stage 5, the final phase of FAA type certification, with Archer in Phase 4 — but neither has a type certificate or paying passengers yet.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'No more renderings: 2026 is about test flights, means of compliance, and surviving the cash burn.',
    body: [
      'Advanced air mobility in the U.S. has entered the certification endgame. Joby Aviation\u2019s S4 is in Stage 5, the final stage of FAA type certification — its August 5 letter put the fourth stage at 83% on Joby\u2019s side and 77% on the FAA\u2019s, with the fifth stage at 20% and 10% respectively — and its first FAA-conforming aircraft flew with Joby pilots on March 11. Archer Aviation closed Phase 3 of its four-phase process in April, making it the first eVTOL company to do so, and is now in Phase 4 compliance work; the FAA accepted all 797 of the Midnight\u2019s proposed means of compliance back on March 2.',
      'Both companies are also building the operational side. Under the federal eVTOL Integration Pilot Program — eight projects across 26 states announced March 9 — Joby began eIPP flights in Texas on September 10, while Archer is targeting early operations in Florida, Texas and New York in the second half of 2026 under the same program. Joby raised a net $1.2 billion in February to survive the cash burn, is partnered with Toyota on automotive-style manufacturing and Virgin Atlantic on UK integration, and has targeted a commercial launch with Delta Air Lines before the end of 2026.',
      'The honest status, as filings through early October 2026 confirm: neither company holds an FAA type certificate, and neither has flown paying passengers. Certification, not engineering, is the gate — and the question has shifted from whether eVTOLs are real to who will carry paying passengers first, on what routes, and at what cost. The UAE, which moved both companies\u2019 programs forward this month, may answer that question before the U.S. does.',
    ],
    sources: ['LowAltitudeEconomy', 'AirMedia24', 'Motley Fool'],
  },
  {
    slug: 'uae-air-taxi-certification-joby-archer-california',
    title: 'UAE Regulator Visits Joby and Archer in California as Air Taxi Certification Nears',
    description:
      'The UAE\u2019s GCAA reviewed certification and airworthiness with Joby and Archer at their California facilities ahead of planned 2026 launches.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The UAE is doing the regulator visits most markets haven\u2019t: certification talks ahead of planned 2026 air taxi launches.',
    body: [
      'The UAE\u2019s General Civil Aviation Authority reviewed aircraft certification and airworthiness requirements with Joby Aviation and Archer Aviation during separate visits to the companies\u2019 facilities in California on October 16. The delegation was led by Aqeel Al Zarooni, the GCAA\u2019s assistant director general for aviation safety affairs, and included senior flight operations and airworthiness staff, with technical workshops covering certification and operational matters for each air taxi program.',
      'The visits reflect how far ahead the UAE is running. Joby signed a definitive agreement with Dubai\u2019s Roads and Transport Authority in February 2024 giving it exclusive rights to operate air taxis in the emirate for six years, with a commercial launch targeted for 2026. Archer, partnered with the Abu Dhabi Investment Office, completed its first UAE test flight at Al Bateen Executive Airport — just days after Joby\u2019s Dubai test flight — with Abu Dhabi as its first planned launch market. Archer\u2019s longest UAE flight covered about 55 miles in 31 minutes. The GCAA has previously said air taxi certification would be completed in the third quarter of 2026, and Joby\u2019s UAE team says passengers will only be carried once all safety requirements are met, including a GCAA Air Operator Certificate.',
      'The UAE is effectively running a parallel certification race with the FAA — and regulators in most other markets are not nearly this engaged. If Dubai or Abu Dhabi carries paying air-taxi passengers in 2026 while the FAA\u2019s type-certification process is still grinding through its final stages, the center of gravity for commercial eVTOL could tilt toward the Gulf first.',
    ],
    sources: ['AviNews'],
  },
  {
    slug: 'icaur-v25-global-debut-wuhu-bev-reev',
    title: 'iCAUR V25 Debuts Globally in Wuhu: Boxy Electric SUV With BEV and REEV Power',
    description:
      'iCAUR unveiled the V25 on Oct 21 — a "Future Classic" boxy SUV with BEV and range-extended options, up to 1,549 liters of cargo space.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Classic looks, modern hardware: the V-Series lineup is complete, with customization built into the showroom.',
    body: [
      'iCAUR unveiled the V25 on October 21 at the 2026 iCAUR International User Summit in Wuhu, China, completing the brand\u2019s V-Series SUV lineup alongside the V23 and V27. More than 500 user representatives from around the world joined media and partners for the reveal. Positioned as the \u201CPersonalized All-Way SUV,\u201D the V25 offers both battery-electric and range-extended (REEV) powertrains with intelligent all-wheel drive — and leans into customization with more than 20 factory-integrated modification interfaces, 1.8-ton towing capacity and 6 kW vehicle-to-load output.',
      'The design language is what iCAUR calls \u201CFuture Classic\u201D: upright proportions, round headlights, a squared-off profile, clamshell bonnet, side-opening tailgate and a full-size spare. The near-square stance (0.96 height-to-width ratio) delivers 66.4% longitudinal space efficiency, 41 storage compartments and up to 1,549 liters of luggage capacity; the BEV adds a front trunk and 22 liters of underfloor storage. Front seats fold flat to make a resting area, and the cabin includes a panoramic sunroof, heated and ventilated front seats with driver memory, and a 15-speaker sound system.',
      'iCAUR is betting the showroom itself is a feature: every showroom will house a dedicated customization zone with options available at launch. Three official custom builds — the V23 Forge, V27 Sun Roam and V25 Game Changer — took the stage at the summit, with market rollout by early 2027. The brand says it has expanded to more than 40 markets in 2026, with cumulative V23 sales exceeding 100,000 units. Global market introductions for the V25 are planned from early 2027.',
    ],
    sources: ['GlobeNewswire', 'MyDurban'],
  },
  {
    slug: 'omoda-x-global-debut-chery-summit-2026',
    title: 'Omoda X Debuts Globally With BEV and PHEV Options; Rugged Concept Hints at Duster Rival',
    description:
      'Omoda unveiled the X SUV on Oct 21 at Chery\u2019s user summit — and a rugged concept points to a Dacia Duster competitor.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'From zero to the UK\u2019s 23rd best-selling brand in under two years — now Omoda wants the rugged-SUV crowd too.',
    body: [
      'The Omoda X SUV made its global debut on October 21 at the 2026 Chery Group International User Summit in Wuhu, China, with both battery-electric and plug-in-hybrid options on offer. Separately, Autocar reported on a new Omoda concept that hints at a future rival for the Dacia Duster: a rugged new crossover with night vision, big ground clearance and — notably — physical climate controls, a deliberate rejection of the all-touchscreen trend.',
      'The context is Omoda\u2019s remarkable ascent. The brand arrived in the UK only in late 2024 alongside sibling Jaecoo, yet between January and the end of September 2026 it ranked as Britain\u2019s 23rd best-selling brand — ahead of long-established names like Citro\u00EBn, Mazda and Suzuki. In Malaysia, bookings opened for the Omoda C7 and C7 PHEV in August, with the C9 PHEV AWD launched from RM208,800. The X and the rugged concept suggest the next phase is broadening the lineup beyond the style-led SUVs that built the brand.',
      'The Duster-hinting concept is the more interesting signal. The affordable rugged-crossover segment has been Dacia\u2019s private hunting ground; a Chinese-built rival with night vision and real ground clearance — at Chinese pricing — would test whether the Duster\u2019s moat is the car or just the price.',
    ],
    sources: ['Autocar', 'CarSifu'],
  },
  {
    slug: 'hyundai-bayon-interior-reveal-india-launch',
    title: 'Hyundai Bayon Interior Revealed Ahead of India Launch: NVIDIA-Powered Cockpit, 115 hp Petrol',
    description:
      'New Bayon interior photos show an NVIDIA-accelerated infotainment system, 70+ connected features and OTA updates ahead of its India launch.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Slotting between the Venue and Creta, the Bayon brings flagship-grade cockpit tech to India\u2019s midsize-SUV fight.',
    body: [
      'New interior photos of the Hyundai Bayon, revealed October 21 ahead of its India launch, show a cockpit punching above the car\u2019s segment. Marketed as an \u201CIntelligent Utility Vehicle,\u201D the Bayon will slot between the sub-4-metre Venue and the 4.33-metre Creta in one of India\u2019s most crowded and fastest-growing segments. It carries Hyundai\u2019s Connected Car Navigation Cockpit (ccNC) with NVIDIA-accelerated infotainment — split-screen operation, online navigation, quick-access controls and personalized profiles — plus the Bluelink suite with more than 70 connected features, from remote start/stop to smartwatch connectivity.',
      'The tech extends under the skin: over-the-air updates are supported for up to 19 vehicle controllers, so software upgrades arrive without a dealer visit. Under the hood it\u2019s straightforward: a 1.5-litre MPi petrol four-cylinder with 115 PS and 144 Nm, paired with a 6-speed manual or an IVT automatic — the same engine as the Creta. Estimated pricing of around Rs 9.5 lakh to Rs 14 lakh puts it squarely in the heart of the segment.',
      'The Bayon\u2019s pitch is clear: flagship infotainment tech in a mainstream package, in a market where connected features increasingly decide purchases. The segment\u2019s incumbents — including the Creta it shares its engine with — will need to answer the cockpit-first approach.',
    ],
    sources: ['Rushlane'],
  },
  {
    slug: 'zoox-las-vegas-airport-robotaxi-expansion-2026',
    title: 'Zoox Takes Robotaxis to Las Vegas Airport — Terminal Pickup, Right at Baggage Claim',
    description:
      'Amazon\u2019s Zoox is expanding to Harry Reid International, picking up at both terminals near baggage claim — a first for robotaxis.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Zoox is the only robotaxi operator serving the Las Vegas airport — and its terminal pickup beats Uber\u2019s garage walk.',
    body: [
      'Amazon\u2019s Zoox is expanding its robotaxi service to Harry Reid International Airport in Las Vegas, with pickups and dropoffs at both terminals near baggage claim, according to reporting on October 19. The company started charging for rides on August 10, began testing in San Diego and Houston, and released its safety framework — the airport expansion is the latest step in a company visibly ramping toward commercial scale.',
      'The airport move is a genuine competitive edge. Uber and Lyft can drop passengers at the terminal curb, but their pickups require a five-to-ten-minute walk to the upper floor of a nearby parking garage; Zoox\u2019s cars come to baggage claim. Zoox is currently the only robotaxi company operating airport service at LAS — though more competition is coming. The Nevada Transportation Authority has granted commercial robotaxi permits in Clark County to Tesla, Uber and Waymo as well, which together would allow up to 8,000 robotaxis across the county over the next 12 months; Uber plans to run robotaxis through partnerships with Hyundai\u2019s Motional and Zoox itself.',
      'The scale context: Zoox has driven more than 3 million autonomous miles as of August 2026 and operates roughly 100 vehicles, offering paid rides in San Francisco and Las Vegas, with Miami and Austin next. Its commercial exemption allows up to 2,500 vehicles per year. Against Waymo\u2019s ~4,000 robotaxis across 15 cities and Tesla\u2019s Cybercab ramp, Zoox is the smallest fleet — but it\u2019s the only one that will meet you at baggage claim.',
    ],
    sources: ['TechCrunch', 'Built In'],
  },
  {
    slug: 'best-cash-back-car-deals-october-2026',
    title: 'Best Cash-Back Car Deals in October: Up to $20,000 Off, VW ID.4 at 27.7% of Sticker',
    description:
      'October\u2019s biggest cash incentives: $20,000 off the Audi e-tron GT, $12,500 off the VW ID.4, up to $13,000 on the Audi Q7.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      '138 vehicles carry cash incentives this month totaling $463,750 — judge them as a share of sticker, not just dollars.',
    body: [
      'October\u2019s cash-incentive landscape is unusually rich: 138 vehicles carry a cash incentive this month, worth $463,750 in total, according to FindTheBestCarPrice\u2019s monthly roundup. The largest dollar figure belongs to the Audi RS e-tron GT and e-tron GT at $20,000 each — but the smarter comparison is share of sticker. On that basis, the Volkswagen ID.4\u2019s $12,500 on a $45,095 SUV (27.7% of sticker) is the month\u2019s best deal, ahead of the Kia Niro EV at 25.2%. The e-tron GT\u2019s $20,000 on a $127,700 sticker (15.7%) beats the RS version on the same cash (11.7%).',
      'Other standouts: the Infiniti QX80 carries $10,000 plus 0% APR with a $3,000 finance bonus — one of five vehicles pairing cash with zero-percent financing. CarsDirect\u2019s roundup adds the 2026 Audi Q7 with up to $13,000 off including loyalty, which it calls the biggest discounts ever seen on the model ahead of its 2027 redesign; the Nissan Rogue at up to $4,500 off; and the Ford Escape Plug-in Hybrid at up to $8,000 nationwide. Chevrolet and GMC are offering 0% financing for 60 months on outgoing 2026 Silverado 1500 and Sierra 1500 trucks ahead of redesigned 2027 models, and Ford\u2019s lineup carries some of the month\u2019s largest forecast rebates — up to $5,000 on the F-150, $4,500 on the Explorer.',
      'EVs still carry the largest rebates this fall: Kia is forecast at up to $10,000 cash on the 2026 EV9 and Niro EV. And EV-specific deals run through October 31 — Ride and Drive Clean lists exclusive discounts up to $12,250 on the 2026 Volvo EX30 AWD, up to $8,500 on the 2027 Hyundai Ioniq 5 RWD and up to $6,500 on the 2026 Toyota bZ. The practical advice: cash and 0% rarely stack, so run both scenarios, and judge every offer as a percentage of the sticker price you\u2019d actually pay.',
    ],
    sources: ['FindTheBestCarPrice', 'CarsDirect', 'Ride and Drive Clean', 'Road Ethos'],
  },
  {
    slug: 'edmunds-q3-2026-record-car-payments-787-month',
    title: 'Car Payments Hit a Record $787 a Month as 84-Month Loans Become the Norm',
    description:
      'Edmunds: Q3 buyers financed a record $44,664 on average, a record 25.5% signed for 84+ months, and total interest hit $9,938.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The average buyer now finances $44,664 and pays nearly $10,000 in interest — at rates that never even moved.',
    body: [
      'New-car buyers financed a record average of $44,664 in the third quarter of 2026, according to Edmunds data reported by CBT News, and stretched terms to record lengths to cope. Loans of 84 months or longer made up a record 25.5% of financed new-vehicle purchases — up from 23.9% in the second quarter and 21.8% a year ago. The average monthly payment on a financed new vehicle rose to a record $787, up from $777 in Q2 and $756 a year earlier, and a record 21.2% of buyers agreed to payments of $1,000 or more a month.',
      'The striking part: this happened with rates flat. The average APR held steady at 7.0%, yet total interest on a financed new-vehicle purchase reached a record $9,938, up from $9,442 a year earlier — driven by larger loan amounts spread over longer terms. Among buyers paying $1,000 or more a month, 69% chose terms of 72 months or longer. Used buyers are stretching too: a record 6.5% of used-vehicle buyers also agreed to $1,000-plus monthly payments.',
      'Demand has not collapsed — buyers are budgeting more for vehicles and shopping harder for financing, per Edmunds\u2019 Jessica Caldwell. But as Edmunds\u2019 Ivan Drury notes, longer terms are often the only way to afford the vehicle buyers need, and that math has a trap: financing nearly $45,000 at 7% for seven years means paying interest almost equal to a fifth of the car\u2019s price. The total-interest number, not the monthly payment, is the figure that tells the truth about what a car costs.',
    ],
    sources: ['CBT News', 'Edmunds'],
  },
  {
    slug: 'auto-loan-delinquency-subprime-rate-gap-2026',
    title: 'Same Car, $10,000 More: Subprime Borrowers Pay 19% APR While Prime Gets 9%',
    description:
      'Experian data via The Auto Wire: on the average $27,852 used-car loan, subprime borrowers pay $151/month more than prime.',
    date: 'October 21, 2026',
    dateISO: '2026-10-21',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The credit-score tax on car ownership is widening — and falling used-car prices make it harder to escape.',
    body: [
      'The poorest car buyers are losing their cars at rising rates — and the ones still buying are paying a steep credit-score tax. The Auto Wire\u2019s October 19 analysis of Experian\u2019s second-quarter figures lays it out: the average used-car loan is $27,852 over 67.9 months, with an average APR of 8.81% for prime borrowers, 19.10% for subprime borrowers and 21.62% for deep subprime. Applied to the same loan, the prime borrower pays about $522 a month and roughly $7,600 in interest over the life of the loan; the subprime borrower pays about $673 a month and roughly $17,900 in interest.',
      'That is $151 more every month and more than $10,000 more in total for an identical car — charged to the person least able to absorb it. Falling used-car prices make the trap harder to escape: the Bureau of Labor Statistics\u2019 index for used cars and trucks was down 1.5% in the year through September, so a borrower whose car loses value faster than the loan balance shrinks owes more than the car is worth — and researchers at the New York Fed flagged that negative-equity risk in their 2025 analysis. The shortfall typically gets rolled into the next loan or written off after a repossession and billed back to the borrower.',
      'The takeaway for buyers at the edge of the credit spectrum: the interest rate matters more than the monthly payment, and a longer term at a high rate is the most expensive way to buy a car. For everyone else, it\u2019s a window into why delinquencies and repossessions keep climbing — the auto market\u2019s stress is concentrated at the bottom.',
    ],
    sources: ['The Auto Wire', 'Experian'],
  },
  {
    slug: 'faa-nhtsa-tesla-roadster-not-aircraft-october-2026',
    title: 'FAA: Tesla Roadster Is Not an Aircraft — It Can Only “Fly” for About Six Seconds',
    description:
      'The FAA told CBS the Roadster is not an aircraft, and NHTSA says it is not a flying car. At full thrust it could stay airborne for less than six seconds.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Five days after the big reveal, regulators weighed in: the Roadster jumps on thrusters — it does not fly.',
    body: [
      'The U.S. Federal Aviation Administration told CBS that the new Tesla Roadster does not meet its definition of an aircraft, ending — at least officially — the “flying car” framing around last week’s reveal. Separately, the National Highway Traffic Safety Administration said Tesla must ensure the vehicle meets applicable motor vehicle safety standards and that drivers must follow local road laws, adding plainly that the Roadster is not a flying car.',
      'The technical details explain why. Reports from MotorTrend and independent estimates indicate the demonstration vehicle completed three jumps, with airtime limited by its gas supply: at full thrust, the car could remain airborne for less than two seconds, and refilling the 250 kilograms of compressed air feeding its ten SpaceX-derived nozzles would take six to seven hours. Even with a full 250-kg charge, estimated flight time at full thrust would still be under six seconds.',
      'That matches what Tesla showed on October 15 at SpaceX’s McGregor, Texas facility: a driverless prototype that climbed a curved ramp on suction, barrel-rolled in midair, and leapt over a line of Teslas before hitting 60 mph in under a second. Tesla’s own site notes the flying configuration is not approved for public road use, and production is promised for 2028 — with the “full flight system” Rocket model offered by invitation only.',
      'What it means: the Roadster is a genuinely remarkable engineering demo of cold-gas thruster technology on a road car, and a serious halo product for Tesla. But regulators have now drawn a bright line — it is a car that hops, not an aircraft, and anyone reserving one should treat the flight system as a track-day stunt feature, not transportation. Tesla reports Q3 results on October 21.',
    ],
    sources: ['CBS', 'NHTSA', 'MotorTrend', 'Odaily'],
  },
  {
    slug: 'tesla-december-3-shareholder-vote-musk-board-2026',
    title: 'Tesla Calls Dec. 3 Shareholder Vote on Musk, Denholm and Straubel Board Terms',
    description:
      'Tesla filed its definitive proxy Oct 19, asking shareholders to re-elect Elon Musk, Robyn Denholm and JB Straubel to three-year board terms on December 3.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The December 3 vote doubles as a referendum on Tesla’s bet on robots, robotaxis and in-house AI chips.',
    body: [
      'Tesla has filed its definitive proxy statement with the SEC and formally asked shareholders to re-elect Elon Musk, board chair Robyn Denholm and co-founder JB Straubel to the board of directors, setting a December 3, 2026 vote. All three are Class I director nominees standing for new three-year terms. The meeting will run virtually, with a limited number of shareholders able to attend in person at Gigafactory Texas in Austin.',
      'The ballot carries two other items alongside the director elections: a non-binding advisory vote on 2025 executive pay and the ratification of PricewaterhouseCoopers as Tesla’s independent auditor for 2026. The proxy filing, submitted October 19, is the clearest signal yet that Tesla’s board wants continuity at the top heading into a stretch where the company is betting its $1.5 trillion valuation on humanoid robots, autonomous ride-hailing hardware and in-house AI silicon rather than on vehicle sales growth alone.',
      'The timing matters. Tesla reports Q3 results on October 21, and the vote comes as the company scales its Cybercab robotaxi service in Austin — where an open NHTSA audit into the steering-wheel-free design requires sworn answers from the company by October 30. Shareholders are being asked, in effect, to endorse the hardware-first strategy while regulators are still asking questions about its flagship product.',
      'What to watch: director elections at Tesla have become flashpoints for broader debates about Musk’s pay and governance. With the stock trading around $368 — up from a $297 low over the past year but well below its $499 high — the December 3 vote will show how much patience shareholders still have for the long game.',
    ],
    sources: ['SEC proxy filing', 'Tech Insider'],
  },
  {
    slug: 'tesla-q3-2026-earnings-preview-october-21',
    title: 'Tesla Q3 Earnings Preview: $28.34B Consensus as Deliveries Hit 486,532',
    description:
      'Tesla reports Q3 2026 results Oct 21 after the close. Consensus: $28.34B revenue, 17.90% gross margin — with the Cybercab ramp and Roadster halo in focus.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Three numbers frame the report: 486,532 deliveries, 13.7 GWh of energy storage, and a $28.34 billion revenue consensus.',
    body: [
      'Tesla reports third-quarter 2026 results on Wednesday, October 21, after the market close, followed by an earnings webcast at 5:30 p.m. ET. The company published a third-quarter revenue consensus of $28.34 billion with a gross margin estimate of 17.90%, per its investor-relations page — a touch above the $28.24 billion in revenue Tesla reported for the second quarter on July 22.',
      'The operating backdrop is already public. On October 2, Tesla reported 486,532 third-quarter deliveries and 13.7 GWh of energy-storage deployments. Investors will be parsing how much of the quarter’s story is mix, pricing and energy — and how much is the autonomous-driving pipeline that has dominated headlines: the Austin Cybercab fleet grew to 300+ vehicles in 30 days, NHTSA’s open safety audit of the steering-wheel-free design demands sworn answers by October 30, and the flying Roadster demo on October 15 delivered a halo moment with no near-term revenue.',
      'Shares closed at $368.06 on the Nasdaq on October 19, giving Tesla a roughly $1.5 trillion market capitalization — with a 52-week range of $297.38 to $498.83. R&D spending has surged: Tesla spent $2.371 billion on research and development in Q2, up 49% from a year earlier, against just $398 million in operating income.',
      'What to listen for on the call: margin trajectory, capital spending on the Cybercab and robotaxi hardware buildout, energy-storage contribution, and any update on Dallas as the next robotaxi city after Austin. The Roadster makes great headlines, but analysts will want numbers on the businesses that actually pay for it.',
    ],
    sources: ['Tesla Investor Relations', 'ad-hoc-news'],
  },
  {
    slug: 'musk-spacex-share-every-american-kid-trump-accounts',
    title: 'Musk Pledges One SpaceX Share to Every American Kid; Trump Wants Them in Trump Accounts',
    description:
      'Elon Musk posted Oct 19 that he will give every US child one SpaceX share next year. President Trump thanked him Oct 20, tying the pledge to Trump Accounts.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      '“Next year, I will give one of my SpaceX shares to every kid in America. This will be the first of many.”',
    body: [
      'Elon Musk posted on X on October 19 that he will give every child in the United States one share of his rocket company, SpaceX, next year. “Next year, I will give one of my SpaceX shares to every kid in America. This will be the first of many,” he wrote. There are roughly 73 million children under 18 in the United States, according to 2024 Census data. Musk offered no details about how the proposed giveaway would work.',
      'The pledge followed an exchange with Anthropic, which had announced a Public Benefit Fund starting with 5% of its shares — with up to roughly 20% of shares eventually committed to public benefit as the company’s value grows. Musk replied that Anthropic should give shares directly to the public, then said he would do the same himself. President Donald Trump thanked Musk on October 20 in a Truth Social post, calling him a “legendary friend” and tying the plan to the administration’s Trump Accounts initiative, a children’s savings program designed to let families, government programs and private donors contribute assets directly to eligible children’s accounts.',
      '“A BIG THANK YOU to our legendary friend, Elon Musk, for his incredible generosity in giving SpaceX Stock to millions of American children through TRUMP ACCOUNTS!” Trump wrote, adding that the plan matched the program’s original vision of bringing together the private sector to invest in children and “give every American Child a piece of the American Dream.”',
      'The honest caveats: a pledge is not a plan. No mechanism, timeline, eligibility rules or legal structure have been disclosed, and distributing equity to 73 million minors would be an enormous administrative undertaking. It also lands the same week SpaceX reports its own Q3 results. Treat this as a headline pledge to watch, not a done deal.',
    ],
    sources: ['Reportage', 'SCMP', 'Daily Prabhat (ANI)', 'Nation Press'],
  },
  {
    slug: 'spacex-q3-earnings-october-20-stock-down-35',
    title: 'SpaceX Reports Q3 Earnings Today With Shares Down 35% From Post-IPO Peak',
    description:
      'SpaceX reports Q3 results Oct 20 after the close — its second quarter since the June IPO. Investors will focus on Starlink growth and AI spending.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The post-IPO rally has faded into a 35% correction. Today’s results will test whether Starlink growth can steady the story.',
    body: [
      'SpaceX reports third-quarter 2026 results on Tuesday, October 20, after the US market closes — its second quarterly disclosure since its initial public offering in June. The company scheduled an audio-only webcast for 3:30 p.m. Central Time (4:30 p.m. Eastern), available through the SpaceX Investor Relations portal.',
      'The results arrive after a sharp correction: SpaceX shares have fallen 35% from their post-listing peak, although the stock has still delivered gains over the past three months. That puts today’s numbers squarely in the spotlight as investors assess whether strong growth in Starlink satellite internet can sustain the company’s valuation — particularly as it ramps investment in AI-related businesses.',
      'Expect the webcast to focus on Starlink subscriber gains and profitability, overall financial progress, and the AI buildout. It is a big week for Musk-related earnings in general: Tesla reports its own Q3 results the next day, October 21, making this back-to-back window the defining stretch for investor sentiment around both companies.',
      'What to watch: commentary on Starlink’s trajectory toward sustained profitability, any update on AI capital spending, and guidance tone. A strong quarter could reset the post-IPO narrative; a soft one would deepen questions about how quickly the satellite business can carry the valuation on its own.',
    ],
    sources: ['LiveMint'],
  },
  {
    slug: 'pilot-tesla-first-megacharger-ellabell-georgia',
    title: 'Pilot and Tesla Open First Megacharger Site for Electric Trucks in Georgia',
    description:
      'Pilot and Tesla opened their first Megacharger site in Ellabell, Georgia — the start of a charging network for heavy-duty electric trucks at travel centers.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 2,
    excerpt:
      'The first Megacharger at a Pilot travel center launches a network aimed at electric freight corridors.',
    body: [
      'Pilot, the North American travel-center network, and Tesla have opened their first Tesla Megacharger site at a Pilot location in Ellabell, Georgia. The opening marks the launch of a new charging network at select Pilot travel centers, built specifically to support heavy-duty electric trucks along major U.S. freight corridors.',
      'The Megacharger is Tesla’s high-power charging system designed for its Semi truck — delivering far higher charge rates than its passenger-car Superchargers. Pairing it with Pilot’s highway footprint is a practical play: truck charging lives or dies on location, and travel centers already sit where long-haul routes, parking and driver amenities converge.',
      'The bigger picture: electric heavy-duty trucking has been held back as much by charging infrastructure as by the trucks themselves. A dedicated Megacharger network along freight corridors would address the two hardest problems at once — where a truck charges and how fast. For fleet operators watching Tesla Semi adoption, the network’s rollout pace now matters as much as the vehicle specs.',
      'No timeline or full site count for the broader network was disclosed. But the first site going live in Georgia — near the Port of Savannah’s logistics corridor — suggests the network is starting where freight demand is densest.',
    ],
    sources: ['everythingpe'],
  },
  {
    slug: 'alef-flying-car-1000th-flight-trolls-tesla-roadster',
    title: 'Flying-Car Startup Alef Hits 1,000th Flight — and Trolls Tesla: “We’ve Been Here Alone for 11 Years”',
    description:
      'Alef Aeronautics released video Oct 15 of its Model A flying over a Tesla Roadster and Cybertruck — its 1,000th logged flight — needling Tesla’s Roadster demo.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'Alef’s machine lifts off vertically and sustains forward flight — a fundamentally different thing from Tesla’s thruster-assisted hops.',
    body: [
      'Alef Aeronautics picked a pointed way to mark a milestone. On October 15, 2026 — the same day Tesla unveiled its “flying” Roadster — the Bay Area flying-car startup released video showing its Model A prototype lifting off vertically and gliding over a row of parked vehicles, including a Tesla Roadster and a Tesla Cybertruck. The company said the clip captured its 1,000th logged flight, and it used the occasion to needle the world’s most famous EV maker directly.',
      '“Welcome, Tesla, to the flying car race. We’ve been here alone for 11 years,” CEO Jim Dukhovny said in comments distributed with the footage. The company also declared that the Tesla Roadster had become the “second” flying car in history, following Alef — a promotional jab, but one that highlights a genuine engineering distinction: Alef is pursuing a dual-mode road vehicle capable of sustained vertical takeoff and forward flight on distributed electric propulsion, while Tesla’s demonstration showed brief, controlled aerial maneuvers on cold-gas thrusters.',
      'Alef’s pitch is substantive. The electric, all-wheel-drive Model A is designed to take off vertically and transition to forward flight, spreading thrust across multiple motors rather than relying on a single rotor or jet. The company says the lighter design accommodates a full-vehicle ballistic parachute. Commercially, Alef reports more than 3,600 pre-orders valued at roughly $1 billion, with initial deliveries to a limited group of early buyers expected by the end of 2026 and production ramping in 2027. The starting price is $299,999.',
      'Dukhovny argues competition benefits the whole category: it validates the market, creates a distinct flying-car category for regulators to engage with, attracts investors, and gives everyone a benchmark. Tesla’s demo pulled flying cars into the mainstream news cycle; Alef wants the industry — and the headlines — to remember who was flying first.',
    ],
    sources: ['Electrek', 'Gizmodo', 'Men’s Journal', 'DigiconAsia'],
  },
  {
    slug: 'archer-midnight-no-roads-tour-san-francisco-bay',
    title: 'Archer Wraps “No Roads” Bay Area Tour: 10-Minute Midnight Flights, Then Off to LA',
    description:
      'Archer’s Midnight eVTOL completed its Northern California demo tour — Oakland to SF’s Marina in ~10 minutes — and is now moving to Los Angeles.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Ten minutes by air versus more than an hour by car: Archer’s pitch is traffic that you simply skip.',
    body: [
      'Archer Aviation has completed an extensive campaign of piloted flight tests in Northern California with its Midnight eVTOL aircraft, wrapping up its Bay Area “No Roads” demonstration tour. The prototype operated from a base at Oakland International Airport and is now being moved to Los Angeles for more demonstrations and operations ahead of the 2028 Olympic Games.',
      'The tour’s numbers make the pitch concrete. Over the past week, Archer’s flight-test team took the Midnight to Hollister, San Martin, San Jose, Mountain View and Hayward — seven cities over three days, logging more than 174 nautical miles at top speeds of 114 knots (about 131 mph). FlightAware tracked the aircraft (registration N703AX) on three roughly 20-minute flights over the bay. The headline demo: Oakland to San Francisco’s Marina District in about 10 minutes, versus more than an hour by car in traffic.',
      'Archer says the main objective was demonstrating how the electric air taxi can operate alongside other aircraft in and around the Bay Area’s three international airports — San Francisco, Oakland and San Jose — and giving residents a glimpse of 10-to-20-minute flights as an alternative to congested highways. “Flying Midnight across multiple cities in Northern California shows we can connect communities with no roads, no traffic, and no emissions in minutes instead of hours,” CEO Adam Goldstein said.',
      'The tour began at Salinas Municipal Airport at the end of July with a round trip to Monterey. With the Bay Area leg done and LA next, Archer is methodically building the operational case city by city — the unglamorous but essential groundwork before any commercial air-taxi service can launch.',
    ],
    sources: ['Aviation International News', 'FLYING Magazine', 'Seeking Alpha'],
  },
  {
    slug: 'vertical-aerospace-valo-deals-anh-structure-ng-litef',
    title: 'Vertical Aerospace Strikes Seat and Navigation Deals to Push Valo Flying Taxi Toward Certification',
    description:
      'Vertical Aerospace signed long-term deals with ANH Structure for bespoke Valo seating and NG LITEF for navigation systems as it moves toward certification.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Seats from a Korean aerospace specialist, navigation from a Northrop Grumman unit: Valo is moving from design to industrial-scale production.',
    body: [
      'Bristol-based Vertical Aerospace has struck long-term agreements with two international firms as it pushes its Valo electric vertical-takeoff-and-landing aircraft toward certification and production. South Korean aerospace seating specialist ANH Structure will design, develop, certify and produce a bespoke pilot and passenger seating system for the four-to-six-seat aircraft. German navigation-systems maker NG LITEF, part of Northrop Grumman, will supply the inertial reference system feeding position, attitude and heading data to Valo’s flight-critical systems.',
      'CEO Stuart Simpson said the two companies bring “specialist expertise and strong certification credentials,” adding that the deals support a strategy “to deliver one versatile platform across multiple cabin configurations and missions.” His framing: “Valo is progressing from an advanced design into an aircraft supported by the people, systems and industrial capability needed for certification and production at scale.”',
      'The agreements follow the launch last month of an aircraft assembly facility at Cotswold Airport — a concrete step from prototype work to industrial capability. Vertical Aerospace was founded a decade ago by Ovo Energy boss Stephen Fitzpatrick and listed on the New York Stock Exchange in 2021, putting it among the earlier eVTOL companies to go public.',
      'Why it matters: eVTOL programs live or die on certification, and certification is won with supplier ecosystems like this one — certified seats, certified navigation, certified everything. Each signed deal de-risks the path to a type certificate, which is the real gate between demo flights and paying passengers.',
    ],
    sources: ['Business Live'],
  },
  {
    slug: 'volant-whitesky-indonesia-evtol-ve25-deal',
    title: 'China’s Volant Signs eVTOL Supply Deal With Indonesia’s WhiteSky',
    description:
      'Volant Aerotech signed an agreement with Indonesian charter operator WhiteSky covering its VE25-100 eVTOL air taxis as Asia’s air-taxi market heats up.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 2,
    excerpt:
      'A Chinese eVTOL maker, an Indonesian charter operator: the flying-taxi market is going international.',
    body: [
      'China’s Volant Aerotech has signed a memorandum of agreement with Indonesian charter operator WhiteSky Group covering the supply of VE25-100 eVTOL air taxis. The deal puts a Chinese electric air-taxi platform on a path toward commercial operations in Southeast Asia — one of the regions where short-hop air mobility could matter most, given archipelago geography and congested ground transport.',
      'Volant has retired its X1 technology demonstrator, first flown in 2023, and fully transitioned flight testing to its first development aircraft, the VE25 AC101. Moving the test program onto the development airframe is the standard industry signal that a company is done proving the concept and is now proving the product.',
      'The agreement lands in a busy week for eVTOL commercialization: Archer wrapped its Bay Area demo tour and moved its Midnight prototype to Los Angeles, and Vertical Aerospace signed certification-oriented supplier deals for its Valo aircraft. Taken together, the industry is shifting from “can it fly?” to “who will buy it and where?” — and Asia is emerging as a key battleground for that second question.',
      'Commercial timelines remain the honest caveat. MOUs are not firm orders, and certification in each operating country is its own marathon. But the geographic spread of these deals — California, the UK, China, Indonesia, the UAE — shows the air-taxi race is no longer a single-country story.',
    ],
    sources: ['Aviation Week'],
  },
  {
    slug: 'renault-5-turbo-3e-555hp-paris-motor-show',
    title: 'Renault 5 Turbo 3E: 555hp In-Wheel Motors Make It the Most Powerful Street Renault Ever',
    description:
      'Unveiled at the Paris Motor Show, the 555hp Renault 5 Turbo 3E uses dual in-wheel motors — the most powerful homologated Renault ever built.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Two motors, in the wheels, 555 horsepower: a rally legend reborn as an electric halo car.',
    body: [
      'Renault unveiled its most powerful street-legal car ever at the Paris Motor Show: the 555hp Renault 5 Turbo 3E. The near-production engineering prototype is a modern electric reinterpretation of the legendary Renault 5 Turbo and Turbo 2 rally icons, powered by two rear in-wheel electric motors — technology CEO Francois Provost called “new and very innovative.”',
      'In-wheel motors are the headline engineering bet. Putting the motors inside the wheels eliminates driveshafts and frees packaging, while delivering instant torque exactly where it meets the road. Provost framed the car as a rolling proof of concept: “At Renault we are obsessed with pushing technology forward and we see this car as a proof of concept.” With 555 peak horsepower, it will be the most powerful homologated Renault ever created.',
      'The Turbo 3E shared the stage with the E-Space concept — a modern reinterpretation of the original 1984 Renault Espace, the people carrier that became a European icon. Chief Growth Officer Fabrice Cambolive called it “a modern re-interpretation of the original Renault Espace from 1984… a visionary vehicle that became iconic and is in our collective memory.” Kia also opened media day with a broad EV-range pitch backed by its 7-year warranty.',
      'What it means for buyers: the Turbo 3E itself is a halo car, not a volume play — but in-wheel motor technology proven here could eventually reach mainstream EVs, where packaging and efficiency matter most. Renault is using nostalgia as the wrapper for genuinely forward-looking engineering.',
    ],
    sources: ['Associated Press', 'Renault'],
  },
  {
    slug: 'smart-2-fortwo-successor-paris-motor-show',
    title: 'Smart #2 Brings Back the Fortwo: 82hp Electric City Car, 290 km Range, Under £20,000',
    description:
      'Smart unveiled the #2 at the Paris Motor Show — a 2.75-metre, two-seat electric successor to the Fortwo with 290 km of WLTP range.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The ultra-compact icon is back — this time on a dedicated small-EV platform, priced under £20,000.',
    body: [
      'Smart is returning to its roots. The company unveiled the new Smart #2 at the 2026 Paris Motor Show on October 12 — a two-seat electric city car that revives the concept of the original Fortwo after Smart spent recent years expanding into larger electric SUVs. Measuring just 2.75 metres long, it is built for the tightest urban streets.',
      'The specs are modest but honest. The #2 rides on Smart’s new Electric Compact Architecture (ECA) platform, developed specifically for small EVs. A rear-mounted motor produces 60 kW (about 82 hp) and 130 Nm, driving the rear wheels in the tradition of the earliest Smarts. The 35.8 kWh lithium-iron-phosphate battery — chemistry chosen for durability and lower reliance on nickel and cobalt — delivers up to 290 kilometres of WLTP range (preliminary, pending final homologation), with fast charging in about 20 minutes.',
      'Pricing is the other half of the pitch: the Smart #2 will start below £20,000 in the UK, with pre-orders beginning in 2027. That positions it squarely in the growing fight for affordable European EVs, where parking ease, running costs and purchase price decide winners.',
      'Why it matters: the entry-level EV segment is where electrification either goes mainstream or stalls. A genuinely small, genuinely cheap electric car from a brand that invented the category is exactly the kind of product the European market has been asking for.',
    ],
    sources: ['Smart Europe'],
  },
  {
    slug: 'li-auto-2026-i6-october-28-launch-780km',
    title: '2026 Li Auto i6 Launches Oct 28: 780 km Range, 5C Charging, 29-Inch 6K Screen',
    description:
      'Li Auto’s updated i6 goes on sale Oct 28 with a 96 kWh 5C battery (780 km CLTC), zero-gravity seats and a 29-inch 6K panoramic display.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Six upgrades, one goal: keep the i6 among China’s top-selling premium EVs above RMB 200,000.',
    body: [
      'Li Auto will launch the updated 2026 i6 on October 28, with deliveries starting in early November. Teased on October 9 ahead of its European debut at the Paris Motor Show, the refreshed premium EV sedan gets six key upgrades covering lighting, storage, seats, displays, range and chips, according to CEO Li Xiang.',
      'The headline numbers: a 96 kWh 5C fast-charging battery delivering 780 km of CLTC-rated range. Li Auto developed the cells in-house and outsourced production to Sunwoda and CALB — making CALB the company’s third power-battery supplier, entering the supply chain for the first time through the i6. Up front, the i6 gains adaptive matrix (ADB) headlights shared with the flagship MEGA, a power-operated frunk, and two front zero-gravity seats that recline to roughly 150 degrees.',
      'The cabin tech is equally aggressive: a 29-inch 6K panoramic display for the front row and a 21-inch 4K rear entertainment screen, running on Qualcomm’s Snapdragon 8797 cockpit chip alongside Li Auto’s self-developed Mach M100 chip. It is a rolling showcase for the company’s vertical-integration push — in-house battery cells, in-house silicon, outsourced cell manufacturing.',
      'The i6 matters because it is a volume pillar: it has delivered more than 190,000 units in one year and ranked among the top three best-selling battery-electric vehicles priced above RMB 200,000 (about $29,830) for eight consecutive months. The October 28 launch will test whether the upgrades can keep it there as competition intensifies.',
    ],
    sources: ['ChinaEVHome', 'Li Auto'],
  },
  {
    slug: 'volvo-ex30-head-restraint-recall-october-2026',
    title: 'Volvo Recalls EX30 Over Head Restraint; Global Campaign Covers 234,000 Cars',
    description:
      'Volvo reported NHTSA campaign 26V671000 on Oct 9 for EX30 head restraints. The global campaign covers about 234,000 vehicles from 2024–2027.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A head-restraint attachment fix with epoxy — free at dealers, with owner letters going out November 30.',
    body: [
      'Volvo has recalled certain EX30 and EX30CC electric crossovers over a head-restraint issue, reporting the campaign to U.S. regulators on October 9, 2026, under NHTSA campaign number 26V671000. Volvo’s internal reference is R10396, and affected VINs became searchable in the federal database the same day. Not every EX30 built in the covered periods is included — owners should check their specific vehicle.',
      'The remedy is straightforward: dealers will reinforce the head-restraint cushion attachment using a two-component epoxy adhesive applied at three specified attachment points. Volvo says physical testing of the repair confirmed a clear improvement in attachment strength. The repair is free of charge, and owner notification letters are expected to be mailed on November 30, 2026. Volvo Car customer service can be reached at 1-800-458-1552, referencing recall R10396; the federal vehicle safety hotline is 888-327-4236.',
      'The scope is global: Volvo confirmed a campaign covering close to 234,000 vehicles across model years 2024 through 2027, with slightly more than 15,000 in Sweden and 5,542 in Denmark. The company says it has received no reports of injuries connected to the problem and is acting preventively.',
      'What to do if you own one: check your VIN at NHTSA’s recall site or through Volvo now rather than waiting for the November letter. Head restraints are a whiplash-protection device — a preventive recall is exactly when you want the fix, before it becomes an injury report.',
    ],
    sources: ['Road Ethos', 'NHTSA'],
  },
  {
    slug: 'nhtsa-sierra-grille-recall-query-535639-pickups',
    title: 'NHTSA Questions GM’s Sierra Grille Fix After 21 Trucks Lose Deflectors Post-Repair',
    description:
      'NHTSA opened recall query RQ26003 Oct 9 covering 535,639 GMC Sierra 1500s after 21 owners reported the grille deflector came off even after the recall fix.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 4,
    excerpt:
      'A recall query asks whether the first recall worked. With 21 post-repair failures, NHTSA isn’t convinced.',
    body: [
      'NHTSA’s Office of Defects Investigation opened recall query RQ26003 on October 9, 2026, covering an estimated 535,639 GMC Sierra 1500 pickups from the 2022 through 2024 model years. The subject is the upper grille deflector — the wide trim bar across the top of the grille — detaching while the truck is moving. ODI counts 118 owner complaints, and 21 of them say the deflector came off after the truck had already received the recall repair.',
      'A recall query is NHTSA’s tool for asking whether a manufacturer’s recall actually worked: did the remedy fix the defect, and did the recall cover the right vehicles? This one challenges both. The original campaign, recall 25V-060 filed February 6, 2025, covered only 70,768 trucks — 2022 Sierra 1500s with a chrome deflector built after the mid-cycle refresh. The new query sweeps in non-chrome 2022 trucks and every 2023 and 2024 Sierra 1500: more than seven times the original population.',
      'The agency’s summary describes the deflector detaching “without detectability,” and lists the people at risk as the truck itself, nearby vehicles, motorcyclists and pedestrians. No crashes, injuries or deaths have been reported so far. GM’s own paper trail shows a slow start: an employee flagged a detached deflector through the company’s internal Speak Up for Safety program on January 19, 2024, GM closed its investigation that May after finding no defect trend, then reopened it in December 2024 as warranty claims climbed.',
      'What it means for owners: if you drive a 2022–2024 Sierra 1500, a flying trim bar at highway speed is a hazard to everyone around you, not just a cosmetic issue. Watch for an expanded recall — 21 post-repair failures is exactly the kind of data that forces one.',
    ],
    sources: ['The Auto Wire', 'NHTSA'],
  },
  {
    slug: 'global-ev-sales-september-2026-down-2-percent',
    title: 'Global EV Sales Fell 2% in September, Ending a Six-Month Growth Streak',
    description:
      'Reuters reports global EV sales fell 2% in September to 2.15M — record Europe couldn’t offset a 44% North America plunge and an 18% China drop.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Three markets, three stories: record Europe, slumping China, and a North America still lapping the tax-credit cliff.',
    body: [
      'Global demand for electric vehicles fell 2% in September, ending six consecutive months of growth, according to data from UK-based research firm Benchmark Mineral Intelligence reported by Reuters on October 15. Global EV sales slid to 2.15 million vehicles for the month, while year-to-date volumes remain up 3% at 15.5 million units.',
      'The headline hides three very different markets. Europe had its strongest month on record, with almost 600,000 EVs sold in September — 10% above the previous high set in June — on strong consumer demand and policy support. China’s domestic market dropped 18% to 1.11 million vehicles, pushing carmakers to rely increasingly on exports. And North American sales fell 44%, the steepest monthly decline this year, reflecting the strong year-ago period when buyers rushed to dealerships before U.S. federal EV tax credits expired at the end of September 2025.',
      '“Europe had its strongest month on record,” BMI data manager Charles Lester said — but Europe alone couldn’t carry the world. The divergence is the real story: electric demand is accelerating where products, incentives and operating costs align, and stalling where they don’t.',
      'What comes next: Lester notes that from the fourth quarter, the North American comparisons will ease as the market laps the post-tax-credit slump — so the year-over-year numbers should look better even without a real demand surge. For buyers, the takeaway is regional: Europe’s record is evidence that EVs win on economics when the conditions are right, and the U.S. market is still finding its post-subsidy footing.',
    ],
    sources: ['Reuters', 'Benchmark Mineral Intelligence'],
  },
  {
    slug: 'us-ev-sales-q3-2026-cox-automotive-recovery',
    title: 'US EV Sales Are Showing Signs of Life: 6.1% Share in Q3, Best in a Year',
    description:
      'Cox Automotive: US EVs hit 6.1% market share in Q3 — three straight quarters of growth since the tax-credit cancellation, led by Toyota, Rivian and Subaru.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'After the subsidy cliff, the U.S. EV market is recovering the hard way — on price, product and gas prices.',
    body: [
      'Don’t write the obituary for the American electric car just yet. After sales tanked following the cancellation of federal tax credits, U.S. EV sales have now grown for three consecutive quarters, according to a new report from Cox Automotive covered by TechCrunch on October 14. EVs captured 6.1% of the U.S. market in the third quarter — their best showing since Q3 2025.',
      'The recovery is being led by product, not subsidies. Sales of the Toyota bZ and Lexus RZ roughly doubled after a refresh that reached dealerships late last year, bringing Tesla-style charging ports, larger batteries, more powerful motors and faster charging. Toyota, Rivian and Subaru led the pack. “The EV market is finding its footing again,” said Stephanie Valdez Streaty, Cox Automotive’s director of industry insights — crediting more competitive EV prices and high gas prices for renewed consumer interest.',
      'Tesla’s position tells the other half of the story: its U.S. sales dropped 20% year over year, yet it still sold more than half of all EVs in the country during the quarter. The market is growing and diversifying at the same time — Tesla shrinking in share while the total pie expands.',
      'The pattern rhymes with Germany, where EV incentives ended abruptly in November 2023: sales fell by more than half the following month, then recovered steadily — German EV sales this August were the second-highest on record. The lesson for U.S. buyers: subsidy cliffs are painful but temporary, and the current window of competitive pricing plus high gas prices is exactly when EVs make the most economic sense.',
    ],
    sources: ['TechCrunch', 'Cox Automotive'],
  },
  {
    slug: 'waymo-20000-robotaxis-2027-5b-debt-plan',
    title: 'Waymo Plans 20,000 Robotaxis by 2027 on $5B Debt',
    description:
      'Semafor reports Waymo plans to grow from ~4,000 robotaxis to 8,000 by end of 2026 and 20,000 by end of 2027, funded by a $5B private-credit raise.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'A fivefold fleet expansion on borrowed money: Waymo is betting it can industrialize the robotaxi.',
    body: [
      'Waymo plans to expand its robotaxi fleet from about 4,000 vehicles today to 8,000 by the end of 2026 and 20,000 by the end of 2027, according to Semafor reporting on October 19, subsequently covered by Reuters. The company declined to comment on the specific fleet numbers. If executed, the ramp would be the largest autonomous-vehicle scale-up ever attempted — a fivefold expansion in roughly 14 months.',
      'The money is already lined up. Waymo closed a $5 billion private-credit raise earlier in October — its first-ever debt financing, done without an Alphabet guarantee — expressly to fund growth in the U.S. and internationally. Deal terms reportedly also permit future securitization of fleet leases, which would unlock additional capacity as vehicles come online. Earlier this year the company raised $16 billion in equity at a reported $126 billion valuation.',
      'The hardware is largely coming from China: thousands of Zeekr-built vehicles from a Geely unit — the “Ojai” vans now entering service — will supply much of the ramp. That puts America’s robotaxi leader on a Chinese EV platform just as the politics around Chinese vehicles in the U.S. are hardening, a tension Capitol Hill has already started raising. Service currently runs across 15 U.S. cities, with Toronto lined up as the first non-U.S. market and a Nashville operations facility opened with Lyft.',
      'The honest caveat: 4,000 vehicles operate today; the other 16,000 are prospective. Reaching 20,000 requires more than buying cars — charging, maintenance, fleet management, passenger support, city permissions and insurance all have to scale in parallel. Debt financing adds real pressure to convert technical capability into dependable cash flow. The next 14 months will show whether the robotaxi business is finally industrial — or still a very expensive demo.',
    ],
    sources: ['Semafor', 'Reuters', 'AI Weekly'],
  },
  {
    slug: 'waymo-toronto-robotaxi-2028-mapping-element-fleet',
    title: 'Waymo Starts Mapping Toronto for 2028 Launch — Its First Canadian Market',
    description:
      'Waymo will begin manually mapping Toronto streets ahead of a targeted 2028 robotaxi launch, partnering with Element Fleet Management for local operations.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'First the maps, then the driverless rides: Toronto is Waymo’s first planned market outside the U.S.',
    body: [
      'Waymo says it will begin manually mapping and testing Toronto streets in the coming days, with the goal of launching fully autonomous ride-hailing there in 2028 — its first planned service in Canada. The announcement, updated October 20, sets Toronto as the first non-U.S. market on Waymo’s expansion list, alongside a U.S. footprint that now spans 15 cities.',
      'The initial vehicles will carry trained specialists behind the wheel as the company builds high-definition maps and validates how its driving system handles local roads, weather and conditions. The work proceeds in phases before any driverless rides are offered — so the announcement does not mean passengers can book a robotaxi yet. For local operations, Waymo has partnered with Toronto-headquartered Element Fleet Management, which will provide fleet services. The companies expect to support hundreds of jobs over time in vehicle maintenance, validation driving, customer service and operations.',
      'Regulatory groundwork is underway: Ontario has approved Waymo’s participation in its automated-vehicle pilot program. But local politics is already engaged — Toronto Mayor Olivia Chow has raised safety concerns and called for the vehicles to meet high standards. Waymo’s 2028 date is a target, not a commitment; the company has not announced a specific opening date for public rides.',
      'Why it matters: international expansion is the next proving ground for robotaxis. New cities mean new regulators, new weather, new driving cultures — and Toronto, with real winters, will test the system in conditions Sun Belt cities never do.',
    ],
    sources: ['CBC', 'Harava News'],
  },
  {
    slug: 'diwali-car-offers-2026-india-maruti-tata-honda',
    title: 'Diwali 2026 Car Deals: Maruti, Tata and Honda Offer up to ₹1.95 Lakh Off',
    description:
      'India’s festive season brings 2026’s biggest car discounts: Maruti lists up to ₹1.95 lakh off strong hybrids, Honda up to ₹1.71 lakh on the City.',
    date: 'October 20, 2026',
    dateISO: '2026-10-20',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Festive-season offers through October 31 — but the biggest advertised discount isn’t what every buyer will actually save.',
    body: [
      'India’s Diwali festive season has brought some of 2026’s biggest advertised car discounts, with automakers and dealers promoting cash discounts, exchange bonuses, scrappage benefits and special financing through October 31. Maruti Suzuki, Tata Motors, Honda, Hyundai and Renault are all running festive-season incentives, according to dealer offer listings published October 20.',
      'The headline numbers: Maruti Suzuki dealer Varun Motors lists benefits of up to ₹80,000 on the Swift and up to ₹1.95 lakh on selected strong-hybrid versions of the Grand Vitara and Victoris, with the Invicto at up to ₹95,000 and the WagonR at up to ₹58,500. Honda is advertising benefits of up to ₹1.71 lakh on the City, Hyundai lists offers of up to ₹1 lakh on selected models, and Tata’s festive promotions include model-specific benefits — with some dealer offers advertising even higher figures.',
      'The important catch: the biggest advertised discount is not necessarily what every buyer saves. Offers combine multiple benefits — cash, exchange, corporate, scrappage — and eligibility depends on the variant, city, exchange vehicle, financing arrangement and available stock. A ₹1.95 lakh headline may require trading in an old car, financing through a partner bank and buying the top variant.',
      'For shoppers, the practical advice is the same in any market: get the out-the-door price in writing, separate the discount from the exchange valuation, and compare across dealers. Festive season is genuinely the best time of year to negotiate in India — just negotiate the real number, not the poster.',
    ],
    sources: ['International News and Views'],
  },

  {
    slug: 'tesla-flying-roadster-reveal-october-2026',
    title: 'Tesla Unveils “Flying” Roadster: SpaceX Thrusters, 0–60 Under 1 Second, Production in 2028',
    description:
      'Tesla\'s new Roadster flew in Texas: upside-down ramp run, a leap over parked Teslas, and 0–60 in under a second on SpaceX thrusters.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'The Roadster uses SpaceX cold-gas thrusters to briefly leave the ground — but it is not approved for public road use.',
    body: [
      'Tesla CEO Elon Musk unveiled the redesigned second-generation Roadster on October 15, 2026, at SpaceX’s rocket test facility in McGregor, Texas, and used it to make a startling claim: “Flying cars are real.” The event was livestreamed from 7:55 p.m. Central after an October 1 date was postponed over weather.',
      'During the demonstration — which had no driver in the car, “to make sure we don’t kill anyone,” Musk said — the two-seat sports car drove up a curved ramp on suction alone, hung upside down, barrel-rolled in midair, and landed. It then used its thrusters to leap over a line of Tesla models parked side by side — a Cybercab, a Cybertruck, a Semi, a Model Y, and a Model 3 — before launching to 60 mph in under a second. The car carries 10 nozzles fed by what Musk called “ultra high-pressure air tanks” — SpaceX cold-gas thruster technology. Musk called it “the results of what happens when you have a collaboration with the world’s best car company and the world’s best rocket company.”',
      'The honest caveats matter. The car does not sustain flight like an aircraft, and Tesla’s own site notes the flying configuration is not approved for public road use. Production is promised for 2028 — nine years after the car was first promised for 2020 — and Tesla disclosed no final price. Reservations are open with a $5,000 deposit for the non-flying version, while the “full flight system” Rocket model will be offered by invitation only. “Success is not guaranteed,” Musk admitted. “I mean that.”',
      'Markets noticed anyway. After Tesla shares closed at $362.44, trading in the 24/7 TSLA perpetual contract on crypto exchange Hyperliquid leapt roughly 1,580% in an hour — from $2.8 million to $47 million — while the contract price rose about 5% to roughly $378. Binance’s TSLA contract still led with $279 million in 24-hour volume, per RootData. Tesla reports Q3 results on October 21, where investors will weigh whether a halo car that can’t yet be bought supports the story.',
    ],
    sources: ['CNN', 'Signal Post News', 'CBS News', 'CoinDesk'],
  },
  {
    slug: 'tesla-cybercab-300-fleet-nhtsa-answers-oct-30',
    title: 'Tesla Cybercab Fleet Tops 300 in Austin as NHTSA Demands Sworn Answers by Oct 30',
    description:
      'Tesla says its Austin robotaxi service grew 8x to 300+ Cybercabs while an open federal safety audit demands sworn answers from the company by October 30.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'The Austin fleet hit 300+ Cybercabs in 30 days — while a federal investigation into the steering-wheel-free design stays open.',
    body: [
      'Tesla says its Austin robotaxi service has “scaled to 300+ Cybercabs – an 8x increase in 30 days.” Texas DMV registration records listed 319 registered Cybercabs and 739 Tesla autonomous vehicles in total as of October 10, though third-party trackers counting vehicles actually in service found fewer — about 354 total vehicles, 178 of them Cybercabs.',
      'The purpose-built, steering-wheel-free Cybercab — now EPA-certified and built at Giga Texas — opened to the general public in Austin on September 4, 2026. Anyone 13 and older can ride via the Tesla Robotaxi app across a 264-square-mile area from 6 a.m. to 11 p.m. Cybercabs make up about 39% of the robotaxi fleet but only around 11% of rides, per Motley Fool data cited this week.',
      'Growth this fast has regulators’ attention. NHTSA’s audit of Tesla’s self-certification remains open, and according to Teslarati, sworn answers are due October 30. That sits on top of an earlier NHTSA review focused on Tesla robotaxi operations near school zones. A car with no steering wheel or pedals cannot be manually overridden by anyone inside it — the entire point of the product, and exactly the design choice regulators want more data on before the fleet scales further. Tesla reports Q3 results on October 21.',
      'What’s next: Tesla’s head of AI software, Ashok Elluswamy, wrote “Dallas soon” — the first named expansion city after Austin. Phoenix and Las Vegas applications are still pending, and Europe has no regulatory path yet. One personnel note worth watching: Cybercab general-assembly chief Jody Kerns left Giga Texas for Rivian’s R2 plant, per Electrek.',
    ],
    sources: ['Tesla', 'Texas DMV', 'Teslarati', 'Motley Fool', 'Electrek'],
  },
  {
    slug: 'waymo-nashville-airport-robotaxi-october-2026',
    title: 'Waymo Launches Robotaxi Pickups and Drop-Offs at Nashville Airport',
    description:
      'Waymo began autonomous airport pickups and drop-offs at Nashville International Airport on Oct 13, and launched teen accounts for riders 13–17 in Nashville.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Airports are the prize for robotaxi companies — Waymo just added Nashville International to its list.',
    body: [
      'Waymo launched robotaxi pickups and drop-offs at Nashville International Airport on October 13, 2026, giving select riders an autonomous door-to-door option for air travel. With every new airport and city added, the company says, the service gets closer to a true door-to-door experience for travelers.',
      'The airport launch follows another Nashville milestone from September: Waymo rolled out specialized accounts for teens aged 13 to 17 across its 50-square-mile Nashville service area, the second market for teen accounts after Phoenix. The accounts link to a parent or guardian’s app, trained agents are available to assist teens during rides, and parents can track the car in real time.',
      'Waymo’s steady expansion — airports, teen riders, more cities — stands in contrast to Tesla’s faster-but-under-investigation Cybercab ramp in Austin. The two companies are now the clearest head-to-head contest in American robotaxi service, and airports are the most valuable single pickup locations to win.',
    ],
    sources: ['FTN News', 'Waymo'],
  },
  {
    slug: 'waymo-chinese-zeekr-ojai-vans-security-concerns',
    title: 'Waymo Orders 5,100 Chinese-Built Robotaxis as Capitol Hill Raises Security Alarms',
    description:
      'Waymo’s Zeekr-built “Ojai” vans — 5,100 arriving by year end — are doubling its fleet and drawing national-security scrutiny in Washington.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Waymo’s expansion vans are made by China’s Zeekr — and lawmakers say that’s a security and competition problem.',
    body: [
      'Waymo has ordered thousands of Chinese-built electric vehicles to rapidly expand its US robotaxi fleet, the New York Post reported on October 19, 2026. The Alphabet-owned company’s powder-blue “Ojai” vans — now operating in Los Angeles, San Francisco, and Phoenix, and aimed for Denver, Las Vegas, and San Diego this fall — are a rebranded version of a vehicle made by Zeekr, a unit of China’s Geely Holding Group.',
      'Waymo is on pace to import about 5,100 Ojai vehicles by the end of this year — more than doubling its current fleet, which consists mostly of Jaguar I-Pace SUVs built in Austria and outfitted with Waymo’s self-driving technology at an Arizona plant, according to tracking data from research firm MoffettNathanson.',
      'The gambit is drawing heat in Washington. The Commerce Department has banned the import or sale of any “connected vehicles” or self-driving software made in China or Russia starting with model year 2027, and legislation to formalize a ban is under consideration in both chambers of Congress. Waymo says it complies with federal rules by sourcing only the physical vehicles from Zeekr and adding its own sensors and self-driving software in Arizona — but critics call the tie-up a glaring economic and national-security risk.',
      'The tension is real: Waymo needs cheap, purpose-built vehicles to win the robotaxi race against Tesla’s Cybercab, but the cheapest available option runs straight into bipartisan Washington opposition. Whether Waymo can scale on Zeekr hardware past 2027 without a domestic alternative will shape the economics of the whole robotaxi business.',
    ],
    sources: ['New York Post', 'Reuters', 'MoffettNathanson'],
  },
  {
    slug: 'jaguar-type-01-ev-130500-nyc-reveal',
    title: 'Jaguar Unveils $130,500 Type 01 Electric Flagship in New York',
    description:
      'Jaguar’s all-electric Type 01 debuted in NYC with up to 450 miles of range, a 3.2-second 0–62 sprint, and a $130,500 US starting price.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The Type 01 is Jaguar’s moonshot: an all-electric flagship at Ferrari money, arriving as the brand rebuilds from a cyberattack and job cuts.',
    body: [
      'Jaguar, owned by Tata Motors, unveiled its all-electric Type 01 at an event in New York City on October 6, 2026, priced at approximately $130,500 in the US and £130,000 in the UK. The flagship offers up to 450 miles of range and accelerates from 0 to 62 mph in 3.2 seconds.',
      'The launch is the centerpiece of Jaguar’s all-electric brand reboot, two years after a rebrand whose car-free marketing drew widespread backlash. The company is rebuilding at the same time: it is still recovering from a cyberattack that halted production and has announced plans to cut 4,000 jobs to reduce costs.',
      'The Type 01 arrives into a luxury EV market that got crowded fast — Ferrari and Bentley both launched their first EVs this year — while lower-cost Chinese brands pressure the segment from below. Orders open in early 2027; reception of this car will signal whether Jaguar’s electric reinvention has real buyers behind it.',
    ],
    sources: ['CNBC', 'NewsStocks.live'],
  },
  {
    slug: 'leapmotor-a10s-launch-13800-lidar',
    title: 'Leapmotor Launches A10s Electric SUV With LiDAR for Just $13,800',
    description:
      'Leapmotor’s A10s went on sale in China at 92,800 yuan (~$13,800) with LiDAR, 505-km CLTC range, and 30–80% charging in 16 minutes.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'LiDAR, 505 km of range, and an 800-volt architecture — for the price of a used Civic in the US.',
    body: [
      'Chinese EV maker Leapmotor launched the A10s, a sporty variant of its A10 small electric SUV, in China on October 18, 2026, at a list price of 92,800 yuan — about $13,810. That’s 6,000 yuan above the A10’s previous top-trim 505 LiDAR variant.',
      'The spec sheet is remarkable for the money: a single front motor producing 90 kW (121 hp), a 53 kWh lithium-iron-phosphate battery, and 505 km (314 miles) of CLTC range — matching the A10 505 LiDAR variant. The 800-volt platform charges from 30% to 80% in as little as 16 minutes, per local outlet Yiche.',
      'The A10s differentiates mostly on style and tech: exclusive Mirror Night Black paint, gunmetal-gray badges, 18-inch black sport wheels, a red “S” badge, and a Modern Gray cabin with red-stitched faux-suede seats. Driver assistance is the real story — LiDAR plus a Qualcomm SA8295 cockpit chip and SA8650 assistance chip enabling urban navigation on autopilot, highway cruising, and parking-space-to-parking-space driving.',
      'The launch follows the A10’s first month-on-month delivery decline since its debut — down 24.08% to 24,457 units in September, though that still represented nearly a quarter of Leapmotor’s monthly total. The A10s is a year-end sales-push play, and another reminder that China’s EV price floor keeps dropping while Western EVs start above $25,000.',
    ],
    sources: ['CnEVPost', 'Yiche'],
  },
  {
    slug: 'paris-motor-show-2026-ev-wrapup',
    title: 'Paris Motor Show 2026: Electric Citroën 2CV, 816-hp Peugeot Concept, and China’s European Invasion',
    description:
      'The 2026 Paris Motor Show (Oct 12–16) brought Stellantis’s electric 2CV, an 816-bhp Peugeot E-T16 concept, and official European debuts for Avatr and Li Auto.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Europe’s biggest auto show became a battleground: legacy icons going electric while Chinese brands plant their flags in Paris.',
    body: [
      'The 2026 Paris Motor Show ran from October 12 to 16 with a clear theme: Europe’s EV market is getting crowded from both sides. Stellantis showed an all-electric Citroën 2CV alongside the 816-bhp Peugeot E-T16 concept, Renault previewed its E-Space electric MPV, and BYD revealed the Atto 8 with new design language and an upmarket cabin.',
      'The bigger story was China’s arrival in force. Chinese manufacturers Avatr and Li Auto made their official European debuts at the show. Li Auto brought the 2026 Li i6 — its first all-electric global model, shown in Europe under the Li 6 name — ahead of an October 28 launch event in China with deliveries starting in early November.',
      'For flair, Fiat showed the Multiplay electric concept: a sliding rear section converts it between a six-seat minivan and a four-seat compact pickup. No powertrain details or production plans were disclosed, but the concept shows how far automakers are pushing adaptability as a selling point.',
      'The takeaway for shoppers: European buyers will soon face their widest-ever spread of EV choices, from €25,000 city cars to 816-bhp halo concepts — and the competition is already forcing down prices. US buyers won’t see most of these models, but the pricing pressure is global.',
    ],
    sources: ['EV Powered', 'evnews.ai', 'WardsAuto'],
  },
  {
    slug: 'chery-oct-20-ai-model-factory-robotaxi-evtol',
    title: 'Chery’s Oct 20 Tech Day: Industry’s First Auto AI Model, Factory-Built Robotaxi, and a Flying Car',
    description:
      'Chery’s Oct 20 Wuhu conference: the auto industry’s first domain-specific AI large model, a factory-built global Robotaxi, and the Lingxiao eVTOL flying car.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'One Chinese automaker is staging its own Tesla-style AI day — with an automotive AI model, a robotaxi, and an eVTOL all on the agenda.',
    body: [
      'Chery will hold its Global Innovation Conference 2026 on October 20 in Wuhu, Anhui Province, under the theme “Change,” with an agenda that reads like an automaker declaring it’s now a tech company. The company will present its Yaoguang 2035 Strategy, which explicitly aims to move beyond car manufacturing toward becoming a global intelligent technology company.',
      'The headline promise: what Chery describes as the automotive industry’s first domain-specific AI large model, built on the company’s work in computing power, algorithms, and data — plus an automotive-grade chip designed for a physical AI world model. The aim is to push AI deeper into vehicle development and manufacturing, and into applications beyond the car itself.',
      'On the mobility side, Chery says it will unveil the world’s first factory-built Robotaxi developed for global markets, and its Lingxiao eVTOL flying car will make an appearance. The Falcon driver-assistance system and Lingxi intelligent cockpit are both due for upgrades that will spread across more Chery models. And on energy: the global debut of AC vehicle-to-grid technology plus a new fast-charging system, built on what Chery calls an end-to-end energy chain spanning generation, storage, transmission, and use.',
    ],
    sources: ['Bitauto'],
  },
  {
    slug: 'xpeng-yoyo-robotaxi-pilot-october-2026',
    title: 'Xpeng Names Its Robotaxi “Yoyo”: Vision-Only L4 Service Begins Invite-Only Pilot',
    description:
      'Xpeng launched its Yoyo robotaxi pilot in China — a GX-based, vision-only Level 4 service with 2,200+ trial rides completed and 3,000 TOPS of onboard compute.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Named Oct 8 and booking through a WeChat mini-program, Yoyo is China’s latest answer to Tesla’s Cybercab and Waymo.',
    body: [
      'Xpeng’s robotaxi now has a name. The Chinese EV maker announced on Weibo on October 8 that its autonomous ride-hailing service will be called Xpeng Yoyo (Xiaopeng Youyou — roughly “leisurely travel”), with an invite-only pilot booking through a WeChat mini-program. More than 2,200 employee trial rides are complete, and Xpeng is expanding testing to external users in stages.',
      'The Yoyo vehicle is based on the Xpeng GX flagship three-row SUV (from 399,800 yuan in China) and is engineered for Level 4 autonomous driving. Like Tesla, Xpeng went vision-only — cameras instead of lidar or high-definition maps — running its second-generation Vision-Language-Action (VLA 2.0) model on four in-house Turing AI chips delivering 3,000 TOPS of computing power, with what Electrek describes as a six-layer redundancy architecture. Five-, six-, and seven-seat configurations are planned.',
      'The cabin experience is pure China-style ride-hailing: passengers set cabin temperature, fragrance, and music style before pickup, and the vehicle offers zero-gravity seats, massage functions, and a rear entertainment screen. Xpeng first announced robotaxi plans in November 2025, began regular road testing in January 2026, and rolled the production vehicle off the Guangzhou line in May.',
    ],
    sources: ['Paultan', 'CarNewsChina', 'Electrek', 'CnEVPost'],
  },
  {
    slug: 'range-rover-electric-bentley-torcal-luxury-evs',
    title: 'Range Rover Electric and Bentley’s First EV Arrive: Luxury’s Electric Era Is Here',
    description:
      'Range Rover Electric (542 bhp, 372-mile range, £154,070) and the 876-bhp Bentley Torcal headline October’s luxury EV wave.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Two British icons finally go electric — at 542 and 876 horsepower respectively, and six-figure prices to match.',
    body: [
      'The Range Rover Electric has arrived after what EV Powered describes as a delay of almost two years. The electric flagship lists 542 bhp, a claimed 372 miles of range, and a starting price of £154,070 (roughly $195,000).',
      'It’s joined by the Bentley Torcal — described as the Crewe manufacturer’s first EV — with up to 876 bhp and up to 375 miles of range, at an expected price around £173,000.',
      'The two launches underline how important high-priced electric models remain to legacy luxury marques, where output, range, and brand heritage are the selling points. They join a crowded 2026 luxury EV wave that includes Ferrari’s first electric car (from €550,000) and Jaguar’s $130,500 Type 01 — while affordable EVs fight it out at the other end of the market.',
    ],
    sources: ['EV Powered'],
  },
  {
    slug: 'toyota-recall-rav4-plug-in-hybrid-october-2026',
    title: 'Toyota Recalls 2026 RAV4 Plug-In Hybrids Over Software That Can Kill Power While Driving',
    description:
      'Toyota is recalling 30,978 2026 RAV4 Plug-in Hybrids in the US after a software defect that can shut down the hybrid system while driving.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A manufacturing issue in the motor-generator ECU can leave the RAV4 PHEV without motive power at higher speeds.',
    body: [
      'Toyota is recalling 30,978 units of the 2026 RAV4 Plug-in Hybrid in the US over a software defect that may cause the hybrid system to shut down while driving. Owners will receive free software updates by early December.',
      'The root cause is a manufacturing issue with the motor generator electronic control unit (MG-ECU): the motor initialization process may not complete correctly, which can prevent the electric motor from operating as intended at higher speeds. Warning lights will illuminate, and the vehicle may enter fail-safe mode or shut down entirely — a loss of motive power that raises the risk of an accident.',
      'The defect also hit Australia, where Toyota announced a recall on October 9 covering about 5,925 plug-in hybrid RAV4s (two-wheel-drive XSE and four-wheel-drive GR Sport variants) built in 2026. Australian owners will be contacted in writing to schedule a free dealer fix.',
      'If you own a 2026 RAV4 PHEV, schedule the software update as soon as Toyota notifies you — and remember that open recalls are repaired free of charge and can dent resale value until they’re closed.',
    ],
    sources: ['The Auto Channel', 'WhichCar'],
  },
  {
    slug: 'ford-recall-f150-front-seats-2025-2027',
    title: 'Ford Recalls 2025–2027 F-150s: Front Seats May Not Be Bolted Down',
    description:
      'Ford is recalling 2,276 F-150 trucks whose front passenger seat-to-body bolts may be missing or not fully seated — weakening occupant restraint in a crash.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 2,
    excerpt:
      'Seat-to-body bolts that may be missing or improperly seated — a small part with big consequences in a crash.',
    body: [
      'Ford has initiated a recall for certain 2025–2027 model year F-150 trucks over improperly secured front-row seats. Approximately 2,276 vehicles are included.',
      'The issue: front passenger seat-to-body bolts may not be fully seated — or could be missing entirely. Improper securement means the seat may not restrain its occupant properly, increasing the risk of injury during a crash.',
      'Ford says it is working on parts and will notify owners by mail to schedule a free repair. As with every recall, dealers are legally required to perform the fix at no charge.',
    ],
    sources: ['The Auto Channel', 'Dealership Guy Recall Tracker'],
  },
  {
    slug: 'ford-recall-bronco-curtain-airbags-october-2026',
    title: 'Ford Recalls 2026 Broncos: Metal Burr Could Tear Side-Curtain Airbags',
    description:
      'Ford is recalling 2,711 2026 Broncos because a metal burr on a mounting bracket can tear the right-side curtain airbag during deployment.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A burr on an airbag bracket can rip the airbag as it deploys — plus three more October Ford recalls worth knowing.',
    body: [
      'Ford is recalling 2,711 2026 Broncos after discovering that a mounting bracket on the right-side curtain airbag may have a metal burr that can tear the airbag during deployment. Dealers will increase the space between the bracket and the airbag to remove the contact condition, free of charge. Interim letters notifying owners went out September 15, with the final remedy anticipated in October 2026.',
      'The Bronco is one of several October Ford recalls. Also on the books: 11,405 2026 Rangers whose screens may lose power and fail to display the rearview camera image (remedy under development; interim letters mailed October 5); 2023–2025 Mustang Mach-E crossovers (86 units) where battery energy control module software may show an incorrect state of charge or raise the risk of a high-voltage battery fire after repeated DC fast charging — dealers will update the software free, with the final remedy anticipated in December 2026; and 7 2026 Explorers needing passenger airbag module replacements.',
      'It’s a busy recall month for Ford across the board, including the larger F-150 fuel-tank-strap campaign (223,472 trucks) and the Super Duty/Expedition headlight LED recall (41,748 vehicles). If you own a recent Ford, run your VIN through NHTSA’s free recall lookup — several of these campaigns have remedies still rolling out.',
    ],
    sources: ['Work Truck Online', 'NHTSA'],
  },
  {
    slug: 'ford-explorer-aviator-seat-switch-recall-388000',
    title: 'Ford Recalls Nearly 388,000 Explorer and Aviator SUVs Over Seats That Can Move on Their Own',
    description:
      'Ford is recalling almost 388,000 SUVs after reports that second-row power seat switches can bind or stick, causing seats to move unexpectedly while driving.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A second-row seat that moves by itself mid-drive can injure occupants or fail to protect them in a crash — and a 2025 fix didn’t hold.',
    body: [
      'Ford is recalling almost 388,000 Explorer and Lincoln Aviator SUVs after reports that second-row power seat switches can bind or stick — causing seats to move unexpectedly while the vehicle is being driven. Seats that suddenly move can injure occupants or fail to protect them properly in an accident.',
      'Troublingly, this is a repeat: some of the affected vehicles were already recalled in June 2025, when dealers replaced the switch and the decorative trim around it. After that recall, Ford received reports of both repaired cars and vehicles not originally included experiencing the same issue — which forced this wider campaign. No injuries or accidents have been reported.',
      'Dealers will replace the switch and the surrounding trim free of charge, but the remedy isn’t ready yet: it’s set for January 2027, when owners will receive letters inviting them to their nearest dealership. If your Explorer or Aviator’s second-row seat has ever moved on its own, report it to NHTSA — and keep the dealer’s number handy for January.',
    ],
    sources: ['MotorSafety.org'],
  },
  {
    slug: 'stellantis-tonale-hornet-rear-seatbelt-recall',
    title: 'Stellantis Recalls 48,777 Alfa Romeo Tonale and Dodge Hornet SUVs Over Rear Seat Belts',
    description:
      'Stellantis is recalling 48,777 2023–2026 Alfa Romeo Tonale and 2023–2025 Dodge Hornet SUVs whose rear seat belts may not work correctly in a crash.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 2,
    excerpt:
      'Rear seat belts that may not restrain properly in a crash — covering both of Stellantis’s compact crossovers.',
    body: [
      'Stellantis announced on September 8, 2026 that it is recalling 48,777 SUVs because their rear seat belts may not work correctly. The defect reduces passenger protection in a crash, raising the risk of injury for rear-seat occupants.',
      'The affected models are the 2023–2026 Alfa Romeo Tonale and the 2023–2025 Dodge Hornet — mechanically related compact crossovers that share platforms and production.',
      'Owners should watch for mailed notification and schedule the free dealer repair. As always, dealers are legally required to fix recalled vehicles at no charge.',
    ],
    sources: ['MotorSafety.org'],
  },
  {
    slug: 'october-2026-ev-deals-audi-rs-etron-gt-37500-off',
    title: 'October’s 5 Biggest EV Deals: Up to $37,500 Off an Audi RS e-tron GT',
    description:
      'The Audi RS e-tron GT leads October’s EV deals with up to $37,500 off via stacked credits; the 2027 Chevy Bolt gets 0.9% APR with no payments for 92 days.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'A $171,895 electric GT for ~$135K, and a $28,995 Chevy Bolt at 0.9% APR — October’s EV incentives are the year’s strongest.',
    body: [
      'The biggest EV incentive of October belongs to the Audi RS e-tron GT. By combining a $20,000 customer credit with an unadvertised $17,500 marketing credit, buyers can potentially save up to $37,500 on the 2026 model — which starts at a hefty $171,895 including destination. With the discounts, it costs around $135,000, and at that price you’ll struggle to match its 2.4-second 0–60 and luxury. The offer runs until November 2, 2026.',
      'The practical end of the market has its own standout: the 2027 Chevy Bolt. October offers include 0.9% APR for 36 months or 2.9% for up to 60 months — with no monthly payments for 92 days (GM Financial; excludes Pennsylvania residents) — on the $28,995 LT and $32,995 RS trims (plus $1,395 destination). GM Rewards cardmembers can stack up to 50,000 bonus points (~$500 value) through November 30. The Bolt is even a 2027 North American Utility Vehicle of the Year contender.',
      'Autoblog’s advice is worth repeating: EVs now carry some of the industry’s largest rebates, but automakers are also cutting base prices as electrics approach cost parity with gas and hybrid vehicles — so don’t jump at the first big discount. Compare the cash deal against lease and finance alternatives, and run the final number through a deal score before signing.',
    ],
    sources: ['Autoblog', 'GM Authority'],
  },
  {
    slug: 'october-2026-zero-percent-apr-deals-40-offers',
    title: '40 Zero-Percent APR Deals in October: Kia Niro EV Leads With 0% for 72 Months Plus $3,500 Cash',
    description:
      'October has 40 zero-percent APR offers (up from 35 in September): the Kia Niro EV at 0% for 72 months with $3,500 cash saves $12,532 versus a 7% loan.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'Zero-percent financing is spreading: 40 offers in October, six of them running a full 72 months.',
    body: [
      'Of the 276 finance offers scored for October 2026, 40 carry 0% APR — up from 35 in September. Six of them run 72 months, and five add a cash bonus on top. Only three rate “Elite” and 32 rate “Excellent,” so quality varies — but the trend is clearly toward cheaper borrowing.',
      'The standout: the 2026 Kia Niro EV pairs 0% APR over 72 months with $3,500 cash back on a $39,700 sticker, saving $12,532 against a 7% loan. The offer runs until November 2. New this month with 0%: the Jeep Cherokee, Mazda CX-70 PHEV and CX-90 PHEV, and the Subaru Trailseeker and Uncharted — five SUVs with zero-percent terms, all electrified.',
      'Truck buyers get less love: no truck carries 0%, the longest zero-percent truck term is 60 months, and the best 72-month truck rate is 2.99% on the Toyota Tundra. And read the fine print before celebrating any rate: four offers score below zero, meaning the manufacturer loan costs more than a 7% bank loan — three Ford models at up to 7.5% over 84 months, and the 2027 Lincoln Aviator at 7.3%.',
    ],
    sources: ['FindTheBestCarPrice'],
  },
  {
    slug: 'best-new-car-rebates-october-2026-rogue-q7',
    title: 'October Rebate Roundup: Up to $25,000 Off MSRP — Nissan Rogue and Audi Q7 Lead the SUV Discounts',
    description:
      'October discounts reach up to $25,000 off MSRP: the 2026 Nissan Rogue offers up to $4,500 off, the Audi Q7 up to $13,000 off ahead of its redesign.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'Thousands of rebates reviewed: Rogue up to $4,500 off, Q7 up to $13,000 off — some stackable with zero-percent financing.',
    body: [
      'CarsDirect reviewed thousands of rebates to find October’s largest new-car discounts — worth up to $25,000 off MSRP in the most extreme cases, and sometimes stackable with zero-percent financing. Some of these are best-ever deals, including hidden discounts you won’t see advertised.',
      'The biggest small-SUV discount: the 2026 Nissan Rogue, with up to $4,500 off — $4,500 in Customer Cash on the Platinum trim and $3,500 off other styles. It’s a national offer ending November 2.',
      'The clearance king is the 2026 Audi Q7, with the biggest discounts CarsDirect has ever seen — up to $13,000 off. There’s a $6,000 National Customer Credit on the Q7 and SQ7, plus a National Marketing Allowance worth up to $3,000 more (the Q7 55 gets the most; the entry Q7 45 has a smaller $2,500 dealer cash incentive), an extra $2,000 Regional Marketing Allowance in California, and a $2,000 loyalty discount for returning customers. Audi is clearing the decks ahead of the model’s 2027 redesign.',
      'Also worth a look: October Ford Mustang deals — a $399/month 36-month lease on the EcoBoost coupe ($1,398 due at signing), $2,500 cash back, or 5.9% APR for 60 months, all through November 2. Mustang coupe MSRPs run $34,315 to $71,070 including the $1,995 destination fee.',
    ],
    sources: ['CarsDirect', 'Ford Authority'],
  },
  {
    slug: 'park-outside-recalls-below-3-million-carfax-october-2026',
    title: 'Good News: “Park Outside” Fire-Risk Recalls Fall Below 3 Million Vehicles',
    description:
      'Carfax reports vehicles carrying urgent “park outside” fire-risk recall orders have dropped below 3 million — while its Takata “Do Not Drive” list remains long.',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Fire-risk “park outside” orders are shrinking — but millions of Takata airbag vehicles still carry Do Not Drive warnings.',
    body: [
      'Some rare good news on the recall front: the number of vehicles carrying urgent “Park Outside” recall orders — fire-risk defects so severe that automakers and NHTSA advise parking them away from any structure, including garages — has dropped below 3 million, according to updated Carfax data.',
      'Park-outside fires can occur even with the engine shut off, which is what makes these orders so serious. The decline means repairs are outpacing newly discovered defects — exactly what you want to see.',
      'Meanwhile, Carfax’s Takata airbag “Do Not Drive” list remains extensive, covering millions of older vehicles: 2001–2003 Acuras, 2000–2006 BMW 3 Series (including M3) and 2000–2003 5 Series, 2005–2015 Chrysler 300s, 2005–2015 Dodge Chargers, 2003–2010 Ram 1500s, 2005–2006 Ford GTs, 2005–2014 Mustangs, 2006–2012 Fusions, 2001–2002 Honda Accords and Civics, 2007–2016 Jeep Wranglers, 2003–2013 Mazda6s, 2002–2006 Nissan Sentras, and 2003–2004 Toyota Corollas and 2004–2005 RAV4s.',
      'The rule applies to every recall on this page: dealers are legally required to fix them at no charge. If a dealer refuses, contact your automaker directly — and run your VIN through NHTSA’s free lookup before buying any used car.',
    ],
    sources: ['Carfax', 'NHTSA'],
  },
  {
    slug: 'mama-fall-favorites-2026-awards',
    title: '2026 MAMA Fall Favorites: Kia Telluride HEV, Subaru Trailseeker, Dodge Charger Win Journalists’ Awards',
    description:
      '2026 MAMA Fall Favorites: Telluride HEV (Family), Trailseeker (Plug-In), WRX (Affordable), Charger (Performance), TRX SRT (Pickup), Navigator (Luxury).',
    date: 'October 19, 2026',
    dateISO: '2026-10-19',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Six categories, six winners — with the hybrid Telluride and electric-era Charger signaling where the market is headed.',
    body: [
      'The Midwest Automotive Media Association (MAMA) announced the winners of its annual Fall Favorites Fest, where automotive journalists test-drive the newest vehicles and vote for seasonal standouts. This year’s drivable lineup spanned Ford, Lincoln, Kia, RAM, Dodge, Subaru, Genesis, and Hyundai.',
      'The six winners: Favorite Family Vehicle — 2027 Kia Telluride HEV; Favorite Plug-In Vehicle — 2026 Subaru Trailseeker; Favorite Affordable Vehicle — 2026 Subaru WRX; Favorite Performance Vehicle — 2026 Dodge Charger (RT and Scat Pack Plus); Favorite Pick-Up Truck — 2026 RAM 1500 TRX SRT; Favorite Luxury Vehicle — 2026 Lincoln Navigator.',
      'Two wins are worth noting for what they say about the market. The Telluride — America’s favorite three-row SUV — winning Family as a hybrid (HEV) confirms that electrified family haulers are now the default pick, not the compromise. And the Charger taking Performance in its new electric/hybrid era shows muscle-car fans are warming to what comes after the V8.',
      'Also from the week’s auto news: Slate Auto opened its first-ever Experience Center on October 15 in Chicago — in a former Tesla showroom — for hands-on time with its $26,400 modular electric truck, with events coming to Boston, NorCal, and New York.',
    ],
    sources: ['The Auto Channel', 'MAMA'],
  },
  {
    slug: 'hyundai-genesis-fire-recall-october-2026',
    title: 'Hyundai Recalls 94,622 Genesis and G80 Sedans Over Fire Risk',
    description:
      'Hyundai is recalling nearly 95,000 Genesis and G80 sedans after NHTSA warned that overheating front power seat motors could cause a fire, even while parked.',
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
      'Cox Automotive: the Tesla Model Y sold over 262,000 units in 2026 — more than the next 24 best-selling EVs combined — as high gas prices push shoppers electric.',
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
      'Average new-vehicle transaction price rose a fourth straight month in Sept 2026 to $50,562 — just $52 below the Dec 2025 record, per Cox Automotive.',
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
      'NHTSA logged 32 recalls in two weeks covering 443,000 vehicles — led by 265,512 Ram ProMaster vans and 22,524 VW ID.4 EVs.',
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
  {
    slug: 'tesla-q3-2026-earnings-revenue-beat-deliveries-486532',
    title: 'Tesla Q3 Revenue Beats at $28.05B as Deliveries of 486,532 Drain Inventory — Model S and X Production Ends',
    description:
      'Tesla beat Q3 revenue estimates with $28.05B and $1.53B of positive free cash flow, delivered 486,532 vehicles, and ended Model S/X production at Fremont.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'A revenue beat and surprise cash flow — but automotive revenue slipped 3% and the Cybertruck is barely a footnote.',
    body: [
      'Tesla reported third-quarter 2026 results on October 21, beating Wall Street revenue estimates. The Austin automaker posted revenue of $28.05 billion against analysts\u2019 average estimate of $27.88 billion, per LSEG data, while free cash flow came in at $1.53 billion — a surprise versus the roughly $4.92 billion cash burn analysts expected. Adjusted net income slid 4% to $1.7 billion as heavy spending on AI and robotaxis weighed on profit, and capital expenditure totaled $4.73 billion, well below the roughly $7.5 billion Wall Street had penciled in.',
      'Deliveries rebounded to 486,532 vehicles, beating expectations of about 461,100, though they were still down about 2% from a year earlier. Deliveries outpaced production of 464,391 vehicles by more than 22,000 for a second consecutive quarter, continuing an inventory drawdown. Model 3 and Model Y made up nearly all deliveries; the Cybertruck and other models accounted for just 8,295, down from 12,364 in the second quarter. Tesla said it has now passed 10 million cumulative vehicles delivered and that the Model Y is on track to be the world\u2019s best-selling vehicle this year.',
      'The company confirmed it has stopped production of the Model S and Model X at Fremont, replacing those lines with its first large-scale Optimus humanoid robot line — a literal statement of the shift from cars to robotics. Services and other revenue — FSD subscriptions, the robotaxi business and EV charging — grew 33% and was the quarter\u2019s growth driver, while core automotive revenue fell 3% and energy storage dropped 16%. Tesla\u2019s shares fell about 3.5% in after-hours trading as Musk declined to discuss the SpaceX merger talks.',
    ],
    sources: ['Reuters', 'WSJ', 'MarketWatch'],
  },
  {
    slug: 'musk-tesla-optimus-robot-sales-outside-companies-end-2027',
    title: 'Musk: Tesla Aims to Ship Optimus Humanoid Robots to Outside Companies by End of 2027',
    description:
      'On Tesla\u2019s Q3 earnings call, Elon Musk said the company could start shipping Optimus humanoid robots to outside customers by the end of 2027.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Optimus is the real product line now — Model S and X died at Fremont to make room for robot production.',
    body: [
      'Tesla chief executive Elon Musk said on the company\u2019s third-quarter earnings call on October 21 that Tesla could be ready to start shipping its Optimus humanoid robots to outside companies by the end of next year, and that its robotaxi fleet will soon become a significant driver of revenue. The comments, reported by the Wall Street Journal, are the most concrete timeline Musk has given for Optimus as a product rather than an internal project.',
      'He was quick to temper expectations on scale. Increasing Optimus production to 20,000 units a week will take "at least a year, maybe a little longer," Musk said, because Tesla must build "an entire gigantic global supply chain" plus a very large domestic factory. The robots still need design improvements for safety and reliability — Musk said they cannot wear out after a month — and "there\u2019s still a lot of work to do" on the AI so the robot is truly useful for open-ended tasks.',
      'The push is already reshaping Tesla\u2019s physical footprint: the company stopped Model S and X production at Fremont and is converting those lines into its first large-scale Optimus line. Musk also told investors demand for Tesla\u2019s cars is growing because Full Self-Driving (Supervised) is now a key selling point, and that robotaxi usage is growing "exponentially" — though Tesla launched its two-seater Cybercab in Austin in September and has not confirmed a timeline for other cities.',
    ],
    sources: ['WSJ', 'The Times'],
  },
  {
    slug: 'tesla-cuts-2026-capex-20-billion-optimus-scale',
    title: 'Tesla Dials Back 2026 Spending to ~$20B as Musk Warns Optimus Scale-Up Takes Time',
    description:
      'Tesla cut its 2026 capital-expenditure forecast to about $20 billion from $25 billion, citing efficient capital deployment funded from operating cash flow.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Tesla is spending less, not more, even as it pivots to robots and robotaxis — and it will not touch a new $30B credit line this year.',
    body: [
      'Tesla has dialed back its full-year spending plans despite Elon Musk\u2019s vision of transforming the electric carmaker with autonomous vehicles, robotics and energy. The company said it now expects capital expenditures of around $20 billion in 2026, a reversal from earlier in the year when it raised its forecast to $25 billion, The Times reported on October 22.',
      'Chief financial officer Vaibhav Taneja said the lower forecast was "a result of managing our capital deployment efficiently" and that Tesla plans to fund spending "primarily from our cash flows from operations." Tesla has secured the option to borrow $30 billion to fuel growth but does not plan to draw on those facilities this year. Third-quarter capex came in at $4.73 billion, down from $5.79 billion in the second quarter.',
      'The pullback is notable because it comes as Musk pushes Tesla from a car manufacturer into an AI and robotics company — the same ambition that is driving the potential SpaceX merger. Musk warned investors on the earnings call that scaling Optimus humanoid robot production to 20,000 units a week will take at least a year, requiring a huge new supply chain and factory. Efficient capital deployment or not, the $5 billion spending cut signals how expensive the pivot remains.',
    ],
    sources: ['The Times', 'WSJ'],
  },
  {
    slug: 'musk-public-endorsement-spacex-tesla-merger-rattles-insiders',
    title: 'Musk\u2019s Public Endorsement of SpaceX-Tesla Merger Rattles Insiders, Could Delay Talks by Weeks',
    description:
      'Reuters reports that Musk\u2019s public enthusiasm for a $3.5T SpaceX-Tesla merger has rattled deal insiders, who fear shareholder scrutiny and SolarCity-style litigation.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'The endorsement created a "mess" for the process, one insider said — and advisers are already hired for an early-stage deal.',
    body: [
      'Elon Musk\u2019s public endorsement this week of a potential $3.5 trillion merger between SpaceX and Tesla has rattled some insiders involved in the discussions, who worry his comments could invite shareholder scrutiny and delay the process by several weeks, Reuters reported on October 22, citing a person with direct knowledge of the talks. The disclosure created a "mess" for the process, the person said, because it could raise questions about how well Tesla shareholders\u2019 interests would be represented.',
      'The concerns mirror Tesla\u2019s 2016 acquisition of SolarCity, which sparked years of litigation over Musk\u2019s role in the deal. The parties have hired advisers, but discussions are at an early stage, three sources told Reuters. SpaceX approached Tesla in recent weeks, and the companies have been discussing a range of transaction structures — including a SpaceX acquisition of Tesla or a merger under a newly formed holding company — and forms of consideration including an all-stock deal. These details had not been previously reported.',
      'In related-party transactions like this one, independent board members typically oversee the process to safeguard public shareholders. Musk, CEO of both companies, told investors Tuesday that special committees of independent directors had been formed and that he could not participate as a conflicted party. When analysts pressed him on Tesla\u2019s own earnings call Wednesday, Musk refused to engage: "I think I said everything that should be said yesterday. Tap dancing through a minefield there." Tesla, SpaceX and Musk did not respond to Reuters\u2019 requests for comment.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'tesla-proxy-december-3-annual-meeting-1-trillion-package',
    title: 'Tesla Proxy: Shareholders to Re-Elect Musk, Denholm, Straubel at December 3 Annual Meeting',
    description:
      'Tesla filed its proxy asking shareholders to re-elect Musk, Robyn Denholm and JB Straubel on December 3, with new details on the $1 trillion pay package.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'None of the $1 trillion award\u2019s 12 tranches has been earned — and the unearned shares vote in proportion to everyone else\u2019s.',
    body: [
      'Tesla filed its proxy statement with the U.S. Securities and Exchange Commission on October 19, asking shareholders to re-elect CEO Elon Musk, Chair Robyn Denholm and director JB Straubel to three-year terms at its December 3 annual meeting, Reuters reported. The filing comes nearly a year after the board granted Musk a performance award billed as a $1 trillion pay package.',
      'The proxy reports Musk\u2019s 2025 CEO Performance Award — about 423.7 million restricted shares — at a $158.4 billion total in the summary compensation table. None of the award\u2019s 12 tranches has been earned; each requires a market-capitalization milestone from $2 trillion to $8.5 trillion plus operational targets, and the unearned shares vote in proportion to all other shares. Musk exercised all 303.96 million options from his 2018 award on June 16, leaving 286.4 million restricted shares that vest in January 2028 if he stays in a leadership role.',
      'Tesla also disclosed that it spent months working directly with the SEC to pioneer a voluntary retail investor voting framework, ultimately obtaining a formal SEC no-action letter. The company\u2019s pledging policy caps borrowing secured by Musk\u2019s pledged shares at the lesser of $3.5 billion or 25% of the shares\u2019 value; Musk owns nearly 20% of Tesla, including 207.5 million pledged shares, while Vanguard Capital Management holds 5.3%.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'denza-n8-ev-1003km-range-october-26-launch-flash-charging',
    title: 'BYD Denza N8 EV Launches October 26 With 1,003 km Range and 1,500 kW Flash Charging',
    description:
      'The all-electric Denza N8 luxury SUV offers 623 miles of CLTC range, 10-to-70% charging in five minutes, and up to 1,193 hp in tri-motor form.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'A luxury SUV with more electric range than many cars carry gas range — charged in the time it takes to buy coffee.',
    body: [
      'BYD is preparing to launch the all-electric version of the Denza N8 luxury SUV on October 26, Electrek reported. The N8 has been on sale in China since 2023 as a plug-in hybrid, and the EV version promises the same electric-only driving range as the PHEV managed on a full charge and full tank of gas combined. Denza calls it "the king of large 5-seater pure electric vehicles."',
      'The headline number: 1,003 km (about 623 miles) of pure-electric range under CLTC conditions, from a massive 130.15 kWh second-generation Blade Battery, per a filing with China\u2019s Ministry of Industry and Information Technology. Powertrain choices include single-motor rear-wheel drive at 320 kW (429 hp) or 370 kW (496 hp), and a tri-motor all-wheel-drive version on BYD\u2019s e3 platform — a 270 kW front motor plus two 310 kW rear motors for a combined 890 kW, or 1,193 horsepower.',
      'Charging is the other headline. BYD\u2019s 1,500 kW Flash Charging technology takes compatible vehicles from 10% to 70% in five minutes and from 10% to 97% in nine minutes. Inside, the N8 gets a 30-inch center infotainment screen spanning much of the passenger-side dashboard and a 43-inch panoramic head-up display. The SUV measures 5,150 mm long with a 3,075 mm wheelbase — full-size luxury territory at what BYD fans expect will be an aggressive price.',
    ],
    sources: ['Electrek'],
  },
  {
    slug: 'geely-google-global-digital-cockpit-partnership',
    title: 'Geely and Google Form Global Strategic Partnership for a Digital Cockpit Ecosystem',
    description:
      'Geely Holding Group and Google will jointly develop a digital cockpit ecosystem for eligible Geely-brand models in overseas markets.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The world\u2019s biggest Chinese automaker is teaming up with Google on the software-defined cabin — everywhere except China.',
    body: [
      'Zhejiang Geely Holding Group announced on October 16 that it has entered into a global strategic partnership with Google, the two companies told MarkLines. The partners will jointly develop a digital cockpit ecosystem for eligible models under Geely Holding Group\u2019s brands in overseas markets where Google\u2019s services operate.',
      'The deal underscores how the battle for the car is shifting from engines to software. Geely\u2019s stable of brands — which includes Volvo, Polestar, Lotus and Zeekr — already leans heavily on Google\u2019s Android Automotive OS in Western markets, and a jointly developed cockpit ecosystem suggests deeper integration of navigation, voice and AI services rather than off-the-shelf infotainment.',
      'For Google, it is another beachhead in the race to own the dashboard against Apple\u2019s next-generation CarPlay and a wave of Chinese cockpit platforms. For Geely, which is aggressively expanding in Europe and the Middle East, a Google-backed digital cockpit is a way to erase the software gap with Tesla and Chinese rivals — and to make its export models feel native to markets where Google services dominate.',
    ],
    sources: ['MarkLines'],
  },
  {
    slug: 'uae-gcaa-air-taxi-certification-review-joby-archer',
    title: 'UAE Aviation Regulator Reviews Air-Taxi Certification With Joby and Archer in California',
    description:
      'The UAE\u2019s GCAA met Joby and Archer at their California facilities to review certification, airworthiness and operations for planned 2026 air-taxi launches.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'The UAE wants paying air-taxi passengers first — and the regulator is now inside the factories checking the work.',
    body: [
      'The UAE\u2019s General Civil Aviation Authority reviewed aircraft certification and airworthiness requirements with Joby Aviation and Archer Aviation during separate visits to the companies\u2019 California facilities, AviNews reported on October 16. The delegation, led by Assistant Director General for Aviation Safety Affairs Aqeel Al Zarooni with senior flight-operations and airworthiness representatives, held technical workshops covering certification, airworthiness and operational matters for each air-taxi program.',
      'Direct regulator engagement signals the UAE is moving certification and operating rules toward planned 2026 launches, ahead of most other markets. Joby signed a definitive agreement with Dubai\u2019s Roads and Transport Authority in February 2024 giving it exclusive rights to run air-taxi services in the emirate for six years, with a commercial launch targeted for 2026. Archer has partnered with the Abu Dhabi Investment Office and completed its first UAE test flight at Al Bateen Executive Airport, days after Joby\u2019s test flight in Dubai. Archer\u2019s longest piloted flight so far covered about 55 miles in 31 minutes.',
      'The GCAA has previously said air-taxi certification in the UAE would be completed in the third quarter of 2026. Joby\u2019s UAE team has said passengers will be carried only once all safety and certification requirements are met — including an Air Operator Certificate from the GCAA. With neither Joby nor Archer yet holding an FAA type certificate in the U.S., the UAE race is increasingly where the world\u2019s first scheduled eVTOL passenger service is likely to be decided.',
    ],
    sources: ['AviNews'],
  },
  {
    slug: 'europe-car-registrations-september-chinese-brands-surge',
    title: 'Europe Car Sales Rose 10.2% in September as Electrified Models Offset the Combustion Slump',
    description:
      'ACEA data show European registrations up 10.2% to 1.36M in September, with Chinese brands\u2019 share hitting 14.6% as Chery nearly tripled and BYD doubled.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Electrified cars are now 76% of European sales — and Chinese brands sell nearly one in seven new cars on the continent.',
    body: [
      'Strong demand for electrified cars helped Europe\u2019s new-car market grow in September, offsetting another sharp decline in petrol and diesel sales, the European Automobile Manufacturers\u2019 Association reported on October 22. Registrations — a proxy for sales — rose 10.2% year on year to 1.36 million vehicles across the EU, Britain and the EFTA countries, Reuters reported. In the first nine months of 2026, registrations totaled 10.555 million, up 6.3%.',
      'The powertrain shift is stark: battery-electric, plug-in hybrid and conventional hybrid registrations jumped 59.9%, 24% and 5.3% respectively, together accounting for 76.2% of all new vehicles. Petrol and diesel registrations fell 20.6% and 28.2%. BEVs alone took 30.5% of the market, up 9.5 percentage points from a year ago, while conventional hybrids remained the single most popular powertrain at about a third of sales.',
      'Chinese carmakers are the growth story. Chery nearly tripled and BYD nearly doubled sales, while Geely and SAIC grew more than 33% and 23%; the four brands\u2019 combined market share rose to 14.6% from 9.6% a year earlier. Meanwhile Volkswagen and Renault registrations declined, and the combined share of VW, Renault and Stellantis fell to 43.7% from 48.4%. Stellantis itself gained 4.5% — but the direction of travel is unmistakable.',
    ],
    sources: ['Reuters', 'ACEA', 'Electrek'],
  },
  {
    slug: 'europe-ev-september-record-tesla-model-y-model-3',
    title: 'Tesla Model Y and Model 3 Nearly Match Europe\u2019s Other Eight Best-Selling EVs Combined in Record September',
    description:
      'Dataforce figures show the Model Y at 40,971 and Model 3 at 25,057 sales in Europe\u2019s record September — together just 325 units shy of the next eight EVs combined.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Two Teslas outsold eight rivals put together in Europe\u2019s biggest EV month ever.',
    body: [
      'Tesla extended its lead in Europe\u2019s electric-vehicle market in September, according to market researcher Dataforce figures reported by Automotive News on October 21. The Model Y led with 40,971 sales, up 55% year on year, followed by the Model 3 at 25,057 — more than double its year-ago volume. Together the two Teslas totaled 66,028 registrations, just 325 fewer than the 66,353 registrations of the other eight models in the top 10 combined.',
      'The month was a record for European EVs overall. Benchmark Mineral Intelligence data put September sales at almost 600,000, up 39% year on year and 10% above the previous monthly record set in June. BEVs did most of the heavy lifting, jumping 50% versus 16% for plug-in hybrids. The UK, France, Spain, Portugal and Finland all posted their highest-ever monthly EV sales; France climbed 78% to almost 80,000 units and Germany rose 61% to 117,000.',
      'Europe\u2019s strength contrasts sharply with North America, where EV sales fell 44% in September. Through September, Europe has sold 3.9 million EVs, up 30% year on year — the region is now the global EV industry\u2019s main growth engine. Globally, 15.5 million BEVs and PHEVs sold through September, up 3%, with Europe the only major market posting a record month.',
    ],
    sources: ['Automotive News', 'Dataforce', 'Electrek', 'ElectricCarsReport'],
  },
  {
    slug: 'leapmotor-b10-first-european-built-car-zaragoza',
    title: 'Leapmotor Builds Its First European-Made Car as the B10 Rolls Off the Zaragoza Line',
    description:
      'Leapmotor\u2019s first European production vehicle, the B10, rolled off the line at its Zaragoza, Spain factory on October 16 as its EU registrations jumped 324%.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'A Chinese brand building cars in Spain — local manufacturing is the next phase of the invasion.',
    body: [
      'On October 16, the first production vehicle manufactured by Leapmotor in Europe — the B10 — rolled off the line at a factory in Zaragoza, Spain, ChinaEVHome reported on October 22. The milestone makes Leapmotor one of the first Chinese EV brands to start building cars inside Europe, a move that blunts tariff risk and the "made in China" stigma as the brand scales.',
      'The numbers behind the move are explosive. Leapmotor\u2019s European registrations reached 14,594 units in September, up 323.9% year on year, and 87,922 units in the first nine months — up 424.2%. Automotive News separately reported that Chery overtook BYD and MG in September as Chinese brands lifted their European market share to a record 14.6%, driven largely by plug-in hybrids and a summer export surge.',
      'European production is becoming a standard play in the Chinese playbook: BYD\u2019s Hungarian plant is ramping, Chery has Spanish manufacturing plans, and Leapmotor — partly owned by Stellantis — can lean on its European partner\u2019s dealer and service network. For European incumbents watching their combined market share slide to 43.7%, the message is that the Chinese wave is no longer coming from across the ocean.',
    ],
    sources: ['ChinaEVHome', 'Automotive News'],
  },
  {
    slug: 'ford-q3-earnings-preview-october-28-expectations',
    title: 'Ford Earnings Preview: Wall Street Expects $0.39 EPS and $45.7B Revenue on October 28',
    description:
      'Ford reports Q3 results October 28 with analysts expecting 39 cents a share and $45.7B in automotive revenue, after the company raised its Ford Blue EBIT guidance.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Sales fell 6.6% on discontinued models — but Wall Street thinks the margin story carries the quarter.',
    body: [
      'Ford reports third-quarter results on October 28, with the Zacks Consensus Estimate pegged at 39 cents per share and automotive revenue of $45.7 billion. The stock carries an Earnings ESP of +6.56% and a Zacks Rank #3, suggesting an above-average chance of a beat; Ford has topped earnings estimates in three of the trailing four quarters. Estimates for the quarter have moved down two cents in the past week.',
      'The quarter\u2019s backdrop is mixed. U.S. sales fell 6.6% to 509,764 vehicles, largely from the planned phase-out of the Escape and Lincoln Corsair — but Ford\u2019s strategy is about margin, not volume. Management raised its 2026 Ford Blue EBIT guidance to $5–5.5 billion from $4.5–5 billion, anticipating a favorable product mix of trucks, large SUVs, off-road models and premium trims.',
      'Support for the revenue line should come from the profit centers: F-Series trucks, Super Duty, Explorer and Expedition, plus the surging Maverick Hybrid. Stellantis also reports in this window, and GM\u2019s Q3 beat on October 20 set a high bar — October 28 will show whether Ford\u2019s portfolio cleanup is translating into the bottom line.',
    ],
    sources: ['Zacks', 'ad-hoc-news'],
  },
  {
    slug: 'ford-maverick-hybrid-q3-sales-surge-affordability',
    title: 'Ford Maverick Hybrid Sales Jumped 59.6% in Q3 as Buyers Chase Affordable Efficiency',
    description:
      'The Maverick Hybrid sold 27,793 units in Q3, up nearly 60%, as Ford kept retail incentives low and shifted focus to profitable trucks and commercial fleets.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Ford\u2019s cheapest pickup is its fastest-growing — the $4.43 gas-price era rewards small hybrids.',
    body: [
      'Ford\u2019s Maverick Hybrid was a standout of the third quarter, with sales of 27,793 pickups — up 59.6% year over year, ad-hoc-news reported on Ford\u2019s October 2 sales release. The affordable compact pickup, offered with a hybrid powertrain, is hitting the market exactly as soaring gasoline prices — a national average of $4.43 a gallon in September — push buyers toward efficiency.',
      'The broader quarter was a transition story. Ford\u2019s total Q3 sales fell 6.6% to 509,764 units, but the decline reflects the planned Escape and Corsair phase-outs rather than weak demand. Truck production rose: Super Duty output reached 110,275 units (+4.4%) and F-Series production grew 4.5% to 266,777 trucks. F-Series sales of 203,707 units kept the lead over the Chevrolet Silverado, putting Ford on track for a 50th year of truck sales leadership.',
      'Ford also reported 1.7 million active paid software subscriptions through September, up more than 40% year over year — the quieter revenue stream Detroit is betting on. Executives say the company has healthy stock going into the fourth quarter and signaled strength ahead, with incentive spending on retail sales kept deliberately low and a pullback from daily-rental fleet sales toward more profitable commercial fleets.',
    ],
    sources: ['ad-hoc-news', 'Reuters', 'Detroit Free Press'],
  },
  {
    slug: 'byd-da-han-ev-large-flagship-sedan-launch',
    title: 'BYD Launches All-New Da Han EV Large Flagship Sedan From CNY 235,900',
    description:
      'BYD launched the all-new Da Han EV, a 5.26-meter flagship electric sedan, in rear- and all-wheel-drive versions priced CNY 235,900–275,900.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'A 5.26-meter flagship for the price of a midsize American sedan — BYD keeps climbing the ladder.',
    body: [
      'BYD announced the official launch of the all-new Da Han EV on October 13, a large flagship electric sedan offered in rear-wheel-drive and all-wheel-drive versions, MarkLines reported. The three variants are priced from CNY 235,900 to CNY 275,900 — roughly $33,000 to $39,000 — aggressive pricing for the segment.',
      'The Da Han EV measures 5,256 mm long and 1,999 mm wide, putting it squarely in flagship sedan territory alongside the likes of the Mercedes-Benz EQS and BMW i7 in size, at a fraction of their price. The launch slots above BYD\u2019s existing Han in the brand\u2019s sprawling lineup and arrives just as the Denza N8 EV flagship SUV prepares its own October 26 debut.',
      'The cadence matters as much as the car. In October alone BYD has launched or previewed the Da Han EV, the Denza N8 EV with its 1,003 km range claim, and the Atto 8 flagship SUV in Paris — while September sales data show BYD nearly doubling in Europe. The company is firing on every cylinder: mass-market, premium, and now flagship luxury, in China and abroad simultaneously.',
    ],
    sources: ['MarkLines'],
  },
  {
    slug: 'lexus-tx-550h-plus-phev-discontinued-2027',
    title: 'Lexus Drops TX 550h+ Plug-In Hybrid From the 2027 Lineup, Upgrades the Rest',
    description:
      'Lexus is discontinuing the TX 550h+ plug-in hybrid for the 2027 model year in the U.S., bringing upgraded features to the rest of the TX range.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 2,
    excerpt:
      'The TX plug-in hybrid lasted three model years — Lexus is pruning the PHEV while the segment keeps growing.',
    body: [
      'Lexus announced on October 16 that it is discontinuing the 550h+ plug-in hybrid for the 2027 TX range in the United States, while bringing upgraded features to the rest of the three-row SUV lineup, MarkLines reported. The TX, launched three years ago and now in its first generation, rides on the GA-K platform shared with the Toyota Grand Highlander.',
      'The move is a rare pruning in a segment that is otherwise expanding: PHEV registrations in Europe jumped 24% in September, and plug-in hybrids remain a core part of Toyota and Lexus\u2019 electrification strategy. Lexus has not said whether the 550h+ will be replaced by a successor or simply folded as the TX\u2019s hybrid and gasoline variants carry the line.',
      'For shoppers, the change means one fewer three-row plug-in option in the luxury segment — a niche where choices remain thin. Expect Lexus to sharpen pricing and packaging on the remaining TX trims to keep the model competitive against the electrified competition flooding in from Europe, Korea and China.',
    ],
    sources: ['MarkLines'],
  },
  {
    slug: 'lynk-co-900l-phev-suv-regulatory-filing-images',
    title: 'Lynk & Co 900L Plug-In Hybrid SUV Surfaces in Regulatory Filings',
    description:
      'Filing images reveal the Lynk & Co 900L, a 5.28-meter seven-seat plug-in hybrid SUV from Geely\u2019s Lynk & Co brand.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 2,
    excerpt:
      'A 5.28-meter seven-seater: Lynk & Co is stretching its flagship line.',
    body: [
      'Lynk & Co, the Geely-owned brand, released regulatory filing images of its new 900L plug-in hybrid SUV on October 20, MarkLines reported. The 900L measures 5,280 mm long, 1,999 mm wide and 1,810 mm tall on a 3,170 mm wheelbase, with a seven-seat configuration — a stretch of the existing Lynk & Co 900 flagship.',
      'Full powertrain details have not been disclosed, but the PHEV designation continues Lynk & Co\u2019s strategy of offering electrified large vehicles in China and export markets. The brand sits alongside Geely\u2019s Zeekr and Volvo in the group\u2019s multi-brand portfolio, which is expanding aggressively in Europe and the Middle East.',
      'The 900L lands in a crowded field of big Chinese PHEVs — Jetour, Chery, WEY and BYD all launched or updated large electrified SUVs in October. With fuel prices high and European PHEV sales up 24% in September, the big seven-seat plug-in is having a moment.',
    ],
    sources: ['MarkLines'],
  },
  {
    slug: 'jetour-lvxingzhe-7-global-launch-beijing',
    title: 'Chery\u2019s Jetour Launches All-New Lvxingzhe 7 Midsize SUV Globally',
    description:
      'Jetour launched the all-new Lvxingzhe 7 midsize SUV in Beijing on October 14, in ICE and PHEV versions priced from CNY 139,900.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 2,
    excerpt:
      'Eight variants, two powertrains, and a global pitch — Jetour wants the world\u2019s midsize-SUV buyers.',
    body: [
      'Jetour, a brand under Chery Group, announced the global launch of the all-new Lvxingzhe 7 midsize SUV in Beijing on October 14, MarkLines reported. The model comes in internal-combustion and plug-in hybrid versions, with eight variants priced from CNY 139,900 to CNY 179,900 — roughly $19,600 to $25,200.',
      'Jetour has become one of Chery\u2019s most export-friendly brands, and a "global launch" framing signals the Lvxingzhe 7 is intended for the brand\u2019s growing network in the Middle East, Latin America, Southeast Asia and Russia — markets where Chinese brands are gaining fast.',
      'The October cadence from Chery keeps accelerating: the LEPAS brand\u2019s Middle East entry followed a week later, and Automotive News reported Chery overtook BYD and MG in Europe in September as Chinese brands took a record 14.6% share. The Lvxingzhe 7\u2019s aggressive pricing undercuts most Western midsize SUVs while matching them on powertrain choice.',
    ],
    sources: ['MarkLines'],
  },
  {
    slug: 'chery-lepas-l8-phev-middle-east-launch',
    title: 'Chery\u2019s Premium NEV Brand LEPAS Enters the Middle East With the L8 PHEV',
    description:
      'LEPAS, Chery Auto\u2019s premium new-energy brand, announced October 21 it will enter the Middle East with its full NEV portfolio, starting with the L8 PHEV.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 2,
    excerpt:
      'The UAE, Kuwait and Qatar get Chery\u2019s premium plug-in play first.',
    body: [
      'LEPAS, Chery Auto\u2019s premium new-energy-vehicle brand, announced on October 21 that it will officially enter the Middle East market with its full NEV product portfolio, MarkLines reported. The L8 plug-in hybrid will be introduced in the United Arab Emirates, Kuwait, Qatar and other markets.',
      'The entry builds on Chery Auto\u2019s already-established presence in the region, where Chinese brands have been winning share with well-equipped, aggressively priced SUVs. The Middle East has become a prime battleground for Chinese automakers: Dongfeng\u2019s 008 six-seater launched in the UAE in October, WEY expanded in Malaysia-adjacent markets, and Geely is pushing its hybrid lineup across the Gulf.',
      'For LEPAS, the region is a logical first proving ground for a premium brand — high purchasing power, tax-friendly EV policies in the UAE, and buyers who favor large, luxurious SUVs. How the L8 prices against established premium players will determine whether the premium-NEV label sticks.',
    ],
    sources: ['MarkLines'],
  },
  {
    slug: 'geely-monjaro-em-i-european-debut-paris-motor-show',
    title: 'Geely Monjaro EM-i Plug-In Hybrid SUV Makes European Debut at the Paris Motor Show',
    description:
      'Geely unveiled the Monjaro EM-i flagship plug-in hybrid SUV in Paris — a Kia Sorento and Skoda Kodiaq rival targeting a five-star Euro NCAP rating.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Geely\u2019s UK flagship promises millisecond-reactive AWD and a five-star safety target — pricing still to come.',
    body: [
      'Geely unveiled the Monjaro EM-i, a new flagship plug-in hybrid SUV, at the 2026 Paris Motor Show on October 12, FleetNews reported. The large SUV — a rival for the Kia Sorento and Skoda Kodiaq — is a key model for Geely Auto\u2019s UK ambitions, and managing director Michael Yang said the company had high expectations, highlighting handling, safety technology and passenger comfort.',
      'The Monjaro EM-i uses Geely\u2019s EM-i Super Hybrid system, pairing a dedicated plug-in hybrid engine with intelligent energy management. An all-wheel-drive version uses an Intelligent Electric AWD system that distributes power in milliseconds, built on the GEA Evo architecture with front- and rear-axle decoupling, torque vectoring and Continuous Damping Control suspension adjustable in as little as 20 milliseconds. Drive modes run Comfort, Standard, Sport, Pure, Hybrid, Power and Snow, with Sand and Off-road added on AWD.',
      'Safety is pitched as a headline: a high-strength body, seven airbags, Geely\u2019s Battery Safety System, a 360-degree camera with transparent-chassis view — and 21 extreme-condition safety tests, engineered toward a five-star Euro NCAP rating. Geely has not yet confirmed UK pricing, electric-only range, fuel economy or power outputs; with Chinese PHEVs now the fastest-growing powertrain segment in Europe, the numbers will matter.',
    ],
    sources: ['FleetNews'],
  },
  {
    slug: 'omoda-4-european-debut-paris-motor-show-2027-uk-launch',
    title: 'OMODA 4 Makes European Motor Show Debut at Paris Ahead of 2027 UK Launch',
    description:
      'The OMODA 4 compact SUV debuted in Paris with Cyber Mecha styling, a Super Hybrid powertrain and the brand\u2019s first Super Intelligent Cockpit.',
    date: 'October 22, 2026',
    dateISO: '2026-10-22',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Britain\u2019s best-selling-new-car brand now has a sharper, smarter compact SUV coming in 2027.',
    body: [
      'The OMODA 4 made its European motor show debut at the 2026 Paris Motor Show on October 12, OMODA&JAECOO UK announced, taking center stage at the dual brand\u2019s first-ever appearance at the event. The compact SUV arrives ahead of a UK launch in 2027, following a record-breaking September in which OMODA&JAECOO registered 22,296 vehicles in Britain — up 106% year on year — with the JAECOO 7 crowned the country\u2019s best-selling new car.',
      'First revealed at Auto China 2026 as a full hybrid with OMODA\u2019s SHS-H Super Hybrid System, the OMODA 4 is the boldest expression yet of the brand\u2019s "Cyber Mecha" design language — sharp geometric forms, multidimensional surfaces and "o-universe" lighting — with a gaming-inspired starship cockpit. It will be the first OMODA model with the Super Intelligent Cockpit, designed to understand driver intent, learn user habits and deliver increasingly personalized interactions.',
      'In the UK, the OMODA 4 joins the OMODA 5 as a compact SUV aimed at younger, technology-focused buyers. The timing is deliberate: the brand is riding the UK\u2019s EV surge — electric sales more than tripled month over month into September\u2019s plate-change — and a style-led hybrid is exactly the product that has been winning conquest buyers from legacy brands.',
    ],
    sources: ['OMODA UK'],
  },
  {
    slug: 'vw-global-ev-battery-recall-72700-id-models',
    title: 'VW Recalls 72,700 EVs Worldwide Over Faulty Battery Cells: ID.3, ID.4, ID.7, ID.Buzz and Cupra Born',
    description:
      'Volkswagen confirmed a global recall of nearly 72,700 electric cars over high-voltage battery cells that may overheat; affected owners will be capped at 80% charging until inspected.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 4,
    excerpt:
      'A supplier manufacturing defect can make individual cells overheat in rare cases — VW will limit charging to 80% by over-the-air update as a precaution.',
    body: [
      'Volkswagen has made official what leaked last week: a global recall of 72,668 electric vehicles over high-voltage battery cells that may not meet quality specifications, German trade publication electrive reported on October 21. The campaign, now registered with Germany\u2019s Federal Motor Transport Authority (KBA), covers certain batches of the VW ID.3, ID.4, ID.7 and ID.Buzz, plus the Cupra Born from VW\u2019s Spanish sub-brand — ID-family vehicles built between 2022 and 2025, and Cupra Borns from 2022 to 2024. Roughly 10,000 of the affected cars are in Germany, and a parallel action in the UK covers the ID.3, ID.4, ID.7, ID.Buzz and ID.Buzz Cargo.',
      'The root cause traces to manufacturing errors at battery suppliers, a VW spokesperson told Handelsblatt. Internal quality checks found that cells in certain production batches fall short of specifications; in rare cases, affected cells can develop increased thermal stress — and in extreme cases there is a fire risk, particularly when aggressive fast-charging profiles combine with a state of charge above 80%. The KBA said there had been no reported incidents of property damage or personal injury at the time of the announcement, making this a precautionary recall.',
      'The remedy comes in stages. As an immediate safety measure, Volkswagen will temporarily limit maximum charging to 80% via an over-the-air update where technically possible. A permanent remedy is still being developed; owners of affected vehicles will be notified by letter once it is ready. Anyone driving one of these models should charge to 80% or less starting now, watch for their notification letter, and contact VW customer service with questions about their specific vehicle.',
    ],
    sources: ['electrive.com', 'Handelsblatt', 'KBA'],
  },
  {
    slug: 'vw-id4-us-80-percent-charge-limit-ota-recall',
    title: 'VW\u2019s Fix for Fire-Risk ID.4 EVs: An Over-the-Air Update That Cuts Range by 20%',
    description:
      'Volkswagen will remotely cap affected US ID.4 batteries at 80% charge — roughly a 20% range cut — until a permanent remedy is developed; interim owner letters go out November 27.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'The 80% charge cap lands around October 27 unless owners opt out — and it can shave some ID.4s to roughly 162 miles per charge.',
    body: [
      'Volkswagen Group of America is recalling 22,524 ID.4 electric SUVs from the 2023–2026 model years after warning that a defect in the high-voltage battery pack could trigger a fire, NHTSA confirmed. The recalled vehicles, built between January 1, 2023 and February 1, 2025, may fail internally: certain charging profiles combined with charging beyond 80% can \u201Ctrigger thermal propagation internal to the high-voltage battery,\u201D a chain reaction that overheats neighboring cells, according to the NHTSA filing. VW estimates just 0.1% of the recalled vehicles actually carry the defective cell.',
      'Until engineers finish developing a permanent remedy, VW is taking an unusual step: it emailed owners saying it intends to apply a temporary vehicle setting limiting charging to 80% of maximum capacity, unless they opted out by October 21. The over-the-air update is scheduled around October 27 and will be reflected in the mobile app. The cost is real: the 20% capacity cut can bring some ID.4 versions down to roughly 162 miles per charge, CarBuzz calculated.',
      'Alex Ansley, chief of NHTSA\u2019s recall management division, said the remedy is currently under development and interim letters notifying owners of the safety risk are expected to be mailed November 27, 2026. This is already the third ID.4 fire-risk action in the US: VW recalled more than 44,000 2023–2025 ID.4s across two recalls notified to NHTSA in January 2026, following another 629-vehicle action in December 2025. The ID.4 is due to be replaced next year by a heavily facelifted model reportedly badged ID. Tiguan.',
    ],
    sources: ['Batteries International', 'NHTSA', 'Electrek', 'CarBuzz'],
  },
  {
    slug: 'india-fada-october-2026-used-car-demand-outlook',
    title: 'India\u2019s Festive Season Fuels Used-Car Boom: Sales Seen Up 12–15% as Prices Stay Flat',
    description:
      'FADA data points to a 12–15% used-car sales surge for Oct–Dec 2026, with 75.57% of dealers expecting growth — while prices stay broadly flat and new-car inventory hits 43–45 days.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Demand is projected to jump 12–15% this quarter, but swelling new-car inventory keeps used-car prices in check.',
    body: [
      'India\u2019s used-car market is heading into its strongest quarter of the year, with industry projections pointing to 12–15% year-on-year sales growth for October–December 2026, per Business Standard and Business Today reporting compiled by VahanBazaar. Organised used-car players are expected to grow even faster — 25–30% or more — as the festive season converts held-back demand.',
      'The dealer mood matches the math. In FADA\u2019s October outlook, 75.57% of dealers expect growth, 19.46% expect a flat month and only 4.98% expect a decline, with bookings already building and dealers counting on Navratri and Dussehra demand converting through the month. September set the stage: total vehicle retail hit 25.37 lakh units, up 31.82%, per FADA.',
      'Here\u2019s the buyer-friendly twist: used-car prices going into the season are broadly flat, with average tickets on one organised platform sitting around Rs. 5.5–6 lakh. The reason is supply. FADA says passenger-vehicle inventory reached 43–45 days at the end of September against a recommended 21-day benchmark — dealers holding extra new-car stock push harder with exchange offers, and every exchange feeds an older car into the used market. More choice, flat prices, and negotiable sellers: for Indian used-car buyers, this festive season is unusually buyer-friendly. The projection, though, is a forecast — not a measured result — so treat it as direction of travel.',
    ],
    sources: ['VahanBazaar', 'Business Standard', 'FADA'],
  },
  {
    slug: 'range-rover-rearview-camera-recall-94000-october-2026',
    title: 'Jaguar Land Rover Recalls 93,997 Range Rovers Over Rearview Cameras That Fail in the Rain',
    description:
      'Insufficient drain holes can trap water in the rearview camera of certain 2022–2026 Range Rovers; dealers will drill extra drain holes and replace cameras as needed.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 2,
    excerpt:
      'Water gets trapped, the camera dies, and the image never appears on the display — the fix is drilled drain holes, not just a new camera.',
    body: [
      'Jaguar Land Rover will recall 93,997 vehicles in the United States because the rearview camera image may fail to appear on the display, NHTSA said on October 23, per Reuters. The recall affects certain 2022–2026 Land Rover Range Rover vehicles.',
      'The cause is disarmingly simple: insufficient drain holes may trap water in the rearview camera and damage it. Federal safety rules require the rearview image to appear promptly when shifting into reverse — a camera killed by water ingress fails that standard and, more importantly, robs the driver of rear visibility in exactly the conditions where spotting obstacles matters.',
      'The remedy is equally mechanical. Dealers will drill additional drain holes in the underside of the tailgate trim so water can escape, and replace the camera if it is already damaged. Range Rover owners should watch for their notification letters and, if the rearview image ever goes dark, get the vehicle checked rather than driving blind.',
    ],
    sources: ['Reuters', 'NHTSA'],
  },
  {
    slug: 'tesla-stock-drops-5-percent-capex-pullback-october-2026',
    title: 'Tesla Slides 5% as $20B Capex Pullback Clouds Musk\u2019s AI and Robotics Bet',
    description:
      'Tesla cut its 2026 capital spending forecast to about $20B from more than $25B, delivering surprise free cash flow but rattling investors on the pace of AI, robotaxi and Optimus investment.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'J.P. Morgan called it mixed: the delay helps near-term cash burn but hints at slower investment in the long-term bets Tesla\u2019s valuation rides on.',
    body: [
      'Tesla shares slid about 5% in premarket trading on October 22 after the automaker lowered its 2026 capital spending forecast to roughly $20 billion from more than $25 billion, Reuters reported. The cut came after Tesla spent far less than expected on AI and robotics in the third quarter — which delivered a surprise positive free cash flow but raised questions about how fast Elon Musk\u2019s AI, robotics and autonomous-driving ambitions are being funded.',
      '\u201CInvestors are likely to come away with mixed feelings,\u201D J.P. Morgan analysts led by Rajat Gupta wrote. \u201CThe delay helps near-term cash burn but also suggests delays in investments that matter for fruition of long-term opportunities.\u201D Management commentary suggested spending will ramp back up in 2027 and 2028 as Tesla funds robotaxi, Optimus, AI compute and its Terafab chip milestones. There is a strategic read, too: the strong cash position could prove valuable as Musk explores combining Tesla with the far more capital-intensive SpaceX.',
      'The valuation math explains the market\u2019s sensitivity. Tesla shares have declined about 14% this year against a roughly 15% gain for the Nasdaq, sitting about 23% below the December 2025 record intraday high of $498.83 — yet Tesla still trades at 188.24 times forward earnings, versus 6.58 for Ford and 5.16 for GM. \u201CThe risk is Tesla now enters a period of limbo while investors await news on a potential combination with SpaceX,\u201D said AJ Bell investment director Russ Mould.',
    ],
    sources: ['Reuters', 'J.P. Morgan', 'AJ Bell'],
  },
  {
    slug: 'tesla-cybercab-dallas-november-transportation-domination',
    title: 'Tesla\u2019s Gold Cybercabs Head to Dallas in November as Musk Eyes \u2018Transportation Domination\u2019',
    description:
      'Tesla will expand its driverless Cybercab beyond Austin to Dallas next month and start selling the two-seaters to outside fleet operators by year end — chasing Waymo\u2019s commanding lead.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      '\u201CWe want to basically own transportation of any kind on Earth,\u201D said CFO Vaibhav Taneja — but Waymo is already at 500,000 autonomous rides a week.',
    body: [
      'Tesla is gearing up to take its gold-colored Cybercab robotaxi beyond Austin next month, the New York Post reported from the company\u2019s third-quarter earnings call. Executives said the futuristic two-seaters — which began carrying paying passengers in September — will deploy in Dallas in November, and that Tesla plans to begin selling Cybercabs to outside fleet operators by the end of the year.',
      'The expansion heats up a lopsided rivalry. Tesla\u2019s broader robotaxi network, which also uses Model Y SUVs, serves six metropolitan areas across Texas and Florida, including Dallas, Houston, Miami, Orlando and Tampa — but Tesla has never disclosed how many paid robotaxi trips it provides. Waymo, by contrast, operates more than 4,000 self-driving vehicles across more than a dozen US cities and, per Alphabet, surpassed 500,000 fully autonomous rides per week earlier this year, with commercial service in 15 US markets including Los Angeles, the Bay Area, Phoenix and Las Vegas.',
      'Chief financial officer Vaibhav Taneja signaled ambitions far beyond ride-hailing: \u201CWe\u2019re starting with getting people from one place to the other, but we want to basically own transportation of any kind on Earth.\u201D That pitch will be tested against real economics — fleet sales, per-mile pricing, utilization — in a market where Waymo already has scale and regulators are watching every step.',
    ],
    sources: ['New York Post'],
  },
  {
    slug: 'spacex-filing-merger-needs-musk-approval-october-2026',
    title: 'SpaceX Filing: Any Tesla Merger Needs Musk\u2019s Approval — Despite His Recusal',
    description:
      'SpaceX disclosed that a Tesla combination requires sign-off from its special committee, board and controlling shareholder — Musk himself — while insiders worry his public endorsement could delay the talks.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Musk recused himself from the talks but cannot escape the process: the filing says his approval is still required.',
    body: [
      'SpaceX said on October 22 that its potential merger with Tesla will require controlling investor Elon Musk\u2019s approval, even though he has recused himself from the talks because of conflicts of interest, Reuters reported. In a regulatory filing Thursday, SpaceX said: \u201CNo determination by our special committee has been made regarding any potential combination, and any potential combination would be subject to further approval by our special committee, our board of directors and our controlling shareholder.\u201D',
      'The disclosure follows Musk\u2019s Tuesday comments calling a union \u201Ca good idea\u201D and confirming special committees at both companies — and those very comments have created problems. Reuters reported that some insiders involved in the discussions worry Musk\u2019s public endorsement could invite shareholder scrutiny and delay the process by several weeks, with one person calling it a \u201Cmess\u201D for the process and raising questions about how well Tesla shareholders\u2019 interests would be represented. The unease echoes Tesla\u2019s 2016 SolarCity acquisition, which spawned years of litigation over Musk\u2019s role.',
      'The talks remain early. People familiar with the matter said SpaceX approached Tesla in recent weeks and the companies are weighing structures including a SpaceX acquisition of Tesla or a merger under a newly formed holding company, with an all-stock deal among the consideration options. Several Wall Street analysts see a merger as a matter of when, not if — but disagree sharply on how much Tesla shareholders should receive, and any combination would face significant regulatory hurdles.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'beta-technologies-first-faa-market-survey-certificate-evtol',
    title: 'Beta Technologies Beats Joby and Archer to a First: FAA\u2019s First-Ever eVTOL Market Survey Certificate',
    description:
      'The FAA granted Beta\u2019s ALIA A250 a first-of-its-kind certificate letting it fly potential customers on demonstration flights — a milestone the bigger names have not reached.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Not Joby, not Archer: the lesser-known Beta got the FAA\u2019s first \u201CSpecial Airworthiness Market Survey Certificate\u201D on October 21.',
    body: [
      'In a surprise to much of the industry, Beta Technologies — the lesser-known contender behind Joby and Archer in the electric air taxi race — received a first-of-its-kind \u201CSpecial Airworthiness Market Survey Certificate\u201D from the FAA on October 21, The Motley Fool reported. The certificate covers Beta\u2019s ALIA eVTOL, also known as the A250, and lets the company fly potential customers on demonstration flights so they can experience the aircraft before committing.',
      'The commercial logic is direct: a delivery company considering the A250 for cargo, or an operator weighing passenger use, can now board the actual aircraft and judge fit firsthand — turning interest into potential orders. Beta was already punching above its weight in the White House-backed eVTOL Integration Pilot Program, selected for seven of the eight projects — the most of any company, ahead of Joby\u2019s five and Archer\u2019s three.',
      'The honest caveats matter. This is not FAA type certification — the official design-approval stamp — and it does not authorize Beta to sell air taxi tickets to the public, nor its customers to fly commercially today. Still, for a company that has lost roughly half its value since its debut last fall, the certificate is a tangible regulatory first and a sales tool no rival currently holds.',
    ],
    sources: ['The Motley Fool'],
  },
  {
    slug: 'chery-lingxiao-evtol-q212-reveal-october-2026',
    title: 'Carmaker Chery Joins the Flying-Car Race With Two \u2018Lingxiao\u2019 eVTOL Aircraft',
    description:
      'Chery unveiled the two-seat Q212 eVTOL — including a full-scale uncrewed prototype flight test — at its Global Innovation Conference alongside robotaxi and battery advances.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Another automaker bets on the sky: Chery revealed a five-seat air taxi concept and a flown two-seat prototype on October 20.',
    body: [
      'Chinese automaker Chery has entered the advanced air mobility race, announcing plans to develop two passenger-carrying electric vertical-takeoff-and-landing aircraft under the Lingxiao name, Aviation Week reported. The vehicles were unveiled October 20 at Chery\u2019s Global Innovation Conference, alongside advances in driver assistance, robotaxis and batteries.',
      'The more concrete of the two is the Q212, a two-seat design for which Chery revealed a flight test of a full-scale uncrewed prototype — hardware in the air, not just renderings. The second vehicle is a five-seat air taxi aimed at the larger passenger market. Chery had previously experimented with earlier flying-car concepts, but the Lingxiao program is its most serious commitment to the category.',
      'The move puts Chery alongside a lengthening list of automakers treating the sky as the next mobility frontier — from Hyundai-backed Supernal to Stellantis\u2019 partnership with Archer. Certification, manufacturing scale and air-traffic integration remain the gating items for everyone, but Chery\u2019s manufacturing depth gives it a platform few pure-play eVTOL startups enjoy.',
    ],
    sources: ['Aviation Week'],
  },
  {
    slug: 'vertical-aerospace-valo-seating-navigation-deals',
    title: 'Vertical Aerospace\u2019s Flying Taxi Gets Seating and Navigation Deals as Certification Push Continues',
    description:
      'The UK\u2019s Vertical Aerospace signed long-term deals with Korea\u2019s ANH Structure for bespoke seating and Northrop Grumman\u2019s NG LITEF for inertial navigation on its Valo eVTOL.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Two specialist suppliers — a Korean seating firm and a German navigation maker — are now certified into the Valo program.',
    body: [
      'Bristol-based Vertical Aerospace, developer of the four-to-six-seat Valo electric flying taxi, has struck long-term agreements with two international firms as it pushes its aircraft development program forward, Business Live reported on October 19. South Korean aerospace seating specialist ANH Structure will design, develop, certify and produce a bespoke pilot and passenger seating system for Valo, while German navigation systems manufacturer NG LITEF — part of global giant Northrop Grumman — will supply the inertial reference system feeding position, attitude and heading data to flight-critical systems.',
      'Chief executive Stuart Simpson said the two companies brought \u201Cspecialist expertise and strong certification credentials,\u201D adding that their selection \u201Cadds further strength to the world-class supplier ecosystem behind Valo and supports our strategy to deliver one versatile platform across multiple cabin configurations and missions.\u201D The deals follow last month\u2019s opening of an aircraft assembly facility at Cotswold Airport.',
      'Vertical Aerospace was founded a decade ago by Ovo Energy boss Stephen Fitzpatrick and listed on the New York Stock Exchange in 2021. The Valo program is described as moving \u201Cfrom an advanced design into an aircraft supported by the people, systems and industrial capability needed for certification and production at scale\u201D — the honest milestone for a category where the step from flying prototype to certified aircraft is the hardest one.',
    ],
    sources: ['Business Live'],
  },
  {
    slug: 'icaur-v25-debut-global-brand-launch-october-2026',
    title: 'Chery\u2019s iCAUR V25 Debuts: A Boxy \u2018Future-Classic\u2019 SUV With 20+ Accessory Interfaces',
    description:
      'Unveiled October 22 at the iCAUR International User Summit, the V25 joins the V-Series with near 1:1 proportions, round headlamps and 21-inch wheels.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'A boxy \u201Call-way SUV\u201D built to look good in ten years — with reserved interfaces for owner personalization.',
    body: [
      'Chery\u2019s iCAUR brand has unveiled the V25, an all-way SUV that joins the V-Series lineup, at the 2026 iCAUR International User Summit in Wuhu, China, on October 22, GlobeNewswire reported. The V25 embodies the brand\u2019s \u201CClassic Never Fades\u201D philosophy — a future-classic design built, in iCAUR\u2019s words, to answer \u201Cwhat makes a vehicle beloved not just today, but ten years down the line?\u201D',
      'The design is unapologetically boxy: a height-to-width ratio of 0.96, close to 1:1, paired with a sharp front fascia, upright windshield and a continuous crisp waistline. Classic round LED light clusters sit alongside modern detailing — flared wheel arches, a floating C-pillar and a 21-inch wheel option. The V25 also carries more than 20 reserved ecosystem interfaces, paired with original personalized accessory kits, so owners can reconfigure the vehicle around hobbies and use cases.',
      'The V25 lands as Chery\u2019s export machine keeps expanding — OMODA, JAECOO and iCAUR are all pushing into overseas markets where boxy, retro-flavored SUVs have proven demand. Pricing and powertrain details were not disclosed at the unveiling; the brand is clearly leading with design identity first and specifications later.',
    ],
    sources: ['GlobeNewswire'],
  },
  {
    slug: 'chery-tiggo7-tiggox7-global-debut-brand-night',
    title: 'All-New Chery TIGGO7 and TIGGOX7 Make Global Debuts at CHERY Brand Night',
    description:
      'Chery unveiled the all-new TIGGO7 family SUV and the first-ever TIGGOX7 — a Family Comfort Exploration SUV — at Brand Night in Wuhu on October 21.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      '\u201CTogether. For Family\u201D — Chery debuted two family SUVs with football legends Edwin van der Sar and Peter Crouch as brand partners.',
    body: [
      'Chery held its Brand Night in Wuhu, Anhui, on October 21 under the theme \u201CTogether. For Family,\u201D with families from Ecuador, Poland, the UK, Romania, South Africa and Brazil on stage as the company gave global debuts to the all-new TIGGO7 and the first-ever TIGGOX7, PR Newswire reported. The TIGGO7 is positioned as the comfortable everyday family SUV — commutes, school runs, weekend outings — while the TIGGOX7, the first model in the new TIGGOX series, is pitched as a Family Comfort Exploration SUV blending urban practicality with capability across varied road conditions.',
      'Speaking at the event, executive vice president Guibing Zhang framed the launches as part of Chery\u2019s commitment to growing with families through technology, products and service. The evening\u2019s most unusual guests were football legends Edwin van der Sar and Peter Crouch, who joined as CHERY brand partners — a reminder that Chery is marketing itself as a global family brand, not just a Chinese exporter.',
      'The TIGGO7 and TIGGOX7 enter the most crowded segment in world motoring: the family crossover. Their differentiators will need to be proven in pricing, warranty terms and real-world reliability rather than stagecraft — Chery has not yet detailed powertrains or market rollouts for either model.',
    ],
    sources: ['PR Newswire'],
  },
  {
    slug: 'omoda-x-teaser-chery-user-summit-2026',
    title: 'OMODA X Teased: Sharp Geometric SUV Merges Sports-Car Stance With Off-Road Muscle',
    description:
      'Omoda Jaecoo teased the all-new OMODA X at the 2026 Chery International User Summit — a geometric, muscular design study sharing the stage with Super Hybrid tech.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Sports-car tension plus off-road robustness: the OMODA X sets the visual tone for the brand\u2019s next generation.',
    body: [
      'Chery Group\u2019s Omoda Jaecoo division teased the all-new OMODA X during the 2026 International User Summit, running October 18–24 in Wuhu, China, auto.rockstarmedia.com.my reported. The model\u2019s design language fuses sharp geometric lines with a sports-car silhouette and the elevated, robust structure of an off-road utility vehicle — what the brand describes as a more decisive, muscular visual identity for Omoda Jaecoo.',
      'The X shares its debut platform with Omoda Jaecoo\u2019s latest Super Hybrid (SHS-H) vehicles, including the Omoda 4 SHS-H and Omoda 7 SHS-H. The Omoda 7 introduces a dedicated 5kWh-battery hybrid architecture that media testers are putting through long-distance endurance runs across the multi-day summit — a live stress test of fuel efficiency and long-range operating parameters in front of international evaluators.',
      'The tease is strategic. The Omoda 4 and Omoda 7 have already locked in Australian market releases for the first half of 2027 after debuting at the Everything Electric exhibition in Sydney. The OMODA X signals where the design goes next — and confirms that Super Hybrid, not pure electric, is the powertrain story Chery wants the world to associate with the brand.',
    ],
    sources: ['auto.rockstarmedia.com.my', 'CarSifu'],
  },
  {
    slug: 'li-auto-i6-2026-october-28-launch',
    title: 'Li Auto\u2019s 2026 i6 Launches October 28 With 780 km of Range and a 29-Inch 6K Screen',
    description:
      'Li Auto confirmed the 2026 i6 SUV launches October 28 with six upgrades — ADB matrix headlights, a powered frunk, zero-gravity seats and a 96 kWh fast-charging battery — without CATL cells.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Six upgrades, 780 km CLTC range and a launch date five days away — the 2026 i6 is Li Auto\u2019s big Q4 play.',
    body: [
      'Li Auto has officially announced that the 2026 model of its i6 SUV is scheduled for market launch on October 28, with deliveries expected in early November, Car News China reported. The vehicle arrived at dealerships on October 11 and made its international debut at the Paris Motor Show on October 12.',
      'CEO Li Xiang highlighted six upgrades. Lighting moves to ADB matrix headlights identical to the Li Mega\u2019s, for improved brightness, width and night-driving range. Storage gains a new electric front trunk with \u201Cknock-to-open\u201D and voice control. Comfort brings dual front zero-gravity seats reclining to 150 degrees. Display is the showpiece: a 29-inch 6K panoramic front screen plus a 21-inch 4K rear entertainment screen. Range comes from a 96 kWh fast-charging battery rated at 780 km on the CLTC cycle — roughly 632 km on the stricter WLTP scale.',
      'Notably, the 2026 i6 launches without CATL batteries — a supply-chain shift worth watching in a market where CATL has long been the default. The i6 competes in China\u2019s brutal mid-size electric SUV segment against the Tesla Model Y and a wave of domestic rivals; on paper, the feature count is the argument.',
    ],
    sources: ['Car News China'],
  },
  {
    slug: 'tesla-cybertruck-cancelled-australia',
    title: 'Tesla Cybertruck Is Officially Dead for Australia',
    description:
      'Tesla Australia has confirmed it will not build the Cybertruck for the Australian market — the stainless-steel pickup stays a North American exclusive.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 2,
    excerpt:
      'No right-hand-drive Cybertruck is coming: Tesla Australia says the electric pickup won\u2019t be built for Down Under.',
    body: [
      'Tesla Cybertruck will not come to Australia. Tesla Australia has confirmed it won\u2019t build the electric pick-up truck for the Australian market, Motor1 reported on October 23 — ending years of will-they-or-won\u2019t-they speculation for right-hand-drive buyers.',
      'The decision is not entirely surprising. The Cybertruck has only ever been sold in North America, and converting the stainless-steel truck\u2019s angular body and by-wire systems for right-hand drive would be a costly program for a vehicle whose sales momentum has visibly cooled. Australia\u2019s ute market — the country\u2019s best-selling segment — will be contested by a different wave of electrified pickups instead, from the BYD Shark 6 to the Ford Ranger PHEV and the upcoming diesel plug-in hybrid Chery Stockman.',
      'For Tesla, the move is a concession of focus: with capex being cut to about $20 billion and the company\u2019s priorities shifting to robotaxis, Optimus and AI, a right-hand-drive Cybertruck program simply didn\u2019t make the list.',
    ],
    sources: ['Motor1'],
  },
  {
    slug: 'manheim-mid-october-2026-used-values',
    title: 'Used-Car Values Firm Up in Mid-October: Manheim Index at 207.4, Up 2.2% Year Over Year',
    description:
      'Cox Automotive\u2019s mid-October Manheim index rose 0.7% to 207.4 — up 2.2% from a year ago — as leaner supply slowed depreciation; used EVs slipped 0.7% on the month but remain up 6.8% yearly.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Wholesale values firmed in early October — but the cause is leaner supply, not stronger buyer demand.',
    body: [
      'Wholesale used-vehicle values firmed in early October after a September that depreciated faster than normal, Cox Automotive reported. The Manheim Used Vehicle Value Index rose 0.7% to 207.4 through mid-month and now sits 2.2% above October 2025, rebounding after the softening seen in the third quarter.',
      'The honest read from Cox\u2019s Jonathan Gregory: the year-over-year gain flatters the picture because last October was unusually weak — a low base boosting the annual figure. Non-adjusted wholesale prices still fell 2% in the first half of October, a pace the month typically brings. And the firmness comes from supply, not demand: wholesale days\u2019 supply fell from 28.7 to 28.2 days while dealer sales conversion stayed roughly flat. Leaner inventory, not stronger buying, is holding values up.',
      'The segment mix is shifting. EVs outperformed all year on demand for fuel-efficient vehicles, but so far this month non-EV values rose 0.7% while EVs slipped 0.7% — though EVs remain up 6.8% year over year as more off-lease EVs reach the market. Compact cars are up 5.6%, midsize cars turned positive, luxury has slipped slightly below last year after a strong first half, and pickups remain soft. For buyers, the message is mixed: firmer wholesale values don\u2019t mean retail prices are climbing — but the easy deals of early autumn may be thinning.',
    ],
    sources: ['Cox Automotive'],
  },
  {
    slug: 'gm-eyes-off-autonomy-escalade-iq-2028',
    title: 'GM Bets Big on Eyes-Off Autonomy: 2028 Escalade IQ First, Then Your Truck Runs Errands Alone',
    description:
      'GM unveiled an \u201Ceyes-off\u201D highway autonomy roadmap at its Forward event — debuting on the 2028 Cadillac Escalade IQ, expanding to full-size SUVs and pickups, and skipping Level 3 entirely.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      '\u201CWe\u2019re not developing L3 autonomy\u201D — GM says Level 3\u2019s human-takeover handoff is a risk, not a milestone.',
    body: [
      'General Motors used its GM Forward event in Manhattan on October 21 to lay out its boldest autonomy roadmap yet: an \u201Ceyes-off, hands-off\u201D highway driving system debuting on the 2028 Cadillac Escalade IQ EV, then expanding to its highest-selling, most profitable vehicles — full-size SUVs and light-duty pickup trucks, Reuters and The Drive reported. Unlike Super Cruise, which requires eyes on the road, the new system takes over active driving responsibility so occupants can check messages or read on approved highways.',
      'The philosophical twist: GM insists this is not Level 3. Chief product officer Sterling Anderson, a former autonomous-truck executive at Aurora, told The Drive \u201Cwe are not developing L3 autonomy\u201D — because Level 3 requires a driver to retake control on demand, and that handoff from an inattentive human back to instant control is what GM considers an undesirable, risky transition. \u201CI get annoyed every time I hear someone say L3,\u201D Anderson said at the event. The plan, in his words: jump straight past the valley of handover liability to a system that operates without constant supervision, with a future \u201CMission Mode\u201D extending to off-highway errand runs — a truck fetching groceries with nobody inside.',
      'The foundation is real: Super Cruise has logged over 1.2 billion hands-free miles across nearly 750,000 vehicles. But the caveats are too. GM won\u2019t let you sleep behind the wheel — a driver must be present and prepared to take over, with the vehicle alerting when it expects intervention. Availability will vary by market based on safety validation and local regulations, and no timetable exists for the true driverless-errand vision. Still, putting autonomy on the Silverado and Sierra roadmap — not just a luxury EV — is the clearest signal yet that GM sees self-driving as a mass-market revenue stream, not a tech demo.',
    ],
    sources: ['The Drive', 'Reuters', 'AutoGuide', 'CarBuzz'],
  },
  {
    slug: 'wards-10-best-engines-2026-all-electrified',
    title: 'Historic First: Every 2026 Wards 10 Best Engines Winner Is Electrified',
    description:
      'For the first time since 1995, not one pure-gas powertrain made the Wards 10 Best list — four EVs, four hybrids and two plug-in hybrids, from the Nissan Rogue Hybrid to the 1,250-hp Corvette ZR1X.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Even the hottest winner needs electric help: the 1,250-hp Corvette ZR1X pairs a twin-turbo V-8 with a front-axle e-motor.',
    body: [
      'WardsAuto has named its 2026 10 Best Engines & Propulsion Systems winners, and for the first time since the program began in 1995, every honoree uses some form of electrification. The list, announced October 13: four battery-electrics (Mercedes-Benz GLC 400 4Matic Electric, Rivian R2 Performance, Subaru Trailseeker, Volvo EX60 P10 AWD), four hybrids (Chevrolet Corvette ZR1X, Hyundai Palisade Hybrid, Nissan Rogue Hybrid, Porsche 911 Carrera GTS T-Hybrid) and two plug-in hybrids (BMW M5 Touring, Toyota RAV4 PHEV GR Sport).',
      'The diversity is the story. Seven of the ten are crossover utilities, joined by two sports cars and one wagon, built across five countries — and prices range from the $43,035 Nissan Rogue Hybrid to the $242,060 Corvette ZR1X, with seven of ten stickers averaging under $55,000. The most powerful winner, the 1,250-horsepower Corvette ZR1X, pairs a twin-turbocharged 5.5-liter V-8 with a 186-horsepower electric motor on the front axle. \u201CIt\u2019s hard to believe the car-buying public once considered hybrids slow and underpowered,\u201D said juror Drew Winter.',
      'The shutout was close: the only pure-gas nominees — the Corvette\u2019s 6.7-liter LS6 V8, the Dodge Charger Scat Pack\u2019s Hurricane inline-six, the Ram 1500 TRX\u2019s supercharged Hemi and others — all fell short. Electrification first appeared on the list in 2001 with the original Toyota Prius; 25 years later, juror Bob Gritzinger notes, hybrids are \u201Cno longer niche vehicles, but integral to automakers\u2019 product portfolios.\u201D',
    ],
    sources: ['WardsAuto', 'CarPro', 'Autoblog'],
  },
  {
    slug: 'chery-stockman-ute-in-depth-australia-february-2027',
    title: 'Chery Stockman: Australia Gets First Dibs on the World\u2019s First Diesel Plug-In Hybrid Ute',
    description:
      'Cars Guide\u2019s in-depth look at the 2027 Chery Stockman confirms an Australia-first February 2027 launch, Premcar ride tuning, 350kW/800Nm, 96km WLTP electric range and 3,495kg towing.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Australia before China: Chery is tuning its diesel PHEV ute with local experts Premcar and launching Down Under first in February 2027.',
    body: [
      'The 2027 Chery Stockman will launch in Australia first — before China, South Africa or South America — with the first deliveries expected in February 2027, Cars Guide reported in an in-depth look published October 23. Australia is the explicit focus: local ride-and-handling experts Premcar have been conducting the Stockman\u2019s development testing, with the first major round of feedback and adjustments already completed and the engineering team confident the launch date won\u2019t move.',
      'The powertrain is genuinely novel: a 2.5-litre turbo-diesel four-cylinder paired with an electric motor and a 34kWh lithium-iron-phosphate battery under the tub, delivering 350kW and 800Nm to all four wheels. Electric range is rated at 96km on the WLTP cycle — beating the BYD Shark 6 Performance\u2019s 80km and the Ford Ranger PHEV\u2019s 50km — with a claimed combined consumption of 1.1L/100km. It\u2019s a proper work truck too: double-wishbone front suspension with a leaf-sprung live axle on the diesel, 3,495kg braked towing (just 5kg shy of rivals), 765kg payload, front, centre and rear diff locks, and all-terrain tyres standard. A petrol PHEV version with 395kW and 1000Nm follows in the second half of 2027.',
      'The strategy is a full-frontal assault on Australia\u2019s ute establishment. The Stockman is slightly bigger than the HiLux and sized between the Ranger and full-size American trucks, and Chery is already taking pre-orders with $2,000 Bunnings vouchers and three free services for early reservations. At Chery\u2019s global HQ, a Stockman decked out in Ironman 4x4 gear was parked on the lawn for visiting media — the brand is not subtle about where it intends to play. Pricing is expected to land near the BYD Shark 6\u2019s $57,900 starting point.',
    ],
    sources: ['Cars Guide', 'CarExpert', 'TheAutoExec'],
  },
  {
    slug: 'eplane-noida-airport-vertiport-mou-india',
    title: 'India\u2019s Flying-Taxi Future Takes a Step: ePlane Partners With Noida International Airport',
    description:
      'The ePlane Company signed an MoU with Noida International Airport to co-develop vertiports, operating procedures and systems for its e200X eVTOL air taxi.',
    date: 'October 23, 2026',
    dateISO: '2026-10-23',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Vertiports before vehicles: the ePlane deal builds the airport ecosystem the aircraft will need once certified.',
    body: [
      'The ePlane Company has signed a memorandum of understanding with Noida International Airport to integrate eVTOL flight with airport operations, the company announced October 21. The partnership will co-develop vertiports, standard operating procedures and the systems needed to deploy the e200X eVTOL air taxi — a deliberately pragmatic, infrastructure-first approach.',
      'The pitch is compressing hours of Delhi-NCR road travel into minutes of zero-emission transit — for passengers and for critical medical care. Noida International Airport chairman Daniel Bircher framed the deal as part of the airport\u2019s long-term vision for \u201Cinnovative, future-ready infrastructure,\u201D calling advanced air mobility integration \u201Can important part of our commitment to seamless, multi-modal connectivity\u201D and pledging collaboration on the ground infrastructure and operational SOPs required for safe, zero-emission air transit and emergency services.',
      'The step-by-step logic is sound: when the aircraft are certified, the airport ecosystem will be ready rather than playing catch-up. But the honest timeline remains: certification, not infrastructure, is the gating item for eVTOL everywhere in the world, and the e200X\u2019s path through India\u2019s regulators is still ahead of it.',
    ],
    sources: ['Basra Press'],
  },

  {
    slug: 'ford-mustang-mach-e-trail-2027-mild-off-road',
    title: 'Ford Reveals 2027 Mustang Mach-E Trail for Mild Off-Roading',
    description:
      'Ford introduced the Mustang Mach-E Trail package on October 21, giving the electric crossover a mild off-road setup for gravel and dirt roads ahead of a Q1 2027 arrival.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'A new package for the Mustang Mach-E Select eAWD adds off-road confidence for active buyers, built in Mexico and arriving in early 2027.',
    body: [
      'Ford introduced the new 2027 Mustang Mach-E Trail on October 21, a package aimed at buyers who want mild off-road capability from their electric crossover. The company positioned it for active customers who need confidence on gravel and dirt roads rather than for hardcore trail use, and said the package will be available on the Mustang Mach-E Select eAWD.',
      'The Mustang Mach-E Trail will be built at the Cuautitlan Assembly Plant in Mexico and is scheduled to begin arriving in the first quarter of 2027. Ford has not yet published full pricing or a detailed equipment list for the package in the initial announcement, but the positioning is clear: take the existing all-wheel-drive Mach-E Select and tune it for unpaved surfaces and outdoor lifestyles.',
      'The move fits a broader industry pattern of carving smaller niches out of popular electric models. Rather than launching a separate off-road EV, Ford is extending the best-selling Mach-E line with a variant that speaks to weekend adventurers, a segment where crossovers with light trail ability have been gaining ground. For shoppers, the Trail gives a factory-backed middle ground between a standard electric crossover and a dedicated off-road SUV.',
    ],
    sources: ['MarkLines', 'Ford'],
  },
  {
    slug: 'ford-recalls-102159-f-series-analog-cluster',
    title: 'Ford Recalls 102,159 Heavy-Duty F-Series Trucks Over Faulty Analog Clusters',
    description:
      'Ford is recalling 102,159 heavy-duty trucks because faulty analog clusters can leave drivers without accurate tachometer and speedometer readings.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'The recall covers 2025-2026 Super Duty trucks plus 2026 F-150 and F-750 models with analog clusters supplied by Visteon.',
    body: [
      'Ford announced on October 19 that it is recalling 102,159 trucks in the United States over faulty analog instrument clusters. The affected vehicles are the 2025-2026 F-250 SD, F-350 SD, F-450 SD, F-550 SD and F-600, along with the 2026 F-150 and F-750 SD, according to the recall notice.',
      'The National Highway Traffic Safety Administration said the analog cluster tachometer and speedometer in the affected vehicles may not function correctly. A driver who cannot rely on the speedometer or tachometer faces a higher risk of speeding or misjudging engine speed, and in a heavy-duty work truck that risk is compounded by towing and payload duty.',
      'Owners of affected trucks should watch for a recall notification from Ford and have the cluster repaired at a dealer free of charge. As with all safety recalls, owners can also check their vehicle identification number against the NHTSA database to confirm whether their specific truck is included.',
    ],
    sources: ['MarkLines', 'NHTSA'],
  },
  {
    slug: 'toyota-recalls-over-one-million-rearview-camera',
    title: 'Toyota Recalls Over 1 Million Cars as Rearview Cameras Fail Across Toyota, Lexus and Subaru Lineups',
    description:
      'A rearview camera software fault has triggered a recall of more than one million Toyota, Lexus and Subaru vehicles from model years 2020 to 2026.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 4,
    excerpt:
      'Parking assist software will be updated free of charge, with owner letters due by December 16 and Toyota recall numbers 25TB13 and 25LB06.',
    body: [
      'Toyota is recalling more than one million vehicles in the United States because a rearview camera fault increases the risk of accidents, especially in tight parking spaces and busy areas. The recall spans model years 2020 to 2026 and covers a broad portion of the Toyota, Lexus and Subaru lineups, including the Camry Hybrid, RAV4, RAV4 Hybrid, RAV4 Prime, Prius, Prius Prime, Sienna Hybrid, Highlander, Grand Highlander, Land Cruiser and Mirai on the Toyota side, plus Lexus ES, GX, LC, LS, LX, NX, RX, RZ and TX models and the Subaru Solterra.',
      'The fix is a free software update to the parking assist system, performed at an authorized dealership. Toyota owners are told to reference recall numbers 25TB13 and 25LB06, while Subaru owners should reference WRE25. Notification letters are scheduled to be sent to affected owners by December 16, and Toyota owners can call 1-800-331-4331 for more information.',
      'Rearview camera recalls have become one of the most common safety actions in the industry because the camera is now a primary reversing aid for millions of drivers. When the image fails, the driver loses a view that federal safety standards require, and the risk falls hardest on pedestrians and children behind the vehicle. Owners who are unsure whether their car is included can check by VIN in the NHTSA recall database.',
    ],
    sources: ['NHTSA', 'Toyota'],
  },
  {
    slug: 'hyundai-genesis-seat-motor-fire-recall-94622',
    title: 'Hyundai Recalls 94,622 Genesis Sedans Over Seat Motors That Can Overheat and Catch Fire',
    description:
      'Hyundai is recalling 2015-2016 Genesis and 2017-2020 Genesis G80 sedans because a stuck power seat switch can overheat the seat motor and start a fire.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Owners are told to park outside until a repair is ready, with notification letters expected in early December.',
    body: [
      'Hyundai has told the National Highway Traffic Safety Administration that it will recall 94,622 vehicles in the United States over a fire risk linked to the front power seats. The affected models are certain 2015-2016 Hyundai Genesis sedans and 2017-2020 Genesis G80 sedans. The front power seat motors may overheat when the power seat control switch sticks, and prolonged motor operation can lead to a fire while the car is parked or driving.',
      'Until a repair is performed, owners are advised to park their vehicles outdoors and away from other vehicles or structures. A remedy is currently under development, with owner notification letters expected to be mailed in early December. Dealers are not allowed to deliver new vehicles for sale or lease until all open recalls on them have been performed, and they must complete open recalls on used, demo and rental vehicles before placing them into customer use.',
      'Seat-motor fires are a reminder that even low-voltage cabin components can become ignition sources when a switch fails in the on position. Owners who notice a seat motor running longer than normal, or a seat that keeps moving after the switch is released, should stop using the control and contact a dealer promptly.',
    ],
    sources: ['NHTSA', 'Hyundai'],
  },
  {
    slug: 'toyota-rav4-phev-30978-power-loss-recall',
    title: 'Toyota Recalls 30,978 RAV4 Plug-In Hybrids Over Software Fault That Can Cut Power at Highway Speed',
    description:
      'Toyota is recalling 30,978 model year 2026 RAV4 plug-in hybrids because a motor-control software error can remove power while driving at speed.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Dealers will update the motor-control software free of charge to fix a start-up fault in the motor generator control unit.',
    body: [
      'Toyota is recalling 30,978 model year 2026 RAV4 plug-in hybrid vehicles in the United States after identifying a software fault that can cut motive power at highway speeds. Federal recall filings describe a defect in which the motor generator electronic control unit may not complete its start-up process in some cases, so the system may not switch into a higher-speed control mode.',
      'When that happens, the vehicle can lose power at speed, or the plug-in-hybrid system can shut down entirely, depending on how the system responds. Regulators classified the action as a safety recall because a sudden loss of power at highway speed raises the chance of a crash. Dealers will update the motor-control software free of charge, as federal rules require.',
      'The recall is notable because it affects a brand-new model year vehicle and a powertrain type that Toyota sells in large numbers. For owners, the practical step is simple: schedule the software update when notified, and treat any unexpected power loss or warning lights as a reason to contact a dealer immediately rather than continuing to drive at highway speed.',
    ],
    sources: ['NHTSA', 'Toyota'],
  },
  {
    slug: 'ram-1500-recall-239131-rearview-camera',
    title: 'Stellantis Recalls 239,131 RAM 1500 Pickups Over Rearview Cameras That May Go Dark',
    description:
      'Stellantis is recalling 239,131 model year 2025-2026 RAM 1500 trucks because a radio software error can stop the rearview camera image from displaying.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A free radio software update fixes the fault, which Stellantis announced on October 20 from Auburn Hills, Michigan.',
    body: [
      'Stellantis announced on October 20 that it is recalling 239,131 model year 2025-2026 RAM 1500 pickup trucks because their rearview cameras may fail to display an image. The cause is a radio software error: when the driver shifts into reverse, the camera image may not appear on the screen, leaving the driver without the rear view that federal standards require.',
      'Without the camera image, a driver backing up could strike a pedestrian or an object, with a risk of serious injury or property damage. Dealers will update the radio software free of charge to restore the camera display. The recall adds to a busy year for RAM safety actions, after an August recall of 12,600 RAM 1500 pickups for faulty headlights and a June recall of more than 12,700 RAM 2500 heavy-duty pickups for a software error that could cause a loss of control.',
      'For a truck that is often used for work and family duty, a working rear camera matters more than it might seem: tall tailgates and long beds make the rear blind zone large. Owners should have the software update applied promptly and keep using mirrors and a spotter when reversing until the fix is confirmed.',
    ],
    sources: ['NHTSA', 'Stellantis', 'MotorSafety.org'],
  },
  {
    slug: 'jeep-grand-cherokee-suspension-recall-328381',
    title: 'Stellantis Recalls 328,381 Jeep Grand Cherokees Over Broken Suspension Parts',
    description:
      'Stellantis is recalling 328,381 Jeep Grand Cherokee models because a suspension defect can cause a loss of stability, following a federal investigation and two failed earlier recalls.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'The October 15 recall covers 2021-2023 Grand Cherokee, Grand Cherokee 4xe and Grand Cherokee L models under NHTSA number 26V562000.',
    body: [
      'Stellantis announced on October 15 that it is recalling 328,381 SUVs over a loss of stability caused by broken suspension components. The affected models are the 2022-2023 Jeep Grand Cherokee, the 2022-2023 Jeep Grand Cherokee 4xe plug-in hybrid, and the 2021-2023 Jeep Grand Cherokee L three-row SUV. The defect significantly increases the risk of a serious accident if a suspension part fails while driving.',
      'The recall follows an ongoing United States government investigation and two earlier recalls for the same issue that did not fully resolve it. The NHTSA recall number is 26V562000. Repeat recalls for the same defect are a sign that the first repair did not hold, and regulators typically watch the completion rate of the follow-up campaign closely.',
      'Owners of the affected Grand Cherokees should contact a Jeep dealer to arrange the repair and avoid ignoring suspension noises, uneven tire wear or changes in handling, all of which can be early signs of suspension trouble. As with every safety recall, the repair is performed free of charge.',
    ],
    sources: ['NHTSA', 'Stellantis', 'MotorSafety.org'],
  },
  {
    slug: 'ram-vans-power-steering-recall-266000',
    title: 'Stellantis Recalls Nearly 266,000 Ram Vans Over Potential Loss of Power Steering',
    description:
      'FCA US is recalling nearly 266,000 Ram vans because water intrusion in the system wiring harness can cause a loss of electric power steering assist.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'The Ram van recall was flagged in an October 23 industry briefing, adding to a heavy month of Stellantis safety actions.',
    body: [
      'Stellantis subsidiary FCA US is recalling nearly 266,000 Ram vans over a potential loss of electric power steering assist, according to an October 23 industry briefing citing Wards Auto. The cause is water intrusion in the power steering system wiring harness, which can interrupt the assist that makes a heavy van manageable at low speed and in parking maneuvers.',
      'A sudden loss of power steering assist does not remove steering entirely, but it sharply increases the effort needed to turn the wheel, which can surprise a driver mid-turn and raise crash risk, especially in a loaded commercial van. The recall lands in the same month as large Stellantis recalls for RAM 1500 rearview cameras and Jeep Grand Cherokee suspension parts, making October a heavy safety month for the automaker.',
      'Van owners and fleet operators should confirm whether their vehicles are included by VIN and schedule the harness repair when notified. Fleet managers in particular should treat this as a priority fix, since vans in daily commercial service accumulate exposure quickly.',
    ],
    sources: ['Wards Auto', 'FCA US'],
  },
  {
    slug: 'porsche-do-not-drive-centerlock-recall',
    title: 'Porsche Issues Do-Not-Drive Recall for 718 and 911 Models Over Centerlock Wheels',
    description:
      'Porsche has issued a recall with a do-not-drive warning for multiple 718 and 911 models fitted with centerlock wheels that could come off on the road.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Centerlock wheels can depart the vehicle while driving, so Porsche is telling affected owners not to drive their cars until repaired.',
    body: [
      'Porsche has issued another recall carrying a do-not-drive warning for multiple 718 and 911 models equipped with centerlock wheels, according to an October 23 industry briefing citing Autoblog. Centerlock wheels, which use a single central locking nut instead of five lug bolts, can depart from the vehicle while driving if the locking mechanism fails, creating an immediate danger to the driver and to other road users.',
      'A do-not-drive warning is the strongest instruction an automaker can give in a recall, and owners should take it literally: the car should stay parked until a dealer inspects and repairs the wheel assembly. Centerlock hardware is common on track-oriented Porsche models, where fast wheel changes matter, but it demands precise torque and locking procedures that leave little margin for wear or error.',
      'Affected owners should contact a Porsche dealer or Porsche roadside assistance for transport rather than driving to the dealership themselves. The recall is a reminder that performance hardware brings maintenance demands that go beyond a normal road car, and that skipping a centerlock inspection interval is not a minor oversight.',
    ],
    sources: ['Autoblog', 'Porsche'],
  },
  {
    slug: 'tesla-erases-ev-inventory-glut-stock-dips',
    title: 'Tesla Erases Its 50,000-Car EV Glut as Q3 Demand Outruns Production — Shares Dip Anyway',
    description:
      'Tesla sold more cars than it built for a second straight quarter, wiping out a 50,326-vehicle inventory glut, yet shares fell more than 3 percent after the earnings call.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Musk told investors demand is exceeding production by a significant margin, with full self-driving now the biggest driver of orders.',
    body: [
      'Tesla stock dropped 3.08 percent in trading on Thursday, October 22, closing above 374 dollars per share on NASDAQ, one day after chief executive Elon Musk addressed investors on the third-quarter earnings call. The dip came despite Musk touting a milestone: Tesla sold more electric vehicles than it produced for the second straight quarter, eliminating the 50,326-vehicle glut the company reported at the start of the year, when it produced 408,386 cars in the first quarter and sold 358,023.',
      'Musk framed the third quarter as very strong and credited the whole Tesla team, saying demand is growing rapidly and exceeding production by a significant margin. He also pointed to the rollout of the two-seat Cybercab and the expansion of Robotaxi services. For the first nine months of 2026, Tesla reported sales of 1,324,681 electric cars against production of 1,324,535 in the same period, essentially selling everything it built.',
      'Musk singled out full self-driving as the biggest driver of demand, saying there is really no competitor for FSD in any car a buyer can purchase today, and that the company is producing and delivering as many cars as it can while pushing for FSD approval in additional markets. The market reaction shows the tension in the stock: operational momentum on deliveries is real, but investors are still weighing it against valuation, competition and the long timeline for autonomy revenue.',
    ],
    sources: ['USA Today', 'Tesla'],
  },
  {
    slug: 'waymo-toronto-2028-first-canada-robotaxi',
    title: 'Waymo Plans Toronto Robotaxi Service for 2028, Its First in Canada',
    description:
      'Waymo will bring its autonomous ride-hailing service to Toronto in 2028, starting with manual mapping and working toward driverless public rides.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Toronto is the northernmost and possibly wintriest city Waymo has attempted, and it will partner with Element Fleet Management on local operations.',
    body: [
      'Alphabet self-driving unit Waymo said on October 16 that it plans to bring its autonomous ride-hailing service to Toronto in 2028, marking the company first planned deployment in Canada and its latest move beyond the United States. Waymo said it will partner with Toronto-based Element Fleet Management for fleet operations, and that it will create hundreds of jobs over time in fleet maintenance, validation driving, customer service and operations.',
      'Waymo follows the same playbook in every new city: vehicles are first driven manually to create high-definition maps of local streets, then autonomous vehicles are tested on public roads with a human safety operator on board, and only after that phase are members of the public invited to take driverless rides. The company received approval to participate in Ontario automated vehicle pilot program, which makes the Toronto work possible.',
      'Toronto is a meaningful test for the technology because it is the northernmost and possibly most wintry city Waymo has attempted, with snow, ice and freeze-thaw road conditions that stress sensors and driving software. The move fits an aggressive expansion push: two years ago Waymo operated in only three commercial markets, but today it runs robotaxi services in 15 United States cities and is testing in London and Tokyo, with Singapore and Spain also announced.',
    ],
    sources: ['Reuters', 'TechCrunch', 'Waymo'],
  },
  {
    slug: 'great-american-electric-air-race-ohio-flying-cars',
    title: 'Flying Cars Race for Real: Eight Pilots, Three BlackFly eVTOLs and a Bullseye Finish in Ohio',
    description:
      'The Great American Electric Air Race put electric flying cars through real competition on October 17 in Springfield, Ohio, with precision landings and high-speed challenges.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Brandon Goff won the precision landing contest by stopping 18 inches from dead center, and Heather Chirtea flew as the first female flying car pilot.',
    body: [
      'Flying cars stopped being a futuristic dream on October 17, when eight pioneering pilots took to the air at Springfield-Beckley Municipal Airport in Ohio for the Great American Electric Air Race. Three BlackFly vertical takeoff and landing aircraft rotated continuously between racing, recharging and demonstration flights, and spectators rarely went five minutes without a flying car overhead during a full day of electric flying car races, precision landings, high-speed challenges and aerial exhibitions.',
      'The competition opened with the Bullseye Bash, a precision landing challenge in which all eight pilots maneuvered toward a giant bullseye and tried to land as close as possible to its center. Brandon Goff took the victory with a landing just 18 inches from dead center, a result that shows flying car precision is every bit as demanding as flying car speed. Heather Chirtea, the first female flying car pilot and an aircraft owner, was among the pilots and framed the day as proof that the future of flight is happening overhead right now.',
      'Test flights began at sunrise and the competition was already underway when crowds arrived. Events like this matter because they move electric vertical flight out of promotional videos and into public, repeatable operations: recharging between heats, flying in front of families and children, and being judged on measurable skill. The remaining hurdles are certification, airspace rules and cost, but the Ohio race showed the aircraft themselves can already perform.',
    ],
    sources: ['EIN Presswire'],
  },
  {
    slug: 'archer-texas-triangle-air-taxi-midnight',
    title: 'Archer Plans Electric Air Taxi Service Across the Texas Triangle',
    description:
      'Archer Aviation plans eVTOL air taxi service across Dallas-Fort Worth, Houston and Austin using its four-passenger Midnight aircraft.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Flights would last 10 to 20 minutes, but Midnight still awaits FAA type certification and Archer gave no start date.',
    body: [
      'Archer Aviation plans to launch electric air taxi services across the Dallas-Fort Worth, Houston and Austin metropolitan areas, according to an October 23 report from Aviation International News summarized by the American Institute of Aeronautics and Astronautics. The proposed network would use Archer four-passenger Midnight eVTOL aircraft for flights lasting 10 to 20 minutes, linking the three big Texas metros with hops that would take far longer by road.',
      'The honest caveat is certification: the Midnight aircraft has yet to receive FAA type certification, and the announcement did not say when Texas air taxi services will start. That gap between announcement and operation is normal for the eVTOL industry, where aircraft, vertiports, pilot training and air traffic rules all have to mature together before paying passengers can board.',
      'The Texas Triangle is a logical early market because the three metros are large, congested and economically linked, and short intercity hops are exactly where electric air taxis promise the biggest time savings. Archer is also planning New York airport service with United Airlines and has pointed to a Los Angeles debut around the 2028 Olympics, so the Texas plan adds a third front to its launch strategy.',
    ],
    sources: ['Aviation International News', 'AIAA'],
  },
  {
    slug: 'pivotal-helix-flying-car-for-sale-190000',
    title: 'You Can Buy a Flying Car Today: Pivotal Helix Opens Reservations at About $190,000',
    description:
      'Pivotal Helix, a single-seat electric vertical takeoff aircraft, is now open for reservations, and buyers need no pilot license to fly it.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Helix falls under the FAA Part 103 ultralight category, and delivery could come less than a year after reservation.',
    body: [
      'A future with flying cars now lives in Palo Alto, California, where Pivotal has opened reservations for its Helix aircraft at a price of about 190,000 dollars, with delivery possible less than a year away. The company behind the aircraft has quietly spent more than a decade turning a radical idea into a real product, and Helix is the result: a single-seat, electric vertical takeoff and landing aircraft that a buyer can actually reserve today.',
      'Pivotal traces back to 2009, when founder Marcus Leng began developing an electric aircraft that could take off vertically without gasoline. Leng became the first person to fly the real thing in 2011 under the BlackFly name, the company moved to the Bay Area in 2014 and revealed BlackFly publicly in 2018. Leadership shifted in 2022 when Ken Karklin took over as chief executive, and under his watch the company moved from experimental flights to customer reservations and structured training.',
      'The regulatory detail that makes Helix shoppable is its classification: as a fixed-wing eVTOL it falls under the FAA Part 103 ultralight category, the same class as a hang glider, which means a buyer does not need a pilot license to fly it. That distinction, plus a price near 200,000 dollars and a delivery window under a year, makes Helix the closest thing yet to a flying car a private buyer can actually own, even if it is a single-seat recreational aircraft rather than a family car with wings.',
    ],
    sources: ['CyberGuy Report'],
  },
  {
    slug: 'gm-next-generation-ev-platform-lmr-batteries',
    title: 'GM Reveals Next-Generation EV Platform Built Around Cheaper, Denser LMR Batteries',
    description:
      'General Motors unveiled a fourth-generation EV platform using lithium manganese rich batteries that promise 20 percent more range per kilowatt-hour.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'LMR packs offer about 33 percent more energy density than LFP batteries, and GM pairs them with drive units using 40 percent fewer components.',
    body: [
      'General Motors has unveiled its next-generation electric vehicle platform, a fourth-generation architecture that aims to change future GM electric vehicles along with their batteries, motors, electronics and manufacturing processes. The platform is designed for high-volume segments, and GM says it will bring lower production costs, longer range and ultimately lower price tags for consumers, a direct answer to the affordability problem that has slowed EV adoption since the federal tax credit ended.',
      'The core of the platform is lithium manganese rich battery chemistry, an area GM has invested in heavily. LMR batteries offer up to 33 percent more energy density than lithium iron phosphate batteries, and they are lighter, smaller and cheaper to manufacture at roughly the same cost. Combined with revamped electric drive units, better aerodynamics and reduced weight, GM believes the package will deliver 20 percent more driving range per kilowatt-hour of battery capacity.',
      'The new drive units and electronics also help shed weight and size, using 40 percent fewer components than current hardware. Fewer parts means simpler assembly, fewer failure points and lower cost, all of which feed the same goal: electric vehicles that compete with gasoline cars on price without depending on subsidies. Road-going LMR vehicles are not ready yet, so the platform is a forward-looking bet, but it shows where GM thinks the next EV cost breakthrough comes from.',
    ],
    sources: ['Ford Authority', 'General Motors'],
  },
  {
    slug: 'sedans-comeback-2026-accord-camry-sales',
    title: 'Sedans Are Making a Comeback as Car Prices and Gas Costs Bite',
    description:
      'Sedan sales are rising again in 2026 as buyers look for relief from near-record new-vehicle prices and gasoline above 4 dollars a gallon.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'Honda Accord sales rose 32.7 percent in the first nine months of 2026, and compact cars cost about 9,637 dollars less than compact SUVs.',
    body: [
      'Sedans are making a comeback in the United States as buyers look for relief from expensive vehicles and gasoline. Honda Accord sales rose 32.7 percent during the first nine months of 2026 compared with the same period in 2025, according to Honda, and Toyota Camry sales rose 11.2 percent over the same period. The trend arrives as the average new-vehicle transaction price hit 50,562 dollars in September 2026, just under the all-time record of 50,614 dollars set in December 2025, according to Kelley Blue Book data via Cox Automotive.',
      'Fuel costs are doing much of the work. Regular gasoline averaged roughly 4.16 dollars per gallon from April through September 2026, compared with 3.15 dollars over the same period in 2025, based on United States Energy Information Administration monthly figures. Sedans cost less upfront and generally use less gas than the SUVs that dominate sales: the average transaction price for compact cars, including sedans and hatchbacks, was 27,977 dollars in September 2026 against 37,614 dollars for compact SUVs, a gap of 9,637 dollars.',
      'Efficiency seals the case. According to an Environmental Protection Agency vehicle trends report, model-year 2024 sedans and wagons averaged 31.7 miles per gallon, compared with 30.2 mpg for car-based SUVs and 24.7 mpg for truck-based SUVs. For a buyer facing a 50,000-dollar average new car and 4-dollar gas, the sedan math is simple: a cheaper car that sips less fuel, from nameplates that never really went away.',
    ],
    sources: ['Honda', 'Kelley Blue Book', 'Cox Automotive', 'EPA'],
  },
  {
    slug: 'gas-only-cars-below-50-percent-global-sales',
    title: 'Gas-Only Cars Fall Below Half of Global Sales for the First Time Ever',
    description:
      'Gasoline-only models took just 49 percent of global new-vehicle sales in the first half of 2026, down from 73 percent in 2021.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'High fuel prices from the Strait of Hormuz crisis pushed buyers toward hybrids and EVs, with European battery-electric sales up 52.2 percent in August.',
    body: [
      'Car buyers around the world took home 20.25 million new vehicles that run on gasoline alone between January and June 2026, according to data from research firm Mobility Global reported by Nikkei. That was 49 percent of global new-vehicle sales, down from 52 percent a year earlier and 73 percent in 2021, and the first half-year on record in which gasoline-only models held less than half the market since cars spread widely in the 1920s.',
      'The trigger was fuel prices. High oil prices from the conflict in the Middle East pushed gasoline and diesel to records in many markets, and buyers answered by choosing hybrids and electrics. Battery-electric sales in Europe, including the United Kingdom, Switzerland and Norway, rose 52.2 percent year over year in August, according to the European Automobile Manufacturers Association. In Germany, the largest car market in Europe, battery-electric sales surged 75 percent in August as gasoline reached an all-time high of 2.31 euros per liter, roughly 10 dollars per gallon, and electric sales in France more than doubled.',
      'The United States is the exception that proves the rule. Regular gasoline averaged 4.354 dollars per gallon in the week of October 5, up 1.23 dollars from a year earlier, according to the United States Energy Information Administration, but American buyers no longer get a federal tax credit for an electric car and Washington has repealed the rules that pushed automakers to sell more of them. The result is a split world: outside the United States, expensive fuel is accelerating electrification, while American buyers are mostly paying at the pump.',
    ],
    sources: ['Mobility Global', 'Nikkei', 'ACEA', 'EIA'],
  },
  {
    slug: 'aaa-2026-driving-costs-hybrids-cheapest',
    title: 'AAA 2026 Driving Costs: Hybrids Are the Cheapest Cars to Own, Beating EVs and Gas Models',
    description:
      'AAA annual Your Driving Costs study finds hybrids cheapest in every class where electric, hybrid and gas models were compared side by side.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'A hybrid medium sedan costs 10,204 dollars a year against 10,582 for gas and 13,662 for electric, with depreciation sinking the EV case.',
    body: [
      'Hybrids were the cheapest vehicles to own in all four classes where AAA lined up electric, hybrid and gas-only models side by side in its 2026 Your Driving Costs study, released on September 15. A hybrid medium sedan runs 10,204 dollars a year, against 10,582 dollars for the gas version and 13,662 dollars for the electric one, and the same order held for compact SUVs, medium SUVs and pickups. Electric vehicles came close to gas models in two of those classes and beat them in one.',
      'Where electric vehicles lost, the line that sank them was depreciation: what AAA expects the car to be worth in five years. Electric models have been losing value faster than hybrids and gas cars as prices, incentives and battery worries shift, and that expected resale hit outweighs their lower fuel and maintenance costs in the AAA math. Greg Brannon, director of automotive engineering at AAA, said comparing electric, hybrid and gas models within the same categories lets consumers better understand how total ownership costs vary by powertrain.',
      'The overall figure in the study is striking on its own: owning and running an average new vehicle costs 12,863 dollars a year, or 1,071.92 dollars a month, over five years and 75,000 miles. AAA put the prior year figure at 11,577 dollars but said its methodology changed, so the two numbers are not directly comparable. The study covers 34 top-selling models in seven categories, and this year AAA folded select electric vehicles and hybrids into them for the first time.',
    ],
    sources: ['AAA'],
  },
  {
    slug: 'used-evs-record-share-september-2026',
    title: 'Used EVs Hit a Record Share of Used-Car Sales in September as Buyers Hunt Value',
    description:
      'A record 47,862 used electric vehicles changed hands in September 2026, up 21.2 percent from a year earlier, as off-lease supply and lower prices pull buyers in.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'The average used EV listed at 36,767 dollars in September, just 2,137 dollars more than the average gas car, as the price gap keeps narrowing.',
    body: [
      'Electric vehicles may be having a rough year in the new-car market, but demand for used models is soaring. Used electric vehicles accounted for a record share of all used-vehicle sales in the United States in September, as lower prices relative to brand-new cars and a growing pool of pre-owned models returning to dealer lots helped drive demand. A record 47,862 used electric vehicles changed hands last month, up 12.3 percent from August and 21.2 percent from a year earlier, according to the Cox Automotive EV Market Monitor.',
      'The affordability equation is improving, if gradually. The average listed price of a used electric vehicle fell 1.8 percent from August to 36,767 dollars in September, still 6.2 percent, or 2,137 dollars, more than the average gas car, but the gap narrowed from 2,692 dollars a month earlier. The most popular used electric models include the Tesla Model Y, the Chevrolet Equinox EV and the Nissan Ariya, larger and more practical crossovers that American buyers gravitate toward more than smaller cars.',
      'The contrast with the new market is stark. The average new electric car carried a transaction price of 55,842 dollars in September, according to Cox, and more affordable new models like the Chevrolet Bolt and Nissan Leaf have seen lackluster sales, with 3,866 Bolts and just 634 Leafs sold in the third quarter. The influx of off-lease and trade-in electric vehicles is now making electric ownership possible for a broader group of buyers at prices far below the new-car average, which is why the used market is booming while new sales struggle.',
    ],
    sources: ['Cox Automotive', 'InsideEVs'],
  },
  {
    slug: 'ev-prices-rise-september-discounts-shrink',
    title: 'New EV Prices Rose in September as Discounts Shrank to Their Thinnest Level of the Year',
    description:
      'Kelley Blue Book says the average new EV sold for about 55,900 dollars in September, with incentives averaging just 11 percent of the transaction price.',
    date: 'October 24, 2026',
    dateISO: '2026-10-24',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Prices are still about 3 percent below a year ago thanks to cheaper models, but the deal a buyer sees this month is worse than August deal.',
    body: [
      'New electric vehicle prices ticked up in September and discounts got thinner, according to Kelley Blue Book. The average new electric vehicle in the United States sold for about 55,900 dollars, up slightly from August, as automakers pulled back incentives to their thinnest level this year. Discounts averaged 11 percent of the transaction price, the lowest this year and well down from a year earlier.',
      'The year-ago comparison needs context: that month was the last before the 7,500-dollar federal tax credit expired, so incentives then were unusually rich and this year pullback looks sharper for it. Zoomed out, the picture looks better, because the September average is about 3 percent below a year ago, which Kelley Blue Book credits to a stronger mix of cheaper models entering the market.',
      'Tesla average price climbed from August to about 54,300 dollars, only slightly above a year ago, with the Model 3 and Model Y making up nearly all of its sales. Across all new vehicles, average prices climbed for a fourth straight month. Some deals are still big: Polestar is offering up to 25,000 dollars off its 4 SUV through early November, but that is one brand push, not a market-wide trend, so buyers should check the model they actually want. October data will show whether the discount pullback continues through year end.',
    ],
    sources: ['Kelley Blue Book', 'Cox Automotive'],
  },
  {
    slug: 'audi-georgia-plant-4-billion-200000-suvs',
    title: 'Audi to Build $4 Billion Georgia Plant Producing 200,000 SUVs a Year',
    description:
      'Audi will build its first US assembly plant near Macon, Georgia — a $4 billion investment creating about 4,500 jobs and producing the Q7, Q8 and Q9 from the early 2030s.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Announced at a rally in Perry, Georgia, the plant is Audi\'s biggest bet yet on American manufacturing — and a direct answer to tariffs that cost it 1.2 billion euros last year.',
    body: [
      'President Donald Trump announced on October 24 that Audi plans to build a $4 billion assembly plant in Georgia that will produce 200,000 SUVs annually, Reuters reported from a rally in Perry, near Macon in central Georgia. Audi CEO Gernot Doellner appeared at the event and confirmed the plan: "We are planning to bring our biggest and most premium SUVs, and produce them here in Macon, Georgia. This is a long-term investment because we believe in the American market." The plant will be Volkswagen\'s premium subsidiary\'s first US assembly plant.',
      'The numbers behind the announcement are substantial. Audi said the investment will create approximately 4,500 jobs, with construction scheduled to begin next year and production starting in the early 2030s. A US official told Reuters the plant is expected to assemble the Audi Q7, Q8 and Q9 SUVs. Separately, Audi is expected to announce plans to build 25,000 vehicles in South Carolina at Volkswagen\'s Scout Motors plant under construction in Blythewood, with some of the Georgia-built vehicles also earmarked for export.',
      'The context is tariffs. Trump has pressured automakers to move production to the United States and raised tariffs on autos, steel, aluminum and parts; last year those tariffs dealt Audi a 1.2-billion-euro ($1.4 billion) blow, since it imports all of its US-market vehicles from Europe or Mexico. Audi\'s US sales are down 16% this year after falling for two consecutive years, and its sales slid 7% in the first half of 2026 as competition in China and US tariffs hit demand. Critics of the tariff strategy argue it has boosted vehicle prices and delayed some automaker investments — a tension the Georgia announcement does not resolve, since the first Georgia-built Audis are still years away.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'fawcar-italy-five-suvs-bestune-joyee',
    title: 'China\'s FAW Enters Italy With Five SUVs From 26,998 Euros',
    description:
      'FAW launched five SUVs in Milan on October 20 — three BESTUNE combustion models and two JOYEE electrified models — priced from 26,998 to 38,998 euros.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'FAW\'s Italian lineup covers every powertrain at once: gasoline, battery-electric and plug-in hybrid, priced to undercut much of the European mainstream.',
    body: [
      'Chinese state-owned automaker FAW officially entered the Italian market on October 20 with a launch event in Milan, introducing five SUVs at once with prices ranging from 26,998 to 38,998 euros, Media OutReach Newswire reported. FAW Chairman Liu Zhongchen and FAW International chairman Yang Xiaofeng attended alongside local partners, media and vehicle owners.',
      'The lineup is split into two product lines. The BESTUNE combustion range covers the compact T77 for urban commuting and family use, the larger T90 for long-distance family trips, and the sporty B70S aimed at younger buyers who value handling and design. The JOYEE new-energy range adds the S04 battery-electric SUV for city driving — with access to restricted urban zones and low running costs — and the S08 plug-in hybrid, pitched as a long-range, all-scenario family SUV that can handle mountain terrain.',
      'FAW called Italy one of Europe\'s most promising core automotive markets and said it is building a professional local sales and service network to support the launch. The move is part of a broader wave of Chinese brands entering Europe with aggressively priced lineups, and Italy — with its mix of dense cities, long intercity routes and mountain roads — is a deliberate test of whether one five-model range can cover all of it.',
    ],
    sources: ['Media OutReach Newswire'],
  },
  {
    slug: 'volvo-cuts-2500-jobs-q3-loss-373-million',
    title: 'Volvo Cars Cuts 2,500 More Jobs After a $373 Million Third-Quarter Loss',
    description:
      'Volvo Cars will cut 2,500 more jobs, mostly in Sweden, after swinging to a 3.7 billion kronor operating loss in Q3 — far worse than analysts expected.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Shares fell almost 30% as Volvo\'s loss came in five times worse than consensus — the latest blow in a year that has already seen its guidance scrapped.',
    body: [
      'Volvo Cars said on October 23 it will cut a further 2,500 jobs, mostly in Sweden, after plunging to a much bigger-than-expected third-quarter operating loss, Reuters reported. The automaker posted an operating loss of 3.7 billion Swedish kronor ($373 million) for the quarter, compared with a 5.8 billion kronor profit a year earlier — and far worse than the 724 million kronor loss analysts had expected. Shares fell almost 30% on the news.',
      'The cuts affect about 6% of Volvo\'s workforce, including around 2,000 jobs in Sweden, achieved by ending consultant contracts, natural attrition and targeted exit packages. They come on top of 3,000 job reductions announced earlier, and Volvo added a further 5 billion kronor of indirect spending and variable cost cuts to its previously announced 23 billion kronor program, with savings expected by the end of next year. CEO Hakan Samuelsson told Reuters the latest cuts should be completed by mid-2027, though he did not rule out further measures if the turnaround falls short.',
      'Volvo blamed a brutal combination: uneven demand for electric vehicles, mounting tariff pressures in the US, the removal of US consumer EV incentives, and deteriorating market conditions in China, where it now says it will prioritize margins over market share rather than engage in aggressive price competition with domestic rivals. Revenue fell to 66.9 billion kronor from 86.4 billion a year earlier, and gross margin dropped to 14.7% from 20.4%. Earlier in October the company scrapped its full-year guidance for sales volume and cash flow. "The third quarter of 2026 was very disappointing and reflects a year that has become far more challenging than originally anticipated," Samuelsson said.',
    ],
    sources: ['Reuters', 'WardsAuto'],
  },
  {
    slug: 'honda-mitsubishi-triton-pickup-asean-2028',
    title: 'Honda\'s First Ladder-Frame Pickup Will Be a Rebadged Mitsubishi Triton, Due in ASEAN in 2028',
    description:
      'Honda and Mitsubishi signed an MOU on October 22 for a Honda-badged pickup based on the Triton — Honda\'s first complementary-supply deal with Mitsubishi.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Honda sells no pickup in Southeast Asia today. Borrowing Mitsubishi\'s one-ton ladder-frame truck gets it into the region\'s hottest segment without building a platform.',
    body: [
      'Honda and Mitsubishi Motors signed a memorandum of understanding on October 22 for the development of a Honda model based on the Mitsubishi Triton pickup truck, the companies announced from Tokyo. The new Honda model is scheduled to go on sale in the ASEAN market in 2028. It is the first initiative between the two companies for complementary supply to each other\'s product lineups — one company filling a hole in the other\'s range with an existing vehicle.',
      'The logic is straightforward on both sides. Honda currently offers no pickup in ASEAN markets, where one-ton trucks are among the most popular body styles and the segment is led by the Toyota Hilux, Ford Ranger, Isuzu D-Max and the Triton itself. Developing a ladder-frame platform from scratch would cost years and billions; borrowing the Triton gets Honda into the fight quickly. For Mitsubishi, the deal means more volume and better capacity utilization at its Thailand plant, where the Triton is built. Mitsubishi sold 82,766 Triton-line units globally in 2025, down from 113,565 in 2022, so the plant has room.',
      'The deal grows out of the strategic partnership framework the two companies signed with Nissan on August 1, 2024. Honda\'s North American Ridgeline, by contrast, rides on a unibody SUV platform, so the Triton-based truck will be Honda\'s first true body-on-frame pickup of the modern era — even if it wears a Honda badge over Mitsubishi bones. No name, specifications, pricing or country-by-country availability have been announced, and Honda has not said whether the truck will reach markets beyond ASEAN. The current-generation Triton debuted globally in 2023 with a 2.4-litre turbodiesel producing up to 204 PS and 470 Nm, and reports suggest the Honda version will likely adopt Honda styling over the shared platform, much as Nissan\'s Triton-based Navara does.',
    ],
    sources: ['Honda', 'Carlist', 'Motor Illustrated'],
  },
  {
    slug: 'alef-flying-car-1000th-flight-beats-tesla',
    title: 'Alef Marks 1,000th Flying-Car Flight and Needles Tesla: "We\'ve Been Here Alone for 11 Years"',
    description:
      'Alef Aeronautics released video of its flying car prototype soaring over a Tesla Roadster and Cybertruck to mark its 1,000th logged flight.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Timed days after Tesla\'s thruster-assisted Roadster hop, Alef\'s message was blunt: a real flying car has been flying for a decade while Tesla is still hopping.',
    body: [
      'Bay Area flying-car startup Alef Aeronautics picked a pointed way to mark a milestone on October 15, releasing video showing its prototype lifting off and flying over a row of parked vehicles — including a Tesla Roadster and a Tesla Cybertruck — according to reports from Electrek and Gizmodo. The company said the clip captured its 1,000th logged flight, and CEO Jim Dukhovny used the occasion to needle the world\'s most famous electric car maker directly: "Welcome, Tesla, to the flying car race. We\'ve been here alone for 11 years."',
      'The timing was not an accident. Tesla has spent much of 2026 promoting its next-generation Roadster as a vehicle that can briefly leave the ground using cold-gas thrusters developed with SpaceX, a claim that has generated its own wave of coverage and skepticism since the October 15 unveiling in Texas. Alef\'s response, in effect, is to remind the market that an actual eVTOL company has been flying crewed and uncrewed prototypes for over a decade while Tesla is still demonstrating a car that hops.',
      'The clip travelled far beyond the usual aerospace press, picked up by outlets from Al Jazeera to Australia\'s news.com.au. That is the point of the exercise: in a crowded eVTOL field where Archer, Joby and Beta are all chasing FAA certification and commercial launch, Alef is claiming the one credential nobody else can — a decade of actual flights. Whether that history converts into a certified, sellable vehicle is still an open question, but as a piece of industry theater, the 1,000th flight did its job.',
    ],
    sources: ['Electrek', 'Gizmodo'],
  },
  {
    slug: 'waymo-madrid-2027-first-spain-robotaxi',
    title: 'Waymo to Launch Driverless Rides in Madrid in 2027, Its First Service in Spain',
    description:
      'Waymo will bring fully autonomous ride-hailing to Madrid in 2027, starting with Jaguar I-PACE vehicles driven by trained specialists before driverless operation begins.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Madrid is the next stop on Waymo\'s international map after London, Tokyo and Toronto — and the company now claims 500,000 paid rides a week.',
    body: [
      'Waymo, Alphabet\'s autonomous driving unit, plans to launch a fully autonomous ride-hailing service in Spain\'s Madrid region in 2027, its first deployment in the country, the company said on October 20. Electric Jaguar I-PACE vehicles will begin appearing on Madrid streets in the coming days, with trained specialists behind the wheel before autonomous operations begin, operating under Spanish traffic agency DGT\'s autonomous vehicle testing framework.',
      'Madrid slots into an accelerating international rollout. Waymo said it also aims to launch in London this year, Tokyo in 2027 with partners Nihon Kotsu and Go pending regulatory approval, and Toronto in 2028 with Element Fleet Management. Its fleet already operates in more than 15 US cities, completes more than 500,000 paid rides per week, and has surpassed 20 million cumulative paid rides. The company also cites safety data compiled over more than 400 million km (249 million miles) of autonomous driving showing 95% fewer crashes involving serious injury or worse compared with human drivers.',
      'Madrid is not an empty field. Spain\'s DGT issued its first national permits for autonomous vehicle testing to WeRide and Uber last month, with commercial services expected to launch in Madrid by the end of this year — meaning Waymo will arrive in a market where rivals may already be carrying passengers. Separately, reports this month said Waymo plans to quintuple its fleet from 4,000 cars today to 8,000 by the end of this year and 20,000 by the end of next year, funded by a $5 billion loan raised earlier in October from lenders including PIMCO, Blackstone and Sixth Street.',
    ],
    sources: ['Reuters', 'Semafor'],
  },
  {
    slug: 'tesla-capex-cut-20-billion-shares-slip',
    title: 'Tesla Cuts 2026 Spending Forecast to About $20 Billion and Shares Slip',
    description:
      'Tesla lowered its 2026 capital spending forecast from more than $25 billion to about $20 billion, raising questions about the pace of its AI and robotics push.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'The cut produced a surprise positive free cash flow — but for a stock priced on Cybercab and Optimus, investors read smaller spending as slower growth.',
    body: [
      'Tesla shares fell on October 22 after the EV maker cut its capital spending forecast, raising concerns among investors counting on heavy investment for Elon Musk\'s AI and robotics vision, Reuters reported. The company on October 21 lowered its 2026 capital spending forecast to about $20 billion from more than $25 billion, after spending far less than expected on AI and robotics in the third quarter — a shortfall that produced a surprise positive free cash flow.',
      'The tension is the classic one for Tesla. Investors welcome a larger budget if they can see returns, but a smaller one hints at slowing growth, said Josh Gilbert, lead analyst at eToro. "For a stock priced on Cybercab and Optimus, that (capex forecast cut) explains why the shares went nowhere on a result that beat on most measures." Tesla did not break down which areas would see spending cuts, with leadership attributing the adjustment to managing capital deployment efficiently. The strong cash position may prove valuable as Musk explores combining Tesla with the far more capital-intensive SpaceX, where special committees at both companies are now studying a potential merger.',
      'The market context is unforgiving. Tesla shares have declined about 14% this year, against a roughly 15% gain for the Nasdaq, and sit about 23% below the record intraday high of $498.83 reached in December. Yet the valuation remains far above peers: Tesla traded at 188.24 times forward earnings estimates, compared with 6.58 for Ford and 5.16 for General Motors. One caution from analysts: Tesla may now enter a period of limbo while investors await news on a potential SpaceX combination, which could face significant regulatory hurdles.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'tesla-proxy-re-elect-musk-denholm-straubel-december',
    title: 'Tesla Asks Shareholders to Re-Elect Musk, Denholm and Straubel at December 3 Meeting',
    description:
      'Tesla\'s proxy statement asks shareholders to re-elect Elon Musk, chair Robyn Denholm and director JB Straubel to three-year terms at the December 3 annual meeting.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'The filing also lays bare the $1 trillion pay package: none of its 12 tranches has been earned, and the unearned shares vote in proportion to all other shares.',
    body: [
      'Tesla filed its proxy statement with the US Securities and Exchange Commission on October 19 asking shareholders to re-elect CEO Elon Musk, chair Robyn Denholm and director JB Straubel to three-year terms at its December 3 annual meeting, Reuters reported. The filing comes nearly a year after the board granted Musk a performance award billed as a $1 trillion pay package.',
      'The proxy puts hard numbers on that award. Musk\'s 2025 CEO Performance Award of about 423.7 million restricted shares is reported at a $158.4 billion total in the summary compensation table — but none of the award\'s 12 tranches has been earned. Each tranche requires a market-capitalization milestone from $2 trillion to $8.5 trillion plus operational targets, and the unearned shares vote in proportion to all other shares. Musk exercised all 303.96 million options from his 2018 award on June 16, leaving 286.4 million restricted shares that vest in January 2028 if he stays in a leadership role.',
      'Two governance details stand out. Tesla revealed it spent months working directly with the SEC to pioneer a voluntary retail investor voting framework, ultimately obtaining a formal SEC no-action letter. And the company\'s pledging policy caps borrowing secured by Musk\'s pledged shares at the lesser of $3.5 billion or 25% of the shares\' value. Musk owns nearly 20% of Tesla, including 207.5 million pledged shares, while Vanguard holds 5.3%. The December vote will be the first formal shareholder verdict on this board lineup since the pay package was granted.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'volvo-ex30-head-restraint-recall-9872',
    title: 'Volvo Recalls 9,872 EX30 EVs Over Head Restraints That Could Detach in a Crash',
    description:
      'Volvo is recalling the 2025-2026 EX30 and 2026 EX30 Cross Country because a head restraint cushion may detach in a severe crash, raising injury risk.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Insufficient fastening is the culprit: 8,770 EX30s and 1,102 EX30 Cross Country models are affected, with owner letters starting November 30.',
    body: [
      'Volvo is recalling nearly 10,000 electric vehicles because a head restraint cushion may detach in a severe crash, increasing the risk of injury, according to a recall report published on the National Highway Traffic Safety Administration website on October 9 and covered by USA Today on October 20. The recall affects 9,872 vehicles: 8,770 EX30 models and 1,102 EX30 Cross Country models.',
      'The affected models are the 2025-2026 Volvo EX30 and the 2026 Volvo EX30 Cross Country. The defect involves insufficient fastening of the head restraint cushion, which Volvo said could detach under certain circumstances, including a high-speed crash involving impacts from multiple directions. Volvo has not received any reports of injuries or fatalities related to the issue, according to the report.',
      'Owner notification letters are scheduled to begin November 30, sent in phases, and vehicle identification numbers became searchable on NHTSA\'s recall website on October 9. Owners can check their VIN now rather than waiting for a letter — a head restraint that stays put in a crash is not a component worth gambling on, and the fix is handled through Volvo dealers.',
    ],
    sources: ['NHTSA', 'USA Today'],
  },
  {
    slug: 'ram-2500-steering-column-recall-8329',
    title: 'Ram Recalls 8,329 Heavy-Duty Pickups Over Steering Modules That Can Kill Stability Control',
    description:
      'FCA is recalling certain 2026 Ram 2500 trucks whose steering column control modules can cause a loss of electronic stability control with no warning.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'There is no warning before failure: once the module resets, the stability-control light comes on — and the safety system is already gone.',
    body: [
      'FCA US is recalling more than 8,000 pickup trucks because of a concern that could increase the risk of a driver crashing, according to an October 6 recall notice from the National Highway Traffic Safety Administration covered by USA Today on October 20. The recall potentially affects 8,329 vehicles, all of them 2026 Ram 2500 pickup trucks.',
      'The problem is in the steering column control module, which can cause a loss of electronic stability control. According to the safety recall report, there is no warning prior to failure: once the module resets, the electronic stability control light illuminates in the instrument panel cluster — by which point the system is already offline. Stability control is the system that keeps a heavy truck composed in an emergency swerve or on a slick surface, so losing it silently is a serious defect.',
      'The remedy is a free replacement of the steering column control module at a dealership. Owner notification letters will be sent out on November 24, and FCA US can be reached at 800-853-1403 for recall number 90D. Owners who see the stability-control warning light should not assume it is a glitch — get the truck to a dealer promptly.',
    ],
    sources: ['NHTSA', 'USA Today'],
  },
  {
    slug: 'volkswagen-low-cost-evs-150000-orders',
    title: 'Volkswagen\'s Cheap EVs Rack Up Nearly 150,000 Orders as Buyers Flock to Small Electric Cars',
    description:
      'Volkswagen\'s Electric Urban Car Family — the ID. Polo, ID. Cross, Cupra Raval and Skoda Epiq — has drawn nearly 150,000 orders since production began in June.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'One in five Volkswagen Group cars delivered in Europe last quarter was all-electric, and in Germany pure-EV orders now exceed combustion orders.',
    body: [
      'Volkswagen\'s bet on low-cost electric cars is paying off — at least in Europe. The Group\'s Electric Urban Car Family has already received nearly 150,000 orders after series production began in June, Electrek reported, citing Volkswagen sales boss Martin Sander. The lineup currently includes the Volkswagen ID. Polo and ID. Cross, plus the Cupra Raval and Skoda Epiq, all sharing the same underpinnings.',
      'The numbers behind the rush are striking. Volkswagen said one in five models it delivered in Europe in the third quarter was all-electric, with the EV share of the order book up to around 40%. The Group delivered 209,100 EVs in Europe in the third quarter, up 20% from Q3 2025, while EV orders were up 60% year over year. Through September, it delivered 586,100 all-electric vehicles in Europe, up 12% from the same period in 2025. In Germany, orders for pure electric cars now exceed those of internal combustion vehicles.',
      'Price is the weapon. The VW ID. Polo Trend with the 37 kWh battery starts at just 24,995 euros (about $29,000) with a WLTP range of 334 km (207 miles), and the ID. Cross — the electric counterpart to VW\'s best-selling T-Cross — starts at 27,995 euros (about $32,000) in Germany. Sander credited the rush to a combination of high fuel prices and the new entry-level lineup. The lesson for the rest of the industry is blunt: in a market without subsidies, the EV that sells is the one ordinary buyers can actually afford.',
    ],
    sources: ['Electrek', 'Volkswagen'],
  },
  {
    slug: 'byd-tang-ev-690-hp-dual-screens',
    title: 'BYD\'s New Tang EV Packs 690 Horsepower and Dual 30-Inch Screens',
    description:
      'BYD\'s new five-seat Tang EV flagship was revealed in a regulatory filing with dual motors making a combined 690 horsepower and a screen-dominated cabin.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The tech-savvy flagship pairs supercar-adjacent power with an interior built around two enormous displays.',
    body: [
      'BYD\'s new Tang EV, its "tech-savvy" flagship five-seat SUV, was revealed in a regulatory filing, Electrek reported. Dual electric motors deliver a combined 690 horsepower, putting the family SUV in performance territory that would have been supercar-exclusive a decade ago.',
      'The interior is arguably even more striking than the powertrain. The filing shows a cabin dominated by dual 30-inch screens, continuing BYD\'s push to make its flagships feel like rolling technology showcases rather than conventional SUVs. The Tang has long been BYD\'s upmarket family hauler, and this generation leans hard into that role with size, power and screen real estate as the selling points.',
      'The reveal matters beyond one model. BYD is now the world\'s largest EV maker by volume, and its flagship cadence sets the pace for Chinese rivals and Western incumbents alike. A 690-horsepower family SUV with a dual-screen cabin is a statement about where the mainstream ceiling now sits — and about how fast Chinese EV hardware is moving while Western brands wrestle with tariffs and incentive cuts.',
    ],
    sources: ['Electrek'],
  },
  {
    slug: 'arizona-first-nevi-fast-chargers-open',
    title: 'Arizona\'s First NEVI Fast Chargers Are Finally Open Along I-10, I-19 and I-8',
    description:
      'Arizona\'s first three NEVI-funded DC fast-charging stations are online, giving EV drivers new places to plug in along three interstate corridors.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Years into the federal charging program, Arizona drivers finally have NEVI stations on the ground — on the state\'s busiest highway corridors.',
    body: [
      'Arizona\'s first three NEVI-funded DC fast-charging stations are finally online, Electrek reported, giving EV drivers more places to plug in along I-10, I-19 and I-8. The stations are part of the National Electric Vehicle Infrastructure program, the federal effort to build a reliable fast-charging backbone along US highways.',
      'The locations matter as much as the chargers. I-10 is Arizona\'s main east-west artery, carrying traffic between Phoenix, Tucson and California; I-19 runs south to the Mexican border at Nogales; and I-8 connects the Phoenix area to San Diego. For EV drivers, a fast charger on each of these corridors removes one more reason to hesitate about a long-distance trip — and for the state, it closes a gap that has persisted years into the NEVI program.',
      'The slow rollout of NEVI stations has been a running frustration for EV advocates, with states moving at very different speeds. Arizona\'s first three stations are a modest start, but they are the kind of infrastructure that compounds: each new corridor charger makes the whole network more useful, and each one makes the next EV purchase a little easier to justify.',
    ],
    sources: ['Electrek'],
  },
  {
    slug: 'october-cash-back-deals-audi-20000-vw-id4',
    title: 'October\'s Biggest Cash-Back Deals: $20,000 Off Audi\'s Electric Flagships, 27.7% Off the VW ID.4',
    description:
      'Deal trackers count 138 vehicles carrying cash incentives in October, led by $20,000 on the Audi RS e-tron GT and e-tron GT and $12,500 on the VW ID.4.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'The headline cash figure is $20,000 — but judged as a share of sticker, the VW ID.4\'s $12,500 is the month\'s best deal at 27.7% off.',
    body: [
      'October\'s cash-incentive leaderboard is topped by Audi\'s electric flagships. The Audi RS e-tron GT and e-tron GT share the largest cash figure at $20,000 each, according to deal trackers, with 138 vehicles carrying a cash incentive this month worth $463,750 in total. On a $170,500 sticker the RS e-tron GT\'s $20,000 is 11.7%; on the cheaper $127,700 e-tron GT it is worth 15.7% — same money, smaller price, better deal.',
      'Judged as a share of sticker, the month\'s best deal is the Volkswagen ID.4: $12,500 off a $45,095 SUV, or 27.7% of the price, offered as cash only with no low-rate loan attached. The Audi A8 and S8 each carry $15,000, the Infiniti QX80 pairs $10,000 with 0% APR plus a $3,000 finance bonus, and the Kia EV9 checks in at 18.2% off. Eleven more offers sit between 12% and 20% of sticker, led by the Chevrolet Silverado 1500 at 18.4%.',
      'The timing matters: most of these offers expire November 2, so October buyers are shopping against a hard deadline. The broader lesson from the leaderboard is to judge cash offers as a percentage of sticker, not by the raw dollar figure — $20,000 sounds bigger than $12,500, but on the cars they attach to, the ID.4 discount is worth more than twice as much of the price.',
    ],
    sources: ['FindTheBestCarPrice'],
  },
  {
    slug: 'toyota-4runner-lease-339-october',
    title: 'Toyota\'s October 4Runner Lease: $339 a Month With $3,999 Due at Signing',
    description:
      'Toyota is advertising the 2026 4Runner SR5 4WD at $339 a month for 36 months with $3,999 due at signing, through November 2, 2026.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The headline is $339 a month — but the fine print adds taxes, registration, a $750 acquisition fee and a $350 disposition fee at the end.',
    body: [
      'Toyota is advertising a tempting October lease on the 2026 4Runner SR5 4WD, Autoblog reported: $339 a month for 36 months with $3,999 due at signing and 10,000 miles a year. The promotion covers the SR5 4WD wagon with its turbocharged four-cylinder engine and eight-speed automatic transmission, and it expires November 2, 2026.',
      'The fine print matters. The $3,999 due at signing consists of a $3,660 customer down payment plus the first month\'s $339 payment, and the advertised price excludes taxes, registration, a $750 acquisition fee and other dealer charges. Lessees pay $0.15 for every mile over the annual allowance, plus a $350 disposition fee at the end of the lease, and approval through Toyota Financial Services is required. A security deposit is waived.',
      'Toyota also advertises $500 rebates for eligible military personnel and recent or soon-to-be college graduates who finance or lease through Toyota Financial Services, running through November 2 — though some incentives cannot be combined with the advertised lease offer. The 4Runner deal is notable because it applies to a specific configuration, not the whole lineup: shoppers should get a dealer quote to confirm the final drive-off amount on the exact truck they want.',
    ],
    sources: ['Autoblog'],
  },
  {
    slug: 'americans-keep-old-cars-new-prices-out-of-reach',
    title: 'Priced Out of New Cars, Americans Are Keeping Their Old Ones on the Road Longer',
    description:
      'With new-car prices out of reach for many buyers, coverage this week highlights a growing trend: drivers holding onto aging cars instead of replacing them.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'High interest rates and rising production costs are pushing new cars toward luxury-item status — and some older models are becoming hard to find.',
    body: [
      'New car prices are out of reach for many buyers, and the result is a surge in old cars remaining on the road — a trend highlighted in coverage this week, led by Jalopnik. As the economy continues to shift, many Americans are finding it increasingly difficult to afford new cars, with the price of new vehicles rising to a point where it is becoming a luxury item for a growing share of households.',
      'According to Jalopnik\'s reporting, the trend is being driven by a combination of factors, including high interest rates and increased production costs. Instead of trading in, people are opting to keep their old cars running, with some outlets noting that certain older models are becoming increasingly hard to find as demand for affordable used vehicles stays strong.',
      'The question now is whether new-car affordability improves or whether this trend hardens into the market\'s permanent shape. If it does, the winners are repair shops, parts suppliers and the used market — and the losers are automakers counting on a steady replacement cycle. For buyers, the math is simple: a paid-off car with a repair bill is still usually cheaper than a new car with a monthly payment.',
    ],
    sources: ['Jalopnik'],
  },
  {
    slug: 'edmunds-record-car-loans-84-months',
    title: 'Car Loans Hit Records in October: $44,664 Financed on Average, One in Four Buyers Stretching to 84 Months or More',
    description:
      'Edmunds data cited in October 2026 shows record car borrowing: the average new vehicle financed is $44,664 over 70 months, with more than one in four buyers at 84 months or longer.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 4,
    excerpt:
      'Buyers are not just paying more — they are borrowing more, for longer, at higher rates. Used-car buyers face the harshest math of all.',
    body: [
      'Car borrowing hit new record highs in October 2026, according to Edmunds figures cited in reports this month. The amount financed for a new vehicle reached $44,664, and the average term is 70 months. More than one in four new-car buyers are now financing vehicles for 84 months or longer — seven years or more to pay off a depreciating asset.',
      'Used cars tell an even harsher story. The average used car financed is $30,703, also over 70 months, but with an average down payment of just $3,865 and an annual percentage rate of 10.6%, versus 7% for new cars. At $582 a month across 70 months, a used-car buyer repays about $40,970 on $30,703 borrowed. Among used-vehicle buyers, 6.5% took on $1,000-plus monthly payments — also an all-time high.',
      'The sting in the tail is negative equity. Buyers who financed at 2022\'s peak prices are starting to come back to trade in, and they are bringing thousands of dollars in old debt with them. That debt does not disappear at trade-in: the dealer taking the old car has to pay it off, and if the car is not worth more than the loan, the buyer covers the gap — often by rolling it into the next loan. With cheap cars largely gone from the market, buyers are borrowing more for longer just to stay mobile, and the monthly payment has quietly become the real price of the car.',
    ],
    sources: ['Edmunds'],
  },
  {
    slug: 'uk-used-car-market-flat-october-2026',
    title: 'UK Used-Car Prices Were Essentially Flat in Early October as Younger Stock Hit the Market',
    description:
      'GetCarWise data for October 4-10 shows UK used asking prices up just 0.15% like-for-like, while the median rose 1.3% to 13,170 pounds on a younger mix.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The gap between the flat index and the rising median tells the story: September\'s strong new-car sales are pushing younger part-exchanges onto forecourts.',
    body: [
      'UK used-car asking prices were essentially flat in the week of October 4-10, according to GetCarWise\'s weekly market pulse. Like-for-like prices rose 0.15% week on week — within the margin of error — while the median asking price rose 1.3% to 13,170 pounds, up from 12,995 pounds the week before.',
      'The gap between the two numbers is the story. The like-for-like index compares the same type of car across both weeks, stripping out changes in what is on sale; the median does not. When the median moves more than the index, the mix changed — and this week it did: three-to-four-year-old cars rose 0.6 points of share while cars over ten years old fell 0.9 points. That fits with September\'s strong new-car sales, whose part-exchanges are starting to reach dealer forecourts, nudging stock younger and pushing the median up without prices themselves moving much.',
      'The most-listed cars were the Nissan Qashqai, Ford Fiesta, Volkswagen Golf, Vauxhall Corsa and Ford Focus, while the Fiesta also topped removals — the churn of Britain\'s most common cars, turning over steadily. For buyers, the message is that the market is stable but the stock is getting younger: a good week to shop for a three-to-four-year-old car, and a week when haggling over the headline price matters less than picking the right car from a freshening mix.',
    ],
    sources: ['GetCarWise'],
  },
  {
    slug: 'chery-v2g-demonstration-station-wuhu',
    title: 'Chery Shows Off China\'s First Scaled AC Vehicle-to-Grid Station in Wuhu',
    description:
      'Chery revealed what it calls China\'s first scaled AC vehicle-to-grid demonstration station as part of a smart energy ecosystem showcase in Wuhu.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Vehicle-to-grid stops being a lab experiment when it works at scale — and Chery\'s Wuhu station is pitched as exactly that step.',
    body: [
      'Chery showcased a smart energy ecosystem in Wuhu, including what it describes as China\'s first scaled AC vehicle-to-grid (V2G) demonstration station, according to Drive Safe and Fast\'s coverage of the reveal. V2G technology lets electric vehicles send power back to the grid, turning parked cars into a distributed energy resource rather than just a load on it.',
      'The significance of "scaled" is the point. V2G demonstrations are common; a station built to operate at real scale, with alternating-current infrastructure that ordinary vehicles can use, is rarer — and it is the step that moves V2G from pilot projects toward something utilities can actually plan around. For Chery, which has been expanding aggressively into energy, robotics and autonomous systems alongside its car business, the station fits a deliberate strategy of selling an ecosystem rather than just vehicles.',
      'The open question, as with every V2G announcement, is commercial: which vehicles, which tariffs and which grid operators will actually use it, and when owners will see money for the electricity their cars supply. Chery has not yet answered those in public detail. But the direction is clear — the car is becoming part of the energy system, and the automakers building the grid side of that story are positioning themselves for a market that does not exist yet.',
    ],
    sources: ['Drive Safe and Fast'],
  },
  {
    slug: 'new-ev-prices-october-2026-jaguar-range-rover-bmw',
    title: 'The New EV Price Board: Jaguar Type 01 at $130,500, Range Rover Electric at $138,000, and a $37,745 Mitsubishi',
    description:
      'October\'s new-EV price roundup spans a $130,500 Jaguar, a $138,000 Range Rover Electric, BMW\'s $61,500 i3 sedan and a $37,745 Mitsubishi Eclipse Sportback EV.',
    date: 'October 25, 2026',
    dateISO: '2026-10-25',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 4,
    excerpt:
      'With the federal EV tax credit gone since September 2025, every new EV now has to win on sticker price alone — and October\'s board shows a $100,000 spread.',
    body: [
      'October\'s new-electric-vehicle price board shows just how wide the market has become. Jaguar unveiled the Type 01 in New York on October 6 at an anticipated $130,500 starting price, with orders opening in early 2027, while the Range Rover Electric opened for US orders at $138,000. At the other end of the luxury ladder, BMW priced two more Neue Klasse models — the i3 sedan at $61,500 and the iX4 at $66,200 — and Bentley revealed the Torcal, its first EV.',
      'The mainstream middle is filling in fast. The Lexus TZ starts at $64,050 including its $1,550 delivery fee, the electric Mercedes-Benz GLC at $63,500 before a $1,450 destination charge, and the Mitsubishi Eclipse Sportback EV at $37,745 before a $1,995 destination fee. The BMW iX3 and the Kia EV3 are now delivering in the US, and trackers note the cheapest new EV announced in America is a $24,950 pickup with crank windows — while the most expensive is Ferrari\'s first electric car, priced from 550,000 euros at its European launch.',
      'Two dates moved the other way: Toyota now calls the Highlander EV a 2028 model with sales from early 2027, and Volvo lists US deliveries of the EX60 P10 for fall 2026 and the cheaper P6 for 2027. The backdrop for all of it is the end of the federal EV tax credit for purchases after September 30, 2025: with no $7,500 cushion, every one of these prices is now the price buyers actually pay, apart from state and local incentives. That pressure is visible in the numbers — and it is why the $37,745 Mitsubishi matters more to the market\'s future than the $138,000 Range Rover.',
    ],
    sources: ['Trendy Tech Tribe'],
  },
  {
    slug: 'tesla-battery-contactor-recall-12963-october-2026',
    title: 'Tesla Recalls 12,963 Model 3 and Model Y Cars Over Battery Contactor That Can Cut Power Without Warning',
    description:
      'Tesla is recalling 12,963 US vehicles because a battery-pack contactor can open unexpectedly and cause a sudden loss of drive power.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A faulty solenoid in the battery pack can kill propulsion mid-drive. Tesla will replace the contactor free, and says it knows of no crashes linked to the defect.',
    body: [
      'Tesla is recalling 12,963 vehicles in the United States because a defect in a battery-pack component can cause a sudden loss of drive power, the National Highway Traffic Safety Administration said. The recall covers certain 2025 Model 3 sedans and 2026 Model Y crossovers. The problem is a battery-pack contactor whose solenoid, supplied by InTiCa, can open unexpectedly because of a poor connection at the coil termination.',
      'If the solenoid fails while driving, the car can lose propulsion without prior warning, forcing the driver to pull over; the infotainment screen then displays a warning telling the driver to pull over safely. If it fails while parked, the car may not shift into Drive. Tesla said it will replace the affected battery-pack contactor free of charge. As of October 7, the company had identified 36 warranty claims and 26 field reports related to the condition, but said it was unaware of any collisions, injuries or fatalities linked to it.',
      'The recall lands in a crowded month for Tesla safety scrutiny. Earlier in October, NHTSA opened a separate investigation into millions of Tesla vehicles equipped with Full Self-Driving after dozens of reports of traffic-safety violations and crashes. Owners of the recalled cars should watch for the official notification and book the free contactor replacement rather than waiting for a warning light, since this failure gives no advance alert before power is lost.',
    ],
    sources: ['Reuters', 'NHTSA', 'Car and Driver'],
  },
  {
    slug: 'tesla-model-3-premium-europe-airbag-recall-131726',
    title: 'Tesla Recalls 131,726 Model 3 Premium Cars in Europe Over Far-Side Airbag Fixed by a Software Update',
    description:
      'Tesla is recalling 131,726 left-hand-drive Model 3 Premium sedans built at Giga Shanghai because the far-side airbag calibration can exceed the side-impact force limit.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'No service visit is needed: the fix is a free over-the-air update. But the recall covers a large slice of the European Model 3 fleet.',
    body: [
      'Tesla is recalling 131,726 left-hand-drive Model 3 Premium sedans built at Giga Shanghai for the European Union, the Middle East and South Korea, because the far-side airbag is not calibrated to meet the UN R135 side-impact rule. The far-side airbag is the front centre airbag between driver and passenger, and in the UN R135 pole test a pole strikes the driver door at 32 km/h while the dummy shoulder must not take more than 3.0 kilonewtons of lateral force. Recall documents say some cars exceeded that limit because of the airbag deployment calibration.',
      'The good news for owners is the remedy: a free over-the-air software update, with no dealer visit required, and owners can keep driving in the meantime. The EU Safety Gate alert, notified by Germany and published on October 16, says the car may provide insufficient protection in a side impact, which increases the risk of injury to occupants, and lists the recall measure as in force from September 30, 2026. Neither the alert nor the reporting outlet Auto Plus reports any related crashes or injuries.',
      'The scale is what makes this recall notable rather than the fix itself. More than 130,000 cars is a large share of the Model 3 Premium population in the affected markets, and it shows how much of modern recall work is now software calibration rather than hardware replacement. Owners should still install the update promptly: an airbag that deploys a fraction too hard in a pole strike is exactly the kind of marginal failure that only matters in the crash it is meant to protect against.',
    ],
    sources: ['Auto Plus', 'EU Safety Gate', 'Tesla News Wire'],
  },
  {
    slug: 'nhtsa-fsd-investigation-288-million-vehicles-october-2026',
    title: 'NHTSA Opens Investigation Into 2.88 Million Teslas With Full Self-Driving After 50-Plus Violation Reports',
    description:
      'Federal safety regulators opened an investigation into 2.88 million Tesla vehicles equipped with Full Self-Driving after more than 50 reports of traffic-safety violations and crashes.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The probe is the latest in a running list of federal actions on Tesla driver-assistance systems, and it arrives weeks after a new NHTSA administrator was confirmed.',
    body: [
      'The National Highway Traffic Safety Administration has opened an investigation into 2.88 million Tesla vehicles equipped with the Full Self-Driving system, after more than 50 reports of traffic-safety violations and a series of crashes, according to Reuters. The probe adds to growing scrutiny of Tesla advanced driver-assistance systems from Congress and regulators, and it comes weeks after a new NHTSA administrator was confirmed.',
      'An investigation is not a finding of a defect and does not by itself force a recall, but it is a formal step that can lead to one. Regulators typically use this stage to demand data, examine crash and near-miss reports, and test whether a system behaves as its maker claims in real traffic. For Tesla, the stakes are commercial as well as legal: Full Self-Driving is central to the Tesla robotaxi pitch, and any restriction on its use would land directly on that strategy.',
      'Owners should keep two ideas separate. The FSD investigation concerns customer cars with the driver-assistance package, while separate NHTSA files cover the purpose-built Cybercab robotaxi fleet, including a school-zone petition and an audit of how Tesla self-certified the steering-wheel-free vehicle. Both tracks point the same way: regulators are no longer treating Tesla autonomy claims as marketing copy, and the company will have to prove them with data.',
    ],
    sources: ['Reuters', 'NHTSA'],
  },
  {
    slug: 'tesla-robotaxi-safety-report-31-million-miles-october-2026',
    title: 'Tesla First Robotaxi Safety Report Claims 3.1 Million Driverless Miles With Zero Injuries',
    description:
      'Tesla published its first Robotaxi Safety Report on October 21, listing 3.1 million autonomous miles without a safety monitor and zero reported injuries or airbag deployments.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Driverless service now runs in six cities, with Dallas set to get the Cybercab in November. The report is company-published, not an independent audit.',
    body: [
      'Tesla published its first Robotaxi Safety Report on October 21, 2026, listing 3.1 million autonomous miles driven without a safety monitor between January 22 and October 18, 2026, with zero reported injuries or airbag deployments. Driverless service currently runs in Austin, Dallas, Houston, Orlando, Tampa and Miami, while the San Francisco Bay Area market still requires a safety driver under current rules. Las Vegas, Jacksonville, Phoenix and San Antonio are named as upcoming markets, and Tesla has said the two-seat, steering-wheel-free Cybercab will arrive in Dallas in November 2026, the first city outside Austin to receive it.',
      'The same week, Tesla AI vice president Ashok Elluswamy posted a highlight reel on X showing a Tesla robotaxi slowing or braking as a Waymo vehicle and an Avride vehicle each entered its path. No collision occurred in either clip, and Tesla has not released sensor logs or following-distance data, so the exact margins have not been independently verified. Unsupervised Full Self-Driving outside the dedicated robotaxi fleet remains delayed to the second quarter of 2027 at the earliest, meaning the mileage gains are confined to the Tesla supervised robotaxi program, not customer vehicles.',
      'Read the report for what it is: a first, company-published safety disclosure in an industry where Waymo has published far longer safety records. Three million miles without an injury is a real milestone if the counting is complete, but it is still a small sample next to the hundreds of millions of miles established operators have logged. The more important test comes next, when the Cybercab expands beyond Austin and the fleet faces Dallas traffic, weather and regulators at larger scale.',
    ],
    sources: ['Tesla Robotaxi Safety Report', 'Tech Insider'],
  },
  {
    slug: 'waymo-5-billion-first-debt-loan-october-2026',
    title: 'Waymo Borrows $5 Billion in Its First-Ever Debt Deal as Robotaxis Become Bankable',
    description:
      'Waymo closed a $5 billion term loan led by PIMCO, Blackstone and Sixth Street, its first debt financing, eight months after a $16 billion equity round at a $126 billion valuation.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'When lenders, not just venture investors, will fund robotaxis, the buildout can scale on balance-sheet terms. Waymo just secured expansion capital its rivals do not have.',
    body: [
      'Waymo closed its first-ever debt deal, a $5 billion term loan led by PIMCO, Blackstone and Sixth Street, with Goldman Sachs as sole bookrunner and a lender list that includes Apollo, Blue Owl, Fidelity and T. Rowe Price. It is the company first debt raise, coming eight months after a $16 billion equity round at a $126 billion valuation. Waymo calls it a step in its evolution into a scaling commercial enterprise.',
      'Why a loan matters more than another equity round: debt lenders underwrite cash flows and collateral, not just a growth story. A $5 billion term loan signals that major credit investors now treat a robotaxi fleet as a financeable asset, which lets Waymo expand without diluting shareholders at every step. That is a structural advantage over rivals still funding each city launch from equity or a parent balance sheet.',
      'The money arrives as the race goes international and political. The same week brought Tesla Cybercab fleet growth in Austin, a new NHTSA file on Tesla robotaxis in school zones, San Francisco geofencing robotaxis away from its Fleet Week waterfront, union drivers rallying against a Washington robotaxi bill, and Uber and Pony.ai planning London robotaxis. Waymo now has the capital to answer all of that with more cars in more cities, which is the only answer that has ever settled a transport race.',
    ],
    sources: ['TechCrunch', 'Robotaxi Report'],
  },
  {
    slug: 'tesla-roadster-flying-demonstration-october-2026',
    title: 'Tesla Roadster Flying Demo: A Car That Flips in Midair, and the Questions It Leaves Unanswered',
    description:
      'At a Texas test facility on October 15, Tesla showed a driverless Roadster climbing a ramp upside down, flipping in the air on cold-gas thrusters, and leaping over a line of Teslas.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Musk declared that flying cars are real. What the staged demo proved is narrower: a car can hop, flip and land on thrusters. Sustained flight is unproven.',
    body: [
      'Elon Musk unveiled what Tesla calls a flying car on October 15 at a SpaceX test facility in Texas, showing a new Roadster that used suction underneath the car to climb a steep ramp and hang upside down before spinning off the ramp, flipping in the air and using air jets to land. The car had no driver during the demonstration, done, Musk told the crowd, to make sure nobody was killed. Later in the demonstration, the Roadster used the same jets to leap over a line of Tesla existing models parked side by side, and then used jets off the back of the car to accelerate to 60 mph in a claimed record time.',
      'The engineering, as described by Musk, centers on 10 nozzles and ultra-high-pressure air tanks developed with SpaceX, producing more than 4,700 kilograms of downforce in the demonstration setup. Performance claims are equally ambitious: zero to 60 mph in under one second, with some configurations reportedly reaching that speed in just 0.6 seconds, and a projected top speed above 230 mph. Musk said the car will go into production in 2028, and said flying cars are real, while also cautioning that success is not guaranteed.',
      'Here is the honest distinction buyers should hold onto. A car that hops, flips and lands under thruster power at a test site is not yet a certified aircraft, and it is not a car that can sustain flight between two places. The demonstration has not been confirmed as flying under full FAA aircraft certification, and Tesla history of missing Musk production timelines is long. What the demo does prove is that the Tesla-SpaceX engineering combination can produce spectacle at a scale no other carmaker is attempting, and that the Roadster, if it ever reaches production in this form, will be judged as much on whether its thrusters are legal, safe and insurable on public roads as on whether it can leave the ground.',
    ],
    sources: ['CNN', 'The Source', 'Reuters'],
  },
  {
    slug: 'ford-stellantis-q3-earnings-preview-october-28-2026',
    title: 'Ford and Stellantis Both Report Q3 Earnings October 28: What to Watch in Detroit Busiest Week',
    description:
      'Ford reports Q3 after the close on October 28 with analysts expecting $0.41 per share on $49.08 billion in revenue, while Stellantis reports the same day with its stock near yearly lows.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'GM already set the bar with a 151 percent profit jump. On Wednesday, Ford and Stellantis show whether that was company-specific or sector-wide.',
    body: [
      'Ford Motor is set to announce third-quarter 2026 results after the market closes on Wednesday, October 28, with a call scheduled for 5:00 PM ET. Analysts expect earnings of $0.4099 per share and revenue of $49.08 billion. Ford last reported on July 28, beating the $0.33 consensus with $0.42 per share on $48.30 billion in revenue, against a $47.24 billion consensus. Ford stock opened Monday at $11.59, with a 52-week range of $11.11 to $17.78 and a market capitalization near $46.2 billion, and Goldman Sachs cut its Ford price target to $14 from $16 in early October, citing lower 2026 EBIT and EPS estimates linked to the F-150 production interruption.',
      'Stellantis publishes third-quarter 2026 results the same day, with presentation materials expected at 8:00 AM CET and a webcast at 1:00 PM CET. The report is a sharper margin and cash-flow test than usual: second-quarter operating profit was 702 million euros while operating cash flow was negative 169 million euros, the company suspended its 2026 dividend in February, and the stock traded near 3.71 euros on October 23, close to its yearly lows. The key question is whether the Ram-led improvement in US sales, with Ram up 29 percent in the third quarter while Jeep fell 20 percent, can broaden into stronger group profitability rather than remaining concentrated in a single brand.',
      'Context matters for both reports. GM already delivered the quarter standout, with net income up 151 percent to $3.3 billion and a $20 billion buyback, while Rivian reports on October 29 with its own R2-driven story to tell. If Ford matches its consensus and Stellantis shows cash generation turning positive, the quarter reads as an industry recovery; if either misses, the story becomes a split market in which only the strongest balance sheets are compounding.',
    ],
    sources: ['Ticker Report', 'Stellantis', 'Admiral Markets'],
  },
  {
    slug: 'rivian-q3-record-19248-deliveries-r2-october-2026',
    title: 'Rivian Sets a Record With 19,248 Q3 Deliveries as the R2 Lifts It to Number Two in US EVs',
    description:
      'Rivian delivered a record 19,248 vehicles in Q3 2026, up about 46 percent, as the cheaper R2 SUV powered growth while the overall US EV market fell nearly 40 percent.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The R2 is doing what it was built to do: give buyers a cheaper way into Rivian. Commercial vans tripled too, and Rivian is now second only to Tesla in US EV share.',
    body: [
      'Rivian Automotive reported record third-quarter deliveries of 19,248 vehicles, beating analysts average estimate of 18,001, after rolling out the cheaper R2 SUV targeted at the broader mass EV market. The company produced 19,751 vehicles at its Normal, Illinois plant in the quarter, and reaffirmed its 2026 delivery forecast of 65,000 to 70,000 vehicles. Shares slipped more than 2 percent in early trading after the report, with analysts noting the market had hoped for a guidance raise after such a strong quarter.',
      'Cox Automotive and Kelley Blue Book estimates break the quarter down further. Rivian sold an estimated 19,239 vehicles in the US in the quarter, up 45.7 percent from a year earlier, while the overall EV market dropped 39.5 percent, pushing Rivian to 7.2 percent of the segment, good for second place behind Tesla. Most of the jump came from the commercial side, with commercial vans hitting 8,469 units, more than triple last year and roughly 44 percent of everything Rivian moved. The R2 showed up in the Cox data for the first time with an estimated 3,456 deliveries, already ahead of the Lucid brand total for the quarter, while R1S fell 31.8 percent to 5,582 and R1T fell 27.2 percent to 1,732 as buyers shifted to the cheaper model.',
      'The R2, which began customer deliveries in June and starts at just under $60,000, is now the hinge of the Rivian story. The company expects to deliver 20,000 to 25,000 R2 units by the end of the year, which would make it one of the fastest-selling EVs in US history, second only to the Tesla Model Y, and it is preparing more affordable models near $45,000. Rivian reports full third-quarter financial results on October 29, when investors will learn whether record volume is also turning into record margins, or whether the R2 ramp is still costing more than it earns.',
    ],
    sources: ['Reuters', 'Cox Automotive', 'RivianTrackr'],
  },
  {
    slug: 'lucid-q3-deliveries-drop-production-plunge-october-2026',
    title: 'Lucid Q3 Deliveries Fall 7 Percent as Production Plunges 38 Percent and the Inventory Selloff Begins',
    description:
      'Lucid delivered 2,708 vehicles in Q3 2026, down 7 percent, while production fell sharply as the company works through a first-half inventory pile under a $1.4 billion operating reset.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Nine months in, Lucid has built 13,228 cars and delivered 10,852. Q3 is the first quarter where deliveries beat production, and that is the point of the reset.',
    body: [
      'Lucid delivered 2,708 vehicles in the third quarter of 2026, down 7 percent year over year, while production plunged 38 percent, according to Electrek coverage of the company quarterly figures. Nine months into the year, Lucid has built 13,228 vehicles and delivered 10,852. The third quarter is notable for a reversal: deliveries beat production by 852 vehicles, working off about a quarter of the first-half pile, when Lucid built 3,228 more vehicles than it delivered.',
      'The first-half surplus had a specific cause. In the first quarter, a supplier problem with second-row seats held up Gravity deliveries for 29 days while the factory kept running, and inventory on the balance sheet rose to $1.38 billion by the end of June, up from $1.11 billion six months earlier. Selling those cars is now the biggest piece of the operating reset Lucid management has described, which targets $1.4 billion in cash-flow improvements in 2026: roughly $600 million to $800 million from inventory, about $500 million from lower capital spending, and roughly $200 million from operating costs.',
      'The contrast with Rivian, which delivered 19,248 vehicles in the same quarter, is stark, and it frames the question Lucid has to answer. Lucid says demand for the Gravity continued to regain momentum, but it does not break out deliveries by model and did not put a number on that momentum. Until deliveries grow faster than the inventory pile shrinks, Lucid remains a company managing its balance sheet first and its growth story second.',
    ],
    sources: ['Electrek', 'Lucid'],
  },
  {
    slug: 'paris-motor-show-2026-debuts-roundup',
    title: 'Paris Motor Show 2026: The Debuts That Matter, From Kia Seltos Hybrid to a 700-Kilometre Mercedes Van',
    description:
      'The 2026 Paris Motor Show, October 12 to 18, brought the Kia Seltos Hybrid European premiere, six Mercedes premieres, the Hyundai Bayon world premiere, the BYD Atto 8 and a Jeep Renegade return pledge.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'Paris 2026 was a hybrid and electric show, not a horsepower show. The most important cars were affordable crossovers and a van that seats eight.',
    body: [
      'Kia led the European news at the 2026 Paris Motor Show, held October 12 to 18, with the European premiere of the all-new Seltos Hybrid. The second-generation Seltos is positioned in the fast-growing C-SUV segment and introduces Kia first electrically driven all-wheel-drive system, which engages the rear axle only when driving dynamics demand it. Kia also gave the K4 Hybrid its European motor show debut in hatchback and Sportswagon forms ahead of production starting October 15, showed its complete five-model GT family including the recently launched EV3 GT, EV4 GT and EV5 GT, and displayed the PV5 Passenger and Cargo commercial products. Kia is Europe fastest-growing top-10 passenger-car brand year to date, with registrations up 9.0 percent from January to August 2026 to a 4.1 percent market share.',
      'Mercedes-Benz brought six show premieres rather than six fresh world debuts: the new GLA, the Mercedes-AMG CLA 45, the GLE, the Mercedes-AMG GT 4-Door Coupe, the electric VLE and an updated S-Class. The VLE is the most interesting of the set, carrying up to eight occupants with Mercedes quoting more than 700 km of electric range, positioning it between large passenger cars and premium people carriers. Hyundai gave the new Bayon its world premiere, the new Tucson its European premiere with the Tucson N Line making its global debut, and expanded its electric commercial range with the Staria Cargo, whose 84 kWh battery supplies up to 450 km of WLTP range, with an 800-volt architecture supporting a 10 to 80 percent recharge in 20 minutes, a 1,040 kg payload and 2,000 kg of towing.',
      'Elsewhere, BYD introduced its new flagship SUV, the Atto 8, with a choice of power outputs and rear- or all-wheel drive when it arrives in markets in the first quarter of 2027. Leapmotor headlined with the European premiere of the B03 urban hatchback, presented the flagship D19 SUV, and confirmed that production of the B10 has started in Spain. Jeep confirmed the Renegade will return by 2030, Cupra showed a Raval custom package by ABT after the Raval passed 50,000 orders since April 2026, and the Volkswagen Group had accumulated almost 150,000 orders across its four-car electric programme before the show opened. The through-line is unmistakable: Europe volume growth in 2026 is coming from hybrids and affordable electrics, not from flagship excess.',
    ],
    sources: ['Motor Trader', 'Kia', 'Plant Machinery Vehicles'],
  },
  {
    slug: 'hyundai-tucson-next-generation-october-2026',
    title: 'Next-Generation Hyundai Tucson Revealed: Bigger, With a Plug-In Hybrid for the First Time',
    description:
      'Hyundai unveiled the next-generation Tucson in New York on October 1, growing it in every dimension and adding a 292-PS plug-in hybrid with up to 81 km of electric range.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The Tucson grows 60 mm longer and 30 mm in wheelbase, keeps physical climate and audio buttons, and gets a new Pleos Connect infotainment system with an AI assistant.',
    body: [
      'Hyundai unveiled the next-generation Tucson in New York on October 1, 2026, in a global reveal rather than a market-specific launch. The SUV goes on sale in South Korea later in 2026, with North America, Europe and other markets following through 2027. It measures 4,700 mm long, 1,905 mm wide and 1,685 mm tall, up by 60 mm, 40 mm and 20 mm respectively over the outgoing model, with the wheelbase stretching 30 mm to 2,785 mm and the extra length going toward cabin room.',
      'Alongside the existing petrol and hybrid options, Hyundai is adding a plug-in hybrid variant for the first time, with 292 PS and up to 81 km of claimed electric-only range. Inside, the dashboard moves to a two-layer design, door opening angles widen from 73 to 83 degrees for easier entry, and Hyundai has deliberately kept dedicated physical buttons for climate and audio controls below the main touchscreen. Screen size depends on market and variant, with either a 17-inch or a 12.9-inch central touchscreen paired with a separate 9.9-inch display ahead of the driver.',
      'The new Pleos Connect infotainment system, built on Android Automotive OS, introduces Gleo AI, an in-cabin assistant meant to handle requests in natural language rather than through menus. That combination, a bigger cabin, a plug-in option and buttons where drivers actually reach, is Hyundai betting that the next Tucson wins not on novelty but on getting the daily-use details right. Pricing for each market has not yet been announced, and that will decide whether the growth in size comes with growth in value.',
    ],
    sources: ['Park Plus', 'Hyundai'],
  },
  {
    slug: '2027-vw-atlas-pricing-october-2026',
    title: '2027 Volkswagen Atlas Pricing: $41,610 to $56,610, On Sale Now, With a Five-Seat Cross Sport Coming',
    description:
      'The 2027 Volkswagen Atlas is on sale in October 2026 from $41,610 before a $1,525 destination charge, with a five-passenger Atlas Cross Sport due in early 2027.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'A midsize three-row SUV with a full standard safety suite and a 282-hp turbo four, the Atlas undercuts its badge premium while keeping the three-row practicality buyers want.',
    body: [
      'The 2027 Volkswagen Atlas is on sale in October 2026 as a midsize three-row SUV with front- or all-wheel drive and seating for six or seven. Pricing before the $1,525 destination charge runs from $41,610 for the SE front-wheel-drive model, through $43,610 for the SE 4Motion, $45,610 and $47,610 for the SE with Tech in front- and all-wheel drive, $52,110 for the SEL R-Line 4Motion, and $56,610 for the SEL Premium R-Line 4Motion. A stylish five-passenger Atlas Cross Sport with most of the same features should arrive in early 2027.',
      'Every Atlas uses a 2.0-litre turbocharged four-cylinder making 282 hp and 258 pound-feet of torque, paired with an eight-speed automatic, with EPA-estimated fuel economy of 20 mpg city, 27 highway and 23 combined on regular gasoline. It offers 21.2 cubic feet of cargo space behind the third row, 55.9 behind the second and 95.4 behind the front row, tows up to 5,000 pounds, and is assembled in Chattanooga, Tennessee. Standard safety equipment is comprehensive: front collision alert, automatic emergency braking with pedestrian detection, automatic high beams, lane keeping alert and assist, lane centering, assisted lane changes, blind-spot alert and assist, front and rear parking distance control, rear traffic assist, adaptive cruise control with stop and go, and automatic post-collision braking.',
      'The Atlas case is straightforward. It does not win on badge or on outright luxury, but at $41,610 it gives three-row buyers a fully equipped, Chattanooga-built SUV with a safety suite that many rivals still charge extra for. The question for shoppers is whether the four-cylinder refinement and the real-world fuel economy match the spec sheet, and whether the coming Cross Sport, with most of the same features in a five-seat body, is the better buy for families that never use the third row.',
    ],
    sources: ['Detroit Free Press', 'Volkswagen'],
  },
  {
    slug: '2027-lincoln-corsair-refresh-hybrid-pricing',
    title: '2027 Lincoln Corsair Goes Hybrid-Only at $48,790, With Standard BlueCruise and a Higher Destination Fee',
    description:
      'The refreshed 2027 Lincoln Corsair is hybrid-only with standard all-wheel drive and BlueCruise, priced from $48,790 to $55,790 including a $2,295 destination fee.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'No deals yet on the 2027 Corsair, and it costs considerably more than the outgoing model. The payoff is standard hybrid power, all-wheel drive and hands-free driving.',
    body: [
      'The refreshed 2027 Lincoln Corsair debuts as a hybrid-only offering with all-wheel drive as standard, using the same turbocharged 2.0-litre hybrid setup found in the Lincoln Nautilus, and with standard BlueCruise hands-free driving. Two familiar trim levels are offered: Premiere at $48,790 and Reserve at $55,790, including a destination and delivery fee of $2,295, which is up $800 from the outgoing model. The most expensive 2027 Corsair passes $65,000 with options, for a small luxury crossover.',
      'The exterior color palette gets a major shakeup, with five new hues joining the lineup at the expense of six colors that were previously available. No October 2026 deals are yet available on the 2027 Corsair, which is a refresh rather than a carryover: as a hybrid-only model with all-wheel drive, it is considerably more expensive than the outgoing car, and the destination increase adds to that gap. The Corsair continues as a China-built model just like the Nautilus, and will also use a US VIN, although Lincoln is set to phase out Chinese imports to the US by 2031.',
      'For buyers, the Corsair math is now a hybrid math. The sticker jump buys standard electrified all-wheel drive and standard BlueCruise, which were previously optional or unavailable, but it also moves the Corsair into a price band where the Nautilus and larger rivals start to compete. Shoppers who wanted a cheaper, gasoline-only Corsair will have to look at remaining 2026 stock or a different badge; shoppers who wanted a small Lincoln with modern driver assistance get exactly that, at a premium.',
    ],
    sources: ['Ford Authority', 'Lincoln'],
  },
  {
    slug: 'cadillac-xt5-october-2026-deals',
    title: 'Cadillac XT5 October Deals: $649-a-Month Lease, 3.9 Percent Financing and Up to $2,500 Lease Cash',
    description:
      'October 2026 Cadillac XT5 offers include 3.9 percent APR for 36 months, up to $1,500 in total purchase allowance, $2,500 lease cash and a $649 monthly lease, valid through November 2.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The XT5 is in its final model year before a next-generation model arrives for 2028, and Cadillac is pricing the runout accordingly.',
    body: [
      'During October 2026, Cadillac XT5 offers include low-interest and long-term financing on the 2026 Cadillac XT5, plus up to $2,500 cash and a nationwide lease on the two-row luxury crossover, all valid through November 2, 2026. Purchase offers include a $1,000 purchase allowance. Finance offers include 3.9 percent APR for 36 months when financed with Cadillac Financial, plus $1,000 for well-qualified buyers when financed with Cadillac Financial and a $500 purchase allowance, for up to $1,500 in total purchase allowance.',
      'Lease offers include $2,500 lease cash, and a nationwide special lease on the 2026 XT5 Luxury front-wheel-drive model at $649 per month for 36 months, an ultra-low-mileage lease with 10,000 miles per year, $4,609 due at signing after all offers, and $0 security deposit. For reference, 2026 Cadillac XT5 trim levels start at $46,595 for Luxury, $55,295 for Premium Luxury and $64,595 for Sport, including a destination freight charge of $1,795.',
      'The timing is the point. The 2026 XT5 receives only small updates for the 10th model year of the luxury crossover first generation, and it serves as the nameplate final model year before the next-generation XT5 arrives for 2028. Sport and Premium Luxury trims gain more standard features for 2026, including the Technology Package, Driver Assist Package, Smart Towing and tri-zone automatic climate control. Buyers who want the current car should compare the lease and the finance routes carefully: the $649 lease is cheap monthly, but the 10,000-mile annual cap and the $4,609 due at signing mean the finance deal may suit higher-mileage drivers better.',
    ],
    sources: ['GM Authority', 'Cadillac'],
  },
  {
    slug: 'volvo-xc90-lease-599-october-2026',
    title: 'Volvo XC90 Leases From $599 a Month in Some Regions, and the Lease-to-Own Math Is Surprisingly Good',
    description:
      'A regional Volvo offer puts the 2026 XC90 B5 AWD at $599 a month for 36 months with $3,719 due at signing, available through November 2, 2026.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The $599 figure shows up in New York State and Central California, while Florida and parts of the Southwest pay up to $679. The purchase option is where it gets interesting.',
    body: [
      'Volvo is leasing the 2026 XC90 B5 AWD mild-hybrid model from $599 a month in some regions, a deal that shows up on the Volvo incentives page for areas like New York State and Central California, while other areas, like Florida and parts of the Southwest, lease the same car for as much as $679. The $599 deal breaks down as $599 a month for 36 months, $3,719 due at signing including the first monthly payment, a stackable $500 lease loyalty bonus for returning Volvo drivers, and availability through November 2, 2026, for qualified lessees.',
      'The lease comes with an offer to purchase the car for $34,345, plus a $450 purchase option fee. Added up, signing costs of $3,719 plus 35 further monthly payments of $20,965 give total lease costs of $24,684; adding the purchase price and fee gives a total cost to buy of $59,479, against a base MSRP of $61,050. In other words, a lessee who leases and then buys finances only a little over half the cost after three years and saves $1,571 over the sticker price, before taxes, titling and other costs, and before any other applicable incentives.',
      'That lease-to-own arithmetic is why this deal stands out from a typical monthly-payment headline. The XC90 is a 250-hp, six-seat luxury SUV with Nappa leather, positioned directly against BMW and Mercedes-Benz rivals that rarely lease this cheaply. The catch is geography and qualification: the $599 figure is regional, not national, so shoppers outside the cheap regions should check a nearby dealer before assuming the same payment, and should confirm the purchase-option terms in writing before counting on the buyout price.',
    ],
    sources: ['CarBuzz', 'Volvo'],
  },
  {
    slug: 'cadillac-ct5-v-blackwing-manual-cheaper-october-2026',
    title: 'The Last Manual V8 Sedan in America Is $6,275 Cheaper Than the Automatic, and Only 64 Manuals Were Left',
    description:
      'The 2026 Cadillac CT5-V Blackwing manual starts at $100,695 against $106,970 for the automatic, with the same 668-hp supercharged V8, but an August check found just 64 new manuals nationwide.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'For once, the enthusiast choice starts cheaper. The manual gives up nothing in power, but scarcity, not price, is now the obstacle.',
    body: [
      'America last new manual V8 sedan comes from Cadillac, and it starts $6,275 below its automatic counterpart on paper, before gas-guzzler tax. The 2026 manual starts at $100,695 including delivery, while the automatic and its required equipment reach $106,970. That $6,275 difference is $3,675 for the transmission plus $2,600 for Super Cruise, and the manual higher gas-guzzler tax narrows the gap to $5,875. An August 2026 inventory check found just 64 new manuals nationwide, and current-generation production ends by the end of calendar 2026.',
      'The car is the Cadillac CT5-V Blackwing, and the lower factory-priced manual surrenders not a single horsepower. Its supercharged 6.2-litre V8 makes 668 hp and 659 pound-feet of torque, driving the rear wheels through a standard six-speed manual, while the optional 10-speed automatic gets the same output. Magnetic Ride Control, Brembo brakes and an electronic limited-slip rear differential are standard. CarBuzz estimates roughly 9,000 cars across the 2022 to 2026 run, including both transmissions, though that is an estimate, not a final factory total.',
      'Collector details underline the scarcity. Cadillac V-Net records show just 74 CT5-V Blackwings wore Blaze Orange Metallic in 2022, about 4.2 percent of that year 1,763 cars across both transmissions, and the F1 Collector Series was limited to 26 cars, every one with a six-speed manual, with an upgraded supercharger lifting output to 685 hp. A 1,500-mile 2022 manual sold for $88,500 on August 14, 2026, against its $96,830 sticker. Cadillac has confirmed another combustion-powered CT5 for Lansing Grand River, but not a guaranteed 2027 arrival, V8 or manual, so waiting means betting on a combination Cadillac has not promised.',
    ],
    sources: ['HotCars', 'Cadillac', 'Bring a Trailer'],
  },
  {
    slug: 'ford-f150-fuel-tank-recall-223472-october-2026',
    title: 'Ford Recalls 223,472 F-150 Trucks Because the Fuel Tank May Not Be Properly Secured',
    description:
      'Ford is recalling 223,472 model-year 2023 to 2027 F-150 pickup trucks whose fuel tanks may be improperly secured, risking a fuel leak, fire or a tank detaching.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A fuel tank that was incorrectly inserted into the frame can partially or fully detach, stall the engine, leak fuel or fall onto the road as debris.',
    body: [
      'Ford is recalling 223,472 model-year 2023 to 2027 F-150 pickup trucks whose fuel tanks may be improperly secured to the vehicle body, according to MotorSafety.org coverage of the October 22, 2026 recall. The fuel tank in the affected vehicles was incorrectly inserted into the frame of the truck, which may lead to the tank partially or fully detaching, resulting in a fuel leak, an engine stall or a fire. The NHTSA recall number is 26V578000.',
      'Each of those failure modes carries a different danger. An engine stall can leave the truck to be hit from behind at high speed, a fuel leak near an ignition source can start a fire, and a tank falling on the road becomes debris that an unsuspecting driver can strike, potentially causing a multi-car pileup. Dealers will inspect and replace the fuel tank straps free of charge.',
      'The recall is a reminder of how large a single truck-platform campaign can be: nearly a quarter of a million of America best-selling vehicle line, across five model years, for a securing defect rather than an electronic one. F-150 owners should check their VIN against the recall, watch for the owner notification, and not delay the strap inspection, since this is a defect where the warning sign may be the failure itself.',
    ],
    sources: ['MotorSafety.org', 'NHTSA'],
  },
  {
    slug: 'ram-1500-tpms-recall-16385-october-2026',
    title: 'Ram Recalls 16,385 Ram 1500 Trucks Over Tire Pressure Monitors That May Miss Low Pressure',
    description:
      'FCA US is recalling 16,385 model-year 2026 Ram 1500 trucks because the tire pressure monitoring system may fail to detect low pressure or light the warning lamp.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A silent tire pressure failure can end in tire failure and a crash. Dealers will inspect and replace the sensors free, with owner letters expected October 27.',
    body: [
      'A subsidiary of Stellantis, FCA US, has recalled more than 16,000 Ram vehicles over an issue with their tire pressure monitoring systems, according to a recall notice from the National Highway Traffic Safety Administration. The recall applies to approximately 16,385 vehicles in the 2026 Ram 1500 model, under recall number 51D. The problem is that the tire pressure monitoring system may fail to detect low tire pressure, or fail to illuminate the tire pressure warning light.',
      'That matters because an underinflated tire does not always announce itself. Low pressure increases heat, wear and the risk of sudden tire failure, and a driver who is relying on the dashboard warning will keep driving a tire that is quietly deteriorating. NHTSA says the issue could result in tire failure, increasing the risk of a crash. Anyone with an affected vehicle can take it to a dealer, who will inspect and replace the tire pressure sensors as necessary free of charge.',
      'Owner notification letters are expected to be mailed on October 27, and owners can contact FCA US customer service at 1-800-853-1403 with recall number 51D. Owners can also check their VIN on the NHTSA recall database or search by license plate. This is a distinct campaign from the larger Ram 1500 rearview-camera recall reported earlier in October, so owners who already had one Ram recall addressed should still check for this one.',
    ],
    sources: ['USA TODAY', 'NHTSA'],
  },
  {
    slug: 'ionna-charging-180-sites-1500-stalls-october-2026',
    title: 'IONNA More Than Doubles in 2026, Passing 180 Sites and 1,500 Fast-Charging Stalls',
    description:
      'The automaker-backed IONNA network has more than doubled in 2026 to over 180 live sites and 1,500 DC fast-charging stalls, all up to 400 kW, and it now leads non-Tesla networks in NACS deployment.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Every stall can deliver up to 400 kW, average pricing sits at $0.38 per kWh against a $0.56 industry average, and IONNA just topped the JD Power public-charging ranking.',
    body: [
      'IONNA fast-charging network has more than doubled in size during 2026, surpassing 180 live sites and 1,500 DC fast-charging stalls, according to October 2026 reporting. The automaker-backed network, founded by BMW, General Motors, Honda, Hyundai, Kia, Mercedes-Benz, Stellantis and Toyota, is working toward 30,000 high-power charging bays by 2030. Its teal dispensers carry both NACS and CCS connectors, built for the connector transition from day one.',
      'The differentiator is power and price. Every stall can deliver up to 400 kW of peak power, making IONNA the market leader in the 400 kW-plus segment, and it leads non-Tesla networks in NACS deployment, with about 36 percent of its stalls, 548 stalls, equipped with NACS connectors against an industry average of roughly 12 percent. Average pricing of $0.38 per kWh sits well below the industry average of $0.56 per kWh, per the DCFC Tracker. In September, IONNA topped the JD Power 2026 US Electric Vehicle Experience public-charging satisfaction ranking with 807 points out of 1,000.',
      'The buildout is increasingly partnership-driven. A deal with Circle K puts more than 350 sites in scope under the Rechargeries at Circle K banner, with the first co-branded locations expected by the end of 2026. That retail-host model, chargers where drivers already stop for fuel, food and restrooms, is the bet that charging stops being a detour and becomes part of the errand. If IONNA sustains this pace, its 2030 target stops looking theoretical and starts looking like a schedule.',
    ],
    sources: ['EV Technica', 'JD Power'],
  },
  {
    slug: 'us-fast-charging-crosses-80000-ports-q3-2026',
    title: 'US Fast Charging Crosses 80,000 Ports for the First Time, and Tesla Built the Most of Them',
    description:
      'Operators added 4,106 fast-charging ports at 664 stations in Q3 2026, taking the US total to 80,964 ports across 14,614 locations, with Tesla new stations averaging 13.1 ports each.',
    date: 'October 26, 2026',
    dateISO: '2026-10-26',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The pace slowed from Q2, but new sites are getting bigger and more powerful. Tesla opened 11 locations with at least 24 stalls, the largest a 48-stall site in Fort Lauderdale.',
    body: [
      'According to Paren Q3 2026 report, cited by Electrek on October 13, 2026, operators added 4,106 fast-charging ports at 664 stations between July and September, bringing the US total to 80,964 ports across 14,614 locations. The country crossed the 80,000-port threshold for the first time. The pace slowed against the second quarter 4,618 new ports, but the composition of the new stations matters as much as the count: new sites are getting bigger and more powerful.',
      'Tesla own contribution fits that pattern. Its new third-quarter stations averaged 13.1 ports each, and the company opened 11 locations with at least 24 stalls, the largest being a 48-stall site in Fort Lauderdale, Florida, per the same Paren data. On Tesla NACS information page, the company states that Superchargers make up three out of four fast chargers in North America and that its connector standard has been adopted by all large automakers. The network now serves vehicles from Ford, Rivian, GM, Volvo, Polestar, Nissan, Lucid, Mercedes-Benz, Hyundai, Genesis, Kia, Honda, Acura, Jaguar Land Rover, Audi, Porsche, Toyota, Volkswagen, Subaru, BMW and Stellantis, per the Tesla list.',
      'That list is the quiet backdrop to the expansion story. Every port Tesla adds in the third quarter of 2026 is a port that Ford and Hyundai drivers can increasingly use natively, and the open-access commitment is why the Tesla buildout numbers now shape charging economics for the whole market, not just its own customers. The next question is not whether America can build 80,000 fast-charging ports, because it just did, but whether reliability, pricing and uptime at those ports keep pace with the count.',
    ],
    sources: ['Electrek', 'Paren'],
  },
  {
    slug: 'porsche-center-lock-do-not-drive-548-october-2026',
    title: 'Porsche Tells 548 Owners Not to Drive: Center-Lock Wheel Bolts Can Fracture and Let a Wheel Come Off',
    description:
      'Porsche expanded its center-lock wheel recall by 548 cars, all 2024 911 and 718 performance models, with a do-not-drive warning until dealers inspect them.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A fractured center-lock bolt can let a wheel detach. Owners should check their VIN now rather than wait for a December letter.',
    body: [
      'Porsche Cars North America is recalling 548 model-year 2024 sports cars because a center-lock wheel bolt may fracture and cause the wheel to detach, according to the National Highway Traffic Safety Administration. The recall carries a do-not-drive warning: owners are advised not to drive their vehicles until a dealer has inspected the wheel fastening system and replaced any incorrectly manufactured parts. The campaign number is 26V682, and the Porsche number for the recall is ATA1.',
      'The affected cars are all top-tier performance variants: 168 Carrera GTS models, 94 911 Turbo S models, 73 718 Cayman GT4 RS models, 70 718 Spyder RS models, 50 911 GT3 models, 41 911 GT3 RS models, 39 911 S/T models, and 13 911 Turbo models. The recall report says center-lock wheel components used in certain production ranges were manufactured out of specification and could fracture. This campaign expands a 2024 recall for the same problem, and reporting on the expansion says two additional field fractures in May and August 2026 prompted Porsche and its supplier to reopen the investigation and trace additional parts from the same material batch.',
      'Dealers will inspect the center-lock wheel fastening system and replace any incorrectly manufactured parts free of charge. Vehicle identification numbers in this population became searchable on NHTSA.gov on October 20, 2026, and owner notification letters are expected to be mailed December 15, 2026. Owners can also contact Porsche customer service at 1-800-767-7243. If a car on this list is still being driven, the safest step is to stop and arrange a tow to the dealer, because a wheel separation gives no reliable warning and leaves no margin for a gentle failure.',
    ],
    sources: ['Autoblog', 'NHTSA', 'Kelley Blue Book'],
  },
  {
    slug: 'audi-q4-etron-battery-fire-recall-9048-october-2026',
    title: 'Audi Recalls 9,048 Q4 e-tron EVs Over Battery Fire Risk and Tells Owners to Cap Charging at 80 Percent',
    description:
      'Audi recalls 9,048 Q4 e-tron EVs over a battery fire risk. Owners should limit charging to 80 percent until a repair is ready.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Until a permanent repair is ready, the interim instruction is simple: do not charge above 80 percent.',
    body: [
      'Volkswagen Group of America is recalling 9,048 Audi electric vehicles because their high-voltage batteries may fail and potentially cause a fire, according to a safety notice published October 21 on the NHTSA website. The recall covers certain 2024 and 2025 Audi Q4 e-tron and Audi Q4 Sportback e-tron vehicles, including vehicles produced through June 2025. The NHTSA campaign number is 26V698.',
      'The reported risk involves thermal propagation, the spread of a rapid and uncontrolled temperature increase inside the high-voltage battery, which the notice links to vehicles with a state of charge above 80 percent. Volkswagen said the cause remains under investigation and that some batteries in the affected vehicles may not meet the required quality standards. The company also said it is unaware of any claims, crashes, fires, injuries, or deaths associated with this issue. Because a permanent remedy is still under development, affected owners are advised to limit charging to 80 percent of battery capacity in the meantime.',
      'Owners should not wait for a letter to act on the interim instruction. Check the vehicle identification number in the NHTSA recall database to confirm whether a specific car is included, since not every Q4 e-tron from these model years is necessarily affected. A battery fire risk is the kind of defect where the interim guidance matters as much as the eventual repair, and charging to 80 percent costs little range for most daily driving while the fix is prepared.',
    ],
    sources: ['USA Today', 'NHTSA'],
  },
  {
    slug: 'ford-expedition-super-duty-headlight-recall-41748-october-2026',
    title: 'Ford Recalls 41,748 Expedition and Super Duty Trucks Over Headlights That Can Go Dark',
    description:
      'Ford recalls 41,748 Expedition and Super Duty trucks because a contaminated LED chip can knock out lights, including headlights.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A headlight that fails at night is a crash risk, not a cosmetic fault. Dealers will inspect and replace the assemblies free of charge.',
    body: [
      'Ford Motor Company is recalling certain 2025-2027 Expedition vehicles and 2026 F-250 Super Duty, F-350 Super Duty, F-450 Super Duty, and F-550 Super Duty vehicles because their headlight assemblies may contain a contaminated LED chip. The chip can cause a loss of daytime running lights, parking lights, high beams, or low beams. The vehicles therefore fail to comply with Federal Motor Vehicle Safety Standard number 108, which covers lamps, reflective devices, and associated equipment. The NHTSA number for the campaign is 26V606, and the Ford number is 26C43.',
      'The potential number of units affected is 41,748. Dealers will inspect the headlight assemblies and replace them as necessary, free of charge. Owner notification letters were expected to be mailed October 26, 2026, and vehicle identification numbers involved in the recall became searchable on NHTSA.gov the same day. That timing matters for buyers shopping used Expeditions and Super Duty trucks right now, because a VIN check will show this campaign immediately rather than months from now.',
      'Drivers should treat any flickering, dimming, or dead lamp on an affected truck as a reason to book the inspection promptly, especially before night driving or towing. Headlight failures are easy to dismiss in daylight and dangerous after dark, and a free dealer replacement removes the usual reason to put the repair off.',
    ],
    sources: ['NHTSA', 'Used Car News'],
  },
  {
    slug: 'subaru-crosstrek-forester-ball-joint-do-not-drive-8-october-2026',
    title: 'Subaru Issues Do-Not-Drive Warning for 8 Crosstrek and Forester SUVs Over a Suspension Joint That Can Separate',
    description:
      'Subaru recalls eight 2026 Crosstrek and Forester SUVs over a ball joint that may separate, with a do-not-drive warning.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Only eight vehicles are involved, but the warning is absolute: do not drive until the remedy is complete.',
    body: [
      'Subaru of America is recalling certain 2026 Crosstrek and Forester vehicles because the castle nut on the left-front lower control arm ball joint may be improperly fastened, which can lead to the ball joint separating from the lower control arm. A separated ball joint can cause a loss of vehicle control and increase the risk of a crash, and reporting on the recall notes that the failure can happen without warning. The NHTSA campaign number is 26V685, and the Subaru number is WRI26. The recall report reached NHTSA on October 19, 2026.',
      'The population is tiny, just eight vehicles across both models, with no per-model split published by NHTSA. Small does not mean unimportant here. When a recall carries a do-not-drive advisory, the manufacturer has judged that the failure mode is severe enough that even a handful of cars should stay parked. Owners are advised not to drive their vehicles until the remedy is completed.',
      'Dealers will inspect the left-front lower control arm ball joint assembly and replace it as necessary, free of charge. Owner notification letters are expected to be mailed December 16, 2026, and owners can contact Subaru customer service at 1-844-373-6614. Because the population is so small, an owner of a 2026 Crosstrek or Forester should check the VIN now rather than assume the car is unaffected: with eight cars in the whole country, guessing is not a strategy.',
    ],
    sources: ['NHTSA', 'Kelley Blue Book', 'Autoblog'],
  },
  {
    slug: 'ford-october-27-two-recalls-41746-october-2026',
    title: 'Ford Adds Two More NHTSA Recalls on October 27, Covering 30,123 and 11,623 Vehicles',
    description:
      'Reuters summaries published October 27 list two new Ford recalls covering 30,123 and 11,623 US vehicles.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 2,
    excerpt:
      'Two fresh Ford recall notices appeared on October 27. The counts are confirmed; the model and defect details were not in the public summaries reviewed.',
    body: [
      'Two new Ford recall notices from the National Highway Traffic Safety Administration were summarized by Reuters and published on October 27, 2026. One notice covers 30,123 US vehicles and was published at 07:10 UTC. The other covers 11,623 US vehicles and was published at 07:09 UTC. Together, the two notices cover 41,746 vehicles. The public summaries reviewed for this article listed the manufacturer, the vehicle counts, and the publication times, but did not include the affected models or the defect descriptions.',
      'That gap is worth stating plainly rather than filling with a guess. Ford has filed several distinct recalls in October 2026, including the 41,748-vehicle headlight recall, the 102,159-vehicle analog gauge recall, and earlier fuel-system and tire-pressure campaigns, and it would be wrong to attach one of those defects to these two new counts without the underlying NHTSA filing. Readers should treat these two notices as a prompt to check, not as a diagnosis.',
      'The practical step is the same for every Ford owner this month: enter the 17-character vehicle identification number at NHTSA.gov and see whether any open campaign applies to that specific vehicle. Recall repairs are free at dealers, and a VIN check takes less time than sorting out which October headline matches which truck.',
    ],
    sources: ['Reuters', 'TradingView'],
  },
  {
    slug: 'ram-outsells-jeep-q3-2026-october-2026',
    title: 'Ram Passes Jeep in Q3 Sales for the First Time This Year as the 1500 Jumps 73 Percent',
    description:
      'Stellantis US sales were flat in Q3 at 324,277, but Ram rose 29 percent to 134,072 while Jeep fell 20 percent to 128,542, putting Ram ahead by 5,530 vehicles.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Ram was supposed to pass Jeep by 2030. On Q3 numbers, it just did, years early and on trucks it already sells.',
    body: [
      'Stellantis reported US sales of 324,277 vehicles in the third quarter of 2026, essentially flat against 324,825 a year earlier, with year-to-date sales up 3 percent to 958,463. Inside that flat headline, the brand split was dramatic. Ram sold 134,072 vehicles, up 29 percent, while Jeep sold 128,542, down 20 percent. Ram finished the quarter 5,530 vehicles ahead of Jeep, the first time this year that Stellantis top-selling brand has been pushed into second place.',
      'One truck did most of the work. Ram 1500 sales rose 73 percent to 76,650, from 44,349 a year earlier, and all Ram pickups together rose 34 percent to 117,757. Reporting on the quarter notes that Ram 1500 retail sales rose 42 percent, well below the 73 percent total gain, which means fleet sales grew faster than retail even though retail growth was real. On the Jeep side, the Wrangler grew 5 percent to 44,757 and the new Cherokee Hybrid added 10,344 sales from almost nothing, but the Grand Cherokee fell 30 percent to 38,027 and the Compass fell 62 percent to 10,811, a combined loss of more than 33,000 sales that neither bright spot could cover.',
      'The timing upends the company own plan. Stellantis targets cited in reporting call for Ram to reach roughly 825,000 North American sales by 2030, about 85,000 more than the Jeep goal, on the strength of a lineup that does not exist yet, including a new midsize Dakota pickup. Instead, the crossover is happening now with the trucks Ram already sells. Chrysler also grew, with Pacifica sales up 6 percent to 34,491, and Dodge was up 2 percent to 26,546, but neither brand changes the story: for the first time in 2026, Stellantis in America is a Ram company first.',
    ],
    sources: ['Stellantis', 'Autoblog'],
  },
  {
    slug: 'waymo-las-vegas-airport-harry-reid-october-2026',
    title: 'Waymo Starts Driverless Airport Rides in Las Vegas at Harry Reid International',
    description:
      'Waymo began driverless airport rides in Las Vegas on October 21, using zones on the Ground Zero Level of Terminals 1 and 3.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Current Las Vegas riders get airport access first. Las Vegas becomes the sixth major airport in the Waymo network.',
    body: [
      'Waymo began offering driverless rides to and from Harry Reid International Airport in Las Vegas on Wednesday, October 21, 2026. Pickups and dropoffs are at dedicated autonomous-vehicle zones on the Ground Zero Level of Terminal 1 and Terminal 3. Access starts with current Waymo riders in Las Vegas, with the company saying it will gradually welcome more riders over time before opening to everyone. Riders can travel anywhere in the current 24-square-mile Las Vegas service area.',
      'Las Vegas is a fast-moving robotaxi market. Public rides in the city only began in September 2026, and the airport is now the sixth major airport in the Waymo network, after Phoenix Sky Harbor, Nashville, San Antonio, San Francisco, and San Jose. Competition is already at the curb: Amazon Zoox already serves the airport, and reporting on the launch notes that Nevada regulators approved permits in August that will let Tesla and Uber put thousands of robotaxis on Las Vegas streets over the next year.',
      'Airports are a revealing test for driverless services because they combine tight curbs, heavy luggage, flight-timed demand peaks, and passengers who cannot afford a missed pickup. A dedicated zone on a single level, rather than a general curb, is the practical compromise that lets an airport say yes without redesigning its terminals. If the Las Vegas rollout holds up through holiday travel, expect other airports to copy the zone model rather than debate the technology.',
    ],
    sources: ['Tesla News Wire', 'TechCrunch'],
  },
  {
    slug: 'tesla-robotaxi-texas-registry-769-october-2026',
    title: 'Tesla Robotaxi Registry Tally Hits 769 in Texas, Still Trailing Waymo as NHTSA Answers Come Due October 30',
    description:
      'Texas registry data put the Tesla robotaxi fleet at 769 vehicles by October 26-27, with 349 Cybercabs, still trailing Waymo.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Tesla is adding cars fast, but the independent registry count still trails Waymo, and the Cybercab certification file is due October 30.',
    body: [
      'By October 27, 2026, Texas registry data cited by trackers put the registered Cybercab count at 349. Reports based on Texas registry data put the combined Tesla autonomous-vehicle fleet, including Cybercabs and Model Y robotaxis, at roughly 739 vehicles in an October 9-10 snapshot, compared with approximately 1,185 for Waymo. By October 26-27, a further 30 Cybercabs were reported, taking the registry total to 769. Tesla own public figure is 300-plus Cybercabs serving Austin, and trackers caution that the company figure has not been independently verified and no government agency has published its own audited count of active, revenue-generating Cybercabs.',
      'The regulatory calendar is now as important as the fleet count. Reports indicate that the National Highway Traffic Safety Administration opened an audit query into how Tesla certifies that the Cybercab meets federal safety requirements, with Tesla sworn responses reportedly due by October 30, 2026. Reporting stresses that this is a standard regulatory inquiry process and does not, on its own, indicate a finding of a safety defect. The Cybercab is a two-seat vehicle built without a steering wheel or pedals, accessed only through the Tesla Robotaxi app, with no manual driving fallback inside the vehicle.',
      'The commercial plan still points to Dallas next. Tesla said on October 21 that it plans to launch Cybercab service in Dallas in November 2026, after Austin, and it already operates supervised Model Y robotaxi service in Dallas and Houston. The gap between the registry count and the company count is the number to watch: if Dallas launches on schedule, the registry should show it within weeks, with or without a company announcement.',
    ],
    sources: ['Tech Insider', 'Tesla'],
  },
  {
    slug: 'tesla-robotaxi-weekly-mileage-waymo-chase-october-2026',
    title: 'Tesla Robotaxi Mileage Is Climbing Fast Enough That One Forecast Has It Passing Waymo in About 11 Weeks',
    description:
      'A forecast says Tesla weekly robotaxi mileage could pass Waymo in about 11 weeks if 20 percent weekly growth holds.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The forecast is arithmetic, not a promise. It shows how fast Tesla weekly mileage is compounding, and how careful the comparison needs to be.',
    body: [
      'On October 24, electric vehicle outlet CleanTechnica forecast that if recent growth holds, Tesla weekly autonomous robotaxi mileage could surpass Waymo total weekly US mileage in about 11 weeks. The analysis estimated recent Tesla weekly autonomous mileage at about 558,000 miles, up from about 250,000 miles in the previous quarter, with a later company figure reaching 3.3 million miles. Applying a 20 percent weekly compound growth rate to the weekly estimate would put Tesla above Waymo weekly mileage of around 4 million miles in about 11 weeks, and the same analysis said Tesla could exceed half of the combined weekly paid passenger miles of Uber and Lyft across three major Texas cities around mid-February next year.',
      'The Austin comparison is the sharpest part of the forecast. Tesla weekly autonomous mileage in Austin was tallied at 437,800 miles, against about 406,000 miles a week for Waymo as of the second quarter of 2026. Waymo cumulative passenger-only autonomous mileage stood at 271.3 million miles as of the end of June 2026, with a second-quarter increase of about 50.7 million miles, up about 1.6 percent from 49.9 million miles in the first quarter. Phoenix declined for a second straight quarter, Austin quarterly growth fell to about 4 percent from more than 100 percent in early 2025, and Los Angeles and San Francisco grew about 9 percent and 13 percent respectively.',
      'The honest caveat comes from the forecast itself: the Austin and Waymo figures cover different measurement periods, making a direct comparison hard to treat as exact. A 20 percent weekly growth rate also cannot compound forever, since it depends on vehicle supply, city approvals, and demand at every step. What the forecast does establish is momentum. Tesla went from a standing start in Austin to a weekly mileage figure in the same range as Waymo in one city, and the question for the next quarter is whether that compounding survives contact with winter demand and the Dallas launch.',
    ],
    sources: ['CleanTechnica', 'Digital Today'],
  },
  {
    slug: 'flying-car-field-zero-faa-type-certificates-october-2026',
    title: 'Flying Cars in October 2026: Four Big Approaches, Zero FAA Type Certificates',
    description:
      'Tesla, Joby, Archer, Alef, and XPeng flying vehicles are all still demonstrations in October 2026, with zero FAA type certificates.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 4,
    excerpt:
      'The flying car industry in October 2026 is still an industry of demonstrations, not deliveries. Certification is the gap between every demo and a product.',
    body: [
      'Laid out side by side, the flying car field splits into three different bets. Tesla is building a road car with a stunt system: compressed-air or cold-gas thrusters derived from SpaceX work, used for a few seconds of dramatic lift, flip, and landing in a closed-site demonstration. No aviation certification has been sought for the Roadster system, the demo was invite-only and not approved for public road use, and Tesla has not confirmed a final purchase price, a delivery date, or whether the thruster system shown at McGregor will ship on customer vehicles. The 2028 production start mentioned by Elon Musk is a target, not a delivery schedule.',
      'Joby Aviation and Archer Aviation are building purpose-built air taxis, not road cars. Joby S4 is a five-seat tilting-rotor electric aircraft, reportedly in FAA Stage 5, the Show and Verify stage, with FAA-conforming aircraft flying and more than 9,000 test miles reported in 2025, but no type certificate yet and no paying passenger service. Archer Midnight is also a five-seat electric aircraft, with FAA Phase 3 complete and Phase 4 compliance underway, and the FAA having accepted 100 percent of its proposed means of compliance. Archer is targeting readiness before the 2028 Olympics, but it too has no type certificate and no commercial passenger service yet.',
      'Alef Aeronautics and XPeng AeroHT are trying to merge the car and the aircraft into one object. Alef Model A is a two-seat roadable vehicle with distributed electric propulsion, holding an FAA Special Airworthiness Certificate for exhibition and research only, which is not the same as a type certificate authorizing sale to the public. XPeng AeroHT uses a split-body design with a separable flight module, with demonstration flights reported and no confirmed full type certification date. The honest summary of the whole field as of October 2026 is four firms and zero FAA type certificates, which is why every flying car headline this month should be read as a demonstration report, not a delivery announcement.',
    ],
    sources: ['Tech Insider'],
  },
  {
    slug: 'kia-ev6-2027-pricing-ev3-gap-october-2026',
    title: '2027 Kia EV6 Holds Its Price at $37,900, a Full $8,000 Above the New EV3',
    description:
      'Kia kept 2027 EV6 pricing unchanged, with the base Light at $37,900, while the new EV3 starts at $29,890.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The EV6 did not get cheaper for 2027. Instead, Kia created the price gap from below, with the new EV3 starting at $29,890.',
    body: [
      'Kia announced 2027 EV6 pricing with the model carried over from last year and prices unchanged across all trims. The base EV6 Light standard-range rear-wheel-drive model starts at $37,900, not including the $1,545 destination fee, with a 63 kWh battery and up to 237 miles of range. The Light long-range rear-wheel-drive model costs $41,200 and delivers up to 319 miles from an 84 kWh battery. The rest of the lineup runs from $44,800 for the Wind rear-wheel-drive model to $53,000 for the GT-Line all-wheel-drive model, with all-wheel-drive range up to 295 miles and GT-Line all-wheel-drive range up to 270 miles.',
      'The price story is really the EV3 story. After reducing prices on the 2026 EV6 by $5,000 just a few months earlier, Kia held the 2027 EV6 steady and launched the new EV3 at $29,890, about $8,000 less than the EV6. The entry-level EV3 Light front-wheel-drive model uses a 58.3 kWh battery with an EPA-estimated range of up to 221 miles, and the EV3 is available in five trims: Light, Wind, Land, GT-Line, and GT. Kia said the unchanged EV6 price plus the new EV3 is about making electric vehicles more attainable for buyers who embrace the fully electric lifestyle.',
      'For shoppers, the comparison is now a range-versus-price trade rather than a trim-versus-trim puzzle. The EV3 saves about $8,000 and gives up about 16 miles against the base EV6 and about 98 miles against the long-range EV6. Buyers who drive mostly in town may never notice the smaller battery, while buyers who regularly drive long highway stretches will feel the 319-mile long-range EV6 in a way no discount erases.',
    ],
    sources: ['Electrek', 'Kia'],
  },
  {
    slug: 'mustang-mach-e-2027-big-battery-standard-october-2026',
    title: 'Every 2027 Mustang Mach-E Gets the Big Battery, and Most Versions Get Cheaper',
    description:
      'Ford made the extended-range battery standard on every 2027 Mustang Mach-E, starting at $39,995, with most versions cheaper.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'A bigger battery and lower prices on most versions show how hard an electric SUV has to work for buyers a year after the federal tax credit ended.',
    body: [
      'Every 2027 Mustang Mach-E gets the extended-range battery, with 88 kWh usable in the Select and Premium models and 91 kWh in the GT and Rally models, and prices start at $39,995 before destination. Reporting on the announcement says every version except the rear-drive Select costs $2,300 to $3,050 less than before. Orders opened October 22, and EPA range figures had not been announced yet at the time of reporting, so buyers should treat the battery size as the confirmed change and wait for the official range rating before comparing road-trip ability.',
      'The lineup also adds a light off-road option. A new $2,295 Trail package for the all-wheel-drive Select adds a small lift, the Rally 19-inch wheels, and Michelin CrossClimate 2 all-weather tires, from the first quarter of 2027. That package sits in a different place from a dedicated off-road trim: it is a factory option that makes a mainstream electric SUV a little more capable on dirt and snow, rather than a separate model with its own powertrain.',
      'The pricing move is the point. A year after the federal tax credit ended, an electric SUV cannot rely on a tax incentive to close the gap with a gasoline rival, so Ford is closing it with a bigger standard battery and lower prices on most versions. The rear-drive Select is the exception that proves the rule: it keeps the lineup entry price in reach while the rest of the range gets cheaper for more battery.',
    ],
    sources: ['Motor1', 'Carveyance'],
  },
  {
    slug: 'hyundai-kona-ioniq5-2027-pricing-october-2026',
    title: 'Hyundai 2027 Pricing: Kona Starts at $25,500 Without Stop-Start, Ioniq 5 Starts at $35,250',
    description:
      'Hyundai lists the 2027 Kona from $25,500 without stop-start on the SE, and the Ioniq 5 from $35,250.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Two small 2027 changes matter more than a new wheel design: the Kona SE loses stop-start, and the Ioniq 5 gates HomeLink behind the top trim.',
    body: [
      'Hyundai US specifications list 2027 Kona starting prices of $25,500 for the SE, $26,825 for the SEL Sport, $28,425 for the SEL Premium, and $32,535 for the Limited, before freight, taxes, fees, and options. The step from SEL Sport to SEL Premium is $1,600 and buys the stronger engine plus additional equipment, while the Limited costs another $4,110 above SEL Premium. For shoppers who dislike automatic stop-start, the least expensive SE is the version with the explicitly confirmed deletion, a small model-year change that can matter more in everyday driving than a styling tweak.',
      'The 2027 Ioniq 5 pricing ladder starts at $35,250 for the SE Standard Range, then $37,750 for the SE, $40,200 for the SEL, $45,225 for the Limited, and $46,525 for the all-wheel-drive XRT, again before freight, taxes, fees, and options. The SE costs $2,500 more than the SE Standard Range and adds 73 miles of EPA-estimated range in rear-drive form. The SEL is the new entry point for roof rails, but buyers who want factory-integrated HomeLink must step up to the Limited, a distinction worth checking on the specific vehicle window sticker.',
      'Availability is the caveat on the Ioniq 5. Hyundai US model page currently says the 2027 Ioniq 5 is sold only in select states, so shoppers should check local availability before treating a listed configuration and price as an in-stock choice. The Kona, by contrast, is a mainstream compact SUV with a straightforward ladder, and the SE stop-start deletion gives budget buyers a genuine reason to pick the base trim rather than feeling pushed up the range.',
    ],
    sources: ['Hyundai', 'We Talk Cars'],
  },
  {
    slug: 'toyota-camry-2027-price-increase-700-october-2026',
    title: '2027 Toyota Camry Costs $700 More Across the Board, With the Same Hybrid Lineup',
    description:
      'Toyota announced 2027 Camry pricing on October 13, with every trim $700 more than its 2026 counterpart and the base LE starting at $29,700 before destination.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Pay more, get nothing new, at least on paper. Against its hybrid rivals, the math still works for the Camry.',
    body: [
      'Toyota announced pricing for the 2027 Camry on October 13, and the only thing that changed is the number on the window sticker. Every trim costs $700 more than its 2026 counterpart once the carryover $1,295 destination fee is added, with the base LE now starting at $29,700 before destination. The hybrid powertrain, the five-trim lineup, and the feature set all carry over untouched, and the Camry remains a hybrid-only sedan.',
      'On its face, that is a tough sell: pay more and get nothing new. Run the pricing against the closest hybrid-only rivals, however, and the increase looks less painful. Reporting on the announcement notes that the Camry still undercuts the Honda Accord Hybrid by thousands of dollars and only trails the Hyundai Sonata Hybrid by a few hundred, all while posting better fuel economy than either rival. That comparison is analysis from the reporting outlet, not a Toyota claim, but it explains why a carryover car can raise its price without losing its value argument.',
      'The broader lesson is about what hybrid buyers are actually paying for in 2027. With the sedan market shrinking and hybrid demand strong, Toyota does not need a redesign to hold Camry pricing power. It needs the car to stay cheaper than the Accord Hybrid, close to the Sonata Hybrid, and more efficient than both, and on those three tests the $700 increase does not change the verdict.',
    ],
    sources: ['Toyota', 'TopSpeed'],
  },
  {
    slug: 'toyota-crown-signia-2027-pricing-october-2026',
    title: '2027 Toyota Crown Signia Starts at $44,890, and the Top Trim Hides a $200 Increase Behind a $2,065 Headline',
    description:
      'The 2027 Crown Signia Limited rises $2,065 on paper, but only $200 versus a similarly equipped 2026 model.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The headline increase is misleading. The Limited folds last year optional tech package into the base price, so the real increase is $200.',
    body: [
      'For 2027, the top-of-the-line Crown Signia Limited comes with a surround-view camera, lane change assist, Toyota Traffic Jam Assist system, front cross-traffic alert, exterior mirrors with puddle lights and a reverse tilt-down feature, and front and rear parking assist with automatic emergency braking. The Limited trim used to start at $50,685, with the Advanced Tech Package costing a further $1,865, for a fully loaded 2026 price of $52,550. In 2027, the fully loaded Limited costs $52,750. The trim price therefore rises $2,065 on paper, but only $200 against a similarly equipped 2026 model, because the optional package is now standard equipment.',
      'The rest of the range starts at $44,890, and the Limited also adds a fixed glass panoramic roof, an 11-speaker JBL sound system with subwoofer, a digital rearview mirror, rain-sensing wipers, and 21-inch wheels in place of the XLE 19-inch set, with two-tone paint pairing a black roof with colors including Finish Line Red or Oxygen White available. Every 2027 Crown Signia carries standard all-wheel drive and a hybrid powertrain rated at 38 mpg combined, with Toyota 36-month and 36,000-mile basic warranty, 60-month and 60,000-mile powertrain cover, hybrid components protected for 8 years or 100,000 miles, and the hybrid battery covered for 10 years or 150,000 miles.',
      'In its class, the Crown Signia is one of the pricier two-row midsize hybrid SUVs, costing more than the Mazda CX-70, Jeep Grand Cherokee, Nissan Murano, Subaru Outback, Chevrolet Blazer, and Volkswagen Atlas Cross Sport, while the Honda Passport is one of the few rivals that costs more. The value case is therefore not about being cheap. It is about a car-like driving position, standard all-wheel drive, and a longer standard features list, without paying for a third row the buyer does not need.',
    ],
    sources: ['Toyota', 'CarsDirect'],
  },
  {
    slug: 'under-30000-hrv-corolla-cross-2027-october-2026',
    title: 'Honda HR-V and Toyota Corolla Cross Lead the Shrinking Under-$30,000 Class for 2027',
    description:
      'Eleven new cars can still be bought for under $30,000 in 2027, including the Honda HR-V from $26,600 and the Toyota Corolla Cross from $25,535 before delivery.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The under-$30,000 class is shrinking, but two small SUVs still anchor it, and both leave room for all-wheel drive or a higher trim before the ceiling.',
    body: [
      'Eleven new cars can still be bought for under $30,000 in 2027, according to a roundup of the remaining affordable class, and two small SUVs show how tight the math has become. The Honda HR-V LX starts at $26,600, with a $1,550 destination charge bringing the suggested delivered price to $28,150. The Sport front-wheel-drive model starts at $28,400, or $29,950 including destination, while the all-wheel-drive LX reaches $29,650 including destination. Honda lists a 158-horsepower engine, a nine-inch touchscreen, wireless Apple CarPlay and Android Auto, and Honda Sensing driver-assistance technology.',
      'The Toyota Corolla Cross is the cheaper entry point. Toyota official October 2026 announcement puts the 2027 Corolla Cross L front-wheel-drive model at $25,535 before delivery charges, noticeably lower than preliminary pricing roundups had suggested. The compact SUV offers 169 horsepower from its gasoline powertrain, with front-wheel drive or available all-wheel drive, plus a raised seating position, flexible cargo area, and folding rear seats. The hybrid lineup sits outside the under-$30,000 gate, starting at $31,415.',
      'The lesson for budget shoppers is to watch the delivered price, not the headline price. The HR-V LX looks like a $26,600 car and costs $28,150 delivered, leaving just $1,850 of headroom before $30,000, and the Corolla Cross looks cheaper still until delivery charges are added. Both cars still qualify, but neither leaves much room for options, which is exactly why the under-$30,000 list has shrunk to eleven models.',
    ],
    sources: ['Mens Journal', 'Toyota', 'Honda'],
  },
  {
    slug: 'october-payment-record-823-jd-power-october-2026',
    title: 'October New-Car Payment Hits a Record $823 Even as Prices Stay Flat, J.D. Power Forecasts',
    description:
      'J.D. Power forecasts an average October new-vehicle payment of $823, a record for the month, with prices flat.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Prices stopped rising and incentives rose, yet the payment went up anyway, because rates rose and loans stretched longer.',
    body: [
      'The average monthly payment on a new vehicle financed in October 2026 will be $823, up 2.6 percent and the highest ever for an October, according to a J.D. Power and GlobalData forecast published October 22. The average transaction price barely moved, at $46,329, down 0.1 percent from a year earlier, and incentives rose 13.1 percent to $3,304 per vehicle. Sales are holding up in the forecast, with 1,327,100 new vehicles expected to be sold in October at a seasonally adjusted annual pace of 15.6 million, unchanged from a year ago.',
      'A payment has three parts: the amount borrowed, the interest rate, and the length of the loan. With prices flat, the amount borrowed hardly moved. The rate did, rising to an average of 6.81 percent, the highest for an October since 2023. More buyers are also stretching the loan to bring the monthly number down: 13.3 percent of new-vehicle loans now run 84 months or longer, up 0.9 points from a year earlier. Those buyers pay less each month and more interest overall. Already, 29.6 percent of trade-ins carry negative equity, meaning the owner owes more than the car is worth, and that debt often gets rolled into the next loan.',
      'The sales mix in the forecast shows where demand is moving. Hybrids account for 18.6 percent of retail sales, up 4.0 points, while electric vehicles account for 6.9 percent, down 0.3 points. Readers should not confuse this October forecast with the Edmunds third-quarter figures, which put the average new-car payment at $787 on a different dataset and period. Both datasets point the same way, but the J.D. Power October number is a forecast for one month, not a quarterly average, and the record it sets is specifically an October record.',
    ],
    sources: ['J.D. Power', 'GlobalData', 'Carveyance'],
  },
  {
    slug: 'buyers-shift-smaller-vehicles-50562-september-october-2026',
    title: 'Buyers Are Downsizing as the Average New-Car Price Nears Its Record at $50,562',
    description:
      'Kelley Blue Book put the September average new-car price at $50,562, just $52 below the December 2025 record.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Shoppers are not waiting for prices to fall. They are buying smaller cars, and the data shows the shift across nearly every high-volume segment.',
    body: [
      'New vehicle prices sit near all-time highs even as shoppers shift toward compact cars and smaller SUVs. The average transaction price hit $50,562 in September, just $52 below the record set in December 2025, according to Kelley Blue Book data reported in October. Cox Automotive executive analyst Erin Keating told Business Insider that customers continue to show they are willing to adapt by moving to smaller vehicles, like sedans or smaller-sized SUVs, rather than paying for the big trucks and loaded crossovers that dominated dealer lots in recent years.',
      'The segment data backs up the shift. Compact cars saw prices rise 3.2 percent year over year to $27,977, while subcompact SUVs climbed 1.5 percent to $31,213. Four of the five highest-volume segments posted gains above the industry average, with compact SUVs the exception, falling 0.4 percent to $37,614. Used car prices tell a parallel story: the average listed price for a used vehicle stood at about $29,000 in mid-October with typical mileage around 66,500, per Visor data, which separately lists an average used asking price of $28,867 at 67,542 miles. Cheap cars sell fast, with vehicles priced between $5,000 and $10,000 spending an average of 25 days on dealer lots in the second quarter, the fastest of any price range, according to Edmunds.',
      'Affordability pressure runs deep in the used market as well. Vehicles priced below $20,000 made up just 31.8 percent of used sales in the second quarter of 2026, against 55.2 percent in 2019, according to Edmunds data cited in reporting. Cars in the $10,000 to $15,000 range now average nearly 100,000 miles and almost nine years old. The market is not collapsing, but it is sorting itself: new-car buyers downsize, used-car buyers accept older and higher-mileage cars, and the cheapest cars that do appear sell first.',
    ],
    sources: ['Kelley Blue Book', 'Cox Automotive', 'Edmunds', 'Visor'],
  },
  {
    slug: 'china-launches-hongqi-roewe-jetta-october-2026',
    title: 'China Launch Wave: Hongqi G919, Roewe Jiayue 07, and Jetta First Electric Sedan Arrive in One Week',
    description:
      'Three Chinese-market launches landed October 22-25, from the Hongqi G919 at up to CNY 429,800 to the Jetta M6 from CNY 79,800.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Luxury off-road, mid-size family SUV, and budget electric sedan, all in one week, show how broad the Chinese new-energy market has become.',
    body: [
      'On October 25, FAW Hongqi announced the official launch of the all-new Hongqi G919 luxury range-extended off-road SUV. The model is available in three variants, including one limited edition, with prices ranging from CNY 349,800 to CNY 429,800. The G919 measures 5,135 mm in length, 2,050 mm in width, and 1,950 mm in height, placing it firmly in the full-size off-road class that Chinese luxury buyers now expect to come with a range-extended powertrain rather than a conventional large engine alone.',
      'Two days earlier, on October 23, SAIC Roewe announced the official launch of the all-new Jiayue 07 mid-to-large range-extended SUV, available in four variants with prices ranging from CNY 119,800 to CNY 144,800. The model was jointly developed by SAIC Roewe and Beijing Volcano Engine Technology, the technology arm whose name reflects the Chinese tech industry push into vehicle software and intelligence. The Jiayue 07 sits in the heart of the family SUV market, where range-extended powertrains offer electric driving for daily use with a gasoline range extender for longer trips.',
      'The budget end of the week came on October 22, when Jetta announced the official launch of the all-new Jetta M6 battery-electric sedan, available in three variants with prices ranging from CNY 79,800 to CNY 99,800. Designed for families seeking new-energy vehicles, the M6 is the Jetta brand first battery-electric vehicle. The same week, renovation work for the VW316 project began on October 22 at FAW-Volkswagen Tianjin Super Factory, aimed at enabling production of that plant first battery-electric model. Together, the four items trace a single pattern: luxury, family, and budget segments all moving to electrified powertrains at the same time.',
    ],
    sources: ['MarkLines', 'FAW Hongqi', 'SAIC Roewe', 'Jetta'],
  },
  {
    slug: 'volkswagen-restructuring-oneteam-audi-plant-october-2026',
    title: 'Volkswagen Pushes a Sweeping Restructuring Under Blume as Audi U.S. Plant Plan Advances',
    description:
      'Volkswagen is merging software units into OneTeam and cutting pay and jobs, while advancing a $4.2 billion Audi plant plan.',
    date: 'October 27, 2026',
    dateISO: '2026-10-27',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The restructuring pairs a software consolidation with real pay cuts, while the Audi plant plan shows where Volkswagen still intends to spend.',
    body: [
      'Volkswagen is advancing a sweeping restructuring under chief executive Oliver Blume, merging software units into a single OneTeam organization and building an artificial intelligence stack, while cutting variable pay, special payments, benefits, and jobs from the fourth quarter, according to Reuters reporting summarized in a weekly recap. There will be no base pay rises, and affected staff face about a 10 percent real income drop after inflation. Relations with labour representatives have worsened, highlighting tensions inside the reorganization, and wage talks are set to resume in Emden on November 24 and in Zwickau on December 15.',
      'The spending side of the story is the Audi plant plan. Audi plans a $4 billion to $4.2 billion US plant near Macon, Georgia, starting in 2027 with production in the early 2030s, at about 200,000 SUVs of annual capacity and about 4,500 jobs. The investment still needs Volkswagen board approval, so it should be read as an advanced plan rather than a finalized factory. A separate weak spot is the VW-Xpeng ID. UNYX 08, which sold about 267 units per month from April to August against a target of about 3,600, with the company citing distribution and sales challenges in China as it rebuilds market traction.',
      'The sales backdrop explains the urgency. September EU new-car registrations fell, with the Volkswagen Group selling 231,474 cars in September, down 4.1 percent year over year, while holding about 26.2 percent market share year to date. A company that still commands more than a quarter of the European market does not restructure out of weakness alone, but the combination of a soft September, a struggling China model, and a multi-billion-dollar US plant plan shows a group trying to fund its future in America and software while cutting costs at home.',
    ],
    sources: ['Reuters', 'TradingView'],
  },
  {
    slug: 'stellantis-q3-2026-loss-503m-tariffs-october-2026',
    title: 'Stellantis Posts $503 Million Q3 Loss, Expects $1.1 Billion in Tariff Costs',
    description:
      'Stellantis lost $503 million in Q3 2026 on €37.6 billion in revenue, reaffirmed guidance, and warned tariffs will cost $1.1 billion.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'A smaller loss than last year, but still a loss — and tariff and chip costs are still climbing into Q4.',
    body: [
      'Stellantis reported a net loss of $503 million (€0.5 billion) for the third quarter of 2026, alongside net revenues of €37.6 billion, up 1% year over year, the company announced October 28. Adjusted operating income improved to €0.3 billion, a 0.7% margin, and the loss was a 90% improvement on the prior-year quarter, which had been hit by significant items. The company reaffirmed its full-year 2026 guidance, including positive industrial free cash flow in 2027.',
      'The regional picture was mixed. Net revenues rose 3% in both Enlarged Europe and South America, but fell 3% in North America on lower volumes from planned production downtime, 19% in the Middle East and Africa, and 7% in Asia Pacific. Consolidated shipments slipped 1% to 1,286,000 vehicles. Chief executive Antonio Filosa said the FaSTLAne 2030 plan is gaining traction, with at least 40% of its $6.7 billion annual cost-savings target — about $2.6 billion — on track by year-end.',
      'The warning for the rest of the year is cost, not demand: Stellantis expects to spend $1.1 billion on tariffs, and flagged additional fourth-quarter costs from pricey computer chips and rising recall expenses. The stock had fallen below $4 a share earlier in October, an all-time low since the merger, so the Q3 print matters less as a single quarter than as a test of whether Filosa’s turnaround plan can convert a narrowing loss into an actual profit.',
    ],
    sources: ['Detroit Free Press', 'Stellantis', 'GlobeNewswire'],
  },
  {
    slug: 'ford-us-sales-fall-66-percent-q3-2026-october-2026',
    title: 'Ford U.S. Sales Fall 6.6% in Q3 Ahead of October 28 Earnings',
    description:
      'Ford sold 509,764 vehicles in the U.S. in Q3 2026, down 6.6%, ahead of its earnings call after the close on October 28.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Headline sales fell, but Ford says the adjusted picture is flat — and retail share actually rose.',
    body: [
      'Ford sold 509,764 vehicles in the United States in the third quarter of 2026, down 6.6% from a year earlier, the company reported ahead of its Q3 earnings event scheduled for 5 p.m. ET on Wednesday, October 28. Ford said sales volume was essentially unchanged after adjusting for the planned phase-outs of the Escape and Corsair, against an industry decline of about 1% on the same adjusted basis.',
      'The detail that matters for dealers is share, not just volume: Ford estimated its adjusted retail share at 12.1%, up about 0.4 percentage points from a year earlier. “We delivered a solid quarter and continued to gain retail share adjusted for the planned sunset of Escape and Corsair,” said Andrew Frick, president of Ford Blue and Model e. A short-term supplier issue affected F-150 production at the end of September, but Ford said the expected financial impact sits within its 2026 adjusted EBIT outlook of $10 billion to $11 billion, raised on July 28.',
      'Wall Street expectations going into the call cluster around $0.39 to $0.41 in earnings per share on revenue near $49.08 billion, against $0.45 and $50.53 billion a year earlier — forecasts, not Ford guidance. The company’s full-year adjusted free cash flow outlook remains $6 billion to $7 billion. Tonight’s call will show whether the retail-share gain and the cost story outweigh the headline sales decline.',
    ],
    sources: ['TokenPost', 'MarketBeat', 'Ford'],
  },
  {
    slug: 'toyota-sienna-hybrid-seat-back-recall-228367-october-2026',
    title: 'Toyota Recalls 228,367 Sienna Hybrids Over Seat Backs That Can Disengage in a Crash',
    description:
      'Toyota is recalling 2022–2026 Sienna Hybrids because a second-row seat back can disengage in certain frontal crashes.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A seat back that does not stay locked cannot restrain its occupant — dealers will fix it free, by software or by new seat backs.',
    body: [
      'Toyota is recalling 228,367 Sienna Hybrid seven-passenger vehicles in the United States, covering the 2022–2026 model years, the National Highway Traffic Safety Administration posted on October 27. In certain frontal crashes, the force from the seat-belt pretensioner can move the second-row seat recliner mechanism, and under specific conditions that movement can disengage the seat back from its locked position.',
      'If the seat back is not securely locked, it may fail to properly restrain an occupant during a crash, increasing the risk of injury. Most affected vehicles will receive a free update to the supplemental restraint system electronic control unit software at dealers. Vehicles fitted with the Mobility as a Service package use different seat hardware and will instead receive free replacement of both second-row seat backs.',
      'Toyota plans to mail owner notification letters on December 7, 2026. Owners do not need to wait for the letter: check the VIN in NHTSA’s recall database or call Toyota at 1-800-331-4331, and schedule the free remedy. This is a large, mainstream-family-vehicle recall, and the fix is straightforward — the risk is in delay, not in the repair itself.',
    ],
    sources: ['NHTSA', 'Particle News', 'Claims Journal'],
  },
  {
    slug: 'koenigsegg-cc850-recall-all-seven-us-cars-october-2026',
    title: 'Every Koenigsegg CC850 in America Is Recalled — All Seven of Them',
    description:
      'Koenigsegg recalled all seven U.S.-delivered CC850 hypercars after one rolled away when its parking brake failed to stay engaged.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Seven cars, one recall, one very expensive rollaway: the CC850’s electronic parking brake can fail to stay engaged.',
    body: [
      'Koenigsegg has recalled every CC850 delivered to the United States — a grand total of seven cars — after a report of unintended vehicle movement, Autoblog reported October 27. The Swedish hypercar, priced at over $3 million, is one of the rarest cars on American roads, so a seven-car recall is, in this case, the entire American fleet.',
      'The issue is a software fault: under a specific combination of circumstances, the car’s electronic parking brake may fail to remain engaged. Koenigsegg filed the voluntary safety recall with NHTSA last week. A parking brake that releases on its own is dangerous at any price, but on a car this powerful and this low-volume, the fix will almost certainly be handled car by car, with the manufacturer in direct contact with each owner.',
      'The recall is a useful reminder that recalls are not only a mass-market phenomenon. Small-volume manufacturers face the same NHTSA process, and a defect affecting seven cars gets the same federal filing as one affecting seven hundred thousand. Owners of affected CC850s should contact Koenigsegg directly and not rely on the parking brake alone until the software remedy is applied.',
    ],
    sources: ['Autoblog', 'NHTSA'],
  },
  {
    slug: 'volkswagen-audi-ev-recall-80-percent-charge-october-2026',
    title: 'Volkswagen’s EV Battery Recall Spreads to Audi — Owners Told to Stop at 80% Charge',
    description:
      'Audi joined Volkswagen’s EV battery recall, telling owners to cap charging at 80% until a remedy is ready; campaign 26V698.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'The same battery problem, a second brand: Audi owners get interim letters December 18, with a charge cap until the fix arrives.',
    body: [
      'Volkswagen’s electric-vehicle battery recall has spread to Audi, Electrek reported October 27. Audi owners are being told to limit charging to 80% state of charge until a remedy is available, and dealers will impose a temporary 80% limit if needed. Audi expects to mail interim letters notifying owners of the safety risks on December 18, 2026, with further letters once a remedy is ready. The NHTSA campaign number is 26V698, and Audi’s recall number is 93SK.',
      'The wider recall reaches well beyond the U.S. Last week Volkswagen Group issued three separate recalls with Germany’s Federal Motor Transport Authority (KBA), affecting 72,668 EVs worldwide, including 9,881 in Germany. The affected models include certain batches of the ID. Buzz, ID.3, ID.4 and ID.7 produced between 2022 and 2025, plus Cupra Born models from 2022 to 2024.',
      'An 80% charge cap is an inconvenience, not a catastrophe — most daily driving uses far less — but it is also a real reduction in usable range, and owners planning long trips should plan charging stops accordingly. Owners with questions can contact Audi customer service at 1-800-253-2834 or the NHTSA hotline at 1-888-327-4236, and should check their VIN at nhtsa.gov.',
    ],
    sources: ['Electrek', 'NHTSA', 'Audi'],
  },
  {
    slug: 'lexus-nx-blank-display-recall-68356-october-2026',
    title: 'Lexus Recalls 68,356 NX SUVs for Blank Displays That Hide Vital Warnings',
    description:
      'Toyota recalled 2022–2024 Lexus NX models because the 7-inch display can go blank, hiding oil, temperature and charge warnings.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'A blank gauge cluster does not just hide the speed — it hides the warning that something is about to go wrong.',
    body: [
      'Toyota issued a recall on October 26 covering 68,356 Lexus NX, NX Hybrid and NX Plug-In Hybrid vehicles after owners reported blank instrument-panel displays, TopSpeed reported October 27. A blank screen can hide engine oil pressure, coolant temperature and electrical charge readings — the gauges that tell a driver something is wrong before it becomes a bigger problem.',
      'The recall, filed with NHTSA under campaign 26V687, affects 2022–2024 Lexus NX250, NX350, NX350h and NX450h+ models equipped with a 7-inch combination meter display. The good news for owners is the fix: Toyota says it is free and requires no new part, just a software update at the dealer.',
      'A blank display is easy to dismiss as an annoyance, but it is a safety defect precisely because it removes warnings. If your NX display has gone dark or flickered, do not wait for a letter — check the VIN at nhtsa.gov and book the software update. A car that cannot warn you about overheating or low oil pressure is a car driving blind in one important respect.',
    ],
    sources: ['TopSpeed', 'NHTSA', 'Toyota'],
  },
  {
    slug: 'hyundai-venue-elantra-lug-nut-recall-october-2026',
    title: 'Hyundai Recalls a Handful of 2026 Venue and Elantra Cars for Loose Lug Nuts',
    description:
      'Hyundai recalled certain 2026 Venue and Elantra models because wheel lug nuts may loosen; dealers will inspect and tighten them free.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Tiny recall, serious failure mode: a wheel that loosens is never a minor issue, even when only a few cars are involved.',
    body: [
      'Hyundai is recalling certain 2026 Venue and Elantra models, including the Elantra N and Elantra Hybrid, because wheel lug nuts may loosen, according to a new NHTSA listing dated October 28. NHTSA lists up to 17 vehicles in the campaign, and dealers will inspect and tighten the lug nuts free of charge.',
      'The small number is the story here in one sense — this is a tightly scoped production issue, not a design flaw across a model line — but the failure mode deserves respect. A loosening wheel typically announces itself with vibration, noise or a wobble long before it separates, and any of those symptoms should send a driver straight to a dealer, not on to the next errand.',
      'If you are buying a used 2026 Venue, Elantra N, Elantra Hybrid or Elantra, check its VIN for this recall before you buy, as the listing itself advises. The remedy is a simple inspection and tightening, which is exactly the kind of recall that should never be left undone because it looks too small to matter.',
    ],
    sources: ['NHTSA', 'AutoMotor News'],
  },
  {
    slug: 'car-software-recalls-only-20-percent-over-the-air-october-2026',
    title: 'Only 20% of Car Software Recalls Are Fixed Over the Air, NHTSA Data Shows',
    description:
      'Of 708 software-related U.S. recalls since 2022, only 140 were fixed over the air; 32.3 million vehicles still needed a dealer visit.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Tesla fixes software recalls remotely 30 out of 30 times. Ford, at 23 of 130, sends 10.4 million vehicles to dealers instead.',
    body: [
      'Of 708 U.S. vehicle recalls since 2022 whose defect or fix names software, only 140 — 20% — were fixed over the air, according to an analysis of NHTSA’s own recall file published October 27. Those over-the-air fixes covered 27.3 million of 59.7 million vehicles in software recalls, leaving 32.3 million vehicles that still needed a dealer visit for what is, at heart, a software problem.',
      'The maker-by-maker split is stark. Tesla fixed all 30 of its software recalls remotely. Ford fixed 23 of 130, sending 10.4 million vehicles to dealers; Stellantis sent 6.1 million and Toyota 3.9 million. Volkswagen, Porsche and Mazda fixed zero of their software recalls over the air in the period counted. The over-the-air share did rise, from 19% in 2022 to 28% in 2026 — so the capability exists and is spreading, just slowly.',
      'Why this matters to owners is time, not technology. A dealer visit for a software update costs a morning, a loaner or a wait, and a second trip if the appointment slips. Every software recall that ships over the air is a recall owners actually complete, which is the whole point of the recall system. The data suggests the bottleneck is not engineering — it is how willing each manufacturer is to use the remote channel it already has.',
    ],
    sources: ['Tensorust', 'NHTSA'],
  },
  {
    slug: 'tesla-stock-analyst-consensus-408-target-october-2026',
    title: 'Tesla Analysts Hold a $408 Consensus Target and a “Moderate Buy” — With a Wide Spread',
    description:
      'Forty-nine brokerages covering Tesla average a Moderate Buy rating, with a consensus price target near $408–$411 per share.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Twenty-seven buys, seventeen holds, four sells: the Street agrees Tesla is worth owning, and disagrees loudly about by how much.',
    body: [
      'Tesla carries an average “Moderate Buy” rating from the forty-nine brokerages covering the stock, MarketBeat reported October 28, with a consensus one-year price target of about $408.61 in one summary and $411.04 in another count of the same coverage — a reminder that consensus figures move with which brokers are counted and when. The split behind the average is what matters: 27 buys, 17 holds, 4 sells and 1 strong buy.',
      'Recent moves show the disagreement in real time. Monness Crespi & Hardt initiated coverage with a buy on October 26, and Tigress Financial began coverage with a buy on October 22. In the other direction, Royal Bank of Canada downgraded Tesla from outperform to sector perform on October 22, and Goldman Sachs reiterated a neutral rating the same day. Roth Capital reaffirmed a buy with a $505 price objective in July.',
      'For car buyers rather than stock buyers, the analyst split is background noise with one useful signal: the market is pricing Tesla on its robotaxi and AI story, not on its car margins alone, which is why the valuation debate swings so hard on robotaxi mileage headlines. Shares traded around $411 in premarket trading on October 28. None of this is investment advice — it is a snapshot of how divided professional opinion is on the most argued-over stock in the auto industry.',
    ],
    sources: ['Defense World', 'MarketBeat'],
  },
  {
    slug: 'tesla-waymo-austin-miles-gap-musk-never-contest-october-2026',
    title: 'Musk Declares the Robotaxi Race “Never a Real Contest” — But Waymo Still Leads 7-to-1 Nationally',
    description:
      'Tesla passed Waymo in weekly Austin miles, 438,000 to 406,000, yet Waymo’s national weekly average of 3.9 million miles is about 7x Tesla’s best.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The Austin headline is real. The national frame is very different — and both numbers need their definitions read carefully.',
    body: [
      'Tesla’s Robotaxi logged 438,000 driverless miles in Austin in the week ending October 18, 2026, edging past Waymo’s roughly 406,000 weekly miles averaged in the same city during the second quarter of 2026, Electrek reported October 27. Elon Musk seized on the comparison, saying the race against Waymo “was never a real contest.” The Austin milestone is genuine — and it is also the narrowest frame available.',
      'Nationally, the gap runs the other way and is wide: Waymo averaged 3.90 million rider-only miles per week across its markets in Q2 2026, while Tesla’s best reported week across all markets reached 558,000 miles — about 7 to 1 in Waymo’s favor. Tesla has now expanded its service to six American cities, and its cumulative driverless total since January 2026 stands at about 3.11 million miles, against Waymo’s 271.3 million cumulative miles since 2020. Austin still carries most of Tesla’s load, though its Houston expansion has added about 225,964 miles in the comparison cited.',
      'Investors are noticing the framing problem. The Future Fund’s Gary Black warned October 28 against assuming uncontested Tesla robotaxi dominance, citing rising competition from Waymo and Baidu and Tesla’s high 2026 price-to-earnings ratio of about 220x, with BYD having already overtaken Tesla in global EV sales in 2025. The honest read: Tesla won a city-week; Waymo still owns the national network. Both facts can be true at once.',
    ],
    sources: ['Electrek', 'Tech Insider', 'Wisevoter', 'The Electric Viking'],
  },
  {
    slug: 'tesla-cybercab-four-module-battery-lfp-room-october-2026',
    title: 'Tesla’s Cybercab Battery Is Four Sealed Modules — With Room Left for a Cheaper Chemistry Swap',
    description:
      'Tesla’s Cybercab pack uses four individually sealed 4680 modules, and engineers left space for a possible future switch to LFP cells.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'A robotaxi pack that can be serviced in pieces, not replaced whole, could change fleet economics — if the LFP swap ever happens.',
    body: [
      'Tesla’s Cybercab battery is built from four separate, individually sealed modules instead of one welded block, coverage from Teslarati, InsideEVs, Yahoo Finance and others converged on October 28. The cells are Tesla’s own 4680 format with nickel-based chemistry. For a robotaxi fleet, the modular choice matters more than the cell chemistry: a pack that can be serviced in pieces could cut the cost of keeping a driverless car earning, rather than forcing a whole-pack replacement when one section fails.',
      'The more interesting detail is what Tesla left empty. Robert Sumpf, Tesla’s director of mechanical design engineering for battery modules and packs, said space was intentionally left in the pack for a possible later switch to lithium iron phosphate (LFP) cells. LFP is cheaper and longer-lived than nickel chemistry, though less energy-dense — a trade a fleet operator running hundreds of thousands of miles might gladly make.',
      'The caution, stated plainly in the coverage itself: Tesla has not confirmed the Cybercab will move to LFP cells, and capacity, final range, retail price, production date and operating cost all remain unconfirmed. What is documented is the design philosophy — build for serviceability and leave the chemistry door open — and the reported production wrinkle that Cybercabs are being built faster than they can currently be deployed into the Robotaxi service. That bottleneck, not the battery, may be the near-term constraint.',
    ],
    sources: ['Tech Insider', 'Teslarati', 'InsideEVs', 'Yahoo Finance'],
  },
  {
    slug: 'ford-fathom-28350-ev-truck-home-backup-october-2026',
    title: 'Ford Fathom: A $28,350 Electric Truck That Can Power Your House',
    description:
      'Ford priced its smallest electric truck, the Fathom, at $28,350, with bidirectional home-backup capability and pre-orders in early 2027.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'The cheapest American EV capable of powering a house — if the home hardware price, still undisclosed, stays cheap too.',
    body: [
      'Ford put a price on its smallest electric truck this week: $28,350 for a Ford Fathom with the standard-range battery, Tech Insider reported October 28, with pre-orders opening in early 2027 for the 2028 model year. Car and Driver’s coverage frames the truck as a way to power a house, and the headline claim — the cheapest American EV capable of powering a house — is the number that will stick.',
      'Ford’s own wording is more careful, and the distinction matters. The company says the Fathom can send electricity from the vehicle to a properly equipped home, and that it carries an integrated power inverter for two-way energy flow. It also says the add-on home hardware it needs will cost far less than the equipment Ford sold for its first bidirectional system. What Ford has not released, in the reporting available as of October 28, is the actual price of that hardware.',
      'That missing price is the whole ballgame for the home-backup pitch. A $28,350 truck plus expensive home equipment is a different proposition from a $28,350 truck plus cheap equipment, and buyers comparing the Fathom against a stationary home battery should wait for the hardware number before doing the payback math. On the truck itself, though, the price alone resets expectations for what a new electric pickup can cost.',
    ],
    sources: ['Tech Insider', 'Car and Driver', 'Ford'],
  },
  {
    slug: 'waymo-san-diego-la-jolla-expansion-233-km-october-2026',
    title: 'Waymo Nearly Doubles San Diego Coverage as Driverless Rides Reach La Jolla',
    description:
      'Waymo expanded San Diego driverless service to 233 square kilometers, adding La Jolla, University City and Clairemont on October 28.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'From 130 to 233 square kilometers in under two months — San Diego is becoming one of Waymo’s fastest-growing maps.',
    body: [
      'Waymo expanded its San Diego driverless footprint to 233 square kilometers on October 28, nearly doubling a service that launched September 1 covering about 130 square kilometers from Logan Heights to Pacific Beach and Sunset Cliffs to Normal Heights. The expansion adds La Jolla, University City, Clairemont, Mission Bay and surrounding areas, including high-traffic destinations such as UC San Diego, the UTC shopping mall and the Veterans Affairs office in La Jolla.',
      'The rollout pace is notable. Access was initially restricted to residents with early sign-up codes, then opened to all users via the app on October 14. Two weeks later, the map nearly doubled. The company also cites a safety claim for the service: 93% fewer pedestrian injury crashes than human drivers, a figure worth watching as independent researchers continue to test robotaxi safety claims against police and insurance data.',
      'For San Diego riders, the practical change is simple: driverless rides now cover the northern business districts, affluent residential areas and university zones that generate much of the city’s daily trip demand. For the industry, San Diego is a template — launch small, open to everyone, then expand fast once the first map proves itself.',
    ],
    sources: ['Wall Street Next', 'Waymo'],
  },
  {
    slug: 'waymo-250-square-miles-five-cities-expansion-october-2026',
    title: 'Waymo Adds Nearly 250 Square Miles of Robotaxi Coverage Across Five U.S. Cities',
    description:
      'Waymo added nearly 250 square miles across Los Angeles, Nashville, Orlando, San Diego and the Bay Area, passing 500,000 paid rides a week.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Fourteen million paid trips in 2025, triple 2024 — Waymo is expanding on five fronts at once, not one city at a time.',
    body: [
      'Waymo is adding nearly 250 square miles of driverless robotaxi coverage across Los Angeles, Nashville, Orlando, San Diego and the San Francisco Bay Area, The Electric Viking reported October 28, citing Fortune. Total coverage passed 1,400 square miles as of May 2026, with service active in 15 U.S. metros and weekly paid rides over 500,000.',
      'The scale underneath the expansion is what separates Waymo from every other robotaxi operator. The company logged over 14 million paid trips in 2025, triple its 2024 total, and averaged 3.9 million rider-only miles per week in Q2 2026. Its annualized revenue was estimated at $355 million as of February 2026 — still small against Alphabet, but real, paid, recurring revenue from driverless rides, not a pilot subsidy.',
      'The five-city push also shows the competitive gap in operational terms. While rivals debate single-city milestones, Waymo is widening five maps simultaneously, which spreads fixed costs — mapping, remote assistance, fleet operations — across more paying rides. For riders in the newly covered areas, the near-term benefit is practical: more coverage, potentially lower wait times, and a driverless option that is becoming ordinary rather than novel.',
    ],
    sources: ['The Electric Viking', 'Fortune', 'Electrek'],
  },
  {
    slug: 'waymo-orlando-doubles-service-area-120-square-miles-october-2026',
    title: 'Waymo Nearly Doubles Orlando Service to 120 Square Miles, Adding Downtown and Ivanhoe Village',
    description:
      'Waymo added 53 square miles in Orlando on October 27, bringing total coverage to 120 square miles including downtown landmarks.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Beyond the tourist corridor at last: downtown Orlando, City Hall and the performing arts center are now on the robotaxi map.',
    body: [
      'Waymo announced October 27 that it is adding 53 square miles to its Orlando service area, bringing total coverage to 120 square miles and nearly doubling where its robotaxis can operate. The expansion pushes farther east and adds more downtown coverage, including City Hall, the Dr. Phillips Center for the Performing Arts and the Orlando Science Center, plus Ivanhoe Village.',
      'The Orlando story is a move from tourists to residents. When Waymo launched in Orlando in February, service was largely focused on the tourist corridor, though parts of downtown were already included. The company opened rides to everyone in April and has been expanding ever since. Anyone can now hail a driverless vehicle through the Waymo app, provided pickup and destination are both within the service area.',
      'Downtown coverage changes the use case. Tourist-corridor rides are often one-off novelties; downtown rides are commutes, dinners, shows and errands — the repeat trips that make a robotaxi network economically real. Orlando’s expansion, landing the same week as the five-city push, shows Waymo treating Florida as a core market, not a showcase.',
    ],
    sources: ['Bungalower', 'Waymo', 'Electrek'],
  },
  {
    slug: 'ark-invest-buys-archer-joby-65m-evtol-october-2026',
    title: 'Cathie Wood’s ARK Loads Up on Archer and Joby as Air-Taxi Bets Grow',
    description:
      'ARK Invest bought 1.16 million Archer shares and 434,012 Joby shares for $6.5 million in a single session on October 27.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      '$4.5 million into Archer, $2 million into Joby: ARK is betting the eVTOL inflection point is close, not distant.',
    body: [
      'ARK Invest bought 1.16 million Archer Aviation shares and 434,012 Joby Aviation shares, investing $6.5 million in a single session, Stocktwits reported October 27. The buys split $4.5 million into Archer and $2 million into Joby, spread across the ARK Autonomous Technology and Robotics ETF (ARKQ) and the ARK Space Exploration and Innovation ETF (ARKX).',
      'The breakdown shows conviction weighted toward Archer: 781,854 Archer shares into ARKQ and 379,750 into ARKX, totaling 1,161,604 shares, against 292,119 Joby shares via ARKQ and 141,893 via ARKX. Archer shares edged up 0.3% overnight ahead of Tuesday, while Joby inched 0.2% lower — small moves for a $6.5 million vote of confidence, but the direction of institutional money is the signal, not the day’s price.',
      'The timing lines up with the certification calendar. Archer plans air-taxi networks in Austin, Dallas–Fort Worth and Houston, and completed piloted demonstration flights in the San Francisco Bay Area this month; Joby is advancing real-world flights through the FAA’s eVTOL Integration Pilot Program and flew piloted flights in North Texas in September, with Florida flights due in November. ARK’s bet is that military logistics contracts and FAA milestones are pushing eVTOL from demonstration toward commercialization — a bet that still needs a type certificate to pay off.',
    ],
    sources: ['Stocktwits', 'ARK Invest'],
  },
  {
    slug: 'kia-ev9-2027-pricing-54990-nightfall-october-2026',
    title: '2027 Kia EV9 Priced From $54,990, With Nightfall Edition Now Standard on Land',
    description:
      'Kia priced the 2027 EV9 from $54,990 to $71,990 before destination, with Land torque jumping from 379 to 516 lb-ft.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'More torque, a standard Nightfall package, and a $500 cut on the Land Nightfall combo — Kia is adding value, not just price.',
    body: [
      'Kia America announced pricing for the 2027 EV9 on October 27. The all-electric three-row SUV, a 2024 North American Utility of the Year and 2024 World Car of the Year winner, starts at $54,990 for the Light short-range model before the $1,645 destination charge, rising to $71,990 for the GT-Line. Light long-range is $57,990, Wind is $64,090 and Land is $69,990.',
      'The headline change is on the Land trim, where the formerly optional Nightfall Edition Package is now standard — at a $500 lower MSRP than the 2026 Land Nightfall Edition. That brings a torque boost from 379 lb-ft to 516 lb-ft, a 36% increase, for faster acceleration, plus an exclusive interior color scheme with a black headliner and unique stitching on black synthetic leather seats. Wind gets black-finish 19-inch wheels, glossy black exterior garnishes and newly available Wolf Gray paint.',
      'The EV9’s value case in a post-tax-credit market rests on exactly this kind of move: hold the entry price, add standard equipment where buyers actually notice it, and let the three-row electric SUV compete on space and capability rather than on incentives that no longer exist. For families cross-shopping the EV9 against gas three-rows, the Land’s torque jump is the spec-sheet change most likely to be felt from the driver’s seat.',
    ],
    sources: ['Kia America', 'PR Newswire', 'Electrek'],
  },
  {
    slug: 'lexus-rz-2027-pricing-47495-301-mile-range-october-2026',
    title: '2027 Lexus RZ Starts at $47,495 With Up to 301 Miles of Range',
    description:
      'Lexus priced the 2027 RZ from $47,495, with three powertrains up to 402 hp, a NACS port and up to 301 miles of range.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'A $100 increase on the base model after a 91% sales surge: Lexus is holding the line while the RZ finally finds buyers.',
    body: [
      'Lexus priced the 2027 RZ from $47,495 including the $1,395 delivery fee, the company announced, with the electric SUV reaching dealers in early 2027. Three powertrains are offered: the 350e, the 450e AWD and the 550e F Sport AWD. The base 350e uses a 79.6 kWh battery and a 221-horsepower front motor for up to 301 miles of estimated range; the 450e AWD adds a rear motor for 308 combined horsepower and 260 miles at $50,995; the 550e F Sport AWD makes 402 horsepower, hits 0–60 mph in about 4.1–4.2 seconds, and starts at $58,770.',
      'The pricing discipline is the story. Only the base model rose, by $100; every other trim holds its price. That restraint lands after a remarkable sales turnaround: Lexus sold 10,214 RZs in the first nine months of 2026, up 91.3% year over year and already a new annual record with three months left, after sales fell 34% in 2025 to about 6,400 units when the federal EV tax credit expired.',
      'Every 2027 RZ gets a built-in NACS port on the passenger side, so drivers can use Tesla Superchargers without a separate adapter, with 10–80% charging in about 30 minutes. Heated steering wheel and heated and ventilated front seats are standard, as is the latest Lexus Interface with a 14-inch navigation screen and wireless Apple CarPlay and Android Auto. The 550e adds M Mode, which uses paddle shifters to simulate an eight-speed manual — a playful touch on an otherwise sensible luxury EV.',
    ],
    sources: ['Lexus', 'Electrek', 'CarBuzz'],
  },
  {
    slug: 'kbb-best-car-deals-october-2026-santa-fe-cx50-october-2026',
    title: 'KBB’s Best October 2026 Deals: 0% APR on the Hyundai Santa Fe and Mazda CX-50',
    description:
      'Kelley Blue Book’s October deals list leads with 0% APR financing on the 2026 Hyundai Santa Fe and Mazda CX-50, both expiring November 2.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Outgoing models, low rates, expiring November 2: October is the month to shop the cars dealers most want to move.',
    body: [
      'Kelley Blue Book’s list of the best car deals for October 2026 leads with 0% APR financing on the 2026 Hyundai Santa Fe, starting at $36,650, with a 60-month term and no payments for 90 days. The same deal applies to 2027 Santa Fe models and to the 2026 and 2027 Santa Fe Hybrid. The Santa Fe’s case is space for its size: a smaller three-row midsize SUV with an upscale interior and generous standard features, now financed free.',
      'Second on the list is the 2026 Mazda CX-50 at 0% APR, starting at $31,395, on a 36-month term. The CX-50 is the wider, longer, more rugged-looking sibling of the CX-5, with standard all-wheel drive and extra ground clearance for dirt-road capability, wrapped in what remains one of the most upscale interiors in its class. Both offers expire November 2, 2026, and both vary by region — check the manufacturer’s site before visiting a dealer.',
      'The pattern behind the list is the model-year changeover: as new models arrive, deals pop up on outgoing ones, and October pairs that inventory pressure with low-rate financing. KBB’s standing advice applies: the prices listed are for the trim on special, or the base price where the offer applies to all trims, and include destination — tax, title and license are extra. With the November 2 expiry, shoppers have days, not weeks, to use these two rates.',
    ],
    sources: ['Kelley Blue Book'],
  },
  {
    slug: 'rav4-rival-lease-deals-model-y-grand-cherokee-october-2026',
    title: 'SUV Lease Deals Taking On the RAV4: Model Y at $499 and Grand Cherokee at $417 a Month',
    description:
      'October lease deals challenging the RAV4 include a Tesla Model Y at $499 a month and a Jeep Grand Cherokee at $417 a month.',
    date: 'October 28, 2026',
    dateISO: '2026-10-28',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'The RAV4 is the benchmark every SUV lease is measured against — and October’s challengers undercut it on monthly payment.',
    body: [
      'CarBuzz rounded up October 2026 lease deals positioned against the Toyota RAV4, and two stand out on monthly payment alone. A Tesla Model Y leases at $499 a month for 36 months with $3,000 down, on a 2026 rear-wheel-drive model with a 10,000-mile annual limit, for qualified lessees. The caveat is real: Tesla’s incentives page still showed an August 24, 2026 expiration, so CarBuzz itself flagged uncertainty about whether the offer is still available — confirm before counting on it.',
      'The steadier deal is the Jeep Grand Cherokee at $417 a month for 42 months, with $4,499 due at signing, on a 2026 Laredo X 4x2, open until November 2, 2026, also at 10,000 miles a year for qualified lessees. Leasing a $41,415 SUV at $417 a month is strong value by any measure, and buyers who prefer to purchase can claim 0% APR for up to 36 months instead.',
      'The broader lesson is about depreciation, especially for EVs. CarBuzz notes that a 2021 Model Y now trends at just $24,576 in its price-tracking tool, with lease turn-ins driving used prices down — which is precisely why leasing an EV, rather than buying one outright, appeals to buyers who do not want to carry that depreciation themselves. For RAV4 shoppers, the comparison is not just monthly payment: it is payment plus fuel or charging costs, mileage limits, and what the car will be worth when the lease ends.',
    ],
    sources: ['CarBuzz', 'Tesla'],
  },
  {
    slug: 'toyota-september-sales-production-slide-third-month-october-2026',
    title: 'Toyota September Sales and Production Slide for a Third Straight Month',
    description:
      'Toyota global sales fell 2.2% to 860,107 in September as China dropped 19.7% for an eighth month, though U.S. sales rose 8.4%.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The world’s biggest automaker sold fewer cars and built fewer cars in September — China and the Middle East dragged, the U.S. did not.',
    body: [
      'Toyota said on October 29 that global vehicle sales and production decreased for a third straight month in September, dragged down by declines in China and the Middle East. Global sales fell 2.2% from a year earlier to 860,107 vehicles, while production dropped 3.2% to 889,079 vehicles. The figures include the luxury Lexus brand, according to Reuters’ reporting of Toyota’s statement.',
      'China remains the problem market. Sales there fell 19.7%, extending the decline to an eighth consecutive month, which Toyota attributed to higher petrol prices weighing on demand for gasoline and hybrid cars. Sales in the Middle East slumped 29.8%. Output fell 18.6% in China and 2.9% in the United States, while rising 5.8% in Japan. The offsets were real but smaller: sales rose 1.8% in Japan and 8.4% in the United States, Toyota’s top market.',
      'Three straight months of declines do not yet amount to a Toyota crisis — the company is still selling at a pace few rivals can match — but the geographic split matters. Growth is now coming from Japan and North America while China, the world’s largest car market, keeps shrinking for Toyota. October sales, due in early November, will show whether the China slide is stabilizing or whether the world’s biggest automaker is settling into a smaller footprint there.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'renault-q3-2026-revenue-11-6b-volumes-fall-october-2026',
    title: 'Renault Q3 Revenue Rises 1.4% to €11.6 Billion Despite a 6% Volume Drop',
    description:
      'Renault beat forecasts in Q3 as EV sales jumped 84.7% to 25.8% of passenger-car sales, offsetting lower volumes and Chinese pressure.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Fewer cars, more money: Renault’s electric mix and retail sales carried a quarter in which volumes fell 6% to 497,799.',
    body: [
      'Renault Group reported a better-than-expected 1.4% rise in third-quarter revenue at constant exchange rates on October 29, to €11.6 billion, against a company-compiled consensus that had expected a 0.3% decline. Group volumes fell 6% to 497,799 vehicles, largely because of heightened competition in Europe and Latin America from Chinese manufacturers, Reuters reported.',
      'The mix did the work. Electric vehicle sales rose 84.7% in the quarter to 25.8% of passenger-car sales, and including hybrids, electrified vehicles made up 54.9%. European retail sales rose 5%, with retail reaching 64.8% of the mix. Automotive revenue was broadly stable at €9.8 billion, while Mobilize Financial Services revenue rose 11.0% to €1.8 billion. For the first nine months of 2026, total revenue reached €41.8 billion, up 7.1%.',
      'Renault confirmed its 2026 guidance: a group operating margin of around 5.5% of revenue, with a slight second-half improvement tempered by higher raw material costs and inflation, plus automotive free cash flow of €1.0 billion. The caution is visible in the share price, down 26% so far this year to its lowest in more than four years, piling pressure on CEO Francois Provost to show that the smallest of Europe’s legacy automakers can survive the Chinese wave — including pressure on its low-cost Dacia brand as it moves into the mid-sized C-segment.',
    ],
    sources: ['Reuters', 'Renault Group'],
  },
  {
    slug: 'ford-q3-2026-core-profit-2-7b-commodity-costs-october-2026',
    title: 'Ford Q3 Core Profit Edges Up to $2.7 Billion Despite Rising Commodity Costs',
    description:
      'Ford raised the low end of 2026 EBIT guidance to $10.5 billion as Q3 EPS of 49 cents beat forecasts, despite F-150 disruption.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Ford beat on earnings while warning on costs: commodity inflation is now expected to reach nearly $2.5 billion for the year.',
    body: [
      'Ford’s third-quarter core profit increased slightly to $2.7 billion, Reuters reported on October 28, as the Michigan automaker overcame production struggles with its best-selling F-150 trucks and higher commodity costs. Adjusted earnings of 49 cents per share beat LSEG analyst forecasts of 40 cents. Revenue was $49.5 billion and net income was $2 billion.',
      'Costs are the story behind the beat. Ford raised its full-year estimate for commodity costs to nearly $2.5 billion from about $2 billion, citing the conflict in the Middle East, rising copper and steel prices, steeper fuel costs and higher chip prices. Production of F-150 trucks was disrupted last month for nearly a week by an undisclosed supplier issue, on top of the effort to recoup an earlier production hit after a fire last year at Novelis, a key aluminum supplier in New York. CFO Sherry House told reporters that Novelis’ operational recovery is largely behind Ford.',
      'Ford raised the lower end of its annual guidance by $500 million to $10.5 billion, keeping the higher end at $11 billion in earnings before interest and taxes, and said it expects 2027 core profitability to be roughly in line with 2026. It is also running leaner: CEO Jim Farley said Ford aims to keep about a 55- to 60-day supply of vehicles, versus the typical 80 to 100. Shares fell about 1.5% after the bell and are down about 10% this year, while GM is up about 1% — the market is rewarding the profit, but not yet the cost outlook.',
    ],
    sources: ['Reuters', 'Zacks'],
  },
  {
    slug: 'gm-leaves-nyse-for-nasdaq-november-17-october-2026',
    title: 'GM Leaves the NYSE After 115 Years, Moving to Nasdaq on November 17',
    description:
      'GM will trade on the Nasdaq Global Select Market from November 17, keeping the GM ticker, in a tech repositioning that opens Nasdaq-100 eligibility.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'First listed in 1911, GM is now the first legacy American automaker to list on the tech-focused exchange.',
    body: [
      'General Motors announced on October 27 that it will transfer its common stock listing from the New York Stock Exchange — where it has traded since 1911 — to the Nasdaq Global Select Market, effective November 17, 2026. The company will keep its “GM” ticker, and existing shareholders do not need to take any action for the transfer to occur.',
      'The move is framed as strategy, not symbolism. CFO Paul Jacobson called Nasdaq a “natural home” for a company pursuing a customer-focused, technology-driven strategy, pointing to GM’s work in electric vehicles, autonomous driving software and software-defined vehicles. A Nasdaq listing also makes GM eligible for future inclusion in the Nasdaq-100 Index, a benchmark tracked by funds managing roughly $1.4 trillion in assets; JPMorgan has projected a December addition, though inclusion is not automatic and depends on index rules and timing.',
      'The market liked the announcement: reports put the stock up 5.54% to $80.54 on the day. The transfer follows GM’s strong third quarter — $3.3 billion in net income and a new $20 billion buyback — and it is a symbolic loss for the NYSE. For car buyers, nothing changes directly; for investors, GM is now asking to be judged, at least in part, as a technology stock rather than a traditional auto stock.',
    ],
    sources: ['GM', 'Particle News'],
  },
  {
    slug: 'gm-2-billion-lansing-hybrid-production-investment-october-2026',
    title: 'GM to Invest $2 Billion in Lansing as It Redirects a $500 Million Grant to Hybrids',
    description:
      'GM will spend $1.25 billion readying Lansing Delta Township for future production and seeks to redirect a federal grant to hybrids.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The latest sign of GM’s EV-to-hybrid pivot: a $500 million grant once meant for EVs would now fund hybrid production instead.',
    body: [
      'General Motors said on October 27 that it will invest more than $2 billion in the Lansing, Michigan region over the next several years, including $1.25 billion to prepare its Lansing Delta Township Assembly plant for future vehicle production. The company is also working with the U.S. Department of Energy to redirect a previously awarded $500 million grant toward hybrid production at the factory.',
      'The grant’s history explains the shift. It was awarded under the Biden administration as a Domestic Manufacturing Conversion Grant to support converting a different Lansing factory to produce electric vehicles, including hybrids, battery-electrics, plug-in hybrids and hydrogen fuel-cell vehicles — but the funds were never released, according to GM. Redirecting them to hybrids is the latest sign that GM is shifting strategy as EV demand slows.',
      'The plant currently assembles the gas-powered Buick Enclave, Chevrolet Traverse and GMC Acadia, and produced a record 291,000 vehicles in 2025. GM did not say when hybrid production would begin or which models would be built there. Reports citing insiders and anonymous sources expect hybrids across multiple brands, including hybrid versions of the Traverse, Enclave and Acadia — but that lineup is reported, not confirmed by GM, so treat it as the likely direction rather than a product announcement.',
    ],
    sources: ['GM', 'Reuters', 'TechCrunch'],
  },
  {
    slug: 'china-auto-sales-forecast-22-percent-plunge-2026-october-2026',
    title: 'China Forecasts a Record 22% Plunge in 2026 Vehicle Sales, With Only a Meager 2027 Recovery',
    description:
      'The China Passenger Car Association expects the market to shrink sharply this year as subsidies tighten and costs rise.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The world’s largest car market is heading for its worst year on record by this forecast — and next year barely heals it.',
    body: [
      'The China Passenger Car Association expects the Chinese vehicle market to shrink sharply this year, with a record 22% plunge in 2026 sales and only a weak rebound forecast for 2027, Automotive News reported on October 29. The association points to tightening subsidies and rising costs as the drivers of the decline.',
      'The forecast lands on top of evidence already visible in company results. Toyota’s China sales fell 19.7% in September, their eighth straight monthly decline, and Renault cited fierce competition from Chinese entrants in its own key markets as a drag on its third-quarter volumes. In other words, the pressure runs both ways: foreign brands are losing ground inside China, while Chinese brands are exporting that competition to Europe and Latin America.',
      'For buyers and investors, the implication is a market defined by price pressure rather than growth. A 22% contraction, if it materializes, would force deeper discounting, faster consolidation among weaker Chinese brands, and harder choices for global automakers about how much capacity to keep aimed at China. The forecast is a projection, not a result — but it is the industry’s own trade body warning that 2026 will be remembered as a down year, not a blip.',
    ],
    sources: ['Automotive News', 'China Passenger Car Association'],
  },
  {
    slug: 'volkswagen-export-300000-china-made-vehicles-2030-october-2026',
    title: 'Volkswagen Aims to Export 300,000 China-Made Vehicles a Year by 2030',
    description:
      'VW will also export China-developed technology to Asia, the Middle East and South America — but not Europe, for now.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Volkswagen’s China operation is flipping from a local business into an export base — for cars and for technology.',
    body: [
      'Volkswagen said it aims to export at least 300,000 vehicles made in China each year by 2030, as well as technologies developed in the country. Volkswagen Group’s China head Ralf Brandstätter announced the target on October 28 during a trip to Hefei in eastern China, where the firm has a large research and development centre, adding that “our ambition goes beyond exporting vehicles.”',
      'For the first time, Volkswagen will also export technology developed in Hefei to other parts of Asia, the Middle East and South America — but not Europe for now. That includes the vehicles’ electronic architecture, developed with the help of Chinese company Xpeng, plus its platform and driver-assistance system, produced with China’s Horizon Robotics. Brandstätter’s summary: “What we develop in China makes Volkswagen more competitive around the world.”',
      'The plan is also a response to crisis. Europe’s biggest carmaker has been hit by Chinese competition, weak demand in key markets and a choppy electric transition, and it struck a deal with unions in September to cut 50,000 additional jobs by 2030, bringing its total planned workforce reduction to around 100,000. Exporting China-built cars and China-developed tech is Volkswagen’s bet that the market that hurt it most can also become one of its most useful factories.',
    ],
    sources: ['Reuters', 'Volkswagen Group'],
  },
  {
    slug: 'tesla-korea-fsd-refund-lawsuit-rejected-october-2026',
    title: 'South Korean Court Rejects Tesla Owners’ FSD Refund Lawsuit',
    description:
      'Seoul Central District Court ruled against 88 Tesla owners, finding Full Self-Driving did not promise Level 5 autonomy without a driver.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'The court said FSD never promised a car that drives itself with no human fallback — and that alone defeats the refund claim.',
    body: [
      'A South Korean court on October 29 rejected a lawsuit by dozens of Tesla owners seeking full refunds for money paid for “Full Self-Driving” driver-assistance software, ruling that the automaker had not breached its contractual obligations. The Seoul Central District Court ruled against the 88 plaintiffs, Reuters reported, finding that the FSD option did not promise fully autonomous driving without human intervention and that Tesla had already provided some of the functions included in the package.',
      'The owners, who filed the lawsuit in 2024, argued that Tesla Korea had been unable to implement the FSD system option in South Korea for more than eight years since it began selling it around March 2017. The court rejected their reading of FSD as a system capable of fully autonomous driving, known as Level 5 automation. It also found that Tesla’s obligation to deliver additional features depended on technological advances and regulatory approvals, and that buyers had been aware some functions could take considerable time to become available — and that delays caused by compliance with domestic and overseas regulations could not be held against Tesla.',
      'The court also credited what Tesla had delivered: basic Autopilot and Enhanced Autopilot functions, plus a recent software update that added traffic light and sign recognition, as well as city-driving capabilities, to older vehicles equipped with Hardware 3 computers. Tesla did not immediately comment. The ruling is a win for Tesla as it faces similar legal challenges in other countries over delays in delivering self-driving capabilities long promised by CEO Elon Musk — but it settles a contract question, not the technology question of when, or whether, full self-driving arrives.',
    ],
    sources: ['Reuters'],
  },
  {
    slug: 'tesla-cybercab-malaysia-showcase-tour-november-2026',
    title: 'Tesla Cybercab Begins Malaysia Showcase Tour, Running to November 22',
    description:
      'The driverless robotaxi will appear at four malls across Kuala Lumpur, Selangor and Penang, starting at Mid Valley Megamall.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'No steering wheel, no pedals, four malls: Tesla is touring its purpose-built robotaxi around Malaysia for almost a month.',
    body: [
      'Tesla Malaysia is showcasing its Cybercab autonomous robotaxi at four shopping malls across Kuala Lumpur, Selangor and Penang from October 29 to November 22, 2026. The tour begins at Mid Valley Megamall in Kuala Lumpur, where the two-seat electric vehicle will be displayed from October 29 to November 1, between 10 a.m. and 10 p.m. daily. Visitors can register for 15-minute guided walkthroughs through Tesla’s official event page, with a mystery gift available for qualifying walkthrough bookings or test drives of selected Tesla models, while stocks last.',
      'The Cybercab then appears at Sunway Square Mall in Selangor from November 3 to 9, Pavilion Damansara Heights in Kuala Lumpur from November 10 to 11, and Gurney Plaza in Penang from November 13 to 22. First unveiled at Tesla’s We, Robot event in October 2024, the Cybercab is a purpose-built robotaxi designed to operate without a human driver, with a two-seat cabin, butterfly-style doors and a central touchscreen — but no conventional steering wheel or pedals. Tesla says the cabin holds luggage for two standard check-in suitcases and two carry-on suitcases.',
      'Tesla has yet to publish a complete set of consumer-facing production specifications, but U.S. Environmental Protection Agency certification documents offer some insight: a single electric motor rated at 163 kW driving the front wheels through a single-speed transmission, with specialist reporting based on the same documents putting battery capacity at approximately 47.6 kWh. The Malaysia tour is a showcase, not a service launch — nobody is hailing a Cybercab there yet — but it is Tesla’s most public robotaxi roadshow in Southeast Asia to date.',
    ],
    sources: ['Carlist.my', 'Tesla', 'U.S. EPA'],
  },
  {
    slug: 'tesla-roadster-spacex-hawthorne-display-october-2026',
    title: 'Next-Gen Tesla Roadster Parks Beside a Falcon 9 at SpaceX Headquarters',
    description:
      'Photos from SpaceX’s Hawthorne site put the thruster-equipped Roadster next to the first booster ever to land, fueling merger talk.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Small car, big rocket ambitions: the Roadster showed up beside the booster that started reusable rockets.',
    body: [
      'Tesla’s next-generation Roadster turned up at SpaceX’s headquarters in Hawthorne, California on October 28, less than two weeks after the car flew off a ramp at its unveiling in Texas. Photos shared on X by SpaceX engineer Deanna Rice show the new Roadster parked outdoors beside the famed Falcon 9 that stands outside company headquarters at the corner of Crenshaw Boulevard and Jack Northrop Avenue.',
      'The rocket is not a random backdrop. Rocket B1019 was the first orbital-class booster ever to land after a launch, on December 21, 2015, after it sent 11 Orbcomm satellites to orbit and flew back to Landing Zone 1 at Cape Canaveral. SpaceX chose not to fly it again; after a test fire in Florida, the booster was shipped to Hawthorne and raised upright as a permanent monument in August 2016. Parking the Roadster beside it is symbolic in itself: the car flies on SpaceX cold gas thrusters, in the words of its own unveiling.',
      'The technical link is real, not just photographic. The Thrust and Rocket versions of the Roadster use cold gas thrusters fed by composite overwrapped pressure vessels, the same type of tank SpaceX flies on Falcon 9, and Elon Musk has described the car as the work of Tesla and SpaceX engineers together. Tesla lists 0 to 60 mph in under 0.9 seconds for the Thrust version and under 0.59 seconds for the Rocket version, while the base Performance model relies on a fan and ground sealing system for grip, according to Teslarati’s breakdown of the three configurations. With merger committees at both companies already exploring a combination, the Hawthorne photo-op reads as a teaser for what a combined company could build.',
    ],
    sources: ['SpaceX', 'Teslarati'],
  },
  {
    slug: 'tesla-optimus-fremont-production-line-1m-capacity-october-2026',
    title: 'Tesla’s Optimus Line in Fremont Is Built for 1 Million Robots a Year — Eventually',
    description:
      'Early production-quality Optimus bots are rolling off a high-volume Fremont line, but Musk says 20,000 a week is at least a year away.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'Design capacity and actual output are very different numbers — and for Optimus, the gap is the whole story right now.',
    body: [
      'Tesla has begun early production of its Optimus humanoid robot on a high-volume line at its Fremont, California factory, according to TechRepublic reporting covered on October 29. The company described the units as its “first production-quality bots” and said the manufacturing process is “suitable for a commercial product.” For a machine that spent years as a stage demo, that is a real change in status.',
      'The headline number is big: the Fremont line is designed for a capacity of 1 million robots per year. The timeline is far more modest. Elon Musk said reaching 20,000 Optimus robots per week will take “at least a year, maybe a little longer,” and he expects deliveries to customers outside Tesla around the end of 2027. That gap — between what a line is designed to produce and the pace at which it actually turns out finished robots — is the core of this story, and it is where most humanoid hype goes to die.',
      'What is not yet disclosed matters as much as what is. Tesla has not published a current weekly production rate, a price for outside customers, or a list of launch buyers. Until those appear, the fair reading is that Optimus has graduated from prototype to early production, with commercial scale still at least a year of ramp away. The wider humanoid race, including Toyota’s entry, is moving on the same logic: whoever turns a demo into a factory first wins the next decade of robotics, and Tesla is now claiming it has started.',
    ],
    sources: ['TechRepublic'],
  },
  {
    slug: 'li-auto-2026-i6-m100-chip-96kwh-battery-october-2026',
    title: 'Li Auto Launches Updated i6 With Its Own Driving Chip and a Bigger Battery',
    description:
      'The 2026 Li i6 starts at RMB 249,800 with a 96 kWh battery, 780 km CLTC range and a 1,280-TOPS in-house Mach M100 chip.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'Same price, new brain, new battery: Li Auto’s refresh bets that in-house silicon beats another price cut.',
    body: [
      'Li Auto launched the 2026 version of its i6 electric SUV on October 28, with a starting list price of RMB 249,800 and a limited-time price of RMB 239,800 available through November 30. The update standardizes two in-house technologies across all trims: the Mach M100 assisted-driving chip, delivering 1,280 TOPS of computing performance alongside the Mach VLA assisted-driving system, and a 96 kWh Lianshan 5C lithium iron phosphate battery.',
      'Range rises with the battery. The rear-wheel-drive version’s CLTC-rated range increases to 780 kilometers, compared with 720 kilometers previously, while the all-wheel-drive version offers 710 kilometers. Other upgrades include a 29-inch 6K panoramic display, a Snapdragon 8797 cockpit chip, support for Apple CarPlay, Huawei HiCar and Carlink, two zero-gravity front seats and a powered front trunk. Li Auto said vehicles available from inventory could be delivered within one to two weeks.',
      'The i6 is Li Auto’s volume engine: it has accumulated nearly 200,000 deliveries in just over a year on the market and contributed more than half of Li Auto’s total sales in the first three quarters of 2026, yet the company still posted a first-half loss of RMB 3.981 billion with vehicle gross margin falling to 7.8%. The European version, branded the Li 6, is slated to begin deliveries in the Netherlands and Norway in the first quarter of 2027 — making the i6’s refresh a test of whether better technology, rather than cheaper prices, can hold ground in China’s crowded electric SUV market.',
    ],
    sources: ['TechNode', 'Li Auto'],
  },
  {
    slug: 'honda-affordable-ev-suv-2027-report-india-october-2026',
    title: 'Report: Honda Plans a More Affordable Electric SUV for Early 2027',
    description:
      'Reports say an India-built EV based on the 0 SUV concept could offer up to 650 km of range and a sub-AUD 40,000 price target.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'This is a report, not a Honda announcement — but the details are specific enough to take seriously.',
    body: [
      'Honda is planning an affordable new electric crossover based on its 0 SUV concept car, with a global debut pencilled in for early 2027, according to reports published on October 29. The new EV will be built in India, reports say, and will slot in size between the HR-V and ZR-V. Honda itself is remaining tight-lipped around further performance details, so everything here should be read as reported, not confirmed.',
      'On the reported specifications, the crossover will use Honda’s in-house skateboard platform and be available with either a 61 or 75 kWh battery, with a targeted electric operating range of up to 650 km. The 0 SUV concept it is based on features an angular profile with a raked windshield and low roofline, a black panel front fascia with pixelated headlamps, U-shaped taillamps, and a cabin with digital instrumentation, a central touchscreen and a front passenger display.',
      'The price target is the point. Reports suggest the EV could enter the market below AUD 40,000, with Honda Australia director Robert Thorp telling Carsguide the company is aiming to position the upcoming EV as a more affordable model. That matters because it follows Honda cancelling most of its future EV plans to reassess its electrification strategy — a cheaper, India-built crossover would be the first evidence of what the reassessed strategy actually looks like. Until Honda confirms pricing, timing and markets, U.S. buyers should treat this as a watch item, not a shopping list entry.',
    ],
    sources: ['CARmag', 'Autoevolution', 'Carsguide'],
  },
  {
    slug: 'mg-u9-electric-ute-orders-australia-october-2026',
    title: 'MG Opens Orders for the U9 Electric Ute in Australia From $78,990',
    description:
      'The body-on-frame U9 EV claims 325 kW, a 430 km WLTP range, 3,500 kg towing and air suspension as standard.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'EVs',
    readMinutes: 3,
    excerpt:
      'An electric ute that tows like a diesel one: MG’s pitch is capability first, eco-credentials second.',
    body: [
      'MG Motor Australia has opened order books for the U9 EV with a starting price of $78,990 before on-road costs. Company specifications list dual electric motors producing up to 325 kW and 700 Nm, a 0–100 km/h time of 5.8 seconds, a 102.2 kWh lithium iron phosphate battery with a WLTP range of 430 km, and up to 115 kW DC charging that raises state of charge from 20 to 80 percent in about 42 minutes.',
      'The capability numbers are the selling point. MG states the U9 EV has a braked towing capacity of 3,500 kg and a payload of 685 kg, matching its turbo-diesel sibling and exceeding the Toyota HiLux BEV’s published towing figure. Australia will receive the U9 only in an all-wheel-drive, body-on-frame form with features such as 236 litres of under-bonnet storage and standard air suspension, and MG reports strong early customer interest.',
      'The honest caveat is that towing and range are enemies: a 430 km WLTP figure is measured unladen, and real-world range while towing 3,500 kg will be far lower, as it is for every electric ute. The U9 joins a very small local electric-ute market that includes the KGM Musso EV and HiLux BEV, so its real test will be charging access and towing conditions in everyday use — not the spec sheet. For buyers who want diesel capability without diesel running costs, it is now the most capable-sounding option on order in Australia.',
    ],
    sources: ['MG Motor Australia'],
  },
  {
    slug: 'dodge-durango-2026-tail-light-recall-13330-october-2026',
    title: 'Dodge Recalls 13,330 Durango SUVs Over Failing Tail Lights',
    description:
      'FCA says damaged terminals in the 2026 Durango tail-light wiring harness can stop the lights illuminating, raising crash risk.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'Tail lights that do not light are a visibility failure for everyone behind you — dealers will replace the assemblies free.',
    body: [
      'FCA US LLC is recalling more than 13,000 vehicles because the tail lights are not illuminating properly, according to a notice posted by the National Highway Traffic Safety Administration. The recall covers 13,330 vehicles, all of them the 2026 Dodge Durango, and carries the FCA recall number A2D.',
      'The defect is in the wiring, not the bulb. “The terminals in the tail light wiring harness may be damaged and cause the tail lights to fail,” the notice says. A tail light that fails reduces visibility for the motorist and for drivers behind, increasing the risk of a crash — particularly at night, in rain, or in stop-and-go traffic where brake and tail lights are the main warning other drivers get.',
      'Car owners should take their vehicle to a dealership to have the tail light assemblies replaced at no cost. Notification letters will be sent out on December 4, and Chrysler can be reached at 800-853-1403. Do not wait for the letter if your Durango’s tail lights look dim, flicker, or fail: check the VIN in NHTSA’s recall database now and book the replacement, because a lighting failure is one of the cheapest recalls to fix and one of the most dangerous to ignore.',
    ],
    sources: ['NHTSA', 'USA TODAY'],
  },
  {
    slug: 'kia-ev9-battery-recall-one-suv-16-complaints-october-2026',
    title: 'Kia’s EV9 Battery Recall Covers Just One SUV — After 16 Owners Reported Failing Packs',
    description:
      'Recall 26V431 lists one 2024 EV9 and seven EV6s with SK On cells that may short, while owners filed 16 battery-failure complaints.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 3,
    excerpt:
      'One car recalled, sixteen owners complaining: the gap between Kia’s recall list and the complaint file is the story.',
    body: [
      'Kia’s EV9 battery fire recall, 26V431 (Kia code SC375), covers exactly one 2024 EV9 in the United States, built on October 28, 2023. Kia’s Part 573 report, filed July 2, 2026, lists 8 vehicles in total: seven EV6s and one EV9, all with SK On cells that may have a misaligned electrode, a defect that can short and start a fire. The recall list came from production and supplier records, not from owner reports.',
      'An analysis of NHTSA’s public complaint file, pulled October 28, tells a different story. Sixteen different 2024 EV9 owners had already told federal regulators their high-voltage battery was failing, in complaints filed between November 6, 2024 and February 26, 2026 — out of 210 total complaints on file for the 2024 EV9. Nine of the sixteen reported a dash warning, and nine said they were told not to drive or were towed. Because Kia’s recall population came from supplier records, if your EV9 is one of the sixteen, the recall letter is almost certainly not coming to you.',
      'The caveat matters: owner complaints are unverified, and some may describe a different failure than the misaligned-electrode defect in the recall. The gap is still a legitimate question for regulators, because 603 days passed between the first battery complaint and the recall filing. The practical move for any 2024 EV9 owner with battery warnings, sudden power loss or a tow is to get the failure documented with the dealer and NHTSA now, and to check the VIN — not to assume a recall covers a car that the supplier records missed.',
    ],
    sources: ['NHTSA', 'Kia'],
  },
  {
    slug: 'hyundai-tucson-phantom-braking-recall-analysis-october-2026',
    title: 'Hyundai Tucson Phantom-Braking Recall: Filing Counts 4 Crashes, Owners Reported 22',
    description:
      'An analysis of NHTSA complaints finds a wide gap with recall 26V316, which covers unintended braking in 2025 Tucsons.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Recalls',
    readMinutes: 4,
    excerpt:
      'Hyundai’s recall filing and the owner complaint file measure different things — but a five-fold gap still deserves a question.',
    body: [
      'Hyundai’s recall report for unintended braking in the Tucson says that as of its decision it had received 376 reports about the forward collision system, and four described a crash in which a Tucson was rear-ended, with four alleged injuries. NHTSA’s public complaint file tells a bigger story: filtering 2025 Tucson, Tucson Hybrid, Tucson Plug-In Hybrid and Santa Cruz complaints to the forward collision component and to Hyundai’s own window, owners checked the crash box 22 times and reported 12 injuries.',
      'The two counts measure different things, and that must be said plainly. Owner complaints are unverified, some crashes may not be caused by the defect, and Hyundai only counted rear-end crashes it tied to the condition. But nobody had published the gap, and a factor of five is a question NHTSA can ask in public — especially for a defect where the car brakes for nothing and the car behind does the crashing.',
      'The chronology in Hyundai’s own filing is the second story. Its safety office replicated the unintended braking in a fleet car on June 19, 2025. NHTSA’s defects office asked about Tucson owner complaints on September 23, 2025, 96 days later. Hyundai then briefed regulators five times while it tested at its own lab, the California Proving Grounds and tracks in South Korea. Fixed camera software went into production at Ulsan on March 12, 2026 and at the Alabama plant on April 2. The recall was filed on May 18, and owner letters were mailed July 17: 393 days after the first replication. During the talks that followed NHTSA’s inquiry, another 113 complaints arrived, including 15 that reported a crash. If your Tucson brakes unexpectedly, report it to NHTSA as well as to the dealer — the complaint file is, evidently, part of the record.',
    ],
    sources: ['NHTSA', 'Hyundai'],
  },
  {
    slug: 'jetson-one-police-work-florida-polytechnic-october-2026',
    title: 'A Personal Flying Vehicle Takes Up Police Work at a Florida University',
    description:
      'Florida Polytechnic University will integrate Jetson’s $98,000 Jetson One eVTOL into police work, Jetson says.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'From demo flights to a campus police fleet: the personal eVTOL is starting to find institutional jobs.',
    body: [
      'A personal flying vehicle from Jetson has been selected by Florida Polytechnic University to integrate the electric vertical takeoff and landing vehicle into police work. The Jetson One already took its maiden flight in the United States, and Jetson also received an operational authorization from the Italian Civil Aviation Authority to fly unmanned Jetson One vehicles remotely — a standard practice for numerous new eVTOL vehicles working through early operations.',
      'The commercial signal is the order book. Jetson said the company has already sold more than 300 Jetson One vehicles at $98,000 each. That is a real, if small, market for a machine that most people still think of as a concept: a single-seat, open-frame eVTOL that a buyer can, in principle, own and fly without the infrastructure of an airport or a commercial air taxi network.',
      'This is not the first time a personal aerial vehicle has flown in the United States, as others have been doing so for some time during development phases. What is new is the job description: a university police operation is now a named, institutional use case rather than a test flight. The report does not detail which police duties the Jetson One will perform, so the sensible reading is that this is an early operational trial — useful, visible, and still a long way from replacing a patrol car.',
    ],
    sources: ['Jetson', 'Florida Polytechnic University'],
  },
  {
    slug: 'skydrive-singapore-mou-six-companies-october-2026',
    title: 'SkyDrive Signs Singapore R&D Pact With Six Tech Companies',
    description:
      'The October 29 memorandum links SkyDrive with Singapore partners on advanced air mobility R&D and supply chains.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Industry',
    readMinutes: 3,
    excerpt:
      'SkyDrive’s path to a 2028 service runs through partnerships — and Singapore is now part of the supply chain plan.',
    body: [
      'SkyDrive signed a memorandum of understanding with six Singapore tech companies on October 29 to collaborate on advanced air mobility research and development. The collaborations reflect the companies’ capabilities as technology and supply chain partners, opening opportunities for them to participate in emerging global value chains and pursue new areas of growth, according to the announcement.',
      'The Singapore pact fits SkyDrive’s wider pattern of building the ecosystem before the aircraft is certified. SkyDrive has separately launched a joint initiative with aviation, infrastructure, energy, tourism, finance and insurance companies in Japan’s Kansai region — led by MUFG Bank — to advance the commercial deployment of eVTOL aircraft in western Japan. Partnerships, not just prototypes, are how a small eVTOL maker assembles the maintenance, infrastructure and financing a real air taxi network needs.',
      'SkyDrive is a Japanese compact eVTOL company aiming, in its own words, “to take the lead in the once-in-a-century mobility revolution.” It began testing eVTOL prototypes in 2014, was incorporated in 2018, and in 2019 became the first company to fly a crewed eVTOL in Japan. In 2025 it showcased SKYDRIVE, its first commercial eVTOL product, with demonstration flights at the Osaka Expo witnessed by thousands of visitors over a month. Production began in March 2024 at a plant owned by Suzuki Motor Corporation, SkyDrive’s official production partner, and the company is working with civil aviation authorities in Japan and the United States toward launching the aircraft into service in 2028.',
    ],
    sources: ['BusinessWire', 'SkyDrive', 'Aviation Week'],
  },
  {
    slug: 'october-lease-deals-283-offers-ranked-october-2026',
    title: 'October’s 283 Lease Deals, Ranked: Land Cruiser at $449 Leads the Value List',
    description:
      'A ranking of every advertised October lease scores the 2027 Land Cruiser at $449 a month, the XC90 at $599 and the Sportage PHEV at $309.',
    date: 'October 29, 2026',
    dateISO: '2026-10-29',
    author: 'CARC Editorial Team',
    category: 'Prices',
    readMinutes: 3,
    excerpt:
      'Ranked by true monthly cost against sticker price, October’s best leases are hybrids, plug-ins and one very surprising Land Cruiser.',
    body: [
      'A ranking of all 283 advertised lease offers for October 2026 scores each deal by lease value ratio — true monthly cost divided by sticker price, where lower is better — and the winner is a vehicle that usually holds its value too well to discount. The 2027 Toyota Land Cruiser leases for $449 a month with $4,999 at signing, a 36-month term on a $58,180 hybrid off-roader, for a total cost of $21,163. The offers in the ranking expire November 2, so the window is days, not weeks.',
      'The rest of the top ten shows how strong October is for electrified SUVs. The 2026 Volvo XC90 is $599 a month with $3,719 at signing on a $68,800 sticker, a total cost of $25,283. The 2026 Kia Sportage Plug-in Hybrid is $309 a month with $3,999 at signing, a total of $15,123 on a $40,490 sticker — the cheapest monthly payment among the plug-ins in the ranking. The 2026 Kia EV9 slips from third to ninth at $439 a month with $4,999 at signing, a total of $20,803, with $1,000 more upfront than in September.',
      'The Mazda CX-70 PHEV, at $357 a month with $3,999 at signing on a $44,250 sticker, improved its ratio after Mazda dropped the deposit from $7,919 to $3,999. The lesson of the ranking is not to pick a car on the ratio alone: monthly payment, due-at-signing, mileage limits, region and what the car is worth at lease end all change the real cost. Get competing prices from multiple dealers in your area before signing anything — and confirm the offer is still live, since most of these expire November 2.',
    ],
    sources: ['FindTheBestCarPrice'],
  },
]

export function getArticle(slug: string): NewsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export const CATEGORIES = ['All', 'EVs', 'Recalls', 'Prices', 'Industry', 'Comparisons']
