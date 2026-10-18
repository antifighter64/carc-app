import type { Metadata } from 'next'
import DepreciationCalc from './calculator'

export const metadata: Metadata = {
  title: 'Car Depreciation Calculator - Future Value by Year',
  description:
    'How much will your car be worth in 1, 3, 5, or 10 years? Our depreciation calculator projects resale value using real market depreciation curves.',
  alternates: { canonical: 'https://www.carc.com/calculators/depreciation' },
}

export default function DepreciationPage() {
  return <DepreciationCalc />
}
