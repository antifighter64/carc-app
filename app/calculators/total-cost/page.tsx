import type { Metadata } from 'next'
import TotalCostCalc from './calculator'

export const metadata: Metadata = {
  title: 'Total Cost of Ownership Calculator - True Yearly Car Cost',
  description:
    'Calculate the real cost of owning a car: depreciation, fuel, insurance, and maintenance per year. Compare two cars side by side.',
  alternates: { canonical: 'https://www.carc.com/calculators/total-cost' },
}

export default function TotalCostPage() {
  return <TotalCostCalc />
}
