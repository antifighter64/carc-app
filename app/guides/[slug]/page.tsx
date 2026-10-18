import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import NewsNav from '@/app/components/NewsNav'
import NewsFooter from '@/app/components/NewsFooter'
import { GUIDES, getGuide } from '@/lib/guides'

export function generateStaticParams() {
  return GUIDES.map(g => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug)
  if (!g) return {}
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `https://www.carc.com/guides/${params.slug}` },
    openGraph: { title: g.title, description: g.description, type: 'article' },
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug)
  if (!g) notFound()
  const related = GUIDES.filter(x => x.slug !== params.slug && x.category === g.category)
    .concat(GUIDES.filter(x => x.slug !== params.slug && x.category !== g.category))
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.description,
    datePublished: '2026-10-18',
    dateModified: '2026-10-18',
    author: { '@type': 'Organization', name: 'CARC.com' },
    publisher: { '@type': 'Organization', name: 'CARC.com' },
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NewsNav />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-brand-muted mb-6">
          <Link href="/" className="hover:text-brand-light">CARC.com</Link>
          <span className="mx-2">/</span>
          <Link href="/guides" className="hover:text-brand-light">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-light">{g.category}</span>
        </nav>

        <p className="text-brand-blue font-medium text-sm uppercase tracking-widest mb-3">
          {g.category} · {g.readTime}
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-light leading-tight mb-4">
          {g.title}
        </h1>
        <p className="text-brand-muted text-lg mb-4">{g.intro}</p>
        <p className="text-brand-muted/70 text-sm mb-12">Updated {g.updated} · By the CARC research team</p>

        <div className="space-y-10">
          {g.sections.map(s => (
            <section key={s.heading}>
              <h2 className="font-display text-2xl font-bold text-brand-light mb-4">{s.heading}</h2>
              <div className="space-y-4">
                {s.body.map((p, i) => (
                  <p key={i} className="text-brand-light/85 leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="glass rounded-2xl border border-brand-blue/30 p-6 mt-14 text-center">
          <p className="font-display font-bold text-brand-light text-lg mb-2">
            Ready to find your best deal?
          </p>
          <p className="text-brand-muted text-sm mb-4">
            See real prices, deal scores, and fair values on thousands of cars.
          </p>
          <Link
            href="/search"
            className="inline-block bg-brand-blue hover:bg-brand-blue-dim text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            Search cars now
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="font-display text-xl font-bold text-brand-light mb-4">Keep reading</h2>
            <div className="space-y-3">
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/guides/${r.slug}`}
                  className="block glass rounded-xl border border-brand-steel hover:border-brand-blue/40 transition-colors p-4"
                >
                  <p className="font-semibold text-brand-light">{r.title}</p>
                  <p className="text-brand-muted text-sm mt-1">{r.readTime}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <NewsFooter />
    </div>
  )
}
