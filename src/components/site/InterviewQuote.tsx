import { Quote } from 'lucide-react'

interface Props {
  quote: string
  attribution?: string
}

export function InterviewQuote({ quote, attribution }: Props) {
  return (
    <figure className="rounded-xl border border-primary/15 bg-primary/5 p-6 md:p-7 space-y-3">
      <Quote size={22} className="text-primary/60" />
      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
        "{quote}"
      </blockquote>
      {attribution && (
        <figcaption className="text-xs text-muted-foreground uppercase tracking-wider">
          — {attribution}
        </figcaption>
      )}
    </figure>
  )
}
