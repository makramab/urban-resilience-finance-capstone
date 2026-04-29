import type { ReactNode } from 'react'
import { cn } from '#/lib/utils'

interface Props {
  children: ReactNode
  className?: string
  width?: 'default' | 'wide' | 'narrow'
}

export function PageShell({ children, className, width = 'default' }: Props) {
  return (
    <div
      className={cn(
        'mx-auto px-4 md:px-6 py-10 md:py-14',
        width === 'default' && 'max-w-5xl',
        width === 'wide' && 'max-w-7xl',
        width === 'narrow' && 'max-w-3xl',
        className,
      )}
    >
      {children}
    </div>
  )
}

interface HeroProps {
  kicker?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHero({ kicker, title, subtitle, children }: HeroProps) {
  return (
    <div className="space-y-4 mb-10 md:mb-14">
      {kicker && (
        <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-widest">
          {kicker}
        </p>
      )}
      <h1 className="text-4xl md:text-6xl font-black text-foreground leading-[1.05] tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

interface SectionProps {
  id?: string
  eyebrow?: string
  heading?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, heading, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 space-y-4', className)}>
      {(eyebrow || heading) && (
        <div className="space-y-1.5">
          {eyebrow && (
            <p className="text-xs font-semibold text-primary uppercase tracking-widest">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {heading}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
