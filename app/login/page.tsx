'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError) {
      setError(authError.message)
      setLoading(false)
      return
    }
    router.push('/dashboard')
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` },
    })
  }

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="font-display font-bold text-2xl">
            <span className="text-brand-blue">CARC</span><span className="text-brand-light">.com</span>
          </Link>
          <h1 className="font-display text-3xl font-bold text-brand-light mt-6">Welcome back</h1>
        </div>

        <div className="glass rounded-2xl border border-brand-steel p-8 space-y-4">
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 border border-brand-steel rounded-xl py-3 text-brand-muted hover:text-brand-light hover:border-brand-blue/40 transition-colors text-sm font-medium"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3">
            <hr className="flex-1 border-brand-steel" />
            <span className="text-brand-muted/60 text-xs">or</span>
            <hr className="flex-1 border-brand-steel" />
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 transition-colors"
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full bg-brand-black border border-brand-steel rounded-xl px-4 py-3 text-brand-light placeholder-brand-muted/60 focus:outline-none focus:border-brand-blue/60 transition-colors"
            />

            {error && <p className="text-brand-red text-sm">{error}</p>}

            <Link href="/forgot-password" className="block text-right text-brand-blue text-xs hover:underline">
              Forgot password?
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-blue hover:bg-brand-blue-dim disabled:opacity-50 text-white py-3 rounded-xl font-medium transition-colors"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>

        <p className="text-center text-brand-muted text-sm mt-6">
          No account?{' '}
          <Link href="/signup" className="text-brand-blue hover:underline">Create one free</Link>
        </p>
      </div>
    </div>
  )
}
