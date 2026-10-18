import type { Metadata } from 'next'
import LeaseVsBuyCalc from './calculator'

export const metadata: Metadata = {
  title: 'Lease vs. Buy Calculator - Which Costs Less?',
  description:
    'Compare leasing vs. buying the same car: total cost, monthly cash flow, and equity after 3, 6, and 9 years. Honest numbers, no dealer spin.',
  alternates: { canonical: 'https://www.carc.com/calculators/lease-vs-buy' },
}

export default function LeaseVsBuyPage() {
  return <LeaseVsBuyCalc />
}
