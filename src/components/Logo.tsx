type LogoProps = {
  className?: string
  /** Anima a barra "/" (entrada + giro no hover). */
  animated?: boolean
  /** Variante para fundo escuro. */
  dark?: boolean
}

/** Marca <em/>: tag HTML de ênfase + iniciais de Elizabeth Melo. */
export default function Logo({ className = '', animated = false, dark = false }: LogoProps) {
  const accent = dark ? 'text-glow' : 'text-accent-text'
  return (
    <span
      aria-hidden="true"
      className={`logo font-mono font-bold tracking-[-1px] ${dark ? 'text-bg' : 'text-ink'} ${className}`}
    >
      <span className={accent}>&lt;</span>em
      <span className={`${accent} ${animated ? 'slash' : ''}`}>/</span>
      <span className={accent}>&gt;</span>
    </span>
  )
}
