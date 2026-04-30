import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageHero   from '../components/PageHero'
import FadeIn     from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import Marquee    from '../components/Marquee'

const EASE = [0.25, 0.4, 0.25, 1]

export default function About() {
  /* Parallax for founder image */
  const founderRef = useRef(null)
  const { scrollYProgress: fs } = useScroll({ target: founderRef, offset: ['start end', 'end start'] })
  const founderImgY = useTransform(fs, [0, 1], ['-6%', '6%'])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        badge="Who We Are"
        title="Built on purpose. Driven by planet."
        subtitle="A story of turning agricultural surplus into India's sustainable energy future."
      />

      {/* ── STORY ── */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

            {/* Left text */}
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-6">— Our Story</span>
              </FadeIn>
              <TextReveal
                text="Where it all began."
                className="text-section font-black text-ink mb-8"
                delay={0.1}
                stagger={0.05}
              />
              <div className="space-y-5">
                {[
                  'Ravariya Green Energy was founded with a singular conviction: that India\'s agricultural heartland holds the key to its clean energy future. Each year, millions of tonnes of crop residue, cattle dung, and organic waste go unutilized — or worse, burned in fields.',
                  'We saw an opportunity where others saw waste. By harnessing anaerobic digestion technology and India\'s SATAT framework, we built a plant that transforms agricultural surplus into high-grade Bio CNG.',
                  'Today, we work alongside farmers, fuel distributors, government bodies, and investors to make Bio CNG a mainstream energy source across Gujarat and beyond.',
                ].map((p, i) => (
                  <FadeIn key={i} delay={0.15 + i * 0.1}>
                    <p className="text-ink-muted text-base leading-relaxed">{p}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right: visual */}
            <FadeIn delay={0.2} direction="left">
              <div className="relative aspect-square overflow-hidden bg-surface border border-white/[0.07]">
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(160deg, #0d3d22 0%, #1B7A45 60%, #3DFF7A15 100%)' }}
                />
                {/* Concentric rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[0,1,2,3,4,5].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-white/[0.07]"
                      style={{
                        width: `${60 + i * 80}px`,
                        height: `${60 + i * 80}px`,
                      }}
                    />
                  ))}
                  <div className="relative z-10 text-center">
                    <div
                      className="font-black text-white/10 leading-none"
                      style={{ fontSize: '5rem', letterSpacing: '-0.05em' }}
                    >
                      RGE
                    </div>
                    <div className="text-ink text-sm font-semibold mt-2 tracking-widest uppercase">Est. 2024</div>
                    <div className="text-ink-muted text-xs mt-1">Gujarat, India</div>
                  </div>
                </div>
                {/* Corner label */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] tracking-widest uppercase text-white/40">Active</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-surface border-y border-white/[0.06]">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted">— Vision & Mission</span>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: 'Vision',
                heading: 'India\'s most trusted Bio CNG producer.',
                body: 'A catalyst for the circular economy that empowers farmers, cleans the air, and powers the nation\'s sustainable transport revolution.',
                accent: true,
              },
              {
                tag: 'Mission',
                heading: 'State-of-the-art plants. Real impact.',
                body: 'To build and operate Bio CNG production facilities across India, creating economic value from agricultural waste while delivering clean, affordable fuel to communities and industries.',
                accent: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`p-10 md:p-12 border relative overflow-hidden ${
                  item.accent ? 'border-accent/30 bg-accent/[0.03]' : 'border-white/[0.07] bg-bg'
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              >
                <span className="text-label text-ink-muted block mb-8">{`0${i + 1} — ${item.tag}`}</span>
                <h3 className="text-2xl md:text-3xl font-black text-ink mb-5 tracking-tight leading-tight">
                  {item.heading}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.body}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-px ${item.accent ? 'bg-accent/40' : 'bg-white/[0.07]'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-b border-white/[0.06] bg-bg py-4 overflow-hidden">
        <Marquee
          items={['Mission-Driven', 'Clean Energy Pioneer', 'Gujarat', 'SATAT Registered', 'Zero Waste', 'Farmer Empowerment']}
          className="text-label text-ink-muted"
          speed={20}
          reverse
        />
      </div>

      {/* ── FOUNDER ── */}
      <section ref={founderRef} className="py-24 md:py-36 px-6 md:px-10 bg-bg overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted">— Leadership</span>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4] bg-surface border border-white/[0.07]">
              <motion.div className="absolute inset-0" style={{ y: founderImgY }}>
                <img
                  src="/assets/bhargav.PNG"
                  alt="Bhargav Ravariya"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="w-full h-full hidden items-center justify-center"
                  style={{ background: 'linear-gradient(160deg, #0d3d22 0%, #1B7A45 100%)' }}
                >
                  <div className="text-center">
                    <div className="text-8xl mb-3 opacity-30">BR</div>
                    <div className="text-ink text-sm font-semibold">Bhargav Ravariya</div>
                  </div>
                </div>
              </motion.div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-label text-ink-muted mb-1">Founder & MD</div>
                <div className="text-ink font-bold text-lg">Bhargav Ravariya</div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <TextReveal
                text="The visionary behind Ravariya Green Energy."
                className="text-section font-black text-ink mb-8"
                delay={0.1}
                stagger={0.04}
              />
              <div className="space-y-5 mb-10">
                {[
                  'Bhargav Ravariya is the founder and driving force behind Ravariya Green Energy. With deep roots in Gujarat\'s entrepreneurial ecosystem and a passion for sustainable development, he identified the transformative potential of Bio CNG early — and committed his resources and vision to making it a reality.',
                  'Under his leadership, Ravariya Green Energy has established its first Bio CNG plant in Gujarat, building partnerships with farmers, OMCs, and government bodies. Bhargav envisions scaling the company\'s footprint nationally.',
                ].map((p, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <p className="text-ink-muted text-base leading-relaxed">{p}</p>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {['Bio CNG Pioneer', 'Gujarat Entrepreneur', 'SATAT Advocate', 'Clean Energy'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-widest uppercase text-ink-muted border border-white/[0.1] px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── RGVPL BANNER ── */}
      <section className="py-20 px-6 md:px-10 bg-surface border-t border-white/[0.06]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
            <FadeIn>
              <span className="text-label text-ink-muted block mb-3">— Part of a larger vision</span>
              <h2 className="text-2xl md:text-3xl font-black text-ink tracking-tight">
                Ravariya Global Ventures
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-ink-muted text-base leading-relaxed">
                Ravariya Green Energy is the flagship subsidiary of Ravariya Global Ventures Pvt. Ltd. (RGVPL) — a diversified holding company with upcoming ventures across clean energy infrastructure, agri-tech, and industrial logistics. As RGVPL expands its portfolio, RGE leads its commitment to India's green energy transition.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
