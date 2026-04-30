import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ZoomIn, ZoomOut, RotateCcw, Hand, Minus, Plus } from 'lucide-react'

type Tier = 'indirect' | 'looping'
type Side = 'negative' | 'positive'
type ModelNum = 1 | 2 | 3 | 4 | 5 | 6 | 7

interface FlowNode {
  text: string
  tier: Tier
}

interface Branch {
  nodes: FlowNode[]
  model?: ModelNum
}

interface DirectBlock {
  direct: string
  branches: Branch[]
}

interface Program {
  name: string
  side: Side
  directBlocks: DirectBlock[]
}

const programs: Program[] = [
  // ============ NEGATIVE ============
  {
    name: 'Infrastructure construction',
    side: 'negative',
    directBlocks: [
      {
        direct: 'Habitat disruption',
        branches: [
          {
            nodes: [
              { text: 'Ecosystem services', tier: 'indirect' },
              { text: 'Natural storm buffering reduced', tier: 'indirect' },
              { text: 'Flood risk partially offset', tier: 'looping' },
              { text: 'Reduced project effectiveness', tier: 'looping' },
              { text: 'Lower financial feasibility', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Noise, traffic, disruption',
        branches: [
          {
            model: 5,
            nodes: [
              { text: "Local's health and activity disrupted", tier: 'indirect' },
              { text: 'Community opposition', tier: 'indirect' },
              { text: 'Project delays', tier: 'looping' },
              { text: 'Higher project costs', tier: 'looping' },
              { text: 'Lower financial feasibility', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Infrastructure',
    side: 'negative',
    directBlocks: [
      {
        direct: 'Reduced flood risk',
        branches: [
          {
            nodes: [
              { text: 'Higher property values', tier: 'indirect' },
              { text: 'Rent increased', tier: 'indirect' },
              { text: 'Displacement of low-income residents', tier: 'indirect' },
              { text: 'Community cohesion disrupted', tier: 'looping' },
              { text: 'Cultural identity eroded', tier: 'looping' },
              { text: 'Slower future recovery', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },

  // ============ POSITIVE ============
  {
    name: 'Microfinance',
    side: 'positive',
    directBlocks: [
      {
        direct: 'Small-scale resilience infrastructure',
        branches: [
          {
            nodes: [
              { text: 'Risk reduction', tier: 'indirect' },
              { text: 'Property preserved', tier: 'indirect' },
              { text: 'Tax revenue maintained', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Productive household investment',
        branches: [
          {
            nodes: [
              { text: 'Post-disaster economic recovery', tier: 'indirect' },
              { text: 'Poverty reduction', tier: 'indirect' },
              { text: 'Future financial resilience', tier: 'indirect' },
              { text: 'Increased tax base rate', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Green infrastructure',
    side: 'positive',
    directBlocks: [
      {
        direct: 'Reduced urban heat island effect',
        branches: [
          {
            nodes: [
              { text: 'Reduced urban flooding', tier: 'indirect' },
              { text: 'Less property damage', tier: 'indirect' },
              { text: 'Fewer insurance claims', tier: 'looping' },
              { text: 'Lower risk exposure', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Help stormwater management',
        branches: [
          {
            nodes: [
              { text: 'Reduced urban flooding', tier: 'indirect' },
              { text: 'Less property damage', tier: 'indirect' },
              { text: 'Fewer insurance claims', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Air quality maintained',
        branches: [
          {
            nodes: [
              { text: 'Public health improved', tier: 'indirect' },
              { text: 'Healthcare costs reduced', tier: 'indirect' },
              { text: 'Government avoided costs', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Beach nourishment',
    side: 'positive',
    directBlocks: [
      {
        direct: 'Dune / habitat restored',
        branches: [
          {
            nodes: [
              { text: 'Shorebird / marine habitat preserved', tier: 'indirect' },
              { text: 'Biodiversity increased', tier: 'indirect' },
              { text: 'Ecotourism + edutourism opportunity', tier: 'indirect' },
              { text: 'Community engagement increased', tier: 'indirect' },
              { text: 'ESG / impact narrative opportunity', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Wider beach + dune system',
        branches: [
          {
            model: 4,
            nodes: [
              { text: 'Increased recreational space', tier: 'indirect' },
              { text: 'Tourism & visitor economy', tier: 'indirect' },
              { text: 'Business revenue', tier: 'indirect' },
              { text: 'Tax revenue increased', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Nature-based infrastructure',
    side: 'positive',
    directBlocks: [
      {
        direct: 'Carbon sequestration',
        branches: [
          {
            nodes: [
              { text: 'Carbon credit revenue increased', tier: 'indirect' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Ecosystem health increased',
        branches: [
          {
            nodes: [
              { text: 'Natural storm buffering', tier: 'indirect' },
              { text: 'Reduced flood damage', tier: 'indirect' },
              { text: 'Economic growth', tier: 'indirect' },
              { text: 'Lower recovery cost', tier: 'looping' },
              { text: 'Tax revenue increased', tier: 'looping' },
              { text: 'Funding freed', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Infrastructure',
    side: 'positive',
    directBlocks: [
      {
        direct: 'Reduced flood disruption',
        branches: [
          {
            model: 6,
            nodes: [
              { text: 'Reduced displacement', tier: 'indirect' },
              { text: 'Community cohesion preserved', tier: 'indirect' },
              { text: 'Future speed recovery increased', tier: 'indirect' },
              { text: 'Lower recovery cost', tier: 'looping' },
              { text: 'Funding freed', tier: 'looping' },
            ],
          },
          {
            nodes: [
              { text: 'Risk profile decreased', tier: 'indirect' },
              { text: 'Lower cost of capital', tier: 'indirect' },
              { text: 'Private investment increased', tier: 'indirect' },
              { text: 'Economic growth', tier: 'indirect' },
              { text: 'Tax revenue increased', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Reduced flood risk',
        branches: [
          {
            model: 3,
            nodes: [
              { text: 'Property damage avoided', tier: 'indirect' },
              { text: 'Insurance claim', tier: 'indirect' },
              { text: 'Premiums', tier: 'indirect' },
              { text: 'Tax revenue maintained', tier: 'indirect' },
              { text: 'Community stability', tier: 'indirect' },
              { text: 'Tax revenue maintained', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
          {
            nodes: [
              { text: 'Property values increased', tier: 'indirect' },
              { text: 'Tax revenue increased', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
      {
        direct: 'Flood event prevented',
        branches: [
          {
            model: 2,
            nodes: [
              { text: 'Mental health burden lessen', tier: 'indirect' },
              { text: 'Workforce productivity increased', tier: 'indirect' },
              { text: 'Economic output grow', tier: 'looping' },
              { text: 'Tax revenue maintained', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
          {
            nodes: [
              { text: 'School remains open', tier: 'indirect' },
              { text: 'Educational attainment maintained', tier: 'indirect' },
              { text: 'Long-term learning potential', tier: 'indirect' },
              { text: 'Economic output grow', tier: 'looping' },
              { text: 'Tax revenue increased', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
          {
            model: 7,
            nodes: [
              { text: 'Grocery access preserved', tier: 'indirect' },
              { text: 'Food supply stability', tier: 'indirect' },
              { text: 'Food price stability', tier: 'indirect' },
              { text: 'Household affordability', tier: 'indirect' },
              { text: 'Community stability', tier: 'looping' },
              { text: 'Tax revenue maintained', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
          {
            nodes: [
              { text: 'Pharmacy access preserved', tier: 'indirect' },
              { text: 'Medication continuity', tier: 'indirect' },
              { text: 'Health outcomes maintained', tier: 'indirect' },
              { text: 'Reduced healthcare burden', tier: 'indirect' },
              { text: 'Gov. avoided cost', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
          {
            model: 1,
            nodes: [
              { text: 'Transit access preserved', tier: 'indirect' },
              { text: 'Commuter access maintained', tier: 'indirect' },
              { text: 'Economic continuity', tier: 'indirect' },
              { text: 'Tax revenue maintained', tier: 'looping' },
              { text: 'Funding capacity increased', tier: 'looping' },
            ],
          },
        ],
      },
    ],
  },
]

const tierStyles: Record<Tier, string> = {
  indirect: 'bg-orange-700/30 border-orange-700/50 text-orange-50',
  looping: 'bg-orange-500/25 border-orange-500/50 text-orange-50',
}

const sideStyles: Record<Side, { wrapper: string; pill: string }> = {
  negative: {
    wrapper: 'bg-rose-950/20 border-rose-900/40',
    pill: 'bg-rose-500/20 text-rose-200 border-rose-500/40',
  },
  positive: {
    wrapper: 'bg-emerald-950/15 border-emerald-900/30',
    pill: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/40',
  },
}

const modelSlug: Record<ModelNum, string> = {
  1: 'roadway-flooding',
  2: 'mental-health',
  3: 'housing',
  4: 'beach-area',
  5: 'construction-noise',
  6: 'affordable-housing',
  7: 'grocery-access',
}

interface Props {
  height?: string
  initialScale?: number
}

export function ImpactFlowchart({ height = '70vh', initialScale = 0.45 }: Props) {
  const [scale, setScale] = useState(initialScale)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const dragState = useRef<{ x: number; y: number; startX: number; startY: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const onPointerDown = (e: React.PointerEvent) => {
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    dragState.current = { x: pos.x, y: pos.y, startX: e.clientX, startY: e.clientY }
    setIsDragging(true)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragState.current) return
    const dx = e.clientX - dragState.current.startX
    const dy = e.clientY - dragState.current.startY
    setPos({ x: dragState.current.x + dx, y: dragState.current.y + dy })
  }
  const onPointerUp = () => {
    dragState.current = null
    setIsDragging(false)
  }

  const reset = () => {
    setScale(initialScale)
    setPos({ x: 0, y: 0 })
  }
  const zoomIn = () => setScale((s) => Math.min(s + 0.15, 1.8))
  const zoomOut = () => setScale((s) => Math.max(s - 0.15, 0.25))

  const negativePrograms = programs.filter((p) => p.side === 'negative')
  const positivePrograms = programs.filter((p) => p.side === 'positive')

  return (
    <div
      className="relative rounded-xl border border-border bg-muted/10 overflow-hidden"
      style={{ height }}
    >
      <div className="absolute top-3 right-3 z-20 flex gap-1 bg-background/80 backdrop-blur-sm rounded-lg border border-border p-1">
        <button onClick={zoomIn} className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted" aria-label="Zoom in">
          <ZoomIn size={16} />
        </button>
        <button onClick={zoomOut} className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted" aria-label="Zoom out">
          <ZoomOut size={16} />
        </button>
        <button onClick={reset} className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted" aria-label="Reset view">
          <RotateCcw size={16} />
        </button>
      </div>

      <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg border border-border px-3 py-1.5 text-xs">
        <Hand size={12} className="text-muted-foreground" />
        <span className="text-muted-foreground">Drag to pan</span>
        <span className="text-border">|</span>
        <LegendDot className="bg-green-700" label="Project" />
        <LegendDot className="bg-emerald-400" label="Direct" />
        <LegendDot className="bg-orange-700" label="Indirect" />
        <LegendDot className="bg-orange-500" label="Looping" />
      </div>

      <div
        className={`w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="origin-top-left transition-transform duration-100 will-change-transform"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})` }}
        >
          <div className="flex gap-6 p-8 pt-16 min-w-max items-start">
            <SideGroup side="negative" programs={negativePrograms} />
            <SideGroup side="positive" programs={positivePrograms} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SideGroup({ side, programs }: { side: Side; programs: Program[] }) {
  const s = sideStyles[side]
  const Icon = side === 'negative' ? Minus : Plus
  const label = side === 'negative' ? 'Negative Impact' : 'Positive Impact'
  return (
    <div className={`relative rounded-2xl border-2 ${s.wrapper} p-5 pt-7`}>
      <div
        className={`absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm ${s.pill}`}
      >
        <Icon size={12} />
        {label}
      </div>
      <div className="flex gap-5 items-start">
        {programs.map((prog, i) => (
          <ProgramBlock key={`${prog.name}-${i}`} program={prog} />
        ))}
      </div>
    </div>
  )
}

function ProgramBlock({ program }: { program: Program }) {
  return (
    <div className="space-y-2 flex flex-col items-stretch">
      <div className="rounded-lg border-2 border-green-700/50 bg-green-700/40 px-3 py-2.5 text-center font-semibold text-sm text-green-50">
        {program.name}
      </div>
      <div className="flex justify-center">
        <div className="w-px h-3 bg-green-700/60" />
      </div>
      <div className="flex gap-3 items-start">
        {program.directBlocks.map((db, i) => (
          <DirectBlockView key={`${db.direct}-${i}`} block={db} />
        ))}
      </div>
    </div>
  )
}

function DirectBlockView({ block }: { block: DirectBlock }) {
  return (
    <div className="space-y-2 flex flex-col items-stretch">
      <div className="rounded-md border-2 border-emerald-400/60 bg-emerald-400/25 px-2.5 py-2 text-xs font-semibold text-emerald-50 leading-snug text-center">
        {block.direct}
      </div>
      <div className="flex justify-center">
        <div className="w-px h-2 bg-emerald-400/60" />
      </div>
      <div className="flex gap-2 items-start">
        {block.branches.map((b, i) => (
          <BranchColumn key={i} branch={b} />
        ))}
      </div>
    </div>
  )
}

function BranchColumn({ branch }: { branch: Branch }) {
  return (
    <div className="w-40 shrink-0 relative">
      <div className="space-y-2">
        {branch.nodes.map((node, idx) => {
          const t = tierStyles[node.tier]
          const isLast = idx === branch.nodes.length - 1
          return (
            <div key={`${node.text}-${idx}`}>
              <div className={`rounded-md border px-2.5 py-1.5 text-[11px] leading-snug text-center ${t}`}>
                {node.text}
              </div>
              {!isLast && (
                <div className="flex justify-center">
                  <div className="w-px h-2 bg-orange-500/40" />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {branch.model && (
        <div className="absolute -inset-1.5 rounded-lg border-2 border-dashed border-primary/60 pointer-events-none" />
      )}
      {branch.model && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
          <ModelBadge n={branch.model} />
        </div>
      )}
    </div>
  )
}

function ModelBadge({ n }: { n: ModelNum }) {
  return (
    <Link
      to="/models/$slug"
      params={{ slug: modelSlug[n] }}
      className="inline-flex items-center rounded-full border border-primary/60 bg-background px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary hover:bg-primary/20 shadow-sm"
    >
      Model {n}
    </Link>
  )
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`w-2 h-2 rounded-full ${className}`} />
      <span className="text-muted-foreground">{label}</span>
    </span>
  )
}
