import { Link } from 'react-router-dom'
import Marquee from './Marquee'

const LINKS = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Plant',    path: '/plant' },
  { label: 'Careers',  path: '/careers' },
  { label: 'Contact',  path: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-white/[0.06]">
      {/* Marquee strip */}
      <div className="border-b border-white/[0.06] py-4">
        <Marquee
          items={['Bio CNG', 'SATAT Aligned', '100 TPD', 'Clean Energy', 'Gujarat', 'India', 'Renewable']}
          className="text-label text-ink-muted"
          speed={25}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-bg text-xs font-black">R</span>
              </div>
              <span className="font-semibold text-ink text-sm">Ravariya Green Energy</span>
            </div>
            <p className="text-ink-muted text-sm leading-relaxed max-w-xs">
              Converting agricultural waste into clean, renewable Bio CNG — powering India's sustainable transport and energy future.
            </p>
            <p className="text-ink-muted text-[11px] tracking-wider uppercase mt-6">
              A Ravariya Global Ventures Company
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-label text-ink-muted mb-5">Navigate</p>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-ink/60 hover:text-ink transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-label text-ink-muted mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@ravariyagreenenergy.com"
                  className="text-sm text-ink/60 hover:text-ink transition-colors duration-200 block"
                >
                  info@ravariyagreenenergy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919000000000"
                  className="text-sm text-ink/60 hover:text-ink transition-colors duration-200 block"
                >
                  +91 90000 00000
                </a>
              </li>
              <li className="text-sm text-ink/60">
                Ahmedabad, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-ink-muted text-[11px] tracking-wide">
            © {year} Ravariya Green Energy Pvt. Ltd.
          </p>
          <p className="text-ink-muted text-[11px] tracking-wide">
            Clean Energy · Bio CNG · SATAT Aligned
          </p>
        </div>
      </div>
    </footer>
  )
}
