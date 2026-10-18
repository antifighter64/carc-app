export interface GuideSection {
  heading: string
  body: string[]
}

export interface Guide {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  updated: string
  intro: string
  sections: GuideSection[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'first-time-car-buyer',
    title: 'First-Time Car Buyer Guide: How to Buy Your First Car in 2026',
    description:
      'Buying your first car? This step-by-step guide covers budgeting, financing, choosing between new and used, and negotiating — everything a first-time buyer needs.',
    category: 'Buying basics',
    readTime: '12 min read',
    updated: 'October 2026',
    intro:
      'Your first car purchase is one of the biggest financial decisions you will make early on. The average new car now costs over $50,000, so mistakes are expensive. This guide walks you through the entire process — from setting a budget to driving off the lot — so you buy with confidence instead of regret.',
    sections: [
      {
        heading: 'Step 1: Set a realistic budget',
        body: [
          'The widely used 20/4/10 rule is a good starting point: put at least 20% down, finance for no more than 4 years, and keep total car expenses (payment, insurance, fuel, maintenance) under 10% of your gross income.',
          'Do not shop by monthly payment alone. Dealers can stretch a loan to 84 months to make any price "affordable" — you will pay thousands more in interest and spend years owing more than the car is worth.',
        ],
      },
      {
        heading: 'Step 2: Check your credit before you shop',
        body: [
          'Your credit score determines your interest rate. Check it for free before visiting any dealer so you know what rate you deserve. If your score is below 670, consider a larger down payment or a less expensive car to offset the higher rate.',
          'Get pre-approved for an auto loan from your bank or credit union first. Walking in with financing in hand turns you from a payment buyer into a cash buyer — and removes the dealer\'s biggest profit lever.',
        ],
      },
      {
        heading: 'Step 3: New vs. used — the honest math',
        body: [
          'New cars lose roughly 20% of their value in the first year. A 2–3 year old car with low miles gives you modern safety tech at a steep discount — and someone else ate the depreciation.',
          'That said, new cars come with full warranties, the latest driver-assistance features, and sometimes promotional 0% financing that can make the math closer than it looks. Run both scenarios.',
        ],
      },
      {
        heading: 'Step 4: Research total cost, not just price',
        body: [
          'Insurance, fuel, and maintenance vary wildly between models. A cheap sports car can cost more per year to insure than a midsize SUV that costs $10,000 more. Get insurance quotes before you fall in love with a car.',
          'Use CARC\'s valuation and cost tools to see fair prices and ownership costs side by side before you visit a dealer.',
        ],
      },
      {
        heading: 'Step 5: Negotiate the out-the-door price',
        body: [
          'Negotiate one number: the total out-the-door price including all fees and taxes. Ignore monthly-payment talk until the price is settled.',
          'Get quotes from at least three dealers by email. Competition is your leverage — the dealer that wants your business most will show it in writing.',
        ],
      },
      {
        heading: 'Step 6: Read everything before you sign',
        body: [
          'In the finance office, you will be offered extended warranties, paint protection, and gap insurance. Most are overpriced — you can almost always buy them cheaper elsewhere or skip them entirely.',
          'Verify the interest rate, loan term, and total financed amount match what you agreed to. Mistakes (and worse) happen in paperwork.',
        ],
      },
    ],
  },
  {
    slug: 'ev-buying-guide-2026',
    title: 'EV Buying Guide 2026: Range, Charging, and Real Costs Explained',
    description:
      'Thinking about going electric? Our 2026 EV buying guide covers real-world range, home vs. public charging costs, battery life, and which EVs hold their value.',
    category: 'Electric vehicles',
    readTime: '14 min read',
    updated: 'October 2026',
    intro:
      'EVs now account for more than 6% of US new-car sales, and the options have never been better — or more confusing. Range claims, charging speeds, and tax incentives all interact. Here is what actually matters when you shop electric in 2026.',
    sections: [
      {
        heading: 'How much range do you really need?',
        body: [
          'The average American drives under 40 miles a day. A 250-mile EV covers a week of commuting for most people — 300+ miles matters mainly if you take frequent road trips.',
          'EPA range figures are tested in mild conditions. Expect 15–30% less in freezing weather or at sustained highway speeds. If you live somewhere cold, buy more range than you think you need.',
        ],
      },
      {
        heading: 'Home charging changes everything',
        body: [
          'If you can install a Level 2 charger at home, an EV becomes dramatically cheaper and more convenient than gas — you wake up "full" every morning and pay residential electricity rates.',
          'If you cannot charge at home or work, think carefully. Relying on public fast chargers is more expensive and less convenient, and it erodes much of the EV advantage.',
        ],
      },
      {
        heading: 'The true cost math',
        body: [
          'EVs usually cost more upfront but less to run: no oil changes, fewer brake jobs (regenerative braking), and electricity is cheaper per mile than gasoline in most states.',
          'Check current federal and state incentives before you buy — they change frequently and can swing the math by thousands. But never buy a car you do not want just for the credit.',
        ],
      },
      {
        heading: 'Battery life and degradation',
        body: [
          'Modern EV batteries typically degrade 1–2% per year. Most manufacturers warranty the battery for 8 years or 100,000 miles.',
          'For used EVs, battery health matters more than mileage. Ask for a battery health report — it is the equivalent of a compression test on a gas engine.',
        ],
      },
      {
        heading: 'Which EVs hold their value?',
        body: [
          'Tesla Model Y and Model 3 have historically held value well thanks to the Supercharger network and strong demand. Newer entries from Hyundai and Kia are building strong resale reputations too.',
          'Avoid first-model-year EVs from unproven brands — depreciation can be brutal if the company struggles.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-negotiate-car-price',
    title: 'How to Negotiate a Car Price: Dealer Tactics and Counter-Moves',
    description:
      'Learn exactly how to negotiate with car dealers: email-first tactics, the out-the-door price rule, finance-office traps, and the best time of month to buy.',
    category: 'Negotiation',
    readTime: '10 min read',
    updated: 'October 2026',
    intro:
      'Dealers negotiate every day; you do it once every few years. That asymmetry is the whole game. This guide gives you the specific tactics that close it — most buyers who follow them save $1,000 to $3,000 versus walking in unprepared.',
    sections: [
      {
        heading: 'Do it by email first',
        body: [
          'Email the internet sales departments of 3–5 dealers with the exact car you want (year, make, model, trim). Ask for their best out-the-door price in writing.',
          'This does two things: it creates written competition between dealers, and it keeps you out of the showroom where pressure tactics work best.',
        ],
      },
      {
        heading: 'Negotiate one number only',
        body: [
          'The out-the-door price — vehicle price plus all fees, taxes, and add-ons. Everything else (monthly payment, trade-in value, interest rate) is a distraction until this number is settled.',
          'When a salesperson asks "what monthly payment are you looking for," answer: "I\'m focused on the total price. What is your best out-the-door number?"',
        ],
      },
      {
        heading: 'Know the dealer\'s playbook',
        body: [
          'The "let me check with my manager" routine is theater to make you feel grateful for small concessions. The first offer is never the best offer.',
          'Add-ons like VIN etching, nitrogen-filled tires, and fabric protection are nearly pure profit. Decline them all — you can get equivalents cheaper elsewhere if you actually want them.',
        ],
      },
      {
        heading: 'Time your purchase',
        body: [
          'The last 3–5 days of the month are when salespeople chase quotas. End-of-quarter (March, June, September, December) is even better.',
          'Model-year changeover — usually late summer and fall — is when dealers discount outgoing model years to clear lots.',
        ],
      },
      {
        heading: 'Be ready to walk away',
        body: [
          'Your single strongest negotiating tool is your feet. If the numbers do not work, leave politely. Roughly half the time, you will get a call within 48 hours with a better offer.',
          'Never fall in love with a specific car on a specific lot. There is always another one.',
        ],
      },
    ],
  },
  {
    slug: 'new-vs-used-car',
    title: 'New vs. Used Car: The Honest Math for 2026',
    description:
      'Should you buy new or used? We run the real numbers on depreciation, warranties, financing rates, and reliability to settle the new-vs-used debate.',
    category: 'Buying basics',
    readTime: '9 min read',
    updated: 'October 2026',
    intro:
      'With the average new car over $50,000, the new-vs-used question matters more than ever. The right answer depends on your budget, how long you keep cars, and your tolerance for repair risk. Here is the honest breakdown.',
    sections: [
      {
        heading: 'The depreciation curve is the whole story',
        body: [
          'A new car loses roughly 20% of its value in year one and about 15% per year for the next few years. A 3-year-old car has typically shed 40–50% of its original price while retaining most of its useful life.',
          'This is why lightly used (2–4 years old, under 40,000 miles) is the value sweet spot for most buyers.',
        ],
      },
      {
        heading: 'When new makes sense',
        body: [
          'Promotional financing (0–2% APR) on new cars can beat used-car loan rates (often 6–9%) by enough to narrow the gap significantly.',
          'If you keep cars 10+ years, the per-year cost difference shrinks — and you get the full warranty plus the exact features you want.',
        ],
      },
      {
        heading: 'When used wins',
        body: [
          'Lower purchase price means lower insurance, lower registration fees, and lower sales tax — the savings compound beyond the sticker price.',
          'Certified pre-owned (CPO) programs add a manufacturer warranty to a used car, splitting the difference between new-car peace of mind and used-car pricing.',
        ],
      },
      {
        heading: 'The used-car inspection rule',
        body: [
          'Never buy a used car without an independent pre-purchase inspection ($150–$250 at your own mechanic) and a vehicle history report. This is non-negotiable.',
          'Walk away from salvage titles, flood damage, and odometer discrepancies — no discount is worth the risk.',
        ],
      },
    ],
  },
  {
    slug: 'auto-loan-guide',
    title: 'Auto Loan Guide: How to Get the Best Rate in 2026',
    description:
      'Auto loan rates explained: how your credit score affects your APR, why pre-approval beats dealer financing, and how loan terms change your total cost.',
    category: 'Financing',
    readTime: '8 min read',
    updated: 'October 2026',
    intro:
      'A single percentage point on a $35,000 auto loan costs roughly $900 over five years. Yet most buyers spend more time picking a color than shopping their loan. This guide fixes that.',
    sections: [
      {
        heading: 'Know your credit tier',
        body: [
          'Auto lenders price in tiers: super-prime (781+), prime (661–780), near-prime (601–660), and subprime (below 600). Each tier down can add 2–4 percentage points to your rate.',
          'Check your score before shopping. If you are near a tier boundary, even a small improvement — paying down a card balance — can save you thousands.',
        ],
      },
      {
        heading: 'Get pre-approved first',
        body: [
          'Apply to your bank, a credit union, and an online lender before visiting the dealer. Credit unions consistently offer the lowest auto rates.',
          'Multiple auto-loan inquiries within a 14-day window count as a single hard inquiry for scoring purposes — so shop aggressively without fear.',
        ],
      },
      {
        heading: 'Shorter terms beat lower payments',
        body: [
          'A 72- or 84-month loan lowers your monthly payment but massively increases total interest — and leaves you underwater (owing more than the car is worth) for years.',
          'The 20/4/10 rule: 20% down, max 4-year term, total car costs under 10% of gross income. If the car you want does not fit, it is too much car.',
        ],
      },
      {
        heading: 'Dealer financing: the markup trap',
        body: [
          'Dealers can mark up the interest rate the lender offers them — often by 1–2 points — and pocket the difference. Always ask: "Is this the buy rate or is there a markup?"',
          'With a pre-approval in hand, let the dealer try to beat it. If they can, great. If not, you already have your loan.',
        ],
      },
    ],
  },
  {
    slug: 'lease-vs-buy',
    title: 'Lease vs. Buy a Car: Which Is Better in 2026?',
    description:
      'Leasing vs. buying explained with real numbers: monthly costs, mileage limits, equity, and who each option actually makes sense for.',
    category: 'Financing',
    readTime: '9 min read',
    updated: 'October 2026',
    intro:
      'Leasing puts you in a new car every 3 years with lower payments. Buying builds equity but costs more monthly. The right choice depends on how you actually use cars — not on what the dealer prefers (they love leases).',
    sections: [
      {
        heading: 'The real cost comparison',
        body: [
          'Leasing a $40,000 car for 3 years typically costs $15,000–$20,000 in payments with nothing to show at the end. Buying the same car and keeping it 9 years spreads the cost dramatically lower per year.',
          'Leasing wins on monthly cash flow and always driving a new, warrantied car. Buying wins on total cost for anyone who keeps cars more than 5–6 years.',
        ],
      },
      {
        heading: 'Mileage: the lease killer',
        body: [
          'Standard leases allow 10,000–12,000 miles per year. Excess mileage costs $0.15–$0.30 per mile — drive 15,000 miles a year on a 12,000-mile lease and you owe $900–$1,350 at turn-in, per year.',
          'Be brutally honest about your driving. If you exceed the limit, buying is almost always cheaper.',
        ],
      },
      {
        heading: 'Who should lease',
        body: [
          'Business owners who can deduct lease payments, people who want a new car every 2–3 years and hate maintenance surprises, and EV shoppers who want to avoid battery-depreciation risk.',
        ],
      },
      {
        heading: 'Who should buy',
        body: [
          'Anyone who drives a lot, keeps cars long-term, wants to modify their car, or simply wants the lowest lifetime cost per mile. Buying a 2–3 year old car and keeping it a decade is the cheapest way to drive.',
        ],
      },
      {
        heading: 'Lease negotiation tips',
        body: [
          'Negotiate the vehicle\'s selling price (capitalized cost) just like a purchase — most people don\'t, and dealers count on it.',
          'Watch the money factor (the lease\'s interest rate — multiply by 2,400 to get the APR equivalent) and refuse large down payments on leases.',
        ],
      },
    ],
  },
  {
    slug: 'sell-your-car-for-top-dollar',
    title: 'How to Sell Your Car for Top Dollar in 2026',
    description:
      'Sell your car for the most money: dealer trade-in vs. private sale vs. instant offers compared, plus prep tips that add real value.',
    category: 'Selling',
    readTime: '8 min read',
    updated: 'October 2026',
    intro:
      'The difference between the worst and best way to sell your car is often $2,000–$5,000. Here is how each selling method actually works and how to squeeze every dollar out of your sale.',
    sections: [
      {
        heading: 'Know your car\'s real value first',
        body: [
          'Check CARC\'s private-party valuation plus at least two other pricing sources. Know three numbers: trade-in value, private-party value, and dealer retail — your sale price lives between the first two.',
          'Get instant cash offers from at least two online buyers (Carvana, CarMax, etc.) as a baseline. They are free and take minutes.',
        ],
      },
      {
        heading: 'Trade-in: convenient but costly',
        body: [
          'Trading in typically nets 10–20% less than a private sale — but it is instant, and in many states you only pay sales tax on the price difference, which recovers part of the gap.',
          'Negotiate the new car\'s price first, then introduce the trade. Dealers love to blur the two numbers in their favor.',
        ],
      },
      {
        heading: 'Private sale: maximum money, maximum effort',
        body: [
          'Private sales average the highest prices but require photos, listings, test drives with strangers, and handling payment securely. Never accept personal checks or wire transfers from strangers — cashier\'s checks verified at the issuing bank, or meet at the buyer\'s bank.',
          'A $200 professional detail can add $500–$1,000 to your sale price. Fix small things: burnt-out bulbs, worn wiper blades, and dashboard warning lights scare buyers disproportionately.',
        ],
      },
      {
        heading: 'Timing matters',
        body: [
          'Convertibles and sports cars sell best in spring; 4WD trucks and SUVs peak in fall. Tax refund season (February–April) brings out buyers with cash.',
          'Sell before major scheduled maintenance is due — a buyer discounting for "needs timing belt service" will cost you more than the service itself.',
        ],
      },
    ],
  },
  {
    slug: 'certified-pre-owned-guide',
    title: 'Certified Pre-Owned (CPO) Cars: Are They Worth It?',
    description:
      'CPO explained: what certification actually includes, how CPO warranties compare by brand, and when the CPO premium is worth paying.',
    category: 'Buying basics',
    readTime: '7 min read',
    updated: 'October 2026',
    intro:
      'Certified pre-owned promises the best of both worlds: used-car pricing with new-car-like warranty coverage. But the CPO premium runs $1,000–$3,000, and not all programs are equal. Here is how to judge.',
    sections: [
      {
        heading: 'What CPO actually means',
        body: [
          'A manufacturer-backed CPO car has passed a multi-point inspection (typically 150–200 items), is under a mileage and age cap, has a clean history report, and carries an extended factory warranty.',
          'Dealer "certified" without the manufacturer\'s name behind it is just marketing. Only manufacturer CPO programs carry the real warranty.',
        ],
      },
      {
        heading: 'Which CPO programs are best',
        body: [
          'Lexus, Porsche, and Hyundai/Kia programs are consistently rated among the strongest for coverage length. Luxury brands generally offer longer CPO warranties than mainstream ones.',
          'Compare the CPO warranty\'s deductible, covered components, and whether it extends the powertrain or the bumper-to-bumper coverage — the difference matters.',
        ],
      },
      {
        heading: 'When the premium is worth it',
        body: [
          'CPO makes most sense on cars 2–4 years old where the premium is small relative to the warranty value — especially on German luxury cars, where out-of-warranty repairs are expensive.',
          'On ultra-reliable models (Toyota, Honda) with strong independent warranties available, the CPO premium is harder to justify — price it against a third-party warranty.',
        ],
      },
      {
        heading: 'CPO negotiation',
        body: [
          'The CPO premium itself is negotiable, and CPO cars still depreciate — check whether the asking price is fair for the car\'s age and miles, not just "because it\'s certified."',
          'Ask for the actual inspection report. A reputable dealer will show it; reluctance is a red flag.',
        ],
      },
    ],
  },
  {
    slug: 'used-car-history-check',
    title: 'How to Check a Used Car\'s History (and Spot Red Flags)',
    description:
      'Vehicle history reports explained: what Carfax and AutoCheck show, what they miss, and the 10 red flags that should kill any used-car deal.',
    category: 'Buying basics',
    readTime: '8 min read',
    updated: 'October 2026',
    intro:
      'A clean-looking used car can hide flood damage, odometer fraud, or a salvage title. History reports are your first line of defense — but they are not the whole defense. Here is the complete checklist.',
    sections: [
      {
        heading: 'What history reports show — and miss',
        body: [
          'Carfax and AutoCheck pull from DMVs, insurers, and service shops: accidents, title brands (salvage, rebuilt, flood), odometer readings, service history, and number of owners.',
          'What they miss: unreported accidents (no police report, no insurance claim), maintenance done at home, and anything in the gap before the car entered the reporting system. A clean report is necessary but not sufficient.',
        ],
      },
      {
        heading: 'Ten deal-killing red flags',
        body: [
          'Salvage or rebuilt title; flood/water damage brand; odometer rollback or gaps; frame/structural damage reported; airbag deployment; more than 3 owners in 5 years; title issued in a different state than the seller (title washing); liens still on the title; VIN plates that look tampered with; seller refuses independent inspection.',
        ],
      },
      {
        heading: 'The inspection is mandatory',
        body: [
          'Spend $150–$250 on a pre-purchase inspection at an independent mechanic — never the seller\'s shop. It catches what reports miss: worn suspension, hidden rust, failing transmissions.',
          'Any seller who refuses an inspection is telling you everything you need to know. Walk away.',
        ],
      },
      {
        heading: 'Verify the VIN everywhere',
        body: [
          'The VIN on the dashboard, driver\'s door jamb, and title must all match. Mismatches suggest major repairs, VIN swapping, or worse.',
          'Run the VIN through the free NHTSA recall checker — open recalls are common on used cars and free to fix at any dealer.',
        ],
      },
    ],
  },
  {
    slug: 'when-to-buy-a-car',
    title: 'When Is the Best Time to Buy a Car? Month-by-Month Guide',
    description:
      'The best time to buy a car: which months have the biggest discounts, why end-of-quarter matters, and how holidays and model changeovers affect prices.',
    category: 'Timing',
    readTime: '6 min read',
    updated: 'October 2026',
    intro:
      'Timing your purchase right can save $1,000–$3,000 on the same car. Dealers discount hardest when they need to hit quotas or clear aging inventory — and those moments are predictable.',
    sections: [
      {
        heading: 'The monthly cycle',
        body: [
          'The last 3–5 days of any month are prime: salespeople and managers chase monthly bonuses and will cut deeper to get one more unit out the door.',
          'Shop on a weekday, ideally Monday–Wednesday. Weekend showrooms are crowded, and busy salespeople have no incentive to discount for you.',
        ],
      },
      {
        heading: 'Quarter and year end',
        body: [
          'March, June, September, and especially December combine monthly, quarterly, and annual quotas. December is historically the strongest buyer\'s month of the year.',
          'Manufacturers also push year-end incentives to clear the books — stack these with a motivated dealer for the best deals.',
        ],
      },
      {
        heading: 'Model-year changeover',
        body: [
          'When the new model year arrives (typically late summer through fall), outgoing-year cars get discounted $2,000–$5,000. The differences are usually minor — same car, lower price.',
          'This is the single best value play in car buying if you do not need the latest styling tweaks.',
        ],
      },
      {
        heading: 'Holidays that actually matter',
        body: [
          'Memorial Day, July 4th, Labor Day, and Black Friday bring real manufacturer incentives — not just advertising. Presidents Day in February is strong for clearing winter inventory.',
          'Ignore most other "sales events." If the manufacturer isn\'t backing it with incentive money, the "sale" is just a banner.',
        ],
      },
      {
        heading: 'When NOT to buy',
        body: [
          'Early spring (tax refund season) brings the year\'s most competition from other buyers. Right after a hot new model launches, expect sticker price or markups.',
          'Need a car immediately? You can still negotiate — but accept that your leverage is lower and focus on the out-the-door price fundamentals.',
        ],
      },
    ],
  },
]

export function getGuide(slug: string): Guide | null {
  return GUIDES.find(g => g.slug === slug) ?? null
}
