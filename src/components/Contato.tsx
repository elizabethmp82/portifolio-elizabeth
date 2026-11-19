import { ArrowUpRight, Mail } from 'lucide-react'
import Logo from './Logo'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

const EMAIL = 'meloelizabethp@gmail.com'

export default function Contato() {
  return (
    <RevealSection id="contato" className="mx-auto max-w-[1248px] px-4 pb-12 sm:px-6 sm:pb-16">
      <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-[28px] bg-ink p-[clamp(24px,5vw,48px)] sm:rounded-[32px] text-cream">
        <div className="flex min-w-0 flex-[1_1_520px] flex-wrap items-center gap-6 sm:gap-7">
          <div
            aria-hidden="true"
            className="flex h-16 w-16 flex-none items-center justify-center rounded-[20px] bg-plum sm:h-[84px] sm:w-[84px] sm:rounded-3xl"
          >
            <Logo dark className="text-lg sm:text-[22px]" />
          </div>
          <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-2.5 sm:border-l sm:border-[#4A3B48] sm:pl-7">
            <SectionLabel dark>VAMOS CONVERSAR?</SectionLabel>
            <h2 className="m-0 font-display text-[clamp(24px,2.6vw,32px)] leading-[1.2] font-bold tracking-[-0.02em]">
              Tem uma ideia ou uma oportunidade em mente?
            </h2>
            <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-[#D6C9CF]">
              Seja para desenvolver um projeto, colaborar com uma equipe ou trocar ideias sobre
              tecnologia, vou gostar de conversar.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-3.5 sm:w-auto">
          <a
            href={`mailto:${EMAIL}`}
            className="btn btn-light inline-flex min-h-[50px] items-center justify-center gap-2.5 max-[479px]:w-full rounded-full bg-cream px-[26px] py-3.5 font-semibold text-ink no-underline"
          >
            <Mail size={18} className="text-accent" aria-hidden="true" />
            Enviar mensagem
            <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <div className="flex flex-wrap gap-x-[22px] gap-y-1 text-sm font-medium">
            <a className="ulink inline-flex min-h-11 items-center text-cream" href="https://github.com/elizabethmp82" target="_blank" rel="noopener">GitHub</a>
            <a className="ulink inline-flex min-h-11 items-center text-cream" href="https://www.linkedin.com/in/melo-elizabeth" target="_blank" rel="noopener">LinkedIn</a>
            <a className="ulink inline-flex min-h-11 items-center text-cream" href={`mailto:${EMAIL}`}>E-mail</a>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
