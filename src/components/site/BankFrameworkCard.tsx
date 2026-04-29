interface Props {
  what: string
  who: string
  howMuch: string
  contribution: string
  risk: string
}

export function BankFrameworkCard({ what, who, howMuch, contribution, risk }: Props) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 divide-y divide-border">
      <Row label="What" value={what} />
      <Row label="Who" value={who} />
      <Row label="How Much" value={howMuch} emphasize />
      <Row label="Contribution" value={contribution} />
      <Row label="Risk" value={risk} subtle />
    </div>
  )
}

function Row({
  label,
  value,
  emphasize,
  subtle,
}: {
  label: string
  value: string
  emphasize?: boolean
  subtle?: boolean
}) {
  return (
    <div className="grid grid-cols-[7rem_1fr] md:grid-cols-[10rem_1fr] gap-4 p-4 md:p-5">
      <p
        className={
          'text-xs md:text-sm font-semibold uppercase tracking-wider ' +
          (emphasize ? 'text-primary' : subtle ? 'text-destructive-foreground/80' : 'text-muted-foreground')
        }
      >
        {label}
      </p>
      <p className="text-sm md:text-base text-foreground leading-relaxed">{value}</p>
    </div>
  )
}
