import PcbDivider from './PcbDivider'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

export default function Manifesto() {
  return (
    <RevealSection
      id="manifesto"
      aria-label="Manifesto"
      className="mx-auto max-w-[1280px] px-6 pb-[clamp(76px,8.5vw,116px)]"
    >
      <PcbDivider />
      <div className="reveal flex flex-col gap-7">
        <SectionLabel num="02">MANIFESTO</SectionLabel>
        {/* Duas linhas no desktop (uma por ideia); em telas menores, quebra equilibrada */}
        <p className="m-0 font-display text-[clamp(38px,5.6vw,76px)] leading-[1.02] font-bold tracking-[-0.04em] text-balance">
          <span className="lg:block">Do primeiro rascunho ao deploy,</span>{' '}
          <span className="text-accent-text">
            eu assumo o projeto <span className="serif text-[1.1em]">inteiro.</span>
          </span>
        </p>
        <p className="m-0 flex flex-wrap gap-x-7 gap-y-2 font-mono text-sm leading-5 font-semibold tracking-[0.08em] text-ink">
          <span className="hl">DECIDO</span>
          <span className="text-accent-text" aria-hidden="true">/</span>
          <span className="hl hl2">CONSTRUO</span>
          <span className="text-accent-text" aria-hidden="true">/</span>
          <span className="hl hl3">ENTREGO</span>
        </p>
      </div>
    </RevealSection>
  )
}
