import Link from 'next/link'
import type { Metadata } from 'next'
import NewsNav from '@/app/components/NewsNav'
import NewsFooter from '@/app/components/NewsFooter'
import { LISTS } from '@/lib/top10'

export const metadata: Metadata = {
  title: 'Top 10 Cars 2026 — Best EVs, SUVs, Trucks, Sports Cars & More',
  description:
    'CARC\'s top 10 car rankings for 2026: best EVs, SUVs, sedans, trucks, luxury cars, sports cars, supercars, and family SUVs. Honest picks, real prices.',
}

export default function Top10HubPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      <NewsNav />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-widest mb-3">CARC Rankings</p>
        <h1 className="font-display text-5xl font-bold text-brand-light mb-4">
          Top 10 cars of 2026
        </h1>
        <p className="text-brand-muted text-xl max-w-2xl mb-12">
          Honest rankings across every segment — no sponsored placements, no pay-to-play. Prices are approximate starting MSRPs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LISTS.map((l, i) => (
            <Link
              key={l.slug}
              href={`/top-10/${l.slug}`}
              className="glass rounded-2xl p-6 hover:border-brand-blue/50 transition-colors"
            >
              <p className="font-display text-4xl font-bold text-brand-blue/40 mb-3">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h2 className="font-display text-xl font-bold text-brand-light mb-2 leading-snug">
                {l.title.replace('The 10 Best ', '').replace('The 10 Most ', 'Most ')}
              </h2>
              <p className="text-brand-muted text-sm mb-3">
                #{1} pick: {l.cars[0].name}
              </p>
              <p className="text-brand-blue text-sm font-medium">See the full list →</p>
            </Link>
          ))}
        </div>
        <p className="text-brand-muted/50 text-xs mt-10 max-w-3xl">
          Rankings reflect CARC editorial judgment based on value, performance, efficiency, safety data,
          and market pricing. Prices shown are approximate manufacturer starting MSRPs and change by trim,
          options, and region. Safety picks reference IIHS and NHTSA ratings — always verify the specific
          trim before buying.
        </p>
      </div>
      <NewsFooter />
    </div>
  )
}
