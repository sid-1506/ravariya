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
    <footer className="bg-bg-soft border-t border-border-dim">
      {/* Marquee strip */}
      <div className="border-b border-border-dim py-4">
        <Marquee
          items={['Compressed Biogas', 'IS 16087:2025', '6 TPD CBG', 'Kutch · Gujarat', '25,000+ Cattle', 'Clean Energy', 'Zero Waste']}
          className="text-label text-ink-muted"
          speed={25}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-20 items-start">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/IMG_4634.PNG"
                alt="Ravariya Green Energy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed max-w-xs">
              Producing IS 16087:2025-certified Compressed Biogas (CBG) from cattle dung and agri residue — clean fuel for industry and transport across Kutch, Gujarat.
            </p>
            <p className="text-ink-muted text-[11px] tracking-wider uppercase mt-6">
              Ravariya Global Ventures Pvt. Ltd.
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
                    className="text-sm text-ink-secondary hover:text-accent transition-colors duration-200"
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
                  href="mailto:info@ravariyaglobalventures.com"
                  className="text-sm text-ink-secondary hover:text-accent transition-colors duration-200 block break-all"
                >
                  info@ravariyaglobalventures.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918591344745"
                  className="text-sm text-ink-secondary hover:text-accent transition-colors duration-200 block"
                >
                  +91 85913 44745
                </a>
              </li>
              <li>
                <a
                  href="https://www.ravariyaglobalventures.com"
                  className="text-sm text-ink-secondary hover:text-accent transition-colors duration-200 block break-all"
                >
                  www.ravariyaglobalventures.com
                </a>
              </li>
              <li className="text-sm text-ink-secondary">
                Rapar Taluka, Kutch, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        <div className="rule mt-14 mb-8" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-ink-muted text-[11px] tracking-wide">
            © {year} Ravariya Global Ventures Pvt. Ltd.
          </p>
          <p className="text-ink-muted text-[11px] tracking-wide">
            Compressed Biogas · IS 16087:2025 · Kutch, Gujarat
          </p>
        </div>
      </div>
    </footer>
  )
}
