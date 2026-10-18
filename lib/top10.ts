export interface Top10Car {
  rank: number
  name: string
  price: string
  specs: string
  blurb: string
  pros: string[]
}

export interface Top10List {
  slug: string
  title: string
  description: string
  intro: string
  updated: string
  cars: Top10Car[]
}

const car = (
  rank: number,
  name: string,
  price: string,
  specs: string,
  blurb: string,
  pros: string[],
): Top10Car => ({ rank, name, price, specs, blurb, pros })

export const LISTS: Top10List[] = [
  {
    slug: 'best-2026-evs',
    title: 'The 10 Best Electric Cars of 2026',
    description:
      'The best EVs of 2026 ranked: Tesla Model Y, Hyundai Ioniq 5, Kia EV6 and more. Real range, pricing, and honest picks from CARC.',
    intro:
      'EVs hit 6.4% of US new-car sales in Q3 2026, and the field has never been stronger. These are the ten electric cars worth your money this year — ranked on range, value, charging, and how well they hold their value.',
    updated: 'October 2026',
    cars: [
      car(1, 'Tesla Model Y', 'from ~$40,000', 'Up to ~360 mi range · 0–60 in ~4.6s', 'America\'s best-selling EV for a reason: the best charging network, strong range, and over 262,000 sold so far in 2026. The benchmark everything else is measured against.', ['Best charging network', 'Strong resale value', 'Huge owner community']),
      car(2, 'Hyundai Ioniq 5', 'from ~$35,000', 'Up to ~318 mi range · 800V fast charging', 'The value king. Ultra-fast 800V charging, bold retro styling, and a starting price thousands below Tesla. The #3 best-selling EV in America this year.', ['800V ultra-fast charging', 'Great value', 'Spacious interior']),
      car(3, 'Tesla Model 3', 'from ~$39,000', 'Up to ~363 mi range · 0–60 in ~4.9s', 'The second best-selling EV in the US with ~107,000 sales this year. Efficient, quick, and cheaper to run than almost anything on the road.', ['Excellent efficiency', 'Low running costs', 'Proven platform']),
      car(4, 'Kia EV6', 'from ~$43,000', 'Up to ~310 mi range · 800V fast charging', 'The Ioniq 5\'s sportier sibling. Same brilliant 800V architecture in a sleeker package with engaging handling.', ['Fast charging', 'Sporty driving feel', 'Long warranty']),
      car(5, 'Chevrolet Equinox EV', 'from ~$35,000', 'Up to ~319 mi range · FWD/AWD', 'The affordable long-range crossover. Over 300 miles of range for around $35K makes it one of the best dollar-per-mile values in EVs.', ['Great range per dollar', 'Comfortable ride', 'Easy to live with']),
      car(6, 'Honda Prologue', 'from ~$48,000', 'Up to ~296 mi range · GM Ultium platform', 'Honda\'s sensible electric crossover. Not the flashiest, but comfortable, well-built, and backed by Honda\'s dealer network.', ['Honda reliability reputation', 'Comfortable cruiser', 'Good visibility']),
      car(7, 'Ford Mustang Mach-E', 'from ~$37,000', 'Up to ~320 mi range · AWD available', 'Still a strong pick with engaging handling and Ford\'s growing BlueOval charging network access.', ['Fun to drive', 'Stylish', 'Good tech']),
      car(8, 'Toyota bZ', 'from ~$38,000', 'Up to ~314 mi range · FWD/AWD', 'Toyota\'s electric crossover (renamed from bZ4X). Solid, sensible, and efficient — very on-brand for Toyota.', ['Toyota dependability', 'Efficient', 'Good safety tech']),
      car(9, 'Rivian R1S', 'from ~$76,000', 'Up to ~410 mi range · Quad-motor AWD', 'The adventure EV. Genuinely capable off-road with a premium interior. Expensive, but nothing else does what it does.', ['Real off-road ability', 'Premium interior', 'Huge range']),
      car(10, 'Lucid Gravity', 'from ~$80,000', 'Up to ~450 mi range · 3-row SUV', 'The range champion. Lucid\'s electric SUV pushes past 400 miles of range with luxury to match. Named to Autotrader\'s Best New Cars of 2026.', ['Class-leading range', 'Luxury cabin', 'Fast charging']),
    ],
  },
  {
    slug: 'best-2026-suvs',
    title: 'The 10 Best SUVs of 2026',
    description:
      'The best SUVs of 2026 ranked: redesigned Toyota RAV4, Mazda CX-5, Hyundai Palisade and more. Real prices, mpg, and honest picks.',
    intro:
      '2026 is a huge year for SUVs — the Toyota RAV4 and Mazda CX-5 were both redesigned, and the Hyundai Palisade and Honda Passport are all-new too. Here are the ten worth buying.',
    updated: 'October 2026',
    cars: [
      car(1, 'Toyota RAV4 Hybrid', 'from ~$33,350', '226–236 hp hybrid · up to 43 mpg', 'Redesigned for 2026 and now hybrid-only. Up to 43 mpg, Toyota reliability, and the best resale in the class. The default answer for a reason.', ['Best fuel economy in class', 'Top resale value', 'Toyota reliability']),
      car(2, 'Honda CR-V', 'from ~$32,000', '190 hp gas / 204 hp hybrid · up to 40 mpg', 'The sensible benchmark. Huge cargo hold, refined ride, and a hybrid that hits 40 mpg. Carries over largely unchanged because it didn\'t need changing.', ['Huge cargo space', 'Refined ride', 'Strong hybrid option']),
      car(3, 'Mazda CX-5', 'from ~$31,485', '187 hp 2.5L · 26 mpg · AWD standard', 'Ground-up redesign for 2026 with the nicest cabin under $40K. No hybrid until 2027, but the lowest entry price of the big three.', ['Best interior in class', 'Lowest starting price', 'Standard AWD']),
      car(4, 'Hyundai Palisade', 'from ~$38,000', '287 hp V6 / hybrid · 3 rows', 'Redesigned for 2026 and named to Autotrader\'s Best New Cars list. The family-hauler value champ with near-luxury features.', ['Upscale interior', 'Great value', '3-row practicality']),
      car(5, 'Honda Passport', 'from ~$45,000', '285 hp V6 · AWD · rugged redesign', 'All-new for 2026 with a tougher look and TrailSport off-road trim. Autotrader Best New Cars pick.', ['Rugged redesign', 'Strong V6', 'Off-road TrailSport trim']),
      car(6, 'Kia Telluride', 'from ~$37,000', '291 hp V6 · 3 rows', 'The perennial award-winner. Still one of the best three-row SUVs for the money with a premium feel.', ['Premium interior', 'Great warranty', 'Family friendly']),
      car(7, 'Subaru Outback', 'from ~$30,000', '180–260 hp · standard AWD', 'Redesigned for 2026 and an Autotrader Best New Cars pick. The wagon-SUV for people who actually go outdoors.', ['Standard AWD', 'Great visibility', 'Rugged capability']),
      car(8, 'Toyota Highlander', 'from ~$40,000', '265 hp turbo hybrid · 3 rows', 'The safe three-row pick. Hybrid efficiency, Toyota durability, and strong resale.', ['Hybrid efficiency', 'Toyota reliability', 'Strong resale']),
      car(9, 'Ford Explorer', 'from ~$41,000', '300–400 hp · RWD-based', 'Rear-drive platform gives it better towing and driving feel than most rivals. Big and capable.', ['Strong towing', 'Available V6 power', 'Spacious']),
      car(10, 'Chevrolet Equinox', 'from ~$30,000', '175 hp turbo · up to 31 mpg', 'The budget-friendly compact. Sharp new styling and a low price make it a smart value buy.', ['Low price', 'Good tech', 'Easy to park']),
    ],
  },
  {
    slug: 'best-2026-sedans',
    title: 'The 10 Best Sedans of 2026',
    description:
      'The best sedans of 2026 ranked: Honda Civic, Toyota Camry, Mazda3 and more. Real prices, mpg, and honest picks from CARC.',
    intro:
      'Sedans are a shrinking segment, which means the survivors are excellent. These ten offer the best blend of value, efficiency, and driving enjoyment in 2026.',
    updated: 'October 2026',
    cars: [
      car(1, 'Honda Civic', 'from ~$25,000', '150–200 hp · up to 36 mpg', 'The compact benchmark. Sharp handling, great hybrid option, and Honda resale. The car every rival is measured against.', ['Best-in-class handling', 'Great hybrid', 'Top resale']),
      car(2, 'Toyota Camry', 'from ~$29,000', '225 hp hybrid · up to 47 mpg', 'Hybrid-only since its redesign and nearly 50 mpg. The midsize sedan to beat for most buyers.', ['Excellent fuel economy', 'Toyota reliability', 'Comfortable ride']),
      car(3, 'Mazda3', 'from ~$25,000', '191 hp 2.5L · up to 36 mpg', 'The driver\'s compact. Premium interior feel at mainstream prices and genuinely fun to drive.', ['Fun to drive', 'Upscale interior', 'Available AWD']),
      car(4, 'Honda Accord', 'from ~$29,000', '192 hp / 204 hp hybrid · up to 48 mpg', 'The grown-up choice. Spacious, refined, and the hybrid is superbly efficient.', ['Spacious back seat', 'Refined', 'Great hybrid']),
      car(5, 'Toyota Corolla', 'from ~$23,000', '169 hp / hybrid · up to 50 mpg', 'The value king. Available hybrid hits 50 mpg and Toyota durability is legendary.', ['Low price', 'Great mpg (hybrid)', 'Legendary reliability']),
      car(6, 'Hyundai Sonata', 'from ~$28,000', '191–290 hp · hybrid available', 'Bold styling, big features list, and the N Line is genuinely quick. Lots of car for the money.', ['Feature-packed', 'N Line performance', 'Good warranty']),
      car(7, 'Kia K5', 'from ~$28,000', '191–294 hp · AWD available', 'The Sonata\'s sportier twin. Sharp looks and strong turbo options.', ['Stylish', 'Strong turbos', 'Good value']),
      car(8, 'Subaru Legacy', 'from ~$26,000', '182 hp · standard AWD', 'The only mainstream sedan with standard all-weather AWD. A smart pick for snow states.', ['Standard AWD', 'Good safety', 'Comfortable']),
      car(9, 'Nissan Altima', 'from ~$27,000', '188–248 hp · up to 39 mpg', 'Big, comfortable, and often heavily discounted — check the CARC deal score.', ['Often discounted', 'Comfortable', 'Spacious']),
      car(10, 'Volkswagen Jetta', 'from ~$23,000', '158 hp turbo · up to 41 mpg', 'European feel at an economy price. One of the cheapest ways into a new car.', ['Low price', 'Good highway mpg', 'Solid feel']),
    ],
  },
  {
    slug: 'best-2026-trucks',
    title: 'The 10 Best Pickup Trucks of 2026',
    description:
      'The best trucks of 2026 ranked: Ford F-150, Ram 1500, Silverado and more. Real towing, payload, prices, and honest picks.',
    intro:
      'From work-ready half-tons to the new wave of electric trucks, these are the ten pickups worth your money in 2026.',
    updated: 'October 2026',
    cars: [
      car(1, 'Ford F-150', 'from ~$38,000', 'Up to 720 hp (Raptor) · 13,500 lb towing', 'America\'s best-seller for decades. The most choice — V8, EcoBoost, hybrid, or Lightning EV — and massive aftermarket support.', ['Most configurations', 'Best towing', 'Huge dealer network']),
      car(2, 'Ram 1500', 'from ~$42,000', '420–540 hp Hurricane I6 · 11,550 lb towing', 'The most comfortable-riding truck thanks to coil-spring rear suspension. The new Hurricane six is strong and smooth.', ['Best ride quality', 'Luxurious interior', 'Strong new engines']),
      car(3, 'Chevrolet Silverado 1500', 'from ~$38,000', 'Up to 495 lb-ft diesel · 13,300 lb towing', 'The workhorse. Excellent Duramax diesel option and straightforward capability.', ['Great diesel option', 'High towing', 'Proven platform']),
      car(4, 'Toyota Tundra', 'from ~$42,000', '389–437 hp twin-turbo V6 hybrid', 'Toyota\'s full-sizer with hybrid power and legendary durability reputation.', ['Toyota reliability', 'Hybrid power', 'Strong resale']),
      car(5, 'Ford Maverick Lobo', 'from ~$37,000', '250 hp turbo · street-truck style', 'Named to Autotrader\'s Best New Cars of 2026. The street-performance take on America\'s favorite small truck.', ['Autotrader 2026 pick', 'Fun street style', 'Affordable']),
      car(6, 'GMC Sierra 1500', 'from ~$39,000', 'Up to 495 lb-ft diesel · Denali luxury', 'The Silverado\'s upscale twin. Denali trims rival luxury SUVs inside.', ['Denali luxury', 'Diesel option', 'Premium feel']),
      car(7, 'Rivian R1T', 'from ~$70,000', 'Up to 835 hp quad-motor · 11,000 lb towing', 'The electric adventure truck. Tank turn, camp kitchen, and supercar speed in a pickup.', ['Electric adventure', 'Huge power', 'Innovative features']),
      car(8, 'Toyota Tacoma', 'from ~$33,000', '278–326 hp turbo/hybrid', 'The midsize king. New hybrid powertrain and unbeatable resale value.', ['Top resale', 'Hybrid option', 'Off-road TRD trims']),
      car(9, 'Chevrolet Colorado', 'from ~$33,000', '310 hp turbo · ZR2 off-road', 'The midsize value pick. The ZR2 Bison is seriously capable off-road.', ['Good value', 'Capable ZR2 trim', 'Modern tech']),
      car(10, 'Ford Ranger', 'from ~$34,000', '270–405 hp · Raptor available', 'The global Ford done right. The Ranger Raptor is a desert-running bargain.', ['Raptor performance', 'Good size', 'Strong engines']),
    ],
  },
  {
    slug: 'best-2026-luxury-cars',
    title: 'The 10 Best Luxury Cars of 2026',
    description:
      'The best luxury cars of 2026 ranked: Mercedes S-Class, Genesis G90, Lucid Air and more. Honest picks from CARC.',
    intro:
      'Luxury in 2026 means silence, technology, and presence — with or without a V8. These ten deliver the finest driving and riding experiences money can buy.',
    updated: 'October 2026',
    cars: [
      car(1, 'Mercedes-Benz S-Class', 'from ~$118,000', '442–496 hp · 48V hybrid assist', 'Still the benchmark. The S-Class defines what a luxury sedan should be: silent, supremely comfortable, and effortlessly advanced.', ['Benchmark luxury', 'Supreme comfort', 'Advanced tech']),
      car(2, 'Genesis G90', 'from ~$90,000', '409 hp twin-turbo V6 · AWD', 'S-Class luxury for E-Class money. The value play in flagship sedans with a genuinely gorgeous interior.', ['Incredible value', 'Beautiful interior', 'Long warranty']),
      car(3, 'BMW 7 Series', 'from ~$97,000', '375–536 hp · available electric i7', 'The driver\'s flagship. More engaging than the S-Class with wild available features like the theater screen.', ['Engaging drive', 'Bold tech', 'Electric i7 option']),
      car(4, 'Lucid Air', 'from ~$71,000', 'Up to 1,234 hp Sapphire · 512 mi range', 'The efficiency miracle. More range than any EV and supercar speed in Sapphire trim.', ['Best EV range', 'Stunning efficiency', 'Huge power']),
      car(5, 'Porsche Panamera', 'from ~$105,000', '348–670 hp · hybrid options', 'The sports car of big sedans. Nothing this large should handle this well.', ['Sports-car handling', 'Strong hybrids', 'Prestige']),
      car(6, 'Range Rover', 'from ~$108,000', '523 hp V8 / new Electric 542 hp', 'The new Range Rover Electric brings 542 hp and 372 miles of range to the luxury SUV icon.', ['Iconic presence', 'New electric version', 'Supreme comfort']),
      car(7, 'Cadillac Celestiq', 'from ~$340,000', '600 hp electric · hand-built', 'Cadillac\'s hand-built electric flagship. Ultra-luxury, ultra-exclusive.', ['Hand-built exclusivity', 'Electric flagship', 'Bespoke luxury']),
      car(8, 'Lexus LS', 'from ~$80,000', '416 hp twin-turbo V6 hybrid', 'Whisper-quiet and obsessively crafted. Lexus reliability in flagship form.', ['Silence', 'Craftsmanship', 'Reliability']),
      car(9, 'Audi A8', 'from ~$90,000', '563 hp V8 (S8)', 'Understated tech-luxury. The S8 brings serious speed to the understated package.', ['Understated elegance', 'Quattro AWD', 'Tech-forward']),
      car(10, 'Cadillac VISTIQ', 'from ~$79,000', '615 hp electric · 3-row', 'Autotrader\'s Best New Cars of 2026 pick. Electric three-row luxury with serious punch.', ['2026 standout', 'Electric 3-row', 'Strong performance']),
    ],
  },
  {
    slug: 'best-2026-budget-cars',
    title: 'The 10 Best Budget Cars of 2026',
    description:
      'The best cheap cars of 2026 ranked: Nissan Versa, Hyundai Venue, Chevy Trax and more. Real prices under $28K and honest picks.',
    intro:
      'With the average new car over $50,000, these ten prove you can still buy new for under $28,000. Smart, honest transportation that won\'t wreck your budget.',
    updated: 'October 2026',
    cars: [
      car(1, 'Nissan Versa', 'from ~$18,000', '122 hp · up to 40 mpg', 'America\'s cheapest new car. Simple, efficient, and shockingly decent to drive.', ['Lowest price', 'Great mpg', 'Simple and honest']),
      car(2, 'Hyundai Venue', 'from ~$21,000', '121 hp · up to 33 mpg', 'Tiny crossover, tiny price. Easy to park, cheap to run, big warranty.', ['Low price', 'Easy to park', 'Great warranty']),
      car(3, 'Chevrolet Trax', 'from ~$22,000', '137 hp turbo · up to 32 mpg', 'The budget crossover done right. Sharp looks, decent space, real value.', ['Stylish', 'Good space', 'Low price']),
      car(4, 'Kia Soul', 'from ~$21,000', '147 hp · up to 35 mpg', 'The boxy icon. Huge interior for the money and full of personality.', ['Huge interior', 'Personality', 'Good value']),
      car(5, 'Toyota Corolla', 'from ~$23,000', '169 hp · up to 50 mpg (hybrid)', 'Spend a little more, get Toyota durability and 50-mpg hybrid economy.', ['Toyota reliability', 'Hybrid mpg', 'Low running costs']),
      car(6, 'Honda Civic', 'from ~$25,000', '150 hp · up to 36 mpg', 'The best cheap car that doesn\'t feel cheap. Great to drive, great resale.', ['Fun to drive', 'Top resale', 'Quality feel']),
      car(7, 'Mazda3', 'from ~$25,000', '191 hp · up to 36 mpg', 'Premium feel at a budget price. The enthusiast\'s cheap car.', ['Upscale interior', 'Fun handling', 'Strong engine']),
      car(8, 'Hyundai Elantra', 'from ~$22,000', '147 hp · up to 41 mpg (hybrid)', 'Big warranty, bold styling, and a hybrid that sips fuel.', ['Long warranty', 'Hybrid efficiency', 'Bold looks']),
      car(9, 'Nissan Sentra', 'from ~$22,000', '149 hp · up to 40 mpg', 'Comfortable, efficient, and often discounted well below sticker.', ['Often discounted', 'Comfortable', 'Good mpg']),
      car(10, 'Mitsubishi Mirage', 'from ~$18,000', '78 hp · up to 43 mpg', 'The cheapest, most efficient gas car sold in America. Slow but honest.', ['Cheapest option', 'Great mpg', 'Simple']),
    ],
  },
  {
    slug: 'best-2026-safest-cars',
    title: 'The 10 Safest Cars of 2026',
    description:
      'The safest cars of 2026: models with top IIHS and NHTSA ratings. Volvo, Subaru, Honda, Genesis and more — honest picks from CARC.',
    intro:
      'Safety ratings vary by trim and change through the model year. These ten models have consistently earned the highest marks from IIHS (Top Safety Pick+) and NHTSA (5-star) testing — always verify the specific trim you\'re buying.',
    updated: 'October 2026',
    cars: [
      car(1, 'Volvo XC90', 'from ~$60,000', '247–455 hp · IIHS TSP+', 'Volvo invented the modern safety conversation. The XC90 remains a perennial top safety pick.', ['Safety leader', 'Great crash scores', 'Advanced assists']),
      car(2, 'Subaru Outback', 'from ~$30,000', '180–260 hp · IIHS TSP+', 'Redesigned for 2026 with Subaru\'s latest EyeSight safety tech standard.', ['Standard EyeSight', 'Top crash scores', 'AWD standard']),
      car(3, 'Honda Accord', 'from ~$29,000', '192–204 hp · IIHS TSP+', 'A consistent IIHS Top Safety Pick+ with Honda Sensing standard on every trim.', ['Consistent top ratings', 'Standard safety tech', 'Great visibility']),
      car(4, 'Toyota Camry', 'from ~$29,000', '225 hp hybrid · IIHS TSP+', 'Toyota Safety Sense 3.0 standard and top-tier crash performance.', ['Top crash scores', 'Standard active safety', 'Hybrid efficiency']),
      car(5, 'Genesis GV60', 'from ~$53,000', '314–429 hp electric · IIHS TSP+', 'Electric and exceptionally safe, with Genesis\' full Highway Driving Assist suite.', ['Top EV safety', 'Advanced assists', 'Luxury cabin']),
      car(6, 'Hyundai Ioniq 5', 'from ~$35,000', '168–320 hp electric · IIHS TSP+', 'One of the safest EVs you can buy, with excellent crash structure scores.', ['Top safety ratings', 'Great value', 'Fast charging']),
      car(7, 'Mazda CX-5', 'from ~$31,485', '187 hp · IIHS TSP+', 'Redesigned for 2026 with Mazda\'s i-Activsense safety suite standard.', ['Standard safety tech', 'Good crash scores', 'Great visibility']),
      car(8, 'Subaru Forester', 'from ~$31,000', '180 hp · standard AWD', 'A perennial IIHS standout with standard EyeSight and excellent visibility.', ['Standard EyeSight', 'Excellent visibility', 'Family proven']),
      car(9, 'Acura MDX', 'from ~$52,000', '290–355 hp · IIHS TSP+', 'Three-row luxury with AcuraWatch standard and top crash ratings.', ['Top 3-row safety', 'Standard assists', 'Strong structure']),
      car(10, 'Tesla Model Y', 'from ~$40,000', 'Electric · NHTSA 5-star', 'Top NHTSA scores across the board and some of the best active-safety tech in the business.', ['5-star NHTSA', 'Best active safety', 'Strong structure']),
    ],
  },
  {
    slug: 'best-2026-fuel-efficient-cars',
    title: 'The 10 Most Fuel-Efficient Cars of 2026',
    description:
      'The most fuel-efficient cars of 2026 ranked: Prius, Elantra Hybrid, Corolla Hybrid and more. Real mpg numbers and honest picks.',
    intro:
      'With gas at $4.33 a gallon, efficiency is money. These ten non-plug-in cars deliver the best real-world fuel economy in America for 2026.',
    updated: 'October 2026',
    cars: [
      car(1, 'Toyota Prius', 'from ~$29,000', '194–196 hp hybrid · up to 57 mpg', 'The efficiency icon, now genuinely good-looking. Up to 57 mpg combined.', ['57 mpg', 'Iconic efficiency', 'Now stylish']),
      car(2, 'Hyundai Elantra Hybrid', 'from ~$27,000', '139 hp hybrid · up to 54 mpg', '54 mpg for under $27K. The budget efficiency champ.', ['54 mpg', 'Low price', 'Long warranty']),
      car(3, 'Toyota Corolla Hybrid', 'from ~$24,000', '138 hp hybrid · up to 50 mpg', '50 mpg and Toyota durability for around $24K. Hard to argue with.', ['50 mpg', 'Low price', 'Toyota reliability']),
      car(4, 'Honda Civic Hybrid', 'from ~$30,000', '200 hp hybrid · up to 50 mpg', '50 mpg and 200 hp — efficiency without the penalty box feel.', ['50 mpg + 200 hp', 'Fun to drive', 'Great resale']),
      car(5, 'Toyota Camry', 'from ~$29,000', '225 hp hybrid · up to 47 mpg', 'A midsize sedan with 47 mpg. The family car that sips fuel.', ['47 mpg', 'Spacious', 'Toyota reliability']),
      car(6, 'Kia Niro', 'from ~$28,000', '139 hp hybrid · up to 53 mpg', 'Crossover practicality with 53-mpg hybrid efficiency.', ['53 mpg', 'Crossover space', 'Good value']),
      car(7, 'Honda Accord Hybrid', 'from ~$35,000', '204 hp hybrid · up to 48 mpg', 'Big, refined, and 48 mpg. The no-compromise efficient sedan.', ['48 mpg', 'Refined', 'Spacious']),
      car(8, 'Toyota RAV4 Hybrid', 'from ~$33,350', '226 hp hybrid · up to 44 mpg', 'The best-selling SUV formula: 44 mpg in America\'s favorite crossover.', ['44 mpg SUV', 'Top resale', 'Practical']),
      car(9, 'Hyundai Sonata Hybrid', 'from ~$37,000', '192 hp hybrid · up to 47 mpg', '47 mpg with solar roof option. Tech-forward efficiency.', ['47 mpg', 'Solar roof option', 'Feature-rich']),
      car(10, 'Toyota Corolla Cross Hybrid', 'from ~$29,000', '196 hp hybrid · up to 42 mpg', 'Small crossover, 42 mpg, Toyota badge. Simple math.', ['42 mpg', 'Toyota reliability', 'Practical size']),
    ],
  },
  {
    slug: 'best-2026-sports-cars',
    title: 'The 10 Best Sports Cars of 2026',
    description:
      'The best sports cars of 2026 ranked: Corvette, 911, Miata, Supra and more. Real performance, prices, and honest picks from CARC.',
    intro:
      'The sports car isn\'t dead — it\'s thriving. From the affordable Miata to the mighty Corvette ZR1, these are the ten most fun cars you can buy in 2026.',
    updated: 'October 2026',
    cars: [
      car(1, 'Chevrolet Corvette', 'from ~$70,000', '490–1,064 hp · 0–60 in 2.3s (ZR1)', 'Mid-engine supercar performance for sports car money. The ZR1\'s 1,064 hp is simply absurd.', ['Supercar speed', 'Incredible value', 'Multiple flavors']),
      car(2, 'Porsche 911', 'from ~$128,000', '388–640 hp · 0–60 in ~3.0s', 'The icon. Sixty years of evolution and still the benchmark sports car.', ['Benchmark handling', 'Daily usable', 'Strong resale']),
      car(3, 'Mazda MX-5 Miata', 'from ~$30,000', '181 hp · 2,300 lbs', 'The answer is always Miata. Light, simple, perfect balance — the purest fun per dollar in cars.', ['Purest driving fun', 'Lightweight', 'Affordable']),
      car(4, 'Toyota GR Supra', 'from ~$57,000', '382 hp turbo I6 · 0–60 in 3.9s', 'BMW-hearted Japanese coupe with a manual option. A modern classic in the making.', ['Manual available', 'Strong turbo six', 'Great chassis']),
      car(5, 'Ford Mustang', 'from ~$33,000', '315–500 hp · V8 available', 'The last V8 muscle coupe standing. Dark Horse brings 500 hp of track-ready fury.', ['V8 lives on', 'Dark Horse track trim', 'Icon status']),
      car(6, 'Nissan Z', 'from ~$44,000', '400 hp twin-turbo V6 · manual available', '400 hp, rear-drive, available manual. The Z delivers old-school sports car joy.', ['400 hp standard', 'Manual option', 'Great value']),
      car(7, 'Toyota GR86 / Subaru BRZ', 'from ~$32,000', '228 hp boxer · RWD', 'The affordable handling heroes. Low, light, and perfectly balanced.', ['Perfect balance', 'Affordable', 'Great chassis']),
      car(8, 'BMW M2', 'from ~$69,000', '473–523 hp · RWD/manual', 'The last of the small BMW M cars. Manual available, endlessly entertaining.', ['Manual available', 'M power', 'Compact size']),
      car(9, 'Honda Civic Type R', 'from ~$46,000', '315 hp turbo · FWD', 'The best front-drive performance car ever made. Practical enough for daily life.', ['Track-ready FWD', 'Daily usable', 'Honda reliability']),
      car(10, 'Hyundai Elantra N', 'from ~$36,000', '276 hp turbo · manual/DCT', 'The performance bargain. Adjustable everything and a riot to drive.', ['Huge value', 'Adjustable dynamics', 'Warranty']),
    ],
  },
  {
    slug: 'best-2026-supercars',
    title: 'The 10 Best Supercars of 2026',
    description:
      'The best supercars of 2026 ranked: Corvette ZR1, 911 GT3, McLaren 750S, Ferrari 296 and more. Honest picks from CARC.',
    intro:
      'Seven figures of combined horsepower. These are the ten most extraordinary performance machines on sale in 2026 — the cars that define the absolute limit.',
    updated: 'October 2026',
    cars: [
      car(1, 'Chevrolet Corvette ZR1', 'from ~$178,000', '1,064 hp twin-turbo V8 · 2.3s 0–60', 'Over a thousand horsepower for under $200K. The performance bargain of the century.', ['1,064 hp', 'Unbeatable value', 'Track monster']),
      car(2, 'Porsche 911 GT3 RS', 'from ~$242,000', '518 hp NA flat-6 · 9,000 rpm', 'The track-day king. A naturally aspirated masterpiece that revs to the heavens.', ['NA perfection', 'Track focused', 'Motorsport pedigree']),
      car(3, 'McLaren 750S', 'from ~$330,000', '740 hp twin-turbo V8', 'Woking\'s finest: telepathic steering and a carbon tub. The driver\'s supercar.', ['Carbon tub', 'Superb steering', 'Lightweight']),
      car(4, 'Ferrari 296 GTB', 'from ~$347,000', '819 hp hybrid V6', 'The hybrid Prancing Horse. Stunning speed with a usable electric range.', ['Ferrari magic', 'Hybrid power', 'Gorgeous']),
      car(5, 'Lamborghini Temerario', 'from ~$360,000', '907 hp hybrid V8', 'The Huracán\'s wild successor. A 10,000-rpm hybrid V8 with theatrical fury.', ['10,000 rpm', 'Theater', 'Hybrid V8']),
      car(6, 'Porsche 911 Turbo S', 'from ~$241,000', '640 hp twin-turbo flat-6', 'The everyday supercar. Devastating speed in any weather, usable daily.', ['All-weather speed', 'Daily usable', 'Launch control king']),
      car(7, 'Mercedes-AMG GT', 'from ~$180,000', '577–805 hp (63 S E Performance)', 'The hybrid AMG GT 63 S E Performance brings 805 hp to the grand tourer fight.', ['805 hp hybrid', 'Grand touring', 'Brutal speed']),
      car(8, 'Aston Martin Vantage', 'from ~$195,000', '656 hp twin-turbo V8', 'Britain\'s brawler, comprehensively updated. Gorgeous and genuinely fast.', ['Stunning looks', 'Big power', 'British charm']),
      car(9, 'Chevrolet Corvette Z06', 'from ~$118,000', '670 hp flat-plane V8 · 8,600 rpm', 'A flat-plane-crank screamer for barely six figures. The attainable exotic.', ['Flat-plane V8', 'Attainable price', 'Track ready']),
      car(10, 'McLaren Artura', 'from ~$240,000', '690 hp hybrid V6', 'The entry McLaren with hybrid power and junior-supercar agility.', ['Hybrid efficiency', 'Agile', 'Carbon tub']),
    ],
  },
  {
    slug: 'best-2026-muscle-cars',
    title: 'The 10 Best Muscle Cars of 2026',
    description:
      'The best muscle cars of 2026: Mustang, new Dodge Charger, and the last of the V8 era. Real power, prices, and honest picks.',
    intro:
      'The muscle car world has changed: the Camaro is gone and the Charger is reinvented. But the spirit lives on — here are the ten hardest-hitting American performance cars of 2026.',
    updated: 'October 2026',
    cars: [
      car(1, 'Ford Mustang GT', 'from ~$47,000', '486 hp 5.0L V8 · manual available', 'The last V8 muscle coupe you can buy new. The Coyote V8 with a stick is a national treasure.', ['V8 + manual', 'Icon', 'Affordable power']),
      car(2, 'Ford Mustang Dark Horse', 'from ~$65,000', '500 hp 5.0L V8 · track-ready', 'The ultimate Mustang: 500 hp, track suspension, and Tremec manual. A future classic.', ['500 hp', 'Track hardware', 'Tremec manual']),
      car(3, 'Dodge Charger Daytona', 'from ~$60,000', '670 hp electric · AWD', 'The Charger goes electric with 670 hp and a Fratzonic exhaust that fakes the fury. Controversial, undeniably quick.', ['670 hp EV', 'Bold reinvention', 'AWD traction']),
      car(4, 'Dodge Charger Sixpack', 'from ~$55,000', '550 hp Hurricane twin-turbo I6', 'For the faithful: the new Charger with a 550-hp twin-turbo six and real exhaust noise.', ['550 hp six', 'Real exhaust', 'Heritage styling']),
      car(5, 'Chevrolet Corvette Stingray', 'from ~$70,000', '490 hp mid-engine V8', 'America\'s sports car with a muscle-car heart. The best performance value on Earth.', ['Mid-engine V8', 'Supercar pace', 'Value king']),
      car(6, 'Ford Mustang Mach 1 (used)', 'from ~$45,000 used', '480 hp 5.0L V8', 'The special-edition Mustang holds value well — buy certified pre-owned and let someone else take the depreciation.', ['Special edition', 'Holds value', 'CPO smart buy']),
      car(7, 'Dodge Challenger (used)', 'from ~$35,000 used', 'Up to 807 hp Hellcat', 'The Challenger is gone new, but used Hellcats are the horsepower bargain of the decade.', ['Hellcat power', 'Used bargain', 'Last of an era']),
      car(8, 'Chevrolet Camaro (used)', 'from ~$30,000 used', 'Up to 650 hp ZL1', 'Also discontinued new, but used ZL1s offer supercar pace for sports-car money.', ['ZL1 performance', 'Used value', 'Track capable']),
      car(9, 'Ford F-150 Raptor R', 'from ~$112,000', '720 hp supercharged V8', 'Muscle car spirit in truck form. The 720-hp Raptor R is the loudest thing Ford sells.', ['720 hp V8', 'Desert runner', 'Presence']),
      car(10, 'Ram 1500 RHO', 'from ~$72,000', '540 hp Hurricane HO I6', 'The TRX\'s successor swaps the Hellcat V8 for a 540-hp six — lighter, quicker, still wild.', ['540 hp', 'Off-road wild', 'New tech']),
    ],
  },
  {
    slug: 'best-2026-track-cars',
    title: 'The 10 Best Track Cars of 2026',
    description:
      'The best track cars of 2026 ranked: 911 GT3 RS, Corvette Z06, Mustang GTD and more. Real lap-ready picks from CARC.',
    intro:
      'Street-legal, track-bred. These ten are the fastest, sharpest, most rewarding cars you can drive to the circuit in 2026.',
    updated: 'October 2026',
    cars: [
      car(1, 'Porsche 911 GT3 RS', 'from ~$242,000', '518 hp · DRS aero', 'The apex predator. Formula 1-derived aero and a 9,000-rpm flat six. Nothing touches it.', ['Ultimate aero', '9,000 rpm', 'Track benchmark']),
      car(2, 'Chevrolet Corvette Z06', 'from ~$118,000', '670 hp flat-plane V8', 'The giant-killer. Z07 package, carbon wheels, and a screaming flat-plane crank for half the price of Europeans.', ['Giant-killer value', 'Flat-plane V8', 'Z07 package']),
      car(3, 'Ford Mustang GTD', 'from ~$325,000', '815 hp supercharged V8', 'A Mustang with a transaxle, pushrod suspension, and a Nürburgring time under 7 minutes. Insane.', ['Sub-7 \'Ring time', '815 hp', 'Carbon everything']),
      car(4, 'Porsche 718 Cayman GT4 RS', 'from ~$164,000', '493 hp · 9,000 rpm', 'The mid-engine scalpel. One of the all-time great driver\'s cars.', ['Mid-engine balance', '9,000 rpm', 'Precision']),
      car(5, 'BMW M4 CSL', 'from ~$142,000', '543 hp · RWD', 'The hardcore M4: lighter, stiffer, faster. A proper track weapon.', ['Lightweight', '543 hp', 'M pedigree']),
      car(6, 'Nissan Z Nismo', 'from ~$66,000', '420 hp · 9-speed auto', 'The Z turned up: more power, sharper chassis, track-tuned aero.', ['420 hp', 'Track aero', 'Value']),
      car(7, 'Toyota GR Corolla', 'from ~$39,000', '300 hp turbo · AWD', 'The rally-bred hot hatch. AWD, manual, and endless adjustability.', ['AWD + manual', 'Rally bred', 'Affordable']),
      car(8, 'Honda Civic Type R', 'from ~$46,000', '315 hp · FWD', 'The front-drive lap record holder. Faster than it has any right to be.', ['FWD record holder', 'Daily usable', 'Precision']),
      car(9, 'Hyundai Elantra N', 'from ~$36,000', '276 hp · manual/DCT', 'The budget track toy. N Grin Shift, adjustable everything, huge fun.', ['Budget track star', 'Adjustable', 'Warranty']),
      car(10, 'McLaren 750S', 'from ~$330,000', '740 hp · carbon tub', 'The supercar that happens to be a brilliant track car. Telepathic.', ['Carbon tub', '740 hp', 'Precision']),
    ],
  },
  {
    slug: 'best-2026-family-suvs',
    title: 'The 10 Best Family SUVs of 2026',
    description:
      'The best family SUVs of 2026 ranked: Telluride, Palisade, Pilot, Grand Highlander and more. Real space, safety, prices, honest picks.',
    intro:
      'Three rows, car seats, cargo, and sanity. These are the ten best SUVs for families in 2026 — ranked on space, safety, value, and how well they survive daily life with kids.',
    updated: 'October 2026',
    cars: [
      car(1, 'Kia Telluride', 'from ~$37,000', '291 hp V6 · 3 rows · 8 seats', 'The family SUV benchmark. Premium feel, smart features, and a 10-year warranty.', ['Best overall value', 'Great warranty', 'Premium interior']),
      car(2, 'Hyundai Palisade', 'from ~$38,000', '287 hp / hybrid · 3 rows', 'Redesigned for 2026. Near-luxury cabin and thoughtful family features throughout.', ['2026 redesign', 'Upscale cabin', 'Family features']),
      car(3, 'Honda Pilot', 'from ~$41,000', '285 hp V6 · 3 rows · 8 seats', 'The practical champion. Removable middle seat, huge cargo, Honda reliability.', ['Removable 2nd-row seat', 'Huge cargo', 'Honda reliability']),
      car(4, 'Toyota Grand Highlander', 'from ~$44,000', '265–362 hp hybrid options', 'The grown-up Highlander with real third-row space and hybrid efficiency up to 36 mpg.', ['Real 3rd-row space', 'Hybrid mpg', 'Toyota reliability']),
      car(5, 'Ford Explorer', 'from ~$41,000', '300–400 hp · RWD-based', 'Rear-drive roots mean better towing (5,600 lbs) and a roomier feel.', ['Strong towing', 'Spacious', 'ST performance trim']),
      car(6, 'Chevrolet Traverse', 'from ~$41,000', '328 hp turbo · 3 rows', 'One of the roomiest in class with best-in-class cargo behind the third row.', ['Huge cargo', 'Roomy 3rd row', 'Good tech']),
      car(7, 'Subaru Ascent', 'from ~$36,000', '260 hp turbo · standard AWD', 'Standard AWD and EyeSight safety tech. The all-weather family pick.', ['Standard AWD', 'EyeSight standard', 'Good value']),
      car(8, 'Mazda CX-90', 'from ~$38,000', '280–340 hp inline-6 / PHEV', 'The driver\'s three-row. Inline-six smoothness with a genuinely premium cabin.', ['Inline-6 smoothness', 'Premium cabin', 'PHEV option']),
      car(9, 'Volkswagen Atlas', 'from ~$39,000', '269 hp turbo · 3 rows', 'Adult-sized third row and massive interior volume. Simple, big, honest.', ['Adult 3rd row', 'Huge interior', 'Simple controls']),
      car(10, 'GMC Acadia', 'from ~$44,000', '328 hp turbo · 3 rows', 'Upscale Traverse twin with AT4 off-road trim for adventurous families.', ['Upscale feel', 'AT4 trim', 'Strong turbo']),
    ],
  },
]

export function getList(slug: string): Top10List | undefined {
  return LISTS.find((l) => l.slug === slug)
}
