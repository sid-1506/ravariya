import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHero   from '../components/PageHero'
import FadeIn     from '../components/FadeIn'
import TextReveal from '../components/TextReveal'
import Marquee    from '../components/Marquee'

const EASE = [0.25, 0.4, 0.25, 1]

const PERKS = [
  { num: '01', title: 'Mission-Driven Work',    text: 'Every role at RGE directly contributes to India\'s clean energy transition. Your work creates measurable environmental and social impact.' },
  { num: '02', title: 'Growth Opportunities',   text: 'We\'re a growing company in a high-growth sector. Early joiners get outsized ownership of their domains and fast career progression.' },
  { num: '03', title: 'Collaborative Culture',  text: 'A tight-knit, high-ownership team where your voice is heard. We move fast, value ideas, and solve problems together.' },
  { num: '04', title: 'Learn & Innovate',       text: 'Bio CNG is a frontier industry. You\'ll constantly learn — from technology and operations to policy, finance, and supply chains.' },
]

const JOBS = [
  { title: 'Plant Operations Manager',        dept: 'Operations',     type: 'Full-Time', loc: 'Gujarat, India',    desc: 'Oversee day-to-day Bio CNG plant operations, maintenance, safety compliance, and production KPIs.' },
  { title: 'Feedstock Procurement Executive', dept: 'Supply Chain',   type: 'Full-Time', loc: 'Gujarat, India',    desc: 'Build and manage farmer relationships, coordinate agricultural waste collection, and optimize feedstock supply.' },
  { title: 'Business Development Manager',    dept: 'BD',             type: 'Full-Time', loc: 'Ahmedabad, Gujarat',desc: 'Identify and close partnerships with investors, OMCs, and strategic partners. Own end-to-end BD pipeline.' },
  { title: 'Process & Mechanical Engineer',   dept: 'Engineering',    type: 'Full-Time', loc: 'Gujarat, India',    desc: 'Maintain and optimize biogas plant equipment, troubleshoot technical issues, and support capacity expansion.' },
  { title: 'Finance & Compliance Executive',  dept: 'Finance',        type: 'Full-Time', loc: 'Ahmedabad, Gujarat',desc: 'Handle financial reporting, regulatory compliance, SATAT documentation, and government liaison activities.' },
]

export default function Careers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        badge="Join the Team"
        title="Join the green energy revolution."
        subtitle="Build your career at the intersection of clean energy, agriculture, and technology."
      />

      {/* ── PERKS ── */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-4">— Life at RGE</span>
              </FadeIn>
              <TextReveal
                text="Why you should work with us."
                className="text-title font-black text-ink"
                delay={0.1}
                stagger={0.04}
              />
            </div>
            <FadeIn delay={0.2}>
              <p className="text-ink-muted text-sm max-w-sm leading-relaxed">
                We're building India's Bio CNG future — and we want the best people alongside us.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PERKS.map((perk, i) => (
              <motion.div
                key={i}
                className="p-8 md:p-10 border border-white/[0.07] bg-surface hover:border-accent/30 transition-all duration-400"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <span className="text-label text-ink-muted block mb-8">{perk.num}</span>
                <h3 className="text-xl md:text-2xl font-bold text-ink mb-4 tracking-tight">{perk.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-white/[0.06] bg-surface py-4 overflow-hidden">
        <Marquee
          items={['Impact at Scale', 'Mission-Driven', 'Gujarat', 'Clean Energy Careers', 'SATAT', 'Bio CNG', 'High Growth']}
          className="text-label text-accent"
          speed={25}
        />
      </div>

      {/* ── OPEN POSITIONS ── */}
      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg">
        <div className="max-w-[1600px] mx-auto">
          <FadeIn className="mb-14">
            <span className="text-label text-ink-muted block mb-4">— Open Positions</span>
            <TextReveal
              text="Current openings."
              className="text-title font-black text-ink"
              delay={0.1}
              stagger={0.06}
            />
          </FadeIn>

          <div className="space-y-0 border border-white/[0.07]">
            {JOBS.map((job, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center px-8 py-8 border-b border-white/[0.06] last:border-b-0 hover:bg-surface transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-label text-ink-muted">{job.dept}</span>
                    <span className="text-ink-muted/30 text-label">·</span>
                    <span className="text-label text-ink-muted">{job.loc}</span>
                    <span className="text-label text-accent">{job.type}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                    {job.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed max-w-xl">{job.desc}</p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ink border border-ink/20 px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300 flex-shrink-0"
                >
                  Apply →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Open application */}
          <FadeIn delay={0.4} className="mt-8">
            <div className="p-8 border border-white/[0.07] bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-ink font-semibold mb-1">Don't see a role that fits?</p>
                <p className="text-ink-muted text-sm">We're always open to exceptional candidates.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-bg bg-accent px-6 py-3 hover:bg-white transition-colors duration-300 flex-shrink-0"
              >
                Send Open Application →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </motion.div>
  )
}
