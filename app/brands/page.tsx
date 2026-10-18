import type { Metadata } from 'next'
import Link from 'next/link'
import NewsNav from '@/app/components/NewsNav'
import NewsFooter from '@/app/components/NewsFooter'
import { BRANDS } from '@/lib/brands'

export const metadata: Metadata = {
  title: 'Car Brands - Browse Every Major Automaker',
  description:
    'Browse every major car brand: Toyota, Honda, Ford, Tesla, BMW and more. Reliability reputations, what each brand does best, and their top models.',
  alternates: { canonical: 'https://www.carc.com/brands' },
}

export default function BrandsIndex() {
  return (
    <div className="min-h-screen bg-brand-black">
      <NewsNav />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-widest mb-3">
          Browse
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-light mb-4">
          Car brands
        </h1>
        <p className="text-brand-muted text-lg mb-12 max-w-2xl">
          Every major automaker, what they are known for, and their best models —
          with honest takes on reliability and value.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRANDS.map(b => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="glass rounded-2xl border border-brand-steel hover:border-brand-blue/40 transition-colors p-6"
            >
              <p className="font-display text-2xl font-bold text-brand-light">{b.name}</p>
              <p className="text-brand-blue text-sm font-medium mt-1">{b.tagline}</p>
              <p className="text-brand-muted text-sm mt-3">{b.country} · est. {b.founded}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {b.knownFor.map(k => (
                  <span key={k} className="text-xs px-2.5 py-1 rounded-full border border-brand-steel text-brand-muted">
                    {k}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <NewsFooter />
    </div>
  )
}
