# CARC.com — The AI That Finds Your Best Car Deal

> Car AI Research & Comparison — Built on Next.js 14 + Claude (Anthropic) + Supabase + Stripe + MarketCheck

---

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 14 + TypeScript + Tailwind CSS |
| AI Engine | Claude claude-sonnet-4-20250514 (Anthropic) |
| Database | Supabase PostgreSQL (RLS enabled) |
| Auth | Supabase Auth (Email + Google OAuth) |
| Payments | Stripe (3 tiers + webhook) |
| Inventory | MarketCheck API (6M+ live listings) |
| Email | Resend |
| Deployment | Vercel |
| Analytics | Vercel Analytics + PostHog |

---

## Setup (Phase 1 — Foundation)

### 1. Clone & install
```bash
git clone git@github.com:kreimanchess/carc-app.git
cd carc-app
npm install
cp .env.example .env.local
```

### 2. Supabase
1. Create project at [supabase.com](https://supabase.com) — name it `carc-prod`
2. Run `lib/schema.sql` in the SQL Editor
3. Enable Google OAuth: Authentication → Providers → Google
4. Copy `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from project settings
5. Copy `SUPABASE_SERVICE_ROLE_KEY` from project settings → API → service_role

### 3. Stripe
1. Create account at [stripe.com](https://stripe.com)
2. Create 3 products in the Stripe dashboard:
   - **Pro** — $9/mo recurring
   - **Growth** — $29/mo recurring
   - **Dealer** — $99/mo recurring
3. Copy price IDs into `.env.local`
4. Set up webhook: Stripe Dashboard → Webhooks → `https://carc.com/api/webhook`
   - Events: `checkout.session.completed`, `customer.subscription.deleted`, `customer.subscription.updated`
5. Copy webhook signing secret to `STRIPE_WEBHOOK_SECRET`

### 4. MarketCheck API
1. Sign up at [marketcheck.com/api](https://www.marketcheck.com/api)
2. Get API key from dashboard (free trial, then ~$500/mo for full access)
3. Test: `GET https://mc-api.marketcheck.com/v2/search/car/active?api_key=YOUR_KEY&zip=33431&radius=50&rows=5`

### 5. Anthropic
1. Get API key at [console.anthropic.com](https://console.anthropic.com)
2. Add to `ANTHROPIC_API_KEY`

### 6. Resend
1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (carc.com)
3. Copy API key to `RESEND_API_KEY`

### 7. Vercel deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add all env vars in Vercel dashboard
# Point carc.com DNS nameservers to Vercel
```

### 8. Local dev
```bash
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
carc-app/
├── app/
│   ├── page.tsx              # Homepage + waitlist
│   ├── search/page.tsx       # Search results
│   ├── car/[id]/page.tsx     # Listing detail
│   ├── pricing/page.tsx      # Pricing page
│   ├── dashboard/page.tsx    # User dashboard
│   ├── signup/page.tsx       # Auth
│   ├── login/page.tsx        # Auth
│   ├── tools/
│   │   └── negotiation/      # Negotiation prep tool
│   └── api/
│       ├── search/route.ts   # Main search endpoint
│       ├── score/route.ts    # Score a listing
│       ├── waitlist/route.ts # Waitlist signup
│       └── webhook/route.ts  # Stripe webhook
├── lib/
│   ├── claude.ts             # AI query parsing + deal scoring
│   ├── marketcheck.ts        # Inventory API client
│   ├── supabase.ts           # DB client
│   ├── stripe.ts             # Payment client
│   ├── ratelimit.ts          # Free tier rate limiting
│   └── schema.sql            # Supabase schema
├── types/index.ts            # TypeScript types
└── .env.example              # Required env vars
```

---

## Phase Roadmap

| Phase | Status | Description |
|---|---|---|
| 1 | ✅ Built | Foundation: repo, Vercel, Supabase, MarketCheck |
| 2 | ✅ Built | Waitlist landing page + email capture |
| 3 | ✅ Built | Core AI search engine (MarketCheck + Claude scoring) |
| 4 | ✅ Built | Auth + Stripe + Dashboard |
| 5 | 🔜 Next | VIN reports, finance/insurance affiliates, SEO engine |
| 6 | 🔜 Next | Launch: waitlist email, Product Hunt, Reddit |

---

## Revenue Model (Month 6 Target: ~$27,750/mo)

| Stream | Target |
|---|---|
| Pro subscriptions (500 users × $9) | $4,500 |
| Growth subscriptions (200 × $29) | $5,800 |
| Dealer accounts (50 × $99) | $4,950 |
| CarGurus/AutoTrader affiliate clicks | $5,000 |
| Auto loan referrals | $3,000 |
| Insurance referrals | $2,500 |
| VIN reports | $2,000 |

---

## Competitive Edge

CARC beats every competitor on one dimension: **it explains the deal**.

- CarGurus/AutoTrader: listings with basic ratings. No AI. No natural language.
- TrueCar/KBB: static pricing data. No real-time scoring. No negotiation.
- CARC: type what you want → AI scores every deal → explains why → tells you what to pay.

---

Built by Kumbaya Group LLC · [carc.com](https://carc.com)
