'use client'

import { useState, useMemo } from 'react'

const fmt$ = (n: number) => '$' + Math.round(n).toLocaleString('en-US')

function Slider({ label, value, display, min, max, step, onChange }: {
  label: string; value: number; display: string
  min: number; max: number; step: number
  onChange: (v: number) => void
}) {
  return (
    <div className="mb-5">
      <label className="flex justify-between text-sm font-semibold mb-2">
        <span>{label}</span>
        <span className="text-brand-blue tabular-nums">{display}</span>
      </label>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(+e.target.value)}
        className="w-full accent-brand-blue"
      />
    </div>
  )
}

/**
 * Car payment calculator — sliders for price, down payment, trade-in, APR, term.
 * Punchy insight: "you'll pay $X in interest alone."
 */
export default function PaymentCalculator() {
  const [price, setPrice] = useState(30000)
  const [down, setDown] = useState(5000)
  const [trade, setTrade] = useState(0)
  const [apr, setApr] = useState(6.9)
  const [term, setTerm] = useState(60)

  const r = useMemo(() => {
    const financed = Math.max(0, price - down - trade)
    const rate = apr / 100 / 12
    const monthly = rate === 0
      ? financed / term
      : financed * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1)
    const totalPaid = monthly * term
    const interest = totalPaid - financed
    const trueCost = price + interest
    const iPct = trueCost > 0 ? (interest / trueCost) * 100 : 0
    return { financed, monthly, totalPaid, interest, trueCost, iPct }
  }, [price, down, trade, apr, term])

  const punch = useMemo(() => {
    if (r.interest <= 0) return <>Paying cash? Smart — <b className="text-brand-red">$0</b> in interest. That&apos;s the best deal there is.</>
    if (r.iPct >= 20) return <>You&apos;ll pay <b className="text-brand-red">{fmt$(r.interest)} in interest alone</b> — that&apos;s {r.iPct.toFixed(0)}% on top of the sticker price. A bigger down payment or shorter term kills this number.</>
    if (r.iPct >= 10) return <>You&apos;ll pay <b className="text-brand-red">{fmt$(r.interest)} in interest</b> over {term / 12} years. Dropping to a {Math.max(12, term - 12)}-month term would save you real money.</>
    return <>Only <b className="text-brand-red">{fmt$(r.interest)} in interest</b> — {(100 - r.iPct).toFixed(0)}% of every dollar goes to the car itself. Solid financing.</>
  }, [r, term])

  return (
    <div className="max-w-2xl mx-auto bg-brand-charcoal border border-brand-steel rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-blue to-purple-600 flex items-center justify-center font-display font-extrabold text-lg">C</div>
        <h2 className="font-display text-xl font-bold">Car Payment Calculator</h2>
      </div>
      <p className="text-brand-muted text-sm mb-6">CARC finds you the best deal — start by knowing your real monthly number.</p>

      <Slider label="Car price" value={price} display={fmt$(price)} min={5000} max={150000} step={500} onChange={setPrice} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Slider label="Down payment" value={down} display={fmt$(down)} min={0} max={50000} step={250} onChange={setDown} />
        <Slider label="Trade-in value" value={trade} display={fmt$(trade)} min={0} max={50000} step={250} onChange={setTrade} />
        <Slider label="APR" value={apr} display={apr.toFixed(1) + '%'} min={0} max={20} step={0.1} onChange={setApr} />
        <Slider label="Term" value={term} display={term + ' mo'} min={12} max={84} step={12} onChange={setTerm} />
      </div>

      <div className="mt-6 bg-brand-black border border-brand-steel rounded-xl p-5">
        <div className="text-xs uppercase tracking-wider text-brand-muted mb-1">Your monthly payment</div>
        <div className="font-display text-5xl font-extrabold text-brand-green tabular-nums">{fmt$(r.monthly)}<span className="text-2xl">/mo</span></div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          {[
            ['Amount financed', fmt$(r.financed), ''],
            ['Total interest', fmt$(r.interest), 'text-brand-red'],
            ['Total of payments', fmt$(r.totalPaid), ''],
            ['True cost (price + interest)', fmt$(r.trueCost), ''],
          ].map(([k, v, c]) => (
            <div key={k as string} className="bg-brand-charcoal border border-brand-steel rounded-lg p-3">
              <div className="text-xs uppercase tracking-wide text-brand-muted">{k}</div>
              <div className={`text-xl font-bold tabular-nums mt-1 ${c}`}>{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-brand-muted mb-1.5">
            <span>Principal vs interest</span>
            <span>{r.iPct.toFixed(1)}% is interest</span>
          </div>
          <div className="h-3.5 rounded-full bg-brand-steel overflow-hidden flex">
            <div className="bg-brand-blue" style={{ width: `${100 - r.iPct}%` }} />
            <div className="bg-brand-red" style={{ width: `${r.iPct}%` }} />
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-brand-red/10 border border-brand-red/30 text-[15px] font-semibold">
          💡 {punch}
        </div>
      </div>

      <p className="mt-4 text-xs text-brand-muted">Estimates only — excludes taxes, title, registration, and dealer fees. Your actual APR depends on credit score and lender.</p>
    </div>
  )
}
