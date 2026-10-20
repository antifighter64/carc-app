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
]

export function getArticle(slug: string): NewsArticle | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export const CATEGORIES = ['All', 'EVs', 'Recalls', 'Prices', 'Industry', 'Comparisons']
