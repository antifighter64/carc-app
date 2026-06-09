import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CARC brand palette
        // Deep garage charcoal + electric speed blue + signal green
        brand: {
          black:    '#0D0F12',  // near-black with blue undertone
          charcoal: '#1A1D24',  // card backgrounds
          steel:    '#2C3140',  // borders, subtle dividers
          blue:     '#1E6BFF',  // primary CTA — electric speed blue
          'blue-dim':'#1550CC', // hover state
          green:    '#00E676',  // deal score positive / AI accent
          amber:    '#FFB400',  // deal score warning
          red:      '#FF3B3B',  // deal score bad / error
          muted:    '#6B7280',  // secondary text
          light:    '#E8ECF4',  // primary text on dark
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body:    ['var(--font-body)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0M-10 10L10-10M30 50L50 30' stroke='%232C3140' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
        'blue-glow': 'radial-gradient(ellipse 600px 400px at 50% 0%, rgba(30,107,255,0.18) 0%, transparent 70%)',
        'green-glow': 'radial-gradient(ellipse 300px 300px at 50% 50%, rgba(0,230,118,0.12) 0%, transparent 70%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up': 'slide-up 0.4s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
