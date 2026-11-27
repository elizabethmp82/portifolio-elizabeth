'use client'
import { useState } from 'react'
import { RINGS } from './rings'

// Sistema de coordenadas da ilustração e centro das órbitas (atrás da foto)
const W = 1159
const H = 1357
const CX = 436
const CY = 708
const RING_R = 326
const ART_URL = '/hero/organic-logic.svg'

type Spot = { x: number; y: number; on: boolean; rot: number }

function Rings({ white = false }: { white?: boolean }) {
  return RINGS.map((g, i) => (
    <g
      key={i}
      className={`olq-z ${g.o ? 'olq-zo' : 'olq-zi'}`}
      style={{ '--w': g.w } as React.CSSProperties}
      filter={white ? 'url(#olq-white)' : undefined}
    >
      {g.p.map(([fill, d], j) => (
        <path key={j} fill={fill} fillRule="evenodd" d={d} />
      ))}
    </g>
  ))
}

/**
 * Ilustração "Organic Logic": flores e circuitos integrados às órbitas da foto.
 * - Um sinal de luz percorre a arte de baixo para cima a cada 20 s.
 * - Com o ponteiro, as órbitas giram e uma luz acompanha o cursor.
 * - Clique ou Enter disparam uma transmissão imediata.
 */
export default function OrganicLogicHero() {
  const [spot, setSpot] = useState<Spot>({ x: 0, y: 0, on: false, rot: 0 })
  const [tx, setTx] = useState<'' | 'tx-a' | 'tx-b'>('')

  const transmit = () => setTx((t) => (t === 'tx-a' ? 'tx-b' : 'tx-a'))

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    if (!r.width || !r.height) return
    // viewBox com preserveAspectRatio xMidYMid meet
    const k = Math.min(r.width / W, r.height / H)
    const ox = r.left + (r.width - W * k) / 2
    const oy = r.top + (r.height - H * k) / 2
    let x = (e.clientX - ox) / k
    let y = (e.clientY - oy) / k
    // As órbitas giram em direção ao cursor (até 9°; a externa no sentido oposto)
    const rot = Math.max(-1, Math.min(1, (CY - y) / 420)) * 9
    // Sobre a foto, a luz corre pelo anel, na direção do cursor
    const dx = x - CX
    const dy = y - CY
    const d = Math.hypot(dx, dy)
    if (d < RING_R) {
      const a = d > 0.5 ? Math.atan2(dy, dx) : -Math.PI / 2
      x = CX + Math.cos(a) * RING_R
      y = CY + Math.sin(a) * RING_R
    }
    setSpot({ x, y, on: true, rot: Math.round(rot * 10) / 10 })
  }

  const onAnimationEnd = (e: React.AnimationEvent) => {
    if (e.animationName.startsWith('olq-tx')) setTx('')
  }

  const light = (
    <>
      <rect className="olq-signal" x="0" y="0" width={W} height="180" fill="url(#olq-band)" />
      <circle
        className="olq-hover"
        r="150"
        fill="url(#olq-spot)"
        cx={spot.x.toFixed(1)}
        cy={spot.y.toFixed(1)}
        opacity={spot.on ? 1 : 0}
      />
    </>
  )

  return (
    <div
      className="olq-hit relative"
      role="button"
      tabIndex={0}
      aria-label="Ilustração de flores e circuitos integrados às órbitas. Pressione Enter ou clique para transmitir dados."
      onPointerMove={onPointerMove}
      onPointerLeave={() => setSpot((s) => ({ ...s, on: false, rot: 0 }))}
      onClick={transmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          transmit()
        }
      }}
      onAnimationEnd={onAnimationEnd}
    >
      {/* Arte fixa (flores e circuitos) + luz recortada no formato dela */}
      <svg className={`olq ${tx}`} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
        <defs>
          <filter id="olq-white">
            <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
          </filter>
          <mask id="olq-ink">
            <image href={ART_URL} width={W} height={H} filter="url(#olq-white)" />
          </mask>
          <radialGradient id="olq-spot">
            <stop stopColor="#ef8b62" />
            <stop offset="1" stopColor="#ef8b62" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="olq-band" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#f2a17c" stopOpacity="0" />
            <stop offset=".5" stopColor="#ed7950" />
            <stop offset="1" stopColor="#f2a17c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <image href={ART_URL} width={W} height={H} />
        <g mask="url(#olq-ink)">{light}</g>
      </svg>

      {/* Órbitas: giram com o ponteiro e também recebem a luz */}
      <svg
        className={`olq olq-ov ${tx}`}
        style={{ '--rin': `${spot.rot}deg`, '--rout': `${-spot.rot * 0.6}deg` } as React.CSSProperties}
        viewBox={`0 0 ${W} ${H}`}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <mask id="olq-zink">
            <Rings white />
          </mask>
        </defs>
        <Rings />
        <g mask="url(#olq-zink)">{light}</g>
      </svg>
    </div>
  )
}
