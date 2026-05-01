import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Shield, TrendingUp, Layers, Cloud, CloudRain, Waves, AlertTriangle } from 'lucide-react'
import { PageShell, PageHero, Section } from '#/components/site/PageShell'

export const Route = createFileRoute('/investment-considerations')({ component: InvestmentConsiderations })

function InvestmentConsiderations() {
  return (
    <PageShell>
      <PageHero
        kicker="Investment Considerations"
        title="From Models to Instruments"
        subtitle="How the project's quantified resilience benefits connect to financial instruments — bonds and KPI-linked loans — that institutional investors can deploy."
      />

      <div className="space-y-16">
        {/* === Section 1: Triple Dividend === */}
        <Section eyebrow="Framework" heading="The Triple Dividend of Resilience">
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Investing in resilience reduces losses and damages in the case of a disaster, but
              it can also yield development benefits regardless of disasters. Standard{' '}
              <span className="text-foreground">disaster risk management (DRM)</span> investment
              appraisals typically fail to account for the 2nd and 3rd dividends.
            </p>
            <p className="text-xs uppercase tracking-wider">
              Source: Tanner et al. (2015), Figure 2 (p. 15).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <DividendCard
              icon={<Shield size={18} />}
              ordinal="1st Dividend"
              label="Avoided losses"
              timing="When disaster strikes"
              bullets={[
                'Saving lives and reducing people affected',
                'Reducing damages to infrastructure and other assets',
                'Reducing losses to economic flows',
              ]}
            />
            <DividendCard
              icon={<TrendingUp size={18} />}
              ordinal="2nd Dividend"
              label="Unlocking economic potential"
              timing="Regardless of disasters"
              bullets={[
                'Business and capital investment',
                'Household and agricultural productivity',
                'Land value from protective infrastructure',
                'Fiscal stability and access to credit',
              ]}
            />
            <DividendCard
              icon={<Layers size={18} />}
              ordinal="3rd Dividend"
              label="Development co-benefits"
              timing="Regardless of disasters"
              bullets={[
                'Eco-system services',
                'Transportation uses',
                'Agricultural productivity gains',
              ]}
            />
          </div>

          <div className="mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 flex gap-3">
            <AlertTriangle size={18} className="text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Downside.</span>{' '}
              Costs and potential adverse effects of DRM measures must also be assessed alongside
              the three dividends.
            </p>
          </div>
        </Section>

        {/* === Section 2: SMART Tunnel === */}
        <Section eyebrow="Worked example" heading="SMART Tunnel — multi-use infrastructure">
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              The SMART Tunnel in Malaysia is a real-world illustration of the 3rd dividend:
              one piece of infrastructure that serves vehicle traffic in normal conditions and
              converts to a stormwater bypass during major rainfall events.
            </p>
            <p className="text-xs uppercase tracking-wider">
              Source: Tanner et al. (2015), Figure 5 (p. 29).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <ModeCard
              icon={<Cloud size={18} />}
              label="No storm, low rainfall"
              desc="Vehicle traffic uses the tunnel; the holding pond and storage reservoir remain available for any incoming flow."
            />
            <ModeCard
              icon={<CloudRain size={18} />}
              label="Moderate storm"
              desc="The tunnel handles partial water flow alongside reduced vehicle traffic."
            />
            <ModeCard
              icon={<Waves size={18} />}
              label="Major storm"
              desc="The tunnel converts to a full water bypass; vehicles are diverted around it."
            />
          </div>
        </Section>

        {/* === Section 3: Resilience Bond === */}
        <Section eyebrow="Instrument 1" heading="Resilience Bond Assessment">
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              A workflow for valuing a resilience bond grounded in Rockaway-specific property
              exposure and the proposed project's effect on flood risk.
            </p>
          </div>

          <ol className="mt-8 space-y-3 max-w-3xl">
            <Step n={1}>Collect GIS property value data (e.g. NYC PLUTO data).</Step>
            <Step n={2}>Collect GIS flooding data (e.g. NYC stormwater flood maps).</Step>
            <Step n={3}>Clean data and focus on the Rockaway area.</Step>
            <Step n={4}>Find properties at risk under selected flood conditions.</Step>
            <Step n={5}>Calculate potential losses under the do-nothing scenario, weighted by probability of flooding events.</Step>
            <Step n={6}>Incorporate potential infrastructure into GIS (existing data files, or translate from plans).</Step>
            <Step n={7}>Determine the impact of infrastructure on physical flooding risks.</Step>
            <Step n={8}>Calculate loss avoidances under the infrastructure scenario, weighted by probability of flooding events.</Step>
            <Step n={9}>Combine with possible interest rates, payout triggers and proportions; assess resulting bond values.</Step>
          </ol>

          <div className="mt-8 rounded-xl border border-border bg-muted/20 p-5 md:p-6 overflow-x-auto">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Bond valuation formula
            </p>
            <pre className="font-mono text-[11px] md:text-xs text-foreground leading-relaxed whitespace-pre">
{`V_t(R_t, S, D) =

  B_CIR(t, T) · { ρF · P_L_4m    S ∈ (μ_3, μ_4],  L_4m − ãL_4m [> D]    (bond triggered)
                  F  · P_L_4m    S ∈ (μ_3, μ_4],  L_4m − ãL_4m [≤ D]    (otherwise)

  B_CIR(t, T) · { ρF · P_L_5m    S ∈ (μ_4, μ_5],  L_5m − ãL_5m [> D]    (bond triggered)
                  F  · P_L_5m    S ∈ (μ_4, μ_5],  L_5m − ãL_5m [≤ D]    (otherwise)

  B_CIR(t, T) · { ρF · P_L_6m    S ∈ (μ_5, μ_6],  L_6m − ãL_6m [> D]    (bond triggered)
                  F  · P_L_6m    S ∈ (μ_5, μ_6],  L_6m − ãL_6m [≤ D]    (otherwise)`}
            </pre>
            <p className="text-xs text-muted-foreground mt-3">
              Source: Song et al. (2024), p. 901.
            </p>
          </div>
        </Section>

        {/* === Section 4: KPI-Linked Loan === */}
        <Section eyebrow="Instrument 2" heading="KPI-Linked Loan">
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Based on the UN Adaptation and Resilience Investors Collaborative (ARIC) Investors
              Resilience Challenge.
            </p>
          </div>

          <ul className="mt-8 space-y-4 max-w-3xl">
            <FeatureRow label="Establish resilience KPIs">
              Using metrics derived from our models — or expanded versions — can provide
              confidence in targets.
            </FeatureRow>
            <FeatureRow label="Link payout structure to KPIs" />
            <FeatureRow label="Standard assessment of counterparty finances combined with KPI expectations when valuing the contract" />
            <FeatureRow label="Customizability and close relationship with counterparty" />
          </ul>
        </Section>

        {/* === Section 5: Rockaway Beach Example === */}
        <Section eyebrow="Application" heading="Rockaway Beach example">
          <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
              Persistent beach tourism and resident quality of life support the local economy
              and the borrower's ability to maintain payments.
            </p>
          </div>

          <h3 className="text-base font-semibold text-foreground uppercase tracking-wider mt-8 mb-3">
            Proposed KPIs
          </h3>
          <ul className="space-y-3 max-w-3xl">
            <KPIRow label="Beach area milestones">
              Ensure environmental targets.
            </KPIRow>
            <KPIRow label="Tracked beach revenue">
              Incentive to engage with community and tourists to increase traffic.
            </KPIRow>
            <KPIRow label="Noise complaints or noise sensors">
              Limit negative impacts on community.
            </KPIRow>
          </ul>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            The supporting charts for these KPIs already live on the dedicated model pages —
            see{' '}
            <Link
              to="/models/$slug"
              params={{ slug: 'beach-area' }}
              className="text-primary hover:underline"
            >
              Beach Area Loss Prevented
            </Link>
            {' '}for the intervention-scenario chart and{' '}
            <Link
              to="/models/$slug"
              params={{ slug: 'construction-noise' }}
              className="text-primary hover:underline"
            >
              Construction Noise Mitigation Cost
            </Link>
            {' '}for the noise-complaint comparison.
          </p>
        </Section>

        <nav className="flex items-center justify-between pt-6 border-t border-border">
          <Link to="/models" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Models
          </Link>
          <Link to="/conclusion" className="group inline-flex items-center gap-2 text-sm text-primary hover:underline">
            Next — Conclusion
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </nav>
      </div>
    </PageShell>
  )
}

function DividendCard({
  icon,
  ordinal,
  label,
  timing,
  bullets,
}: {
  icon: React.ReactNode
  ordinal: string
  label: string
  timing: string
  bullets: string[]
}) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-3">
      <div className="flex items-center gap-2 text-primary">
        {icon}
        <p className="text-xs font-semibold uppercase tracking-wider">{ordinal}</p>
      </div>
      <p className="text-base md:text-lg font-semibold text-foreground leading-snug">{label}</p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{timing}</p>
      <ul className="space-y-1.5 pt-1">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ModeCard({
  icon,
  label,
  desc,
}: {
  icon: React.ReactNode
  label: string
  desc: string
}) {
  return (
    <div className="rounded-xl border border-border bg-muted/20 p-5 space-y-2.5">
      <div className="flex items-center gap-2 text-foreground">
        {icon}
        <p className="text-sm font-semibold">{label}</p>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-start">
      <span className="shrink-0 w-7 h-7 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
        {n}
      </span>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-1">{children}</p>
    </li>
  )
}

function FeatureRow({ label, children }: { label: string; children?: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
      <div>
        <p className="text-base text-foreground">{label}.</p>
        {children && (
          <p className="text-sm text-muted-foreground leading-relaxed mt-1">{children}</p>
        )}
      </div>
    </li>
  )
}

function KPIRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="rounded-lg border border-border bg-muted/20 p-4">
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{children}</p>
    </li>
  )
}
