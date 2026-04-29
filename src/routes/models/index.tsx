import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageShell, PageHero } from '#/components/site/PageShell'
import { ModelSummaryCard } from '#/components/site/ModelSummaryCard'
import { models } from '#/lib/models'

export const Route = createFileRoute('/models/')({ component: ModelsIndex })

function ModelsIndex() {
  return (
    <PageShell width="wide">
      <PageHero
        kicker="Results"
        title="Seven Financing Models"
        subtitle="Each model quantifies one cascading impact of resilience infrastructure in a form that can drop directly into a bank-style investment framework. Five are validated; two are reserved for future work."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {models.map((m) => (
          <ModelSummaryCard key={m.slug} model={m} />
        ))}
      </div>

      <nav className="flex items-center justify-between pt-10 mt-14 border-t border-border">
        <Link to="/impact-mapping" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Impact Mapping
        </Link>
        <Link to="/conclusion" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
          Next — Conclusion
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </nav>
    </PageShell>
  )
}
