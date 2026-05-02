import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.25, 0.4, 0.25, 1]

export default function TextReveal({
  text,
  className = '',
  style,
  delay = 0,
  stagger = 0.04,
  once = true,
  as: Tag = 'div',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.28em] pb-[0.2em] -mb-[0.15em]"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
