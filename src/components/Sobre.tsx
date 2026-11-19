import { Laptop } from 'lucide-react'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

export default function Sobre() {
  return (
    <RevealSection id="sobre" className="mx-auto max-w-[1200px] px-6 pb-[clamp(72px,13vw,176px)]">
      <div className="reveal grid items-center gap-x-14 gap-y-8 [grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))]">
        <div className="flex items-start gap-4 sm:gap-6">
          <div
            aria-hidden="true"
            className="mt-[30px] hidden h-[60px] w-[60px] flex-none items-center justify-center rounded-[18px] bg-blush min-[420px]:flex"
          >
            <Laptop size={28} strokeWidth={1.8} className="text-accent" />
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel>SOBRE MIM</SectionLabel>
            <h2 className="m-0 font-display text-[clamp(28px,3.2vw,38px)] leading-[1.15] font-bold tracking-[-0.025em]">
              Mais do que código, gosto de construir soluções que funcionam.
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-3.5 border-l-2 border-line-strong pl-5 text-[15px] sm:pl-7 sm:text-base leading-[1.7] text-body">
          <p className="m-0">
            Sou desenvolvedora Full Stack e gosto de participar de todo o processo de criação de um
            sistema: entender o problema, organizar as ideias, definir a arquitetura e desenvolver uma
            experiência simples para quem vai utilizá-lo.
          </p>
          <p className="m-0">
            Acredito que uma boa solução precisa ser funcional, segura, bem estruturada e pensada para
            evoluir.
          </p>
        </div>
      </div>
    </RevealSection>
  )
}
