import Link from 'next/link'

const PLANS = [
  {
    name: 'Free',
    price: 0,
    period: null,
    desc: 'Try before you buy',
    cta: 'Start free',
    href: '/signup',
    features: {
      'AI natural language search': '5/day',
      'Deal score (1–10)': true,
      'Price vs. market': true,
      'Results shown': 'Top 5',
      'AI deal explanation': false,
      'Negotiation prep': false,
      'Price drop alerts': false,
      'New listing alerts': false,
      'Saved searches': '1',
      'VIN history reports': '$9 each',
      'Total cost of ownership': false,
      'Finance comparison': true,
    },
  },
  {
    name: 'Pro',
    price: 9,
    annual: 72,
    period: '/mo',
    desc: 'For serious car buyers',
    cta: 'Start 7-day free trial',
    href: '/signup?plan=pro',
    popular: true,
    features: {
      'AI natural language search': 'Unlimited',
      'Deal score (1–10)': true,
      'Price vs. market': true,
      'Results shown': 'All',
      'AI deal explanation': true,
      'Negotiation prep': true,
      'Price drop alerts': true,
      'New listing alerts': false,
      'Saved searches': '5',
      'VIN history reports': '$5 each',
      'Total cost of ownership': true,
      'Finance comparison': true,
    },
  },
  {
    name: 'Growth',
    price: 29,
    annual: 232,
    period: '/mo',
    desc: 'Power buyers & families',
    cta: 'Start 7-day free trial',
    href: '/signup?plan=growth',
    features: {
      'AI natural language search': 'Unlimited',
      'Deal score (1–10)': true,
      'Price vs. market': true,
      'Results shown': 'All',
      'AI deal explanation': true,
      'Negotiation prep': true,
      'Price drop alerts': true,
      'New listing alerts': true,
      'Saved searches': 'Unlimited',
      'VIN history reports': '5 included/mo',
      'Total cost of ownership': true,
      'Finance comparison': true,
    },
  },
  {
    name: 'Dealer',
    price: 99,
    annual: 792,
    period: '/mo',
    desc: 'For car dealers',
    cta: 'Start 7-day free trial',
    href: '/signup?plan=dealer',
    features: {
      'AI natural language search': 'Unlimited',
      'Deal score (1–10)': true,
      'Price vs. market': true,
      'Results shown': 'All',
      'AI deal explanation': true,
      'Negotiation prep': true,
      'Price drop alerts': true,
      'New listing alerts': true,
      'Saved searches': 'Unlimited',
      'VIN history reports': 'Unlimited',
      'Total cost of ownership': true,
      'Finance comparison': true,
    },
  },
]

const FEATURE_LABELS = [
  'AI natural language search',
  'Deal score (1–10)',
  'Price vs. market',
  'Results shown',
  'AI deal explanation',
  'Negotiation prep',
  'Price drop alerts',
  'New listing alerts',
  'Saved searches',
  'VIN history reports',
  'Total cost of ownership',
  'Finance comparison',
]

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) return <span className="text-brand-green">✓</span>
  if (value === false) return <span className="text-brand-muted/30">—</span>
  return <span className="text-brand-light text-sm">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <nav className="sticky top-0 z-40 glass border-b border-brand-steel/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-lg">
            <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
          </Link>
          <Link href="/signup" className="bg-brand-blue hover:bg-brand-blue-dim text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Get started
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-brand-light mb-4">Simple pricing</h1>
          <p className="text-brand-muted text-xl max-w-xl mx-auto">
            Start free. Upgrade when you want the negotiation edge.
          </p>
          <p className="text-brand-muted/60 text-sm mt-3">7-day free trial on paid plans. No credit card to start free.</p>
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-4 gap-5 mb-20">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`glass rounded-2xl border p-6 relative flex flex-col ${
                plan.popular ? 'border-brand-blue/60 ring-1 ring-brand-blue/20' : 'border-brand-steel'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-medium px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}
              <div className="text-brand-muted text-sm mb-1">{plan.desc}</div>
              <div className="font-display text-2xl font-bold text-brand-light mb-1">{plan.name}</div>
              <div className="font-display text-3xl font-bold text-brand-blue mb-1">
                ${plan.price}{plan.period && <span className="text-lg font-normal text-brand-muted">{plan.period}</span>}
              </div>
              {plan.annual && (
                <div className="text-brand-muted/60 text-xs mb-5">${plan.annual}/yr — 2 months free</div>
              )}
              <div className="flex-1" />
              <Link
                href={plan.href}
                className={`block text-center py-3 rounded-xl font-medium text-sm mt-6 transition-colors ${
                  plan.popular
                    ? 'bg-brand-blue hover:bg-brand-blue-dim text-white'
                    : 'border border-brand-steel hover:border-brand-blue/50 text-brand-muted hover:text-brand-light'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Feature matrix */}
        <div>
          <h2 className="font-display text-2xl font-bold text-brand-light mb-8 text-center">Full comparison</h2>
          <div className="glass rounded-2xl border border-brand-steel overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-steel">
                  <th className="text-left p-4 text-brand-muted font-normal">Feature</th>
                  {PLANS.map(p => (
                    <th key={p.name} className="p-4 text-center font-display font-semibold text-brand-light">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_LABELS.map((label, i) => (
                  <tr key={label} className={`border-b border-brand-steel/50 ${i % 2 === 0 ? 'bg-brand-charcoal/20' : ''}`}>
                    <td className="p-4 text-brand-muted">{label}</td>
                    {PLANS.map(plan => (
                      <td key={plan.name} className="p-4 text-center">
                        <FeatureValue value={(plan.features as Record<string, string | boolean>)[label]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-light mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How does the AI deal scoring work?',
                a: 'Claude analyzes each listing against current market prices for that make, model, trim, year, and mileage range. It returns a 1–10 score, explains why, and flags any red flags.',
              },
              {
                q: 'Where does the inventory data come from?',
                a: "We use the MarketCheck API, which aggregates 6M+ live dealer listings from across the US. Data is updated in real-time.",
              },
              {
                q: 'What happens after my free trial?',
                a: "You'll be charged the monthly rate after 7 days. Cancel any time before then and you won't be charged.",
              },
              {
                q: 'Is the dealer plan for individual dealers?',
                a: "Yes — $99/mo gives dealers a lead dashboard, listing boost, and buyer intent signals. Contact us for Enterprise pricing.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="glass rounded-xl border border-brand-steel p-6">
                <h3 className="font-semibold text-brand-light mb-2">{q}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
