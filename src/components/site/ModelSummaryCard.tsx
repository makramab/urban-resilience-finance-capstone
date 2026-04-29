import { Link } from '@tanstack/react-router'
import { ArrowRight, Hourglass } from 'lucide-react'
import type { ModelMeta } from '#/lib/models'

export function ModelSummaryCard({ model }: { model: ModelMeta }) {
  const placeholder = model.category === 'TBD'

  return (
    <Link
      to="/models/$slug"
      params={{ slug: model.slug }}
      className="group block rounded-xl border border-border bg-muted/20 p-6 hover:bg-muted/40 hover:border-primary/40 transition-all"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground">MODEL</span>
          <span className="text-xs font-mono font-bold text-foreground">0{model.number}</span>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-full bg-background border border-border">
          {model.category}
        </span>
      </div>

      {placeholder ? (
        <div className="flex items-center gap-3 mb-4">
          <Hourglass size={24} className="text-muted-foreground" />
          <p className="text-2xl font-bold text-muted-foreground">TBD</p>
        </div>
      ) : (
        <p className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
          {model.headline}
        </p>
      )}

      <p className="text-base font-semibold text-foreground mb-1.5">{model.short}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {model.summary}
      </p>

      <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
        <span>Read more</span>
        <ArrowRight
          size={14}
          className="group-hover:translate-x-0.5 transition-transform"
        />
      </div>
    </Link>
  )
}
