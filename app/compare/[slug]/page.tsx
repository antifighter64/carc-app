import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PAIRS, getPair, verdict, type VehicleSpec } from '@/lib/compare-data'

export const dynamicParams = false

export function generateStaticParams() {
  return PAIRS.map(p => ({ slug: p.slug }))
}

function name(v: VehicleSpec) {
  return `${v.year} ${v.make} ${v.model}`
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pair = getPair(params.slug)
  if (!pair) return {}
  const a = name(pair.a)
  const b = name(pair.b)
  return {
    title: `${a} vs ${b}: Specs, MPG and Safety Compared`,
    description: `${a} vs ${b}: compare engine, fuel economy, EPA-estimated annual fuel cost, EV range and NHTSA crash-test ratings side by side. Official government data.`,
    alternates: { canonical: `https://www.carc.com/compare/${params.slug}` },
  }
}

function mpgLabel(v: VehicleSpec) {
  return v.fuel === 'Electricity' ? 'MPGe' : 'MPG'
}

function Row({ label, va, vb }: { label: string; va: React.ReactNode; vb: React.ReactNode }) {
  return (
    <tr className="border-b border-brand-steel/50">
      <th className="text-left text-brand-muted font-normal py-3 pr-4 align-top">{label}</th>
      <td className="py-3 pr-4 text-brand-light align-top">{va ?? '—'}</td>
      <td className="py-3 text-brand-light align-top">{vb ?? '—'}</td>
    </tr>
  )
}

function stars(v?: string | null) {
  if (!v) return 'Not rated'
  const n = Math.round(parseFloat(v))
  return `${'★'.repeat(n)}${'☆'.repeat(Math.max(0, 5 - n))} (${v}/5)`
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const pair = getPair(params.slug)
  if (!pair) notFound()
  const { a, b } = pair
  const an = name(a)
  const bn = name(b)
  const related = PAIRS.filter(p => p.slug !== params.slug).slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Which is more fuel efficient, the ${an} or the ${bn}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `In EPA testing of the noted configurations, the ${an} returns ${a.mpg_comb} ${mpgLabel(a)} combined and the ${bn} returns ${b.mpg_comb} ${mpgLabel(b)} combined.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is the ${an} safer than the ${bn}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `NHTSA overall crash-test ratings: ${an}: ${a.safety_overall ?? 'not rated'} of 5; ${bn}: ${b.safety_overall ?? 'not rated'} of 5.`,
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-brand-black">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <nav className="text-sm text-brand-muted mb-6">
          <Link href="/" className="hover:text-brand-light">CARC.com</Link>
          <span className="mx-2">/</span>
          <Link href="/compare" className="hover:text-brand-light">Compare</Link>
          <span className="mx-2">/</span>
          <span className="text-brand-light">{a.make} {a.model} vs {b.make} {b.model}</span>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-brand-light mb-3">
          {an} vs {bn}
        </h1>
        <p className="text-brand-muted mb-8">{verdict(a, b)}</p>

        <div className="glass rounded-2xl border border-brand-steel overflow-x-auto mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-steel">
                <th className="text-left p-4 text-brand-muted font-normal w-1/4"></th>
                <th className="text-left p-4 font-display text-brand-light">{an}</th>
                <th className="text-left p-4 font-display text-brand-light">{bn}</th>
              </tr>
            </thead>
            <tbody className="px-4">
              <Row label="Body style" va={a.type} vb={b.type} />
              <Row label="Engine" va={a.engine} vb={b.engine} />
              <Row label="Drivetrain" va={a.drive} vb={b.drive} />
              <Row label="Fuel" va={a.fuel} vb={b.fuel} />
              <Row
                label={`City ${mpgLabel(a)}`}
                va={a.mpg_city}
                vb={b.mpg_city}
              />
              <Row label={`Highway ${mpgLabel(a)}`} va={a.mpg_hwy} vb={b.mpg_hwy} />
              <Row label={`Combined ${mpgLabel(a)}`} va={a.mpg_comb} vb={b.mpg_comb} />
              {(a.range_mi || b.range_mi) && <Row label="Electric range" va={a.range_mi ? `${a.range_mi} mi` : '—'} vb={b.range_mi ? `${b.range_mi} mi` : '—'} />}
              <Row
                label="EPA est. annual fuel cost"
                va={a.annual_fuel_cost ? `$${Number(a.annual_fuel_cost).toLocaleString()}` : null}
                vb={b.annual_fuel_cost ? `$${Number(b.annual_fuel_cost).toLocaleString()}` : null}
              />
              <Row label="NHTSA overall safety" va={stars(a.safety_overall)} vb={stars(b.safety_overall)} />
              <Row label="NHTSA front crash" va={a.safety_front ? `${a.safety_front}/5` : 'Not rated'} vb={b.safety_front ? `${b.safety_front}/5` : 'Not rated'} />
              <Row label="NHTSA side crash" va={a.safety_side ? `${a.safety_side}/5` : 'Not rated'} vb={b.safety_side ? `${b.safety_side}/5` : 'Not rated'} />
              <Row label="NHTSA rollover" va={a.safety_rollover ? `${a.safety_rollover}/5` : 'Not rated'} vb={b.safety_rollover ? `${b.safety_rollover}/5` : 'Not rated'} />
              <Row label="Tested configuration" va={a.trim_tested} vb={b.trim_tested} />
            </tbody>
          </table>
        </div>

        <p className="text-brand-muted text-xs mb-12">
          Data: official EPA fuel economy (fueleconomy.gov) and NHTSA crash-test ratings, pulled
          September 2026 for the configurations shown. Different trims, drivetrains and model years
          will change these numbers.
        </p>

        <h2 className="font-display text-xl font-bold text-brand-light mb-4">More comparisons</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {related.map(p => {
            const ra = PAIRS.find(x => x.slug === p.slug)!
            const va = getPair(ra.slug)
            if (!va) return null
            return (
              <Link
                key={p.slug}
                href={`/compare/${p.slug}`}
                className="glass rounded-xl border border-brand-steel hover:border-brand-blue/40 transition-colors p-4 text-brand-light text-sm"
              >
                {name(va.a)} vs {name(va.b)}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
