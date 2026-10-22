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
  },,
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
]

export function getArticle(slug: string): NewsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export const CATEGORIES = ['All', 'EVs', 'Recalls', 'Prices', 'Industry', 'Comparisons']
