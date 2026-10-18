import { V1_ROUTES, V1_VERSION } from '../v1/lib'

export const metadata = {
  title: 'CARC API v1 — Documentation',
  description: 'CARC REST API v1 reference. Valuation, deal scores, vehicle data, investments, newsletter.',
}

function ParamTable({ params }: { params: NonNullable<(typeof V1_ROUTES)[number]['params']> }) {
  return (
    <table className="w-full text-sm my-3 border-collapse">
      <thead>
        <tr className="text-left text-brand-muted border-b border-brand-steel">
          <th className="py-2 pr-4">Name</th>
          <th className="py-2 pr-4">Required</th>
          <th className="py-2 pr-4">Type</th>
          <th className="py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        {params.map((p) => (
          <tr key={p.name} className="border-b border-brand-steel/30">
            <td className="py-2 pr-4 font-mono text-brand-blue">{p.name}</td>
            <td className="py-2 pr-4">{p.required ? '✅' : '—'}</td>
            <td className="py-2 pr-4 font-mono text-xs">{p.type}</td>
            <td className="py-2 text-brand-muted">{p.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-3xl font-extrabold mb-2">
          CARC<span className="text-brand-blue">.</span> API
        </div>
        <p className="text-brand-muted mb-2">
          Version {V1_VERSION} — the same endpoints our website and (soon) iOS app use.
          No separate logic paths.
        </p>
        <div className="flex gap-3 text-sm mb-10">
          <span className="px-3 py-1 rounded-full bg-brand-charcoal border border-brand-steel">CORS enabled</span>
          <span className="px-3 py-1 rounded-full bg-brand-charcoal border border-brand-steel">100 req/min/IP</span>
          <span className="px-3 py-1 rounded-full bg-brand-charcoal border border-brand-steel">JSON everywhere</span>
        </div>

        <h2 className="text-xl font-bold mb-4">Response format</h2>
        <pre className="bg-brand-charcoal border border-brand-steel rounded-xl p-4 text-sm overflow-x-auto mb-2">
{`// Success
{ "data": { ... }, "meta": { "version": "1.0.0" } }

// Error
{ "error": "Missing required param: make", "code": 400 }`}
        </pre>

        <h2 className="text-xl font-bold mt-10 mb-4">Endpoints</h2>
        {V1_ROUTES.map((r) => (
          <section key={r.path} className="mb-10 p-6 rounded-2xl bg-brand-charcoal/40 border border-brand-steel/50">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${r.method === 'GET' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'}`}>
                {r.method}
              </span>
              <code className="font-mono text-brand-blue">{r.path}</code>
            </div>
            <p className="text-brand-muted text-[15px] mb-3">{r.summary}</p>
            {r.params && <ParamTable params={r.params} />}
            {r.body && <ParamTable params={r.body} />}
            <div className="mt-3">
              <div className="text-xs text-brand-muted mb-1">Example</div>
              <code className="block bg-brand-black border border-brand-steel rounded-lg p-3 font-mono text-sm text-green-300 overflow-x-auto">
                {r.example}
              </code>
            </div>
          </section>
        ))}

        <footer className="text-brand-muted text-sm mt-12 pt-6 border-t border-brand-steel/50">
          CARC.com — CARC finds you the best deal.
        </footer>
      </div>
    </div>
  )
}
