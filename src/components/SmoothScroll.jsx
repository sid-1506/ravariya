import { ReactLenis } from 'lenis/react'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.15,
        duration: 0.6,
        smoothWheel: true,
        wheelMultiplier: 1.3,
        touchMultiplier: 1.3,
      }}
    >
      {children}
    </ReactLenis>
  )
}
