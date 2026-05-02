import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About',    path: '/about' },
  { label: 'Plant',    path: '/plant' },
  { label: 'Careers',  path: '/careers' },
]

const EASE = [0.25, 0.4, 0.25, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
        animate={{
          paddingTop: scrolled ? '14px' : '24px',
          paddingBottom: scrolled ? '14px' : '24px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.04)' : '0 0 0 rgba(0,0,0,0)',
        }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/IMG_4634.PNG"
              alt="Ravariya Green Energy"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-200"
                  style={{ color: active ? '#111827' : '#9CA3AF' }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-[13px] tracking-[0.06em] uppercase font-semibold px-5 py-2.5 bg-accent text-white rounded-none hover:bg-accent-dark transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 z-50"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-px w-6 bg-ink origin-center"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            />
            <motion.span
              className="block h-px w-6 bg-ink"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-6 bg-ink origin-center"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-white"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex flex-col justify-center h-full px-8 gap-8">
              {[{ label: 'Home', path: '/' }, ...NAV_LINKS, { label: 'Contact', path: '/contact' }].map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.3 + i * 0.07, ease: EASE, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className="font-black text-ink hover:text-accent transition-colors duration-200 leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-10">
              <div className="rule mb-6" />
              <p className="text-ink-muted text-label">Ravariya Green Energy · Bio CNG · SATAT Aligned</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
