import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import TextReveal from '../components/TextReveal'
import FadeIn from '../components/FadeIn'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'

const EASE = [0.25, 0.4, 0.25, 1]

/* ── Animated counter ─────────────────────────────────────────────── */
function Counter({ to, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || typeof to !== 'number') return
    const duration = 1800
    const step = to / (duration / 16)
    let cur = 0
    const t = setInterval(() => {
      cur += step
      if (cur >= to) { setVal(to); clearInterval(t) }
      else setVal(Math.floor(cur))
    }, 16)
    return () => clearInterval(t)
  }, [inView, to])

  if (typeof to !== 'number') {
    return <span ref={ref}>{prefix}{to}{suffix}</span>
  }
  return <span ref={ref}>{prefix}{val}{suffix}</span>
}

/* ── Process step card ────────────────────────────────────────────── */
function StepCard({ num, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <motion.div
      ref={ref}
      className="relative border border-border-dim bg-white p-8 md:p-10 rounded-none shadow-card hover:shadow-card-hover transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="text-[11px] tracking-[0.2em] uppercase text-ink-muted font-medium">Step {num}</span>
        <span
          className="font-black text-ink/[0.05] leading-none select-none"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          {num}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-ink mb-3 tracking-tight">{title}</h3>
      <p className="text-ink-secondary text-sm leading-relaxed">{desc}</p>
      <div className="mt-6 h-[2px] w-12 bg-accent rounded-full" />
    </motion.div>
  )
}

/* ── Main ─────────────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(heroScroll, [0, 1], ['0%', '35%'])
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '18%'])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])

  /* Split-feature parallax */
  const featRef = useRef(null)
  const { scrollYProgress: featScroll } = useScroll({
    target: featRef,
    offset: ['start end', 'end start'],
  })
  const featImgY = useTransform(featScroll, [0, 1], ['-8%', '8%'])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden flex flex-col justify-end pt-24 pb-12 md:min-h-screen md:pt-32 md:pb-24 px-6 md:px-10"
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(22,120,90,0.06) 0%, transparent 70%), #FFFFFF',
            }}
          />
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-border-dim/50" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-border-dim/50" />
            <div className="absolute top-1/3 left-0 right-0 h-px bg-border-dim/50" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-border-dim/50" />
          </div>
        </motion.div>

        {/* Watermark logo — desktop only (right side); hidden on mobile to remove empty space */}
        <div className="hidden md:block absolute pointer-events-none select-none z-[1] md:top-1/2 md:-translate-y-1/2 md:right-[6%]">
          <img
            src="/assets/IMG_4634.PNG"
            alt="Ravariya Green Energy"
            aria-hidden="true"
            className="w-[70vw] md:w-[28vw] max-w-[420px] object-contain opacity-[0.40]"
          />
        </div>

        {/* Ghost display text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end pr-6 md:pr-12 pointer-events-none select-none overflow-hidden"
          style={{ y: bgY }}
        >
          <span
            className="font-black text-ink/[0.03] leading-none"
            style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', letterSpacing: '-0.05em' }}
          >

          </span>
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-[1600px] mx-auto w-full"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          {/* Label row */}
          <motion.div
            className="flex items-center gap-3 mt-6 mb-8 lg:hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-label text-ink-muted">Rapar Taluka, Kutch · Gujarat</span>
            <span className="text-ink-muted/30 text-label mx-2">—</span>
            <span className="text-label text-ink-muted">Compressed Biogas · IS 16087:2025</span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: EASE }}
            >
              <h1
                className="font-black text-ink leading-[0.92] tracking-tighter"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                RAVARIYA
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease: EASE }}
            >
              <h1
                className="font-black leading-[0.92] tracking-tighter text-accent"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                GREEN
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.div
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: EASE }}
            >
              <h1
                className="font-black text-ink leading-[0.92] tracking-tighter"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)' }}
              >
                ENERGY
              </h1>
            </motion.div>
          </div>

          {/* Sub row */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          >
            <p className="text-ink-secondary text-base max-w-md leading-relaxed">
              Producing IS 16087:2025-certified Compressed Biogas (CBG) from cattle dung and agricultural residue — clean, cheaper, uninterrupted fuel for industry and transport.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/plant"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-ink border border-border-dim px-6 py-3 rounded-none hover:border-accent hover:text-accent transition-all duration-300"
              >
                Explore Plant
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-sm font-semibold text-white bg-accent px-6 py-3 rounded-none hover:bg-accent-dark transition-colors duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </motion.div>


      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="border-y border-border-dim bg-bg-soft py-4 overflow-hidden">
        <Marquee
          items={['Compressed Biogas', 'IS 16087:2025', '6 TPD CBG', '25,000+ Cattle', 'Kutch · Gujarat', 'Anaerobic Digestion', 'Clean Energy', 'Zero Waste']}
          className="text-sm font-medium text-accent tracking-widest"
          speed={35}
        />
      </div>

      {/* ════════════════════════════════════════
          WHAT WE DO
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">

          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-16 md:mb-24">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— What We Do</span>
              </FadeIn>
              <TextReveal
                text="Turning waste into clean fuel at industrial scale."
                className="text-title font-black text-ink"
                delay={0.1}
                stagger={0.04}
              />
            </div>
            <FadeIn delay={0.2}>
              <p className="text-ink-secondary text-base leading-relaxed md:text-right">
                Ravariya Global Ventures Pvt. Ltd. (RGVPL) is a Gujarat-based integrated bioenergy company producing Compressed Biogas (CBG) from cattle dung and agricultural residue at our facility in Rapar Taluka, Kutch.
              </p>
            </FadeIn>
          </div>

          <div className="rule mb-16" />

          {/* Three feature cards — asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Direct LPG Replacement',
                text: 'CBG delivers 52,000 kJ/kg — identical to CNG and 13% higher than commercial LPG. Same or more heat per kg, at significantly lower cost. No burner modification required for most industrial applications.',
                accent: true,
              },
              {
                num: '02',
                title: 'BIS-Certified Quality',
                text: 'Every delivery conforms to IS 16087:2025 — the Bureau of Indian Standards national specification. ≥90% methane, low sulphur, low moisture, odorized per IS 15319.',
              },
              {
                num: '03',
                title: 'Government Mandate',
                text: 'CBO blending obligation: 1% in 2025–26, rising to 5% by 2028–29. Early adopters of CBG gain a clear compliance advantage over LPG and diesel.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-10 border relative overflow-hidden rounded-none transition-all duration-300 shadow-card hover:shadow-card-hover ${card.accent
                    ? 'border-accent/30 bg-accent-light'
                    : 'border-border-dim bg-white'
                  }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              >
                <span className="text-[11px] tracking-[0.2em] uppercase text-ink-muted font-medium block mb-8">{card.num}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-4 tracking-tight">{card.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed mb-6">{card.text}</p>
                <div className={`h-[2px] w-10 rounded-full ${card.accent ? 'bg-accent' : 'bg-border-dim'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bg-soft border-y border-border-dim">
        <div className="max-w-[1600px] mx-auto">

          <FadeIn className="mb-16">
            <span className="text-label text-ink-muted">— Numbers That Matter</span>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border-dim">
            {[
              { val: 6, suffix: ' TPD', label: 'CBG Output', meta: 'Tonnes per day' },
              { val: 25000, suffix: '+', label: 'Cattle', meta: '5 AWBI gaushalas' },
              { val: 90, suffix: '%', label: 'Methane (CH₄)', meta: 'IS 16087:2025 minimum' },
              { val: 5, suffix: '×', label: 'Feedstock Oversupply', meta: 'Zero supply risk' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="px-6 md:px-10 py-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <div
                  className="font-black text-ink leading-none mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '-0.03em' }}
                >
                  <Counter to={typeof stat.val === 'number' ? stat.val : stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-ink text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-ink-muted text-xs">{stat.meta}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— The Process</span>
              </FadeIn>
              <TextReveal
                text="From waste to clean energy in five steps."
                className="text-title font-black text-ink"
                delay={0.1}
                stagger={0.04}
              />
            </div>
            <FadeIn delay={0.2}>
              <Link
                to="/plant"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-ink-secondary hover:text-accent transition-colors duration-300"
              >
                Full technical detail
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Feedstock Collection', desc: 'Cattle dung from 5 AWBI-registered gaushalas (25,000+ cattle) plus agri residue — groundnut shells, cotton stalks, castor stalks.' },
              { num: '02', title: 'Anaerobic Digestion', desc: 'Biomass undergoes controlled digestion in sealed bio-digesters, producing raw biogas rich in methane.' },
              { num: '03', title: 'Gas Purification', desc: 'Advanced purification removes CO₂, H₂S, and moisture — yielding ≥90% methane CBG that meets IS 16087:2025.' },
              { num: '04', title: 'Compression', desc: 'Purified biomethane is compressed to 200–250 bar and odorized per IS 15319 for safe handling.' },
              { num: '05', title: 'Cascade Delivery', desc: 'CBG is loaded into cascade cylinders and delivered daily to industrial buyers and CGD entities across Kutch.' },
            ].map((step, i) => (
              <StepCard key={i} index={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATEMENT / ABOUT TEASER
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-10 bg-bg-soft border-y border-border-dim overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-10">
            <span className="text-label text-ink-muted">— Our Mission</span>
          </FadeIn>

          <TextReveal
            text="We convert agricultural waste into the fuel that powers tomorrow's India."
            className="font-black text-ink leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 4.5rem)' }}
            delay={0.05}
            stagger={0.03}
            as="p"
          />

          <FadeIn delay={0.5} className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink border-b border-border-dim pb-1 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Our Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <div className="h-px w-10 bg-border-dim hidden sm:block" />
            <p className="text-ink-secondary text-sm max-w-sm">
              Operating from Rapar Taluka, Kutch — supplying CBG to industrial buyers and CGD entities across Gujarat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURE SPLIT
      ════════════════════════════════════════ */}
      <section ref={featRef} className="py-24 md:py-36 px-6 md:px-10 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image side */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden bg-bg-soft border border-border-dim rounded-none">
              <motion.div
                className="absolute inset-0"
                style={{ y: featImgY }}
              >
                {/* Abstract visual / placeholder for plant image */}
                <div
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(160deg, #E6F5F0 0%, #16785A 50%, #0E5A42 100%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Concentric ring art */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-white/20"
                      style={{
                        width: `${80 + i * 90}px`,
                        height: `${80 + i * 90}px`,
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                  <div
                    className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center relative z-10"
                  >
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                </div>
              </motion.div>
              {/* Overlay tag */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-2 rounded-none">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-ink-secondary font-medium">Plant · Gujarat</span>
              </div>
            </div>

            {/* Text side */}
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-6">— Why Switch to CBG</span>
              </FadeIn>

              <TextReveal
                text="₹25–40/kg saving vs. LPG. From Day 1."
                className="text-section font-black text-ink mb-8"
                delay={0.1}
                stagger={0.04}
              />

              <div className="space-y-6">
                {[
                  { title: 'Eliminate LPG price volatility', desc: 'Fixed-rate CBG supply contract — your fuel cost is locked. No market price shocks.' },
                  { title: 'Government mandate driving adoption', desc: 'CBO blending obligation: 1% in 2025–26, rising to 5% by 2028–29. Early adopters gain compliance advantage.' },
                  { title: 'Zero supply interruption risk', desc: '5× feedstock oversupply. Our 25,000+ cattle base guarantees continuous production even in peak demand seasons.' },
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <div className="flex gap-5 items-start py-5 border-b border-border-dim">
                      <span className="text-accent font-black text-lg mt-0.5 flex-shrink-0">↗</span>
                      <div>
                        <div className="font-semibold text-ink text-base mb-1">{item.title}</div>
                        <div className="text-ink-secondary text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.6} className="mt-10">
                <Link
                  to="/plant"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-ink border border-border-dim px-6 py-3 rounded-none hover:border-accent hover:text-accent transition-all duration-300"
                >
                  Technical Specifications
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden bg-bg-soft border-t border-border-dim">
        {/* Accent glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(22,120,90,0.04) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto text-center">
          <FadeIn className="mb-4">
            <span className="text-label text-ink-muted">— Work With Us</span>
          </FadeIn>

          <TextReveal
            text="Ready to build the future of clean energy?"
            className="text-title font-black text-ink mb-8 mx-auto"
            style={{ maxWidth: '900px' }}
            delay={0.1}
            stagger={0.04}
            as="h2"
          />

          <FadeIn delay={0.5}>
            <p className="text-ink-secondary text-base max-w-lg mx-auto mb-12 leading-relaxed">
              Industries across Kutch — ceramics, chemicals, textiles, FMCG — and CGD entities can lock in IS 16087:2025-certified CBG at ₹25–40/kg below industrial LPG. Let's build a long-term supply partnership.
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                className="inline-flex items-center gap-3 font-semibold text-sm text-white bg-accent px-8 py-4 rounded-none hover:bg-accent-dark transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch →
              </MagneticButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-semibold text-sm text-ink border border-border-dim px-8 py-4 rounded-none hover:border-accent hover:text-accent transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </motion.div>
  )
}
