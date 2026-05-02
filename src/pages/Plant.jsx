import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero   from '../components/PageHero'
import FadeIn     from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import Marquee    from '../components/Marquee'

const EASE = [0.25, 0.4, 0.25, 1]

const STEPS = [
  { num: '01', title: 'Feedstock Collection',  desc: 'Cattle dung from 5 AWBI-registered gaushalas (25,000+ cattle) plus agri residue — groundnut shells, cotton stalks, castor stalks — sourced across Kutch and North Gujarat.' },
  { num: '02', title: 'Anaerobic Digestion',   desc: 'Biomass undergoes controlled anaerobic digestion in sealed bio-digesters producing raw biogas rich in methane.' },
  { num: '03', title: 'Gas Purification',      desc: 'Raw biogas is purified to remove CO₂, H₂S, moisture, and trace impurities — yielding ≥90% methane CBG that meets IS 16087:2025.' },
  { num: '04', title: 'Compression & Odorization', desc: 'Purified biomethane is compressed to 200–250 bar and odorized per IS 15319, guaranteeing safe handling.' },
  { num: '05', title: 'Cascade Delivery',      desc: 'CBG is loaded into cascade cylinders and delivered daily to industrial buyers and CGD entities across Kutch — under fixed-rate, take-or-pay contracts.' },
]

const SPECS = [
  { param: 'Plant Location',        value: 'Rapar Taluka, Kutch, Gujarat' },
  { param: 'CBG Output',            value: '6 Tonnes Per Day (TPD)' },
  { param: 'Feedstock Requirement', value: '~72 TPD (250–375 TPD available)' },
  { param: 'Primary Feedstock',     value: 'Cattle Dung — 5 AWBI gaushalas, 25,000+ cattle' },
  { param: 'Co-Feedstock',          value: 'Agri Residue — groundnut shells, cotton stalks, castor stalks' },
  { param: 'Methane (CH₄)',         value: '≥ 90% minimum' },
  { param: 'Total Sulphur incl. H₂S', value: '≤ 20 mg/m³' },
  { param: 'Moisture Content',      value: '≤ 5 mg/m³' },
  { param: 'Oxygen (O₂)',           value: '≤ 0.5%' },
  { param: 'Delivery Pressure',     value: '200 – 250 bar' },
  { param: 'Odorization',           value: 'Per IS 15319' },
  { param: 'Quality Standard',      value: 'IS 16087:2025 (BIS Certified)' },
]

const QUALITY_SPECS = [
  { label: 'Methane (CH₄)',          value: '≥ 90%',          note: 'minimum' },
  { label: 'Total Sulphur incl. H₂S', value: '≤ 20 mg/m³',    note: '' },
  { label: 'Moisture Content',       value: '≤ 5 mg/m³',      note: '' },
  { label: 'Oxygen (O₂)',            value: '≤ 0.5%',         note: '' },
  { label: 'Delivery Pressure',      value: '200 – 250 bar',  note: '' },
  { label: 'Odorized per IS 15319',  value: 'Safe handling guaranteed', note: '' },
]

const FUELS = [
  { name: 'CBG',  value: '52,000 kJ/kg', note: '= CNG · 13% MORE than LPG', highlight: true },
  { name: 'CNG',  value: '52,000 kJ/kg', note: 'CBG is the renewable equivalent', highlight: false },
  { name: 'LPG',  value: '46,000 kJ/kg', note: 'Industrial price ₹95–105/kg',     highlight: false },
]

const REASONS = [
  { num: '01', title: 'Eliminate LPG price volatility', text: 'Fixed-rate CBG supply contract — your fuel cost is locked. No market price shocks.' },
  { num: '02', title: 'Government mandate driving adoption', text: 'CBO blending obligation: 1% in 2025–26, rising to 5% by 2028–29. Early adopters gain compliance advantage.' },
  { num: '03', title: 'Zero supply interruption risk', text: '5× feedstock oversupply. Our 25,000+ cattle base guarantees continuous production even in peak demand seasons.' },
  { num: '04', title: '₹25–40/kg saving vs. LPG', text: 'On the same calorific value basis — immediate, measurable EBITDA impact for ceramics, chemicals, textiles, and FMCG plants in Kutch.' },
]

const TERMS = [
  { tag: 'Contract Tenure',   value: '10-year binding supply agreement' },
  { tag: 'Price Escalation',  value: '2% per annum — fixed at signing' },
  { tag: 'Quality Guarantee', value: 'IS 16087:2025 on every delivery with batch certificate' },
]

export default function Plant() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageHero badge="Technology & Infrastructure" title="Our Compressed Biogas Plant" subtitle="A 6 TPD facility in Rapar Taluka, Kutch — converting cattle dung and agri residue into IS 16087:2025-certified CBG for industry and transport." />

      {/* PROCESS */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
            <div>
              <FadeIn><span className="text-label text-ink-muted block mb-4">— How It Works</span></FadeIn>
              <TextReveal text="Five stages. One clean outcome." className="text-title font-black text-ink" delay={0.1} stagger={0.04} />
            </div>
            <FadeIn delay={0.2}><p className="text-ink-secondary text-sm max-w-sm leading-relaxed">Scientifically proven stages that transform cattle dung and agri residue into BIS-certified Compressed Biogas.</p></FadeIn>
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

      {/* CBG QUALITY SPECIFICATIONS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-white border-t border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— CBG Quality Specifications</span>
              </FadeIn>
              <TextReveal text="Certified. Compliant. Consistent." className="text-section font-black text-ink mb-6" delay={0.1} stagger={0.04} />
              <FadeIn delay={0.2}>
                <p className="text-ink-secondary text-base leading-relaxed">
                  All CBG supplied by RGVPL conforms to IS 16087:2025 — the Bureau of Indian Standards national specification. Our purification process guarantees consistent quality on every delivery.
                </p>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {QUALITY_SPECS.map((s, i) => (
                <motion.div
                  key={i}
                  className="p-6 border border-accent/30 bg-accent-light rounded-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                >
                  <div className="text-label text-ink-muted mb-2">{s.label}</div>
                  <div className="text-ink font-bold text-lg tracking-tight">{s.value}</div>
                  {s.note && <div className="text-ink-secondary text-xs mt-1">{s.note}</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALORIFIC VALUE ADVANTAGE */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bg-soft border-y border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start mb-12">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— Calorific Value Advantage</span>
              </FadeIn>
              <TextReveal text="Same heat. Lower cost. Day 1." className="text-section font-black text-ink mb-6" delay={0.1} stagger={0.04} />
              <FadeIn delay={0.2}>
                <p className="text-ink-secondary text-base leading-relaxed mb-3">
                  CBG delivers 52,000 kJ/kg — identical to CNG and 13% higher than commercial LPG. Your process receives the same or more heat per kg, at significantly lower cost.
                </p>
                <p className="text-ink-secondary text-sm italic">
                  No burner modification required for most industrial applications. Direct LPG replacement on Day 1.
                </p>
              </FadeIn>
            </div>
            <div className="space-y-4">
              {FUELS.map((f, i) => (
                <motion.div
                  key={i}
                  className={`p-6 md:p-7 border rounded-none ${f.highlight ? 'border-accent bg-white shadow-card' : 'border-border-dim bg-white'}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <span className={`font-black tracking-tight ${f.highlight ? 'text-accent' : 'text-ink'}`} style={{ fontSize: '1.5rem' }}>{f.name}</span>
                    <span className={`font-black tracking-tight ${f.highlight ? 'text-accent' : 'text-ink'}`} style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>{f.value}</span>
                  </div>
                  <div className="text-ink-secondary text-xs">{f.note}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-white">
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
      <div className="border-y border-border-dim bg-bg-soft py-4 overflow-hidden">
        <Marquee items={['6 TPD CBG', '≥90% Methane', '200–250 Bar', 'IS 16087:2025', 'Kutch · Gujarat', '25,000+ Cattle', 'Zero Waste']} className="text-label text-accent" speed={28} />
      </div>

      {/* FEEDSTOCK STRENGTH */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <FadeIn><span className="text-label text-ink-muted block mb-4">— Our Feedstock Strength</span></FadeIn>
              <TextReveal text="3.5× – 5× feedstock oversupply." className="text-title font-black text-ink" delay={0.1} stagger={0.04} />
            </div>
            <FadeIn delay={0.2}><p className="text-ink-secondary text-sm max-w-sm leading-relaxed">RGVPL sources cattle dung from five AWBI-registered gaushalas and panjrapoles across Kutch — 25,000+ cattle with 250–375 TPD dung available against a plant requirement of just 72 TPD.</p></FadeIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div className="p-8 md:p-10 border border-accent/30 bg-accent-light rounded-none" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.6, ease: EASE }}>
              <span className="text-label text-ink-muted block mb-4">Primary Feedstock</span>
              <h3 className="text-xl md:text-2xl font-bold text-ink mb-3 tracking-tight">Cattle Dung</h3>
              <p className="text-ink-secondary text-sm leading-relaxed">5 AWBI-registered gaushalas & panjrapoles across Rapar &amp; Bhachau Taluka, Kutch — 25,000+ cattle.</p>
            </motion.div>
            <motion.div className="p-8 md:p-10 border border-border-dim bg-white rounded-none shadow-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.6, delay: 0.1, ease: EASE }}>
              <span className="text-label text-ink-muted block mb-4">Co-Feedstock</span>
              <h3 className="text-xl md:text-2xl font-bold text-ink mb-3 tracking-tight">Agri Residue</h3>
              <p className="text-ink-secondary text-sm leading-relaxed">Groundnut shells, cotton stalks, castor stalks — locally sourced from Kutch &amp; North Gujarat.</p>
            </motion.div>
          </div>
          <FadeIn>
            <div className="bg-accent text-white text-center py-5 px-6 rounded-none">
              <span className="text-sm md:text-base font-semibold tracking-wide">3.5× – 5× Feedstock Oversupply — Supply risk virtually eliminated</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY SWITCH TO CBG */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg-soft border-y border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted block mb-4">— Why Switch to CBG</span>
            <TextReveal text="₹25–40/kg saving vs. LPG, per kg." className="text-title font-black text-ink" delay={0.1} stagger={0.04} />
            <p className="text-ink-secondary text-sm mt-4 max-w-2xl">Industries across Kutch — ceramics, chemicals, textiles, FMCG — currently pay ₹95–105/kg for industrial LPG. RGVPL's CBG delivers the same or higher calorific value at ₹25–40/kg lower cost. That saving translates directly to EBITDA improvement — from Day 1.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {REASONS.map((card, i) => (
              <motion.div key={i} className="p-8 md:p-10 border border-border-dim bg-white rounded-none shadow-card hover:shadow-card-hover hover:border-accent/30 transition-all duration-300" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}>
                <span className="text-label text-ink-muted block mb-6">{card.num}</span>
                <h3 className="text-xl md:text-2xl font-bold text-ink mb-4 tracking-tight">{card.title}</h3>
                <p className="text-ink-secondary text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLY MODEL */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— How You Can Buy From Us</span>
              </FadeIn>
              <TextReveal text="Your industry. Our gas. One contract." className="text-section font-black text-ink mb-6" delay={0.1} stagger={0.04} />
              <FadeIn delay={0.2}>
                <p className="text-ink-secondary text-base leading-relaxed">
                  Flexible supply model — designed for industrial buyers of all sizes and for CGD entities looking for a reliable CBG producer partner.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2} direction="left">
              <div className="p-8 md:p-10 border border-accent/30 bg-accent-light rounded-none">
                <span className="text-label text-ink-muted block mb-4">Direct Industrial Cascade Supply</span>
                <h3 className="text-xl md:text-2xl font-bold text-ink mb-4 tracking-tight">Daily delivery to your factory gate.</h3>
                <p className="text-ink-secondary text-sm leading-relaxed mb-6">
                  Daily CBG cascade delivery to your factory gate. Fixed-rate, take-or-pay contract. Zero infrastructure setup for you.
                </p>
                <Link to="/contact" className="group inline-flex items-center gap-3 text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-300">
                  Request a supply quote
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* COMMERCIAL TERMS */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-bg-soft border-y border-border-dim">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— Commercial Terms</span>
              </FadeIn>
              <TextReveal text="Long-term certainty for both sides." className="text-section font-black text-ink mb-6" delay={0.1} stagger={0.04} />
              <FadeIn delay={0.2}>
                <p className="text-ink-secondary text-base leading-relaxed mb-3">
                  All supply agreements are structured for long-term certainty — protecting your fuel budget and giving our plant predictable offtake from Day 1.
                </p>
                <p className="text-ink-secondary text-sm italic">
                  Pricing is discussed and finalised in meeting — tailored to your volume, location, and contract tenure.
                </p>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TERMS.map((t, i) => (
                <motion.div
                  key={i}
                  className="p-6 md:p-7 border border-border-dim bg-white rounded-none shadow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
                >
                  <div className="text-label text-accent mb-3">{t.tag}</div>
                  <div className="text-ink text-sm font-semibold leading-snug">{t.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <FadeIn delay={0.4} className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-3 text-sm font-semibold text-white bg-accent px-6 py-3 rounded-none hover:bg-accent-dark transition-colors duration-300">
              Discuss pricing &amp; terms
              <span>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
