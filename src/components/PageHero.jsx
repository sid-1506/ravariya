import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import TextReveal from './TextReveal'

const EASE = [0.25, 0.4, 0.25, 1]

export default function PageHero({ badge, title, subtitle, accentWord }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-[72vh] flex flex-col justify-end pt-32 pb-16 md:pb-24 px-6 md:px-10 overflow-hidden bg-bg"
    >
      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-border-dim/40" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-border-dim/40" />
      </div>

      {/* Ghost letters */}
      <div
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 font-black text-ink/[0.03] pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(10rem, 25vw, 25rem)' }}
        aria-hidden
      >
        RGE
      </div>

      <motion.div
        className="relative z-10 max-w-[1600px] mx-auto w-full"
        style={{ y: textY, opacity }}
      >
        {badge && (
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-label text-ink-muted">{badge}</span>
          </motion.div>
        )}

        <TextReveal
          text={title}
          className="text-hero font-black text-ink"
          delay={0.1}
          stagger={0.03}
        />

        {subtitle && (
          <motion.p
            className="mt-6 text-ink-secondary text-base md:text-lg max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
