import { MessageSquare } from 'lucide-react'

interface Props {
  quote: string
  attribution?: string
}

export function InterviewQuote({ quote, attribution }: Props) {
  return (
    <figure className="rounded-xl border border-primary/15 bg-primary/5 p-6 md:p-7 space-y-3">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary/80">
        <MessageSquare size={13} />
        Paraphrased from stakeholder interview
      </div>
      <p className="text-lg md:text-xl text-foreground leading-relaxed">
        {quote}
      </p>
      {attribution && (
        <figcaption className="text-xs text-muted-foreground">
          Source: {attribution}
        </figcaption>
      )}
    </figure>
  )
}
