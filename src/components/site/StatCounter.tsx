import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

interface Props {
  value: number
  prefix?: string
  suffix?: string
  label: string
  decimals?: number
  duration?: number
}

export function StatCounter({ value, prefix = '', suffix = '', label, decimals = 0, duration = 1.2 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.4 }}
      className="space-y-1"
    >
      <p className="text-3xl md:text-5xl font-black text-foreground tabular-nums tracking-tight">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-muted-foreground leading-tight">{label}</p>
    </motion.div>
  )
}
