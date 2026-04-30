import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.25, 0.4, 0.25, 1]

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  distance = 40,
  once = true,
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })

  const dirMap = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
