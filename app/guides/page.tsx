import type { Metadata } from 'next'
import Link from 'next/link'
import NewsNav from '@/app/components/NewsNav'
import NewsFooter from '@/app/components/NewsFooter'
import { GUIDES } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Car Buying Guides - Expert Advice from CARC',
  description:
    'Free car buying guides: first-time buyer tips, EV buying, negotiation tactics, auto loans, lease vs. buy, and more. Expert advice with no dealer spin.',
  alternates: { canonical: 'https://www.carc.com/guides' },
}

export default function GuidesIndex() {
  const categories = [...new Set(GUIDES.map(g => g.category))]
  return (
    <div className="min-h-screen bg-brand-black">
      <NewsNav />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-widest mb-3">
          Learn
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-light mb-4">
          Car buying guides
        </h1>
        <p className="text-brand-muted text-lg mb-12 max-w-2xl">
          No dealer spin, no sponsored rankings. Just the honest playbook for buying,
          financing, and selling cars — written from real market data.
        </p>
        {categories.map(cat => (
          <div key={cat} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-light mb-4">{cat}</h2>
            <div className="space-y-3">
              {GUIDES.filter(g => g.category === cat).map(g => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="glass rounded-2xl border border-brand-steel hover:border-brand-blue/40 transition-colors p-5 flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="font-display font-semibold text-brand-light">{g.title}</p>
                    <p className="text-brand-muted text-sm mt-1 line-clamp-2">{g.description}</p>
                    <p className="text-brand-muted/70 text-xs mt-2">
                      {g.readTime} · Updated {g.updated}
                    </p>
                  </div>
                  <span className="text-brand-blue shrink-0 mt-1">→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NewsFooter />
    </div>
  )
}
