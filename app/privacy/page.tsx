import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CARC.com collects, uses, and protects your information.',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-brand-light">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 25, 2026</p>
      <div className="space-y-6 text-brand-muted leading-relaxed">
        <p>CARC.com ("CARC", "we", "us"), operated by Kumbaya Group LLC, helps car shoppers compare vehicles, estimate fair prices, and connect with dealers and automotive services. This policy explains what we collect and how we use it.</p>
        <h2 className="text-xl font-semibold text-brand-light">What we collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Usage data:</strong> pages visited, searches and comparisons you run, device and browser information, and approximate location derived from IP address.</li>
          <li><strong>Contact information:</strong> if you join a waitlist, request a quote, or contact us, we collect the email address, name, or phone number you provide.</li>
          <li><strong>Cookies:</strong> we use cookies and similar technologies for analytics and to remember your preferences.</li>
        </ul>
        <h2 className="text-xl font-semibold text-brand-light">How we use it</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To operate and improve CARC's comparison tools and content.</li>
          <li>To connect you, at your request, with dealers, lenders, insurers, or other automotive partners. When you ask for a quote or introduction, we share the information you submit with that partner.</li>
          <li>To send service messages and, if you opt in, occasional updates. You can unsubscribe at any time.</li>
        </ul>
        <h2 className="text-xl font-semibold text-brand-light">What we never do</h2>
        <p>We do not sell your personal information to data brokers, and we do not collect sensitive personal data such as Social Security numbers, driver's license numbers, or payment card details on CARC.com.</p>
        <h2 className="text-xl font-semibold text-brand-light">Third parties</h2>
        <p>We use analytics and hosting providers (such as Vercel and Google Analytics) that process data on our behalf under their own privacy terms. Links to partner sites (dealers, lenders, insurers) are governed by those partners' privacy policies.</p>
        <h2 className="text-xl font-semibold text-brand-light">Your choices</h2>
        <p>You may request access to, correction of, or deletion of your personal information by emailing privacy@carc.com. We respond within 30 days.</p>
        <h2 className="text-xl font-semibold text-brand-light">Contact</h2>
        <p>Kumbaya Group LLC · privacy@carc.com</p>
      </div>
    </main>
  )
}
