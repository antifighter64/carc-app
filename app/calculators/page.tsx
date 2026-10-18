import type { Metadata } from 'next'
import Link from 'next/link'
import NewsNav from '@/app/components/NewsNav'
import NewsFooter from '@/app/components/NewsFooter'

export const metadata: Metadata = {
  title: 'Free Car Calculators - Payments, Loans, Ownership Costs',
  description:
    'Free car calculators: auto loan payments, lease vs. buy, total cost of ownership, depreciation, and insurance estimates. Run the numbers before you buy.',
  alternates: { canonical: 'https://www.carc.com/calculators' },
}

const CALCS = [
  {
    slug: 'auto-loan',
    name: 'Auto Loan Calculator',
    desc: 'Monthly payment, total interest, and payoff schedule for any car loan.',
  },
  {
    slug: 'lease-vs-buy',
    name: 'Lease vs. Buy Calculator',
    desc: 'Compare the true cost of leasing versus buying over the same period.',
  },
  {
    slug: 'total-cost',
    name: 'Total Cost of Ownership',
    desc: 'Price plus fuel, insurance, and maintenance minus resale — the real cost per year.',
  },
  {
    slug: 'depreciation',
    name: 'Depreciation Calculator',
    desc: 'See what your car will be worth in 1, 3, 5, or 10 years.',
  },
  {
    slug: 'insurance',
    name: 'Insurance Cost Estimator',
    desc: 'Estimate annual insurance by car type, driver profile, and location factors.',
  },
]

export default function CalculatorsIndex() {
  return (
    <div className="min-h-screen bg-brand-black">
      <NewsNav />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-widest mb-3">
          Tools
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-light mb-4">
          Car calculators
        </h1>
        <p className="text-brand-muted text-lg mb-12 max-w-2xl">
          Run the numbers before you sign anything. Every calculator is free, private
          (nothing leaves your browser), and built on honest math.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {CALCS.map(c => (
            <Link
              key={c.slug}
              href={`/calculators/${c.slug}`}
              className="glass rounded-2xl border border-brand-steel hover:border-brand-blue/40 transition-colors p-6"
            >
              <p className="font-display text-xl font-bold text-brand-light mb-2">{c.name}</p>
              <p className="text-brand-muted text-sm">{c.desc}</p>
              <p className="text-brand-blue text-sm font-medium mt-3">Open calculator →</p>
            </Link>
          ))}
        </div>
      </div>
      <NewsFooter />
    </div>
  )
}
