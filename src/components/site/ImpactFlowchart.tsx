import { useRef, useState } from 'react'
import { ZoomIn, ZoomOut, RotateCcw, Hand } from 'lucide-react'

const categories = [
  {
    name: 'Infrastructure Construction',
    tone: 'negative',
    nodes: [
      'Habitat disruption',
      'Ecosystem services impact',
      'Natural noise buffering reduced',
      'Flood risk partially offset',
      'Reduced project effectiveness',
      'Lower financial feasibility',
    ],
  },
  {
    name: 'Infrastructure',
    tone: 'mixed',
    nodes: [
      'Noise & traffic disruption',
      'Higher property values',
      'Rent increases',
      'Displacement of low-income residents',
      'Community cohesion disrupted',
      'Increased financing flexibility',
    ],
  },
  {
    name: 'Microfinance',
    tone: 'positive',
    nodes: [
      'Small-scale resilience infra.',
      'Post-disaster economic recovery',
      'Poverty reduction',
      'Healthcare access',
      'Tax revenue maintained',
      'Funding capacity increased',
    ],
  },
  {
    name: 'Green Infrastructure',
    tone: 'positive',
    nodes: [
      'Urban heat island reduced',
      'Stormwater management',
      'Air quality improved',
      'Biodiversity increased',
      'Lower healthcare costs',
      'ESG impact reporting',
    ],
  },
  {
    name: 'Beach Nourishment',
    tone: 'positive',
    nodes: [
      'Dune habitat restored',
      'Wider beach & dune system',
      'Increased recreational space',
      'Tourism & visitor recovery',
      'Business revenue',
      'Economic growth',
    ],
  },
  {
    name: 'Nature-Based Solutions',
    tone: 'positive',
    nodes: [
      'Carbon sequestration',
      'Ecosystem health preserved',
      'Risk profile decreased',
      'Property damage avoided',
      'Private investment attracted',
      'Community stability',
    ],
  },
  {
    name: 'Infrastructure Outcomes',
    tone: 'positive',
    nodes: [
      'Flood event prevented',
      'Property values preserved',
      'Mental health burden lower',
      'School closures avoided',
      'Transit continuity',
      'Funding capacity increased',
    ],
  },
]

const toneStyles: Record<string, { header: string; card: string; accent: string }> = {
  negative: {
    header: 'bg-red-500/10 border-red-500/30 text-red-400',
    card: 'bg-red-500/5 border-red-500/20',
    accent: 'bg-red-500',
  },
  mixed: {
    header: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    card: 'bg-amber-500/5 border-amber-500/20',
    accent: 'bg-amber-500',
  },
  positive: {
    header: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    card: 'bg-emerald-500/5 border-emerald-500/20',
    accent: 'bg-emerald-500',
  },
}

interface Props {
  height?: string
  initialScale?: number
}

export function ImpactFlowchart({ height = '70vh', initialScale = 0.7 }: Props) {
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
  const zoomOut = () => setScale((s) => Math.max(s - 0.15, 0.35))

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
        <LegendDot className="bg-red-500" label="Negative" />
        <LegendDot className="bg-amber-500" label="Mixed" />
        <LegendDot className="bg-emerald-500" label="Positive" />
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
          <div className="flex gap-4 p-8 min-w-max">
            {categories.map((cat) => {
              const t = toneStyles[cat.tone]
              return (
                <div key={cat.name} className="w-56 shrink-0 space-y-2">
                  <div className={`rounded-lg border-2 px-3 py-2.5 text-center font-semibold text-sm ${t.header}`}>
                    {cat.name}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`w-px h-4 ${t.accent}`} />
                  </div>
                  <div className="space-y-2">
                    {cat.nodes.map((node, idx) => (
                      <div key={node} className="relative">
                        <div className={`rounded-md border px-3 py-2 text-xs text-foreground ${t.card}`}>
                          {node}
                        </div>
                        {idx < cat.nodes.length - 1 && (
                          <div className="flex justify-center">
                            <div className={`w-px h-2 ${t.accent} opacity-40`} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center">
                    <div className={`w-px h-4 ${t.accent}`} />
                  </div>
                  <div className={`rounded-md border-2 border-dashed px-3 py-2 text-center text-xs font-medium text-foreground ${t.card}`}>
                    {cat.tone === 'negative' ? 'Funding capacity reduced' : 'Funding capacity increased'}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
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
