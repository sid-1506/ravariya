import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from 'framer-motion'
import TextReveal    from '../components/TextReveal'
import FadeIn        from '../components/FadeIn'
import Marquee       from '../components/Marquee'
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
      className="relative border border-white/[0.07] bg-surface p-8 md:p-10"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
      whileHover={{ borderColor: 'rgba(61,255,122,0.3)', backgroundColor: '#141414' }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="text-[11px] tracking-[0.2em] uppercase text-ink-muted font-medium">Step {num}</span>
        <span
          className="font-black text-white/[0.06] leading-none select-none"
          style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
        >
          {num}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-ink mb-3 tracking-tight">{title}</h3>
      <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
      <div className="mt-6 h-px w-12 bg-accent" />
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

  const bgY      = useTransform(heroScroll, [0, 1], ['0%', '35%'])
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
        className="relative h-screen overflow-hidden flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10"
      >
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: bgY }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(27,122,69,0.18) 0%, transparent 70%), #060606',
            }}
          />
          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-white/[0.03]" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/[0.03]" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-white/[0.03]" />
            <div className="absolute top-1/3 left-0 right-0 h-px bg-white/[0.03]" />
            <div className="absolute top-2/3 left-0 right-0 h-px bg-white/[0.03]" />
          </div>
        </motion.div>

        {/* Ghost display text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end pr-6 md:pr-12 pointer-events-none select-none overflow-hidden"
          style={{ y: bgY }}
        >
          <span
            className="font-black text-white/[0.04] leading-none"
            style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', letterSpacing: '-0.05em' }}
          >
            RGE
          </span>
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-[1600px] mx-auto w-full"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          {/* Label row */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-label text-ink-muted">Est. 2024 · Ahmedabad, Gujarat</span>
            <span className="text-ink-muted/30 text-label mx-2">—</span>
            <span className="text-label text-ink-muted">Bio CNG · SATAT Aligned</span>
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
                className="font-black leading-[0.92] tracking-tighter"
                style={{ fontSize: 'clamp(3.5rem, 11vw, 11rem)', color: '#3DFF7A' }}
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
            <p className="text-ink-muted text-base max-w-md leading-relaxed">
              Converting agricultural waste into fuel-grade Bio CNG — clean, renewable, and powering India's transport future under the SATAT initiative.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/plant"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-ink border border-ink/20 px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
              >
                Explore Plant
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-sm font-semibold text-bg bg-accent px-6 py-3 hover:bg-white transition-colors duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ opacity: heroOpacity }}
        >
          <span className="text-label text-ink-muted [writing-mode:vertical-lr]">Scroll</span>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent to-ink/30 origin-top"
            animate={{ scaleY: [0.2, 1, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          MARQUEE
      ════════════════════════════════════════ */}
      <div className="border-y border-white/[0.06] bg-surface py-4 overflow-hidden">
        <Marquee
          items={['Bio CNG', 'SATAT Aligned', '100 TPD', 'Anaerobic Digestion', 'Clean Energy', 'Gujarat', 'Renewable', 'Zero Waste']}
          className="text-sm font-medium text-accent tracking-widest"
          speed={35}
        />
      </div>

      {/* ════════════════════════════════════════
          WHAT WE DO
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg">
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
              <p className="text-ink-muted text-base leading-relaxed md:text-right">
                Ravariya Green Energy operates India's next-generation Bio CNG plants — harnessing the power of anaerobic digestion to convert agricultural residue into fuel-grade compressed natural gas.
              </p>
            </FadeIn>
          </div>

          <div className="rule mb-16" />

          {/* Three feature cards — asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Renewable Fuel',
                text: 'Bio CNG derived entirely from organic agricultural waste, creating an infinitely renewable energy cycle that eliminates India\'s dependence on fossil fuels.',
                accent: true,
              },
              {
                num: '02',
                title: 'Carbon Neutral',
                text: 'The CO₂ released during combustion is fully offset by the CO₂ absorbed during crop growth. Bio CNG is genuinely carbon-neutral — and prevents methane from landfill.',
              },
              {
                num: '03',
                title: 'Government Backed',
                text: 'Under India\'s SATAT initiative, our Bio CNG output is guaranteed off-take by Oil Marketing Companies — de-risking the business and securing stable long-term revenue.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`p-8 md:p-10 border relative overflow-hidden transition-all duration-500 ${
                  card.accent
                    ? 'border-accent/40 bg-accent/[0.04]'
                    : 'border-white/[0.07] bg-surface'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                whileHover={{
                  borderColor: 'rgba(61,255,122,0.4)',
                  backgroundColor: card.accent ? 'rgba(61,255,122,0.06)' : '#141414',
                }}
              >
                <span className="text-[11px] tracking-[0.2em] uppercase text-ink-muted font-medium block mb-8">{card.num}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-ink mb-4 tracking-tight">{card.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">{card.text}</p>
                <div className={`h-px w-10 ${card.accent ? 'bg-accent' : 'bg-white/20'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-surface border-y border-white/[0.06]">
        <div className="max-w-[1600px] mx-auto">

          <FadeIn className="mb-16">
            <span className="text-label text-ink-muted">— Numbers That Matter</span>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/[0.06]">
            {[
              { val: 100, suffix: ' TPD',  label: 'Plant Capacity',      meta: 'Tonnes per day' },
              { val: 100, suffix: '%',     label: 'Renewable',           meta: 'Zero fossil inputs' },
              { val: 5,   suffix: ' Steps', label: 'Production Process', meta: 'Waste to fuel' },
              { val: 2024,   suffix: '',    label: 'Established',         meta: 'Ahmedabad, Gujarat' },
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
      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg">
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
                className="group inline-flex items-center gap-3 text-sm font-semibold text-ink-muted hover:text-accent transition-colors duration-300"
              >
                Full technical detail
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { num: '01', title: 'Feedstock Collection',  desc: 'Agricultural residue — crop stubble, sugarcane bagasse, cattle dung — collected from farms and aggregation centres.' },
              { num: '02', title: 'Anaerobic Digestion',   desc: 'Biomass undergoes controlled digestion in sealed bio-digesters, producing raw biogas (~60% methane).' },
              { num: '03', title: 'Gas Purification',      desc: 'Advanced PSA systems remove CO₂, H₂S, and impurities, yielding >95% pure biomethane.' },
              { num: '04', title: 'Compression',           desc: 'Purified biomethane is compressed to 200–250 bar — identical to fossil CNG in quality and specification.' },
              { num: '05', title: 'Distribution',          desc: 'Bio CNG is dispensed on-site or cascaded into cylinders for supply to Oil Marketing Companies under SATAT.' },
            ].map((step, i) => (
              <StepCard key={i} index={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATEMENT / ABOUT TEASER
      ════════════════════════════════════════ */}
      <section className="py-24 md:py-40 px-6 md:px-10 bg-surface border-y border-white/[0.06] overflow-hidden">
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
              className="group inline-flex items-center gap-3 text-sm font-semibold text-ink border-b border-ink/30 pb-1 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Our Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <div className="h-px w-10 bg-white/10 hidden sm:block" />
            <p className="text-ink-muted text-sm max-w-sm">
              Founded in Ahmedabad, Gujarat — building India's Bio CNG infrastructure from the ground up.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FEATURE SPLIT
      ════════════════════════════════════════ */}
      <section ref={featRef} className="py-24 md:py-36 px-6 md:px-10 bg-bg overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image side */}
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden bg-surface-2 border border-white/[0.07]">
              <motion.div
                className="absolute inset-0"
                style={{ y: featImgY }}
              >
                {/* Abstract visual / placeholder for plant image */}
                <div
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(160deg, #0d3d22 0%, #1B7A45 50%, #3DFF7A20 100%)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Concentric ring art */}
                  {[0,1,2,3,4].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-white/[0.08]"
                      style={{
                        width: `${80 + i * 90}px`,
                        height: `${80 + i * 90}px`,
                        top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                  <div
                    className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center relative z-10"
                  >
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  </div>
                </div>
              </motion.div>
              {/* Overlay tag */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-bg/80 backdrop-blur px-3 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[11px] tracking-[0.15em] uppercase text-ink-muted font-medium">Plant · Gujarat</span>
              </div>
            </div>

            {/* Text side */}
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-6">— Why Bio CNG</span>
              </FadeIn>

              <TextReveal
                text="Drop-in fuel. Zero modification. Massive impact."
                className="text-section font-black text-ink mb-8"
                delay={0.1}
                stagger={0.04}
              />

              <div className="space-y-6">
                {[
                  { title: '80% lower GHG emissions', desc: 'Compared to conventional diesel — directly contributing to India\'s net-zero targets.' },
                  { title: 'Empowers farming communities', desc: 'By purchasing crop waste as feedstock and returning organic fertilizer as by-product.' },
                  { title: 'Circular economy model', desc: 'Every tonne processed generates both clean fuel and fertilizer — zero waste by design.' },
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <div className="flex gap-5 items-start py-5 border-b border-white/[0.06]">
                      <span className="text-accent font-black text-lg mt-0.5 flex-shrink-0">↗</span>
                      <div>
                        <div className="font-semibold text-ink text-base mb-1">{item.title}</div>
                        <div className="text-ink-muted text-sm leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.6} className="mt-10">
                <Link
                  to="/plant"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-ink border border-ink/20 px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
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
      <section className="relative py-24 md:py-40 px-6 md:px-10 overflow-hidden bg-surface border-t border-white/[0.06]">
        {/* Accent glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(61,255,122,0.06) 0%, transparent 70%)' }}
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
            <p className="text-ink-muted text-base max-w-lg mx-auto mb-12 leading-relaxed">
              Whether you're an investor, feedstock supplier, or industry partner — Ravariya Green Energy offers real opportunity at every stage of the Bio CNG value chain.
            </p>
          </FadeIn>

          <FadeIn delay={0.65}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                className="inline-flex items-center gap-3 font-semibold text-sm text-bg bg-accent px-8 py-4 hover:bg-white transition-colors duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Get In Touch →
              </MagneticButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-semibold text-sm text-ink border border-ink/20 px-8 py-4 hover:border-accent hover:text-accent transition-all duration-300"
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
