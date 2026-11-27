type SectionLabelProps = {
  /** Número da seção, ex.: "01". */
  num: string
  children: React.ReactNode
  /** Variante para fundo escuro (sem o ícone de trilha). */
  dark?: boolean
}

/** Rótulo de seção no estilo "01 // SOBRE MIM", com uma pequena trilha de circuito. */
export default function SectionLabel({ num, children, dark = false }: SectionLabelProps) {
  return (
    <p
      className={`m-0 flex items-center gap-2.5 font-mono text-xs font-semibold tracking-[0.16em] ${dark ? 'text-glow' : 'text-accent-text'}`}
    >
      {!dark && (
        <svg
          aria-hidden="true"
          width="30"
          height="10"
          viewBox="0 0 30 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="5" cy="5" r="3.25" />
          <path d="M8.5 5H21l3.5-3.5" />
          <circle cx="26.5" cy="1.5" r="0.4" fill="currentColor" />
        </svg>
      )}
      <span>
        <span className={dark ? 'text-bg' : 'text-ink'}>{num}</span> {'//'} {children}
      </span>
    </p>
  )
}
