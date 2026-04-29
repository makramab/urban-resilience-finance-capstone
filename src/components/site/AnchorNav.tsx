import { useEffect, useState } from 'react'
import { cn } from '#/lib/utils'

interface Section {
  id: string
  label: string
}

interface Props {
  sections: Section[]
}

export function AnchorNav({ sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 },
    )

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="hidden lg:block sticky top-24 self-start w-56 shrink-0">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3 px-3">
        On this page
      </p>
      <ul className="space-y-0.5 border-l border-border">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={cn(
                'block px-3 py-1.5 text-sm border-l -ml-px transition-colors',
                active === s.id
                  ? 'border-primary text-foreground font-medium'
                  : 'border-transparent text-muted-foreground hover:text-foreground',
              )}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
