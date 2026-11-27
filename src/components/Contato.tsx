import { ArrowUpRight, Mail } from 'lucide-react'
import Logo from './Logo'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

const EMAIL = 'meloelizabethp@gmail.com'

/** Atalhos de assunto para o e-mail. */
const caminhos = [
  { label: 'Vaga / CLT', assunto: 'Oportunidade de vaga' },
  { label: 'Projeto freelance', assunto: 'Projeto freelance' },
  { label: 'Conversa técnica', assunto: 'Conversa técnica' },
]

const TRILHAS = ['M640 -50H96L27 19H2', 'M640 -43H103L35 25H2', 'M640 -36H110L43 31H2']
const DERIVACOES = ['M104 -50V-72L118 -86', 'M124 -36V-6', 'M300 -43V-64L314 -78']

/** Trilhas que chegam da borda direita até o botão de enviar mensagem. */
function TrilhasCta() {
  return (
    <svg
      className="ctw"
      aria-hidden="true"
      viewBox="0 -90 640 160"
      width="640"
      height="160"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="base">
        {[...TRILHAS, ...DERIVACOES].map((d) => (
          <path key={d} d={d} pathLength="100" />
        ))}
      </g>
      <g className="run">
        {TRILHAS.map((d) => (
          <path key={d} d={d} pathLength="100" />
        ))}
      </g>
      <circle cx="118" cy="-86" r="3" />
      <circle cx="124" cy="-6" r="3" />
      <circle cx="314" cy="-78" r="3" />
    </svg>
  )
}

export default function Contato() {
  return (
    <RevealSection id="contato" className="mx-auto max-w-[1280px] px-6 pb-16">
      <div className="reveal relative isolate flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-3xl bg-dark bg-[radial-gradient(rgba(255,244,236,.09)_1px,transparent_1.3px)] bg-size-[20px_20px] p-[clamp(32px,5vw,48px)] text-bg">
        <div className="flex min-w-0 flex-[1_1_520px] flex-wrap items-center gap-7">
          <div
            aria-hidden="true"
            className="flex h-[84px] w-[84px] flex-none items-center justify-center rounded-3xl bg-plum"
          >
            <Logo dark className="text-[22px]" />
          </div>
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2.5 border-l border-plum-line pl-7">
            <SectionLabel num="05" dark>
              VAMOS CONVERSAR?
            </SectionLabel>
            <h2 className="m-0 font-display text-[clamp(24px,2.6vw,32px)] leading-[1.2] font-bold tracking-[-0.02em]">
              Tem uma ideia ou uma <span className="serif text-[1.12em] text-glow">oportunidade</span> em
              mente?
            </h2>
            <p className="m-0 max-w-[520px] text-[15px] leading-[1.6] text-[#E4DADE]">
              Seja para desenvolver um projeto, colaborar com uma equipe ou trocar ideias sobre
              tecnologia, vou gostar de conversar.
            </p>
            <p aria-hidden="true" className="mt-1.5 mb-0 font-mono text-[13px] text-[#DDD2D7]">
              <span className="text-[#7ED7A0]">$</span> git commit -m &quot;vamos conversar&quot;
              <span className="cursor text-glow">_</span>
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {caminhos.map((c) => (
                <a
                  key={c.label}
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(c.assunto)}`}
                  className="pathbtn inline-flex min-h-11 items-center rounded-full border border-plum-line px-4 py-2.5 text-sm font-medium text-bg no-underline"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start gap-3.5">
          <span className="ct-btnwrap">
            <TrilhasCta />
            <a
              href={`mailto:${EMAIL}`}
              className="btn btn-light inline-flex min-h-[50px] items-center gap-2.5 rounded-full bg-bg px-[26px] py-3.5 font-semibold text-ink no-underline"
            >
              <Mail size={18} className="text-accent" aria-hidden="true" />
              Enviar mensagem
              <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </span>
          <div className="flex flex-wrap gap-x-[22px] gap-y-1 text-sm font-medium">
            <a className="ulink inline-flex min-h-11 items-center text-bg" href="https://github.com/elizabethmp82" target="_blank" rel="noopener">GitHub</a>
            <a className="ulink inline-flex min-h-11 items-center text-bg" href="https://www.linkedin.com/in/melo-elizabeth" target="_blank" rel="noopener">LinkedIn</a>
            <a className="ulink inline-flex min-h-11 items-center break-all text-bg" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
