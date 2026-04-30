export default function Marquee({ items, className = '', reverse = false, speed = 30 }) {
  const text = items.join(' · ') + ' · '
  const doubled = text + text

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`marquee-track${reverse ? ' marquee-track-reverse' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{doubled}</span>
        <span>{doubled}</span>
      </div>
    </div>
  )
}
