import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts'
import { Section } from '#/components/site/PageShell'
import { BankFrameworkCard } from '#/components/site/BankFrameworkCard'
import { InterviewQuote } from '#/components/site/InterviewQuote'

const chartData = [
  { zone: 'Astoria (control)', change: -37, fill: 'var(--color-chart-2)' },
  { zone: 'Bay Ridge (control)', change: 21, fill: 'var(--color-chart-4)' },
  { zone: 'Rockaway (project)', change: 57, fill: 'var(--color-chart-1)' },
]

export function ConstructionNoiseContent() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <Section id="framework" eyebrow="The card" heading="Bank framework">
        <BankFrameworkCard
          what="Health burden from construction noise that the project must address."
          who="44,000 residents in postal zones closest to the work sites over 6 years."
          howMuch="$17.1M central estimate from federal noise data and WHO health response curves."
          contribution="The project creates the noise and controls every lever for reducing it."
          risk="Complaint data confirms a noise spike but cannot isolate construction equipment as the source."
        />
      </Section>

      <Section id="why" eyebrow="Context" heading="Why this matters">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Unlike the other models, this one quantifies a <span className="text-foreground font-medium">cost the project imposes</span>,
            not a benefit it delivers. A 6-year construction schedule in a dense residential area
            produces measurable effects on sleep, cardiovascular stress, and cognitive load — all of
            which the WHO's environmental-noise guidelines translate into health-cost ranges.
          </p>
          <p>
            Including this alongside the benefit-side models keeps the investment framing honest
            and helps surface mitigation choices: equipment selection, schedule compression,
            acoustic barriers, and community compensation programs all become investable line items
            rather than vague goodwill spend.
          </p>
        </div>
      </Section>

      <Section id="how" eyebrow="Method" heading="How we calculated it">
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The headline is a central estimate of community health burden from sustained
            construction noise, drawing on federal noise data and WHO health-response curves
            applied to 44,000 residents in the postal zones closest to the work sites over the
            6-year construction window.
          </p>
          <p>
            Because the project both creates the exposure and controls every lever for reducing
            it, the cost is presented as a project-internal line rather than an external benefit.
          </p>
        </div>
      </Section>

      <Section id="visualization" eyebrow="Chart" heading="Noise complaints vs comparable neighborhoods">
        <div className="rounded-xl border border-border bg-muted/20 p-4 md:p-6">
          <div className="w-full h-72">
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 24, right: 20, left: 0, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis
                    dataKey="zone"
                    stroke="var(--color-muted-foreground)"
                    tick={{ fontSize: 11 }}
                    interval={0}
                  />
                  <YAxis
                    stroke="var(--color-muted-foreground)"
                    tick={{ fontSize: 11 }}
                    label={{ value: 'Change in complaints (%)', angle: -90, position: 'insideLeft', fill: 'var(--color-muted-foreground)', fontSize: 11 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-popover)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 8,
                      color: 'var(--color-popover-foreground)',
                    }}
                    formatter={(v) => {
                      const n = Number(v)
                      return [`${n > 0 ? '+' : ''}${n}%`, 'Change']
                    }}
                  />
                  <Bar dataKey="change" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} />
                    ))}
                    <LabelList
                      dataKey="change"
                      position="top"
                      fill="var(--color-foreground)"
                      fontSize={13}
                      fontWeight="bold"
                      formatter={(v) => {
                        const n = Number(v)
                        return `${n > 0 ? '+' : ''}${n}%`
                      }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : null}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            NYC 311 noise complaints, 2020–2025, change from pre-construction baseline
          </p>
        </div>
      </Section>

      <Section id="assumptions" eyebrow="Inputs" heading="Key assumptions">
        <ul className="space-y-2 text-base text-muted-foreground">
          <AssumptionRow title="WHO curves apply locally">
            Dose-response curves derived from European and global data are assumed to apply to this population; local cohort data would refine the estimate.
          </AssumptionRow>
          <AssumptionRow title="Complaint data as exposure proxy">
            311 complaints capture perceived noise but are influenced by reporting behavior, not only equipment output.
          </AssumptionRow>
          <AssumptionRow title="6-year construction window">
            Any schedule changes (compression, extension) scale the cost proportionally.
          </AssumptionRow>
        </ul>
      </Section>

      <Section id="limitations" eyebrow="Risk" heading="Sensitivity & limitations">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 md:p-6 space-y-3">
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            The strongest limitation is attribution: the observed noise-complaint spike in Rockaway
            during construction years is real, but we cannot isolate equipment from other
            contributors (traffic reroutes, increased activity).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            On-site acoustic monitoring during a representative week would close most of this gap
            and is the single most valuable follow-up measurement for this model.
          </p>
        </div>
      </Section>

      <Section id="interview" eyebrow="Voices" heading="From the field">
        <InterviewQuote
          quote="The Rockaway development project has significantly disturbed nearby residents' daily activities due to noise and polluted air during construction."
          attribution="Peninsula resident, stakeholder interview"
        />
      </Section>

    </>
  )
}

function AssumptionRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2.5" />
      <div>
        <span className="text-foreground font-medium">{title}. </span>
        <span className="text-muted-foreground">{children}</span>
      </div>
    </li>
  )
}
