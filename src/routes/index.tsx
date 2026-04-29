import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, BookOpen, Workflow, GitBranch, BarChart3 } from 'lucide-react'
import { StatCounter } from '#/components/site/StatCounter'
import { ModelSummaryCard } from '#/components/site/ModelSummaryCard'
import { models } from '#/lib/models'

export const Route = createFileRoute('/')({ component: Landing })

function Landing() {
  const validated = models.filter((m) => m.category !== 'TBD')

  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full blur-[120px] opacity-40 bg-[radial-gradient(circle,var(--color-chart-1)_0%,transparent_60%)]" />
          <div className="absolute -top-20 right-0 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-30 bg-[radial-gradient(circle,var(--color-chart-4)_0%,transparent_60%)]" />
          <div className="absolute bottom-0 left-1/3 w-[32rem] h-[32rem] rounded-full blur-[120px] opacity-25 bg-[radial-gradient(circle,var(--color-chart-2)_0%,transparent_60%)]" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-6"
          >
            CUSP Capstone · Spring 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.02] tracking-tight max-w-5xl"
          >
            Digital Adaptation
            <br />
            Finance for Urban
            <br />
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Resilience.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            A data-driven framework that translates cascading impacts of resilience infrastructure
            into <span className="text-foreground font-medium">financial valuations</span> usable
            by private investors — across infrastructure, real estate, and transportation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              to="/models"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Explore the models
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/background"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium text-sm hover:bg-muted transition-colors"
            >
              Start from the beginning
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
          >
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-8">
            The Work, At a Glance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            <StatCounter prefix="$" value={809.6} decimals={1} suffix="M+" label="Total quantified value across five validated models" />
            <StatCounter value={110000} label="Rockaway peninsula residents covered by the impact analysis" />
            <StatCounter value={7} label="Financing models integrated into the bank framework" />
            <StatCounter value={5} label="Impact categories mapped across community, economic, and financial outcomes" />
          </div>
        </div>
      </section>

      {/* ABSTRACT */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Abstract</p>
        <div className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            Climate-related disasters are increasing in both frequency and severity. Coastal cities
            like New York face recurring risks to housing, transportation, and economic activity —
            and large-scale resilience initiatives generate broader social and economic effects that
            are rarely quantified in a way that supports private investment.
          </p>
          <p className="text-foreground">
            This project delivers an impact flowchart, a series of quantification models, and a
            stakeholder analysis — together forming a toolkit that private institutions can use to
            evaluate investment in resilience infrastructure.
          </p>
        </div>
      </section>

      {/* SECTION CARDS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-8">
          Explore the project
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { to: '/background', icon: BookOpen, label: 'Background', desc: 'Why resilience finance, and what gap this work addresses.' },
            { to: '/methodology', icon: Workflow, label: 'Methodology', desc: 'Four-stage pipeline from raw data to bank-ready financial estimates.' },
            { to: '/impact-mapping', icon: GitBranch, label: 'Impact Mapping', desc: 'Interactive flowchart of cascading infrastructure effects.' },
            { to: '/models', icon: BarChart3, label: 'Models', desc: 'Seven financing models, each with its own dedicated page.' },
          ].map(({ to, icon: Icon, label, desc }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-xl border border-border bg-muted/20 p-5 hover:bg-muted/40 hover:border-primary/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <p className="text-base font-semibold text-foreground mb-1.5">{label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* MODELS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
              Models
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Five validated quantifications
            </h2>
          </div>
          <Link
            to="/models"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary hover:underline shrink-0"
          >
            See all seven <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {validated.slice(0, 3).map((m) => (
            <ModelSummaryCard key={m.slug} model={m} />
          ))}
        </div>
        <div className="sm:hidden mt-6 text-center">
          <Link to="/models" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
            See all seven models <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CREDITS BAND */}
      <section className="border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Capstone Team
            </p>
            <p className="text-base font-semibold text-foreground">Christian Humann</p>
            <p className="text-base font-semibold text-foreground">Afra Kamili</p>
            <p className="text-base font-semibold text-foreground">Ziming Xiong</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Capstone Sponsor
            </p>
            <p className="text-base font-semibold text-foreground">Ryutaro Adachi · Takuo Shioda</p>
            <p className="text-sm text-muted-foreground mt-1">NEC GX Business Development</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Faculty Mentor
            </p>
            <p className="text-base font-semibold text-foreground">Dr. Yuki Miura</p>
            <p className="text-sm text-muted-foreground mt-1">Center for Urban Science + Progress</p>
          </div>
        </div>
      </section>
    </div>
  )
}
