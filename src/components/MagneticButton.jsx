import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', strength = 0.35, ...props }) {
  const ref = useRef(null)
  const [xy, setXY] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setXY({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength })
  }

  const onLeave = () => setXY({ x: 0, y: 0 })

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
}
