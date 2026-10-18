import Link from 'next/link'
import type { Metadata } from 'next'
import NewsNav from '@/app/components/NewsNav'
import NewsFooter from '@/app/components/NewsFooter'
import { ARTICLES, CATEGORIES } from '@/lib/news'

export const metadata: Metadata = {
  title: 'Car News — Latest Automotive News, Recalls & Prices',
  description:
    'Stay current with CARC News: EV sales data, recalls, new-car prices, and 2026 model coverage. Honest automotive news for smart car buyers.',
}

const CATEGORY_COLORS: Record<string, string> = {
  EVs: 'text-brand-green border-brand-green/30 bg-brand-green/10',
  Recalls: 'text-brand-red border-brand-red/30 bg-brand-red/10',
  Prices: 'text-brand-amber border-brand-amber/30 bg-brand-amber/10',
  Industry: 'text-brand-blue border-brand-blue/30 bg-brand-blue/10',
  Comparisons: 'text-brand-light border-brand-steel bg-brand-charcoal',
}

export default function NewsHubPage() {
  const [featured, ...rest] = ARTICLES
  return (
    <div className="min-h-screen bg-brand-black">
      <NewsNav />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-brand-blue font-medium text-sm uppercase tracking-widest mb-3">CARC News</p>
        <h1 className="font-display text-5xl font-bold text-brand-light mb-4">
          Car news that actually matters
        </h1>
        <p className="text-brand-muted text-xl max-w-2xl mb-12">
          Recalls, prices, EV sales data, and new-model coverage — written for buyers, not advertisers.
        </p>

        {/* Featured article */}
        <Link
          href={`/news/${featured.slug}`}
          className="block glass rounded-2xl p-8 md:p-10 mb-8 hover:border-brand-blue/50 transition-colors"
        >
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${CATEGORY_COLORS[featured.category] ?? CATEGORY_COLORS.Comparisons}`}>
            {featured.category}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-3 leading-tight">
            {featured.title}
          </h2>
          <p className="text-brand-muted text-lg mb-4">{featured.excerpt}</p>
          <p className="text-brand-muted/60 text-sm">
            {featured.author} · {featured.date} · {featured.readMinutes} min read
          </p>
        </Link>

        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="text-sm px-4 py-1.5 rounded-full border border-brand-steel text-brand-muted"
            >
              {c}
            </span>
          ))}
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((a) => (
            <Link
              key={a.slug}
              href={`/news/${a.slug}`}
              className="glass rounded-2xl p-6 hover:border-brand-blue/50 transition-colors flex flex-col"
            >
              <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${CATEGORY_COLORS[a.category] ?? CATEGORY_COLORS.Comparisons}`}>
                {a.category}
              </span>
              <h3 className="font-display text-xl font-bold text-brand-light mb-2 leading-snug">
                {a.title}
              </h3>
              <p className="text-brand-muted text-sm mb-4 flex-1">{a.excerpt}</p>
              <p className="text-brand-muted/60 text-xs">
                {a.author} · {a.date} · {a.readMinutes} min read
              </p>
            </Link>
          ))}
        </div>
      </div>
      <NewsFooter />
    </div>
  )
}
