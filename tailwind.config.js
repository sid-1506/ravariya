/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg':        '#060606',
        'surface':   '#0F0F0F',
        'surface-2': '#181818',
        'ink':       '#F0EDE8',
        'ink-muted': '#5A5A5A',
        'accent':    '#3DFF7A',
        'brand':     '#1B7A45',
        'brand-dark':'#0D3D22',
        'border-dim':'rgba(255,255,255,0.06)',
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
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.4, 0.25, 1)',
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
