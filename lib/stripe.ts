import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
})

export const PLANS = {
  pro: {
    name: 'Pro',
    price_monthly: 900,   // cents
    price_annual: 7200,   // $72/yr = 2 months free
    price_id_monthly: process.env.STRIPE_PRO_PRICE_ID!,
  },
  growth: {
    name: 'Growth',
    price_monthly: 2900,
    price_annual: 23200,
    price_id_monthly: process.env.STRIPE_GROWTH_PRICE_ID!,
  },
  dealer: {
    name: 'Dealer',
    price_monthly: 9900,
    price_annual: 79200,
    price_id_monthly: process.env.STRIPE_DEALER_PRICE_ID!,
  },
} as const

export async function createCheckoutSession(
  userId: string,
  email: string,
  plan: keyof typeof PLANS,
  annual = false
) {
  const planConfig = PLANS[plan]
  const priceId = planConfig.price_id_monthly

  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: 7,
      metadata: { user_id: userId, plan },
    },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?upgraded=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    metadata: { user_id: userId, plan },
  })

  return session
}

export async function createBillingPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/settings`,
  })
  return session
}
