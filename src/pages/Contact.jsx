import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero      from '../components/PageHero'
import FadeIn        from '../components/FadeIn'
import TextReveal    from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'

const EASE = [0.25, 0.4, 0.25, 1]

const ENQUIRY_TYPES = [
  { value: '',            label: 'Select enquiry type' },
  { value: 'general',    label: 'General Inquiry' },
  { value: 'investment', label: 'Investment / Partnership' },
  { value: 'feedstock',  label: 'Feedstock Supply' },
  { value: 'career',     label: 'Career / Jobs' },
  { value: 'equipment',  label: 'Equipment / Vendor' },
  { value: 'media',      label: 'Media / Press' },
]

const CONTACT_INFO = [
  { label: 'Email',        value: 'info@ravariyagreenenergy.com', href: 'mailto:info@ravariyagreenenergy.com' },
  { label: 'Phone',        value: '+91 90000 00000',              href: 'tel:+919000000000' },
  { label: 'Address',      value: 'Ahmedabad, Gujarat, India',    href: null },
  { label: 'Office Hours', value: 'Mon–Sat, 9:00 AM – 6:00 PM IST', href: null },
]

const OPEN_TO = [
  'Investment & Partnership opportunities',
  'Feedstock supply from farmers & aggregators',
  'Equipment & technology vendors',
  'Media & press inquiries',
  'Career applications',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', enquiryType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputBase =
    'w-full bg-surface text-ink text-sm px-5 py-4 border outline-none transition-all duration-200 placeholder:text-ink-muted'

  const inputStyle = (name) => ({
    borderColor: focused === name ? '#3DFF7A' : 'rgba(255,255,255,0.08)',
    boxShadow: focused === name ? '0 0 0 2px rgba(61,255,122,0.08)' : 'none',
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        badge="Get In Touch"
        title="Let's build something green together."
        subtitle="Whether you're an investor, feedstock supplier, or industry partner — we'd love to hear from you."
      />

      <section className="py-24 md:py-36 px-6 md:px-10 bg-bg">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

            {/* LEFT: Info */}
            <div>
              <FadeIn>
                <span className="text-label text-ink-muted block mb-8">— Contact Information</span>
              </FadeIn>

              <div className="space-y-8 mb-12">
                {CONTACT_INFO.map((item, i) => (
                  <FadeIn key={i} delay={0.1 + i * 0.08}>
                    <div>
                      <div className="text-label text-ink-muted mb-2">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-ink text-base font-medium hover:text-accent transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-ink text-base font-medium">{item.value}</span>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="rule mb-8" />

              <FadeIn delay={0.5}>
                <div className="border border-white/[0.07] bg-surface p-7">
                  <h3 className="text-base font-bold text-ink mb-5">We're Open To</h3>
                  <ul className="space-y-3">
                    {OPEN_TO.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent font-bold text-sm mt-0.5 flex-shrink-0">↗</span>
                        <span className="text-ink-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT: Form */}
            <FadeIn delay={0.2} direction="left">
              <div className="border border-white/[0.07] bg-surface p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center py-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mb-6">
                      <span className="text-accent text-2xl font-black">✓</span>
                    </div>
                    <h3 className="text-2xl font-black text-ink mb-3">Message Received</h3>
                    <p className="text-ink-muted text-sm mb-8">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', enquiryType: '', message: '' }) }}
                      className="text-sm font-semibold text-ink border border-ink/20 px-6 py-3 hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      Send Another →
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-xl font-black text-ink mb-1 tracking-tight">Enquiry Form</h2>
                    <p className="text-ink-muted text-sm mb-8">Fill in the details and our team will respond promptly.</p>

                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {[
                          { name: 'name',  label: 'Full Name *',    type: 'text',  placeholder: 'Your full name', required: true },
                          { name: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com', required: true },
                        ].map((f) => (
                          <div key={f.name}>
                            <label className="text-label text-ink-muted block mb-2">{f.label}</label>
                            <input
                              type={f.type}
                              name={f.name}
                              required={f.required}
                              placeholder={f.placeholder}
                              value={form[f.name]}
                              onChange={onChange}
                              onFocus={() => setFocused(f.name)}
                              onBlur={() => setFocused('')}
                              className={inputBase}
                              style={inputStyle(f.name)}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-label text-ink-muted block mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 XXXXX XXXXX"
                            value={form.phone}
                            onChange={onChange}
                            onFocus={() => setFocused('phone')}
                            onBlur={() => setFocused('')}
                            className={inputBase}
                            style={inputStyle('phone')}
                          />
                        </div>
                        <div>
                          <label className="text-label text-ink-muted block mb-2">Enquiry Type *</label>
                          <select
                            name="enquiryType"
                            required
                            value={form.enquiryType}
                            onChange={onChange}
                            onFocus={() => setFocused('enquiryType')}
                            onBlur={() => setFocused('')}
                            className={inputBase}
                            style={{ ...inputStyle('enquiryType'), cursor: 'pointer' }}
                          >
                            {ENQUIRY_TYPES.map((t) => (
                              <option key={t.value} value={t.value}>{t.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-label text-ink-muted block mb-2">Message *</label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your enquiry..."
                          value={form.message}
                          onChange={onChange}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused('')}
                          className={inputBase}
                          style={{ ...inputStyle('message'), resize: 'vertical' }}
                        />
                      </div>

                      <MagneticButton
                        type="submit"
                        disabled={loading}
                        className="w-full font-semibold text-sm py-4 bg-accent text-bg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                        strength={0.15}
                      >
                        {loading ? (
                          <motion.div
                            className="w-5 h-5 border-2 border-bg/30 border-t-bg rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          />
                        ) : (
                          'Submit Enquiry →'
                        )}
                      </MagneticButton>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
