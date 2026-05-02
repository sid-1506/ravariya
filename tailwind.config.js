/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* ─── White Theme Palette ─── */
        'bg':          '#FFFFFF',
        'bg-soft':     '#F9FAFB',
        'surface':     '#F3F4F6',
        'surface-2':   '#E5E7EB',

        /* ─── Ink / Text ─── */
        'ink':         '#111827',
        'ink-secondary': '#4B5563',
        'ink-muted':   '#9CA3AF',

        /* ─── Brand Green (from logo) ─── */
        'accent':      '#16785A',
        'accent-light':'#E6F5F0',
        'accent-dark': '#0E5A42',

        /* ─── Borders ─── */
        'border-dim':  '#E5E7EB',
        'border-light':'#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(5rem,14vw,14rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'hero':    ['clamp(3rem, 9vw, 9rem)',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'title':   ['clamp(2rem, 5vw, 5rem)',  { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'section': ['clamp(1.5rem,3.5vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'ultra':    '0.2em',
      },
      boxShadow: {
        'card':   '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.07), 0 4px 10px rgba(0,0,0,0.04)',
        'nav':    '0 1px 3px rgba(0,0,0,0.04)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.4, 0.25, 1)',
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
