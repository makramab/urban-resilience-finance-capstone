import { Hourglass } from 'lucide-react'
import { Section } from '#/components/site/PageShell'

export function PlaceholderContent() {
  const sections = [
    { id: 'framework', label: 'Bank framework' },
    { id: 'why', label: 'Why this matters' },
    { id: 'how', label: 'How we calculated it' },
    { id: 'visualization', label: 'Visualization' },
    { id: 'assumptions', label: 'Key assumptions' },
    { id: 'limitations', label: 'Sensitivity & limitations' },
    { id: 'interview', label: 'From the field' },
    { id: 'references', label: 'References' },
  ]

  return (
    <>
      {sections.map(({ id, label }) => (
        <Section key={id} id={id} heading={label}>
          <div className="rounded-xl border border-dashed border-border bg-muted/10 p-6 flex items-center gap-4">
            <Hourglass size={20} className="text-muted-foreground shrink-0" />
            <p className="text-sm text-muted-foreground">
              Content to be defined. This model is reserved for future work and will be fleshed out
              alongside the other five.
            </p>
          </div>
        </Section>
      ))}
    </>
  )
}
