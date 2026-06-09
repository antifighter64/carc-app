import { getSupabaseAdmin } from './supabase'

const FREE_SEARCHES_PER_DAY = 5

export async function checkSearchRateLimit(
  userId: string | null
): Promise<{ allowed: boolean; remaining: number; plan: string }> {
  if (!userId) {
    // Anonymous: track by session, very limited
    return { allowed: true, remaining: 3, plan: 'anonymous' }
  }

  const admin = getSupabaseAdmin()
  const { data: profile } = await admin
    .from('profiles')
    .select('plan, searches_today, searches_reset_at')
    .eq('id', userId)
    .single()

  if (!profile) return { allowed: false, remaining: 0, plan: 'free' }

  // Pro+ plans have unlimited searches
  if (['pro', 'growth', 'dealer', 'enterprise'].includes(profile.plan)) {
    return { allowed: true, remaining: 999, plan: profile.plan }
  }

  // Reset counter if it's a new day
  const resetAt = new Date(profile.searches_reset_at)
  const now = new Date()
  const isNewDay = now.getDate() !== resetAt.getDate() ||
    now.getMonth() !== resetAt.getMonth()

  if (isNewDay) {
    await admin
      .from('profiles')
      .update({ searches_today: 0, searches_reset_at: now.toISOString() })
      .eq('id', userId)
    return { allowed: true, remaining: FREE_SEARCHES_PER_DAY, plan: 'free' }
  }

  const remaining = FREE_SEARCHES_PER_DAY - (profile.searches_today ?? 0)
  if (remaining <= 0) {
    return { allowed: false, remaining: 0, plan: 'free' }
  }

  // Increment counter
  await admin
    .from('profiles')
    .update({ searches_today: (profile.searches_today ?? 0) + 1 })
    .eq('id', userId)

  return { allowed: true, remaining: remaining - 1, plan: 'free' }
}
