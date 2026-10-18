import type { Metadata } from 'next'
import InsuranceCalc from './calculator'

export const metadata: Metadata = {
  title: 'Car Insurance Cost Estimator - Annual Premium by Profile',
  description:
    'Estimate your annual car insurance cost by vehicle type, driver age, driving record, and coverage level. See which factors raise your premium most.',
  alternates: { canonical: 'https://www.carc.com/calculators/insurance' },
}

export default function InsurancePage() {
  return <InsuranceCalc />
}
