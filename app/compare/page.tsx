import type { Metadata } from 'next'
import Link from 'next/link'
import { PAIRS, VEHICLES } from '@/lib/compare-data'

export const metadata: Metadata = {
  title: 'Car Comparisons - Specs, MPG and Safety, Side by Side',
  description:
    'Head-to-head car comparisons built on official EPA fuel economy and NHTSA safety data. RAV4 vs CR-V, F-150 vs Ram 1500, Civic vs Corolla and more.',
}

export default function CompareIndex() {
  return (
    <div className="min-h-screen bg-brand-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="font-display font-bold text-lg text-brand-light">
          <span className="text-brand-blue">CARC</span>.com
        </Link>
        <h1 className="font-display text-4xl font-bold text-brand-light mt-8 mb-3">
          Car comparisons, side by side
        </h1>
        <p className="text-brand-muted mb-10">
          Official EPA fuel economy and NHTSA crash-test data for the most cross-shopped vehicles of
          2025.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {PAIRS.map(p => {
            const a = VEHICLES[p.a]
            const b = VEHICLES[p.b]
            if (!a || !b) return null
            return (
              <Link
                key={p.slug}
                href={`/compare/${p.slug}`}
                className="glass rounded-2xl border border-brand-steel hover:border-brand-blue/40 transition-colors p-5"
              >
                <p className="font-display font-semibold text-brand-light">
                  {a.year} {a.make} {a.model} <span className="text-brand-muted">vs</span> {b.year}{' '}
                  {b.make} {b.model}
                </p>
                <p className="text-brand-muted text-sm mt-1">
                  {a.mpg_comb} vs {b.mpg_comb} combined MPG
                  {a.fuel === 'Electricity' || b.fuel === 'Electricity' ? 'e' : ''}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
