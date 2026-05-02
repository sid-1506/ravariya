import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero   from '../components/PageHero'
import FadeIn     from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import Marquee    from '../components/Marquee'

const EASE = [0.25, 0.4, 0.25, 1]

const STEPS = [
  { num: '01', title: 'Feedstock Collection',  desc: 'Agricultural residue — crop stubble, sugarcane bagasse, cattle dung, and organic biomass — collected from farms within a defined catchment radius.' },
  { num: '02', title: 'Anaerobic Digestion',   desc: 'Biomass undergoes controlled anaerobic digestion in sealed bio-digesters producing raw biogas (~60% methane).' },
  { num: '03', title: 'Gas Purification',      desc: 'Raw biogas passes through advanced PSA systems removing CO₂, H₂S, and impurities — yielding >95% pure biomethane.' },
  { num: '04', title: 'Compression',           desc: 'Purified biomethane is compressed to 200–250 bar, creating Bio CNG meeting BIS/IS 16087 standards.' },
  { num: '05', title: 'Distribution',          desc: 'Bio CNG is dispensed on-site or cascaded into cylinders for supply to Oil Marketing Companies under SATAT.' },
]

const SPECS = [
  { param: 'Plant Location',        value: 'Gujarat, India' },
  { param: 'Processing Capacity',   value: '100 Tonnes Per Day (TPD)' },
  { param: 'Feedstock Type',        value: 'Agricultural Residue, Cattle Dung, Organic Waste' },
  { param: 'Biogas Yield',          value: '~350–450 m³ per tonne of feedstock' },
  { param: 'Bio CNG Output',        value: 'As per SATAT agreement' },
  { param: 'Gas Purity',            value: '>95% Biomethane (CH₄)' },
  { param: 'Compression Pressure',  value: '200–250 bar' },
  { param: 'Bio-Slurry Output',     value: 'Organic Fertilizer (FOM)' },
  { param: 'Quality Standard',      value: 'BIS / IS 16087 Compliant' },
  { param: 'Government Scheme',     value: 'SATAT — Petroleum & Natural Gas Ministry' },
  { param: 'Offtake Partner',       value: 'Oil Marketing Companies (OMCs)' },
  { param: 'Technology',            value: 'Anaerobic Digestion + PSA Purification' },
]

export default function Plant() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHero badge="Technology & Infrastructure" title="Our Bio CNG Plant" subtitle="A state-of-the-art facility converting agricultural waste into clean, compressed natural gas at industrial scale." />

      {/* PROCESS */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <FadeIn><span className="text-label text-ink-muted block mb-4">— How It Works</span></FadeIn>
              <TextReveal text="Five stages. One clean outcome." className="text-title font-black text-ink" delay={0.1} stagger={0.04} />
            </div>
            <FadeIn delay={0.2}><p className="text-ink-secondary text-sm max-w-sm leading-relaxed">Scientifically proven stages that transform organic waste into fuel-grade compressed natural gas.</p></FadeIn>
          </div>
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <motion.div key={i} className="grid grid-cols-[auto_1fr_1fr] gap-8 md:gap-12 items-start py-10 border-b border-border-dim" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}>
                <span className="font-black text-ink/[0.06] leading-none select-none flex-shrink-0" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.04em' }}>{step.num}</span>
                <div>
                  <div className="text-label text-ink-muted mb-3">Step {step.num}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink tracking-tight">{step.title}</h3>
                </div>
                <p className="text-ink-secondary text-sm leading-relaxed hidden md:block">{step.desc}</p>
                <div className="col-span-3 md:hidden -mt-6 pb-2"><p className="text-ink-secondary text-sm leading-relaxed">{step.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bg-soft border-y border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted block mb-4">— Technical Specifications</span>
            <TextReveal text="Plant at a glance." className="text-title font-black text-ink" delay={0.1} stagger={0.06} />
          </FadeIn>
          <div className="border border-border-dim rounded-none overflow-hidden bg-white">
            {SPECS.map((spec, i) => (
              <motion.div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-6 md:px-8 py-5 border-b border-border-dim last:border-b-0 hover:bg-bg-soft transition-colors duration-200" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-5% 0px' }} transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}>
                <span className="text-ink-secondary text-sm">{spec.param}</span>
                <span className="text-ink text-sm font-semibold">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-b border-border-dim bg-white py-4 overflow-hidden">
        <Marquee items={['100 TPD Capacity', 'PSA Purification', '200–250 Bar', '>95% Biomethane', 'BIS Compliant', 'SATAT Registered', 'Zero Waste']} className="text-label text-accent" speed={28} />
      </div>

      {/* WHY BIO CNG */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted block mb-4">— The Case for Bio CNG</span>
            <TextReveal text="Why Bio CNG changes everything." className="text-title font-black text-ink" delay={0.1} stagger={0.04} />
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: 'Drastically Reduces Carbon Emissions', text: "Bio CNG can reduce lifecycle GHG emissions by up to 80% compared to diesel — contributing directly to India's net-zero targets." },
              { title: 'Empowers Farmers', text: 'By purchasing agricultural waste as feedstock and supplying fermented organic manure as by-product, Bio CNG plants create direct economic benefit for farming communities.' },
              { title: 'Drop-In Replacement', text: 'Bio CNG is chemically identical to fossil CNG. All existing CNG vehicles and infrastructure work without modification.' },
              { title: 'Waste to Wealth Model', text: 'Every tonne processed generates clean fuel and organic fertilizer. The entire process is a zero-waste circular economy model.' },
            ].map((card, i) => (
              <motion.div key={i} className="p-8 md:p-10 border border-border-dim bg-white rounded-none shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}>
                <span className="text-label text-ink-muted block mb-6">{`0${i + 1}`}</span>
                <h3 className="text-xl md:text-2xl font-bold text-ink mb-4 tracking-tight">{card.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SATAT */}
      <section className="py-20 md:py-28 px-6 md:px-10 bg-bg-soft border-t border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            <FadeIn>
              <span className="text-label text-ink-muted block mb-4">— Government Initiative</span>
              <h2 className="text-section font-black text-ink tracking-tight leading-tight">Aligned with<br />India's SATAT<br />Initiative</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-l-2 border-accent pl-8">
                <p className="text-ink-secondary text-base leading-relaxed mb-5">The <strong className="text-ink">Sustainable Alternative Towards Affordable Transportation (SATAT)</strong> initiative, launched by India's Ministry of Petroleum & Natural Gas, invites entrepreneurs to set up compressed biogas plants.</p>
                <p className="text-ink-secondary text-base leading-relaxed">Ravariya Green Energy is fully registered under SATAT, ensuring our entire Bio CNG output has a guaranteed buyer through leading OMCs.</p>
                <div className="mt-8">
                  <Link to="/contact" className="group inline-flex items-center gap-3 text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-300">Partner with us <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
