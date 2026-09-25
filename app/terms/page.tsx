import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of CARC.com.',
}

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-brand-light">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 25, 2026</p>
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>By using CARC.com ("CARC"), operated by Kumbaya Group LLC, you agree to these terms.</p>
        <h2 className="text-xl font-semibold text-brand-light">What CARC provides</h2>
        <p>CARC publishes vehicle research, comparisons, pricing estimates, and market data, and may connect you with third-party dealers, lenders, insurers, or other automotive services at your request.</p>
        <h2 className="text-xl font-semibold text-brand-light">Estimates are informational</h2>
        <p>Prices, valuations, savings estimates, and market figures shown on CARC are good-faith estimates derived from public data, market listings, and partner feeds. They are informational only, are not offers to buy or sell any vehicle, and are not financial, legal, or professional advice. Actual prices, availability, and terms are set by the selling dealer or provider.</p>
        <h2 className="text-xl font-semibold text-brand-light">Third-party services</h2>
        <p>When we connect you with a dealer, lender, insurer, or other partner, your transaction is solely with that third party under its own terms. CARC is not a dealer, broker, lender, or insurer and does not guarantee any third party's pricing, availability, or performance.</p>
        <h2 className="text-xl font-semibold text-brand-light">Acceptable use</h2>
        <p>You agree not to scrape CARC at volume, attempt to disrupt the service, or use it for unlawful purposes.</p>
        <h2 className="text-xl font-semibold text-brand-light">Liability</h2>
        <p>CARC is provided "as is" without warranties of any kind. To the fullest extent permitted by law, Kumbaya Group LLC is not liable for indirect or consequential damages arising from your use of the site. These terms are governed by the laws of the State of New York.</p>
        <h2 className="text-xl font-semibold text-brand-light">Contact</h2>
        <p>Kumbaya Group LLC · boris@kumbaya.com</p>
      </div>
    </main>
  )
}
