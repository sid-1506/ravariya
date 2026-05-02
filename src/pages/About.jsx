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
        subtitle="Ravariya Global Ventures Pvt. Ltd. (RGVPL) — a Gujarat-based integrated bioenergy company producing IS 16087:2025-certified Compressed Biogas (CBG) for industry and CGD entities."
      />

      {/* ── STORY ── */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
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
                  'Ravariya Global Ventures Pvt. Ltd. (RGVPL) was founded with a singular conviction: that India\'s agricultural heartland holds the key to its clean energy future. Each year, vast volumes of cattle dung and crop residue go unutilised — or worse, burned in fields.',
                  'We saw an opportunity where others saw waste. By harnessing anaerobic digestion and partnering with five AWBI-registered gaushalas across Kutch — together hosting 25,000+ cattle — we built a 6 TPD CBG plant in Rapar Taluka that meets the IS 16087:2025 BIS standard on every delivery.',
                  'Today, RGVPL supplies certified Compressed Biogas to industrial buyers and CGD entities across Kutch — replacing industrial LPG and diesel with a cleaner, cheaper, and uninterrupted fuel.',
                ].map((p, i) => (
                  <FadeIn key={i} delay={0.15 + i * 0.1}>
                    <p className="text-ink-secondary text-base leading-relaxed">{p}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right: visual */}
            <FadeIn delay={0.2} direction="left">
              <div className="relative aspect-square overflow-hidden bg-bg-soft border border-border-dim rounded-none">
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(160deg, #E6F5F0 0%, #16785A 60%, #0E5A42 100%)' }}
                />
                {/* Concentric rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[0,1,2,3,4,5].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border border-white/15"
                      style={{
                        width: `${60 + i * 80}px`,
                        height: `${60 + i * 80}px`,
                      }}
                    />
                  ))}
                  <div className="relative z-10 text-center">
                    <div
                      className="font-black text-white/20 leading-none"
                      style={{ fontSize: '5rem', letterSpacing: '-0.05em' }}
                    >
                      RGVPL
                    </div>
                    <div className="text-white text-sm font-semibold mt-2 tracking-widest uppercase">6 TPD CBG</div>
                    <div className="text-white/70 text-xs mt-1">Rapar Taluka, Kutch</div>
                  </div>
                </div>
                {/* Corner label */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] tracking-widest uppercase text-white/60">Active</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── VISION / MISSION ── */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bg-soft border-y border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted">— Vision & Mission</span>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: 'Vision',
                heading: 'India\'s most trusted Compressed Biogas producer.',
                body: 'A catalyst for the circular economy that empowers gaushalas and farmers, displaces industrial LPG and diesel, and powers India\'s clean fuel transition.',
                accent: true,
              },
              {
                tag: 'Mission',
                heading: 'Certified CBG. Reliable supply. Real savings.',
                body: 'To produce IS 16087:2025-certified Compressed Biogas at scale and supply it to industrial buyers and CGD entities across Gujarat — replacing fossil fuels with a cleaner, cheaper, uninterrupted alternative.',
                accent: false,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`p-10 md:p-12 border relative overflow-hidden rounded-none shadow-card hover:shadow-card-hover transition-all duration-300 ${
                  item.accent ? 'border-accent/25 bg-accent-light' : 'border-border-dim bg-white'
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
                <p className="text-ink-secondary text-sm leading-relaxed">{item.body}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${item.accent ? 'bg-accent/40' : 'bg-border-dim'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-b border-border-dim bg-white py-4 overflow-hidden">
        <Marquee
          items={['Mission-Driven', 'IS 16087:2025', 'Kutch · Gujarat', '6 TPD CBG', 'Zero Waste', 'Gaushala Partnership']}
          className="text-label text-ink-muted"
          speed={20}
          reverse
        />
      </div>

      {/* ── FOUNDER ── */}
      <section ref={founderRef} className="py-24 md:py-36 px-6 md:px-10 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted">— Leadership</span>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

            {/* Image */}
            <div className="relative overflow-hidden aspect-[3/4] bg-bg-soft border border-border-dim rounded-none">
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
                  style={{ background: 'linear-gradient(160deg, #E6F5F0 0%, #16785A 100%)' }}
                >
                  <div className="text-center">
                    <div className="text-8xl mb-3 opacity-30 text-white">BR</div>
                    <div className="text-white text-sm font-semibold">Bhargav Ravariya</div>
                  </div>
                </div>
              </motion.div>
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-label text-white/70 mb-1">Founder & MD</div>
                <div className="text-white font-bold text-lg">Bhargav Ravariya</div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center">
              <TextReveal
                text="The visionary behind RGVPL."
                className="text-section font-black text-ink mb-8"
                delay={0.1}
                stagger={0.04}
              />
              <div className="space-y-5 mb-10">
                {[
                  'Bhargav Ravariya is the Managing Director and driving force behind Ravariya Global Ventures Pvt. Ltd. With deep roots in Gujarat\'s entrepreneurial ecosystem and a passion for sustainable development, he identified the transformative potential of Compressed Biogas early — and committed his resources and vision to making it a reality.',
                  'Under his leadership, RGVPL has commissioned its first 6 TPD CBG plant in Rapar Taluka, Kutch — backed by a 25,000+ cattle feedstock base across five AWBI-registered gaushalas. Bhargav envisions scaling certified CBG supply to industrial and CGD buyers across India.',
                ].map((p, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <p className="text-ink-secondary text-base leading-relaxed">{p}</p>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {['CBG Pioneer', 'Gujarat Entrepreneur', 'Managing Director', 'Clean Energy'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] tracking-widest uppercase text-ink-secondary border border-border-dim px-4 py-2 rounded-none"
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
      <section className="py-20 px-6 md:px-10 bg-bg-soft border-t border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
            <FadeIn>
              <span className="text-label text-ink-muted block mb-3">— Part of a larger vision</span>
              <h2 className="text-2xl md:text-3xl font-black text-ink tracking-tight">
                Ravariya Global Ventures
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-ink-secondary text-base leading-relaxed">
                Compressed Biogas is the flagship vertical of Ravariya Global Ventures Pvt. Ltd. (RGVPL). From our 6 TPD plant in Rapar Taluka, Kutch, we supply IS 16087:2025-certified CBG to industrial buyers and CGD entities — and continue to scale clean energy infrastructure across Gujarat.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
