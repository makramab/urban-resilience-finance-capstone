import { Link } from '@tanstack/react-router'
import { models } from '#/lib/models'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-3">
          <p className="text-sm font-semibold text-foreground">Digital Adaptation Finance for Urban Resilience</p>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
            A data-driven framework integrating infrastructure, real estate, and transportation —
            translating cascading resilience impacts into financial valuations usable by private investors.
          </p>
          <p className="text-xs text-muted-foreground">
            NYU Tandon · Center for Urban Science + Progress · Spring 2026
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Project</p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li><Link to="/background" className="hover:text-foreground">Background</Link></li>
            <li><Link to="/methodology" className="hover:text-foreground">Methodology</Link></li>
            <li><Link to="/impact-mapping" className="hover:text-foreground">Impact Mapping</Link></li>
            <li><Link to="/conclusion" className="hover:text-foreground">Conclusion</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Models</p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {models.map((m) => (
              <li key={m.slug}>
                <Link
                  to="/models/$slug"
                  params={{ slug: m.slug }}
                  className="hover:text-foreground"
                >
                  {m.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">Team:</span> Christian Humann · Afra Kamili · Ziming Xiong
          </p>
          <p>
            <span className="text-foreground font-medium">Sponsor:</span> NEC GX Business Development ·
            <span className="text-foreground font-medium ml-2">Mentor:</span> Dr. Yuki Miura
          </p>
        </div>
      </div>
    </footer>
  )
}
