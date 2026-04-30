import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronDown, Sun, Moon, Menu, X, Building2 } from 'lucide-react'
import { cn } from '#/lib/utils'
import { useTheme } from '#/hooks/useTheme'
import { models } from '#/lib/models'

const primaryNav = [
  { to: '/background', label: 'Background' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/impact-mapping', label: 'Impact Mapping' },
]

const endNav = [
  { to: '/conclusion', label: 'Conclusion' },
  { to: '/references', label: 'References' },
]

export function Header() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 md:px-6 h-16">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
            <Building2 size={16} className="text-primary" />
          </div>
          <span className="hidden sm:inline text-sm font-semibold text-foreground tracking-tight">
            Adaptation Finance
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-expanded={open}
            >
              Models
              <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
            </button>
            {open && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-2 border-b border-border">
                  <Link
                    to="/models"
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    All models overview →
                  </Link>
                </div>
                <div className="p-2 max-h-[60vh] overflow-y-auto">
                  {models.map((m) => (
                    <Link
                      key={m.slug}
                      to="/models/$slug"
                      params={{ slug: m.slug }}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <span className="text-xs font-mono text-muted-foreground mt-0.5 w-5 shrink-0">
                        0{m.number}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground truncate">{m.short}</p>
                        <p className="text-xs text-muted-foreground truncate">{m.headline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {endNav.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggle}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/models"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted"
            >
              Models →
            </Link>
            <div className="pl-4 space-y-0.5 border-l border-border ml-3">
              {models.map((m) => (
                <Link
                  key={m.slug}
                  to="/models/$slug"
                  params={{ slug: m.slug }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-1.5 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <span className="font-mono mr-2">0{m.number}</span>
                  {m.short}
                </Link>
              ))}
            </div>
            {endNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
      activeProps={{ className: 'text-foreground bg-muted' }}
    >
      {label}
    </Link>
  )
}
