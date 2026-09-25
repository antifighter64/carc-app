import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'How CARC.com earns money and how that affects our content.',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-brand-light">
      <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 25, 2026</p>
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>CARC.com is free to use. To keep it that way, we earn money through partnerships, and we want to be upfront about how that works.</p>
        <h2 className="text-xl font-semibold text-brand-light">How we earn</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Some links and quote-request buttons on CARC connect you with dealers, lenders, insurers, and other automotive partners. When you click through or submit a request, the partner may pay CARC a referral or lead fee.</li>
          <li>Partners never pay to change our comparison results, ratings, or price estimates. Those are generated from data, not from who pays us.</li>
          <li>Using a partner link never increases the price you pay.</li>
        </ul>
        <h2 className="text-xl font-semibold text-brand-light">Our commitment</h2>
        <p>CARC's comparisons and estimates are built to help you make a better decision, whether or not it earns us a fee. If we ever present sponsored content, it will be clearly labeled.</p>
        <p>Questions: boris@kumbaya.com</p>
      </div>
    </main>
  )
}
