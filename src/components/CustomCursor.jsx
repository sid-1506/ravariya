import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotX  = useMotionValue(-100)
  const dotY  = useMotionValue(-100)
  const ringX = useSpring(useMotionValue(-100), { stiffness: 90, damping: 18 })
  const ringY = useSpring(useMotionValue(-100), { stiffness: 90, damping: 18 })
  const isHovering = useRef(false)
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = () => window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice()) return

    const rawX = { set: (v) => ringX.set(v) }
    const rawY = { set: (v) => ringY.set(v) }

    const onMove = (e) => {
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
      rawX.set(e.clientX - 18)
      rawY.set(e.clientY - 18)
    }

    const onEnter = () => {
      isHovering.current = true
      if (dotRef.current)  dotRef.current.style.transform  += ' scale(0)'
      if (ringRef.current) ringRef.current.style.setProperty('--ring-scale', '1.8')
      if (ringRef.current) ringRef.current.style.borderColor = '#16785A'
    }
    const onLeave = () => {
      isHovering.current = false
      if (dotRef.current)  dotRef.current.style.transform  = ''
      if (ringRef.current) ringRef.current.style.setProperty('--ring-scale', '1')
      if (ringRef.current) ringRef.current.style.borderColor = 'rgba(17,24,39,0.3)'
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [dotX, dotY, ringX, ringY])

  return (
    <>
      <motion.div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-ink pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY, zIndex: 10001 }}
      />
      <motion.div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full border border-ink/30 pointer-events-none transition-[border-color] duration-200"
        style={{ x: ringX, y: ringY, zIndex: 10000 }}
      />
    </>
  )
}
