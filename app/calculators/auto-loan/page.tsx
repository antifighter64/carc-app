import type { Metadata } from 'next'
import AutoLoanCalc from './calculator'

export const metadata: Metadata = {
  title: 'Auto Loan Calculator - Monthly Payment & Total Interest',
  description:
    'Calculate your car loan monthly payment, total interest, and payoff schedule. Compare loan terms side by side before you sign.',
  alternates: { canonical: 'https://www.carc.com/calculators/auto-loan' },
}

export default function AutoLoanPage() {
  return <AutoLoanCalc />
}
