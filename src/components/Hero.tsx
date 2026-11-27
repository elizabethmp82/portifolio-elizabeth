'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, Code, CodeXml, Mail } from 'lucide-react'
import Foto from '../../public/avatar.png'
import OrganicLogicHero from './hero/OrganicLogicHero'

const phrases = [
  'Transformo ideias em soluções digitais.',
  'Assumo projetos da ideia ao deploy.',
  'Construo sistemas seguros que escalam.',
  'Resolvo problemas complexos com código limpo.',
]

const etapas = ['Planejamento', 'Desenvolvimento', 'Entrega', 'Evolução']

/** Efeito de digitação que alterna entre as frases. */
function useTyping() {
  const [state, setState] = useState({ i: 0, n: 0, dir: 1, hold: 0 })

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setState((s) => ({ ...s, n: phrases[0].length }))
      return
    }
    const timer = setInterval(() => {
      setState((s) => {
        const word = phrases[s.i]
        if (s.hold > 0) return { ...s, hold: s.hold - 1 }
        if (s.dir === 1) {
          return s.n < word.length ? { ...s, n: s.n + 1 } : { ...s, dir: -1, hold: 40 }
        }
        return s.n > 0
          ? { ...s, n: s.n - 1 }
          : { i: (s.i + 1) % phrases.length, n: 0, dir: 1, hold: 6 }
      })
    }, 55)
    return () => clearInterval(timer)
  }, [])

  return phrases[state.i].slice(0, state.n)
}

export default function Hero() {
  const typed = useTyping()

  return (
    <section
      id="inicio"
      className="hero-grid mx-auto max-w-[1280px] px-6 pt-[clamp(48px,7vw,88px)] pb-[clamp(76px,8.5vw,116px)]"
    >
      <div className="flex flex-col gap-[22px]">
        <p className="intro d1 m-0 -mb-2 font-mono text-[13px] text-text-2">
          <span className="text-sage">~</span>/elizabethmelo.com <span className="text-accent-text">$</span>
        </p>
        <p className="intro d1 m-0 inline-flex items-center gap-2.5 font-mono text-[13px] font-semibold tracking-[0.12em] text-ink">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent" />
          DESENVOLVEDORA FULL STACK PLENO
        </p>

        <h1 className="intro d2 m-0 font-display text-[min(clamp(48px,7vw,88px),14.4cqi)] leading-[.98] font-bold tracking-[-0.035em]">
          Olá, eu sou
          <br />
          <span className="whitespace-nowrap text-accent-text">
            Elizabeth <span className="serif text-[1.1em]">Melo.</span>
          </span>
        </h1>

        <p className="typed relative m-0 font-display text-[clamp(26px,3vw,36px)] leading-[1.15] font-normal tracking-[-0.02em]">
          <span className="sr-only">{phrases[0]}</span>
          <span aria-hidden="true">
            {typed}
            <span className="cursor ml-0.5 font-light text-accent-text">|</span>
          </span>
        </p>

        <p className="intro d3 m-0 max-w-[500px] text-[17px] leading-[1.65] text-text-2">
          Desenvolvo aplicações web de ponta a ponta, com Node.js, React, Next.js e TypeScript. Desde
          2021, construo sistemas corporativos que eliminam filas, aceleram atendimentos e evoluem com
          segurança.
        </p>

        <p className="intro d4 m-0 inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 self-start rounded-full border border-border bg-white px-4 py-[9px] text-sm font-medium text-text-2">
          <span aria-hidden="true" className="h-[9px] w-[9px] rounded-full bg-sage" />
          <strong className="font-semibold text-ink">Disponível para vagas e projetos</strong>
          <span aria-hidden="true" className="text-[#C9B3AB]">·</span>Belém, PA
          <span aria-hidden="true" className="text-[#C9B3AB]">·</span>Remoto
        </p>

        <div className="intro d4 mt-1.5 flex flex-wrap gap-3">
          <a
            href="#projetos"
            className="btn btn-primary inline-flex min-h-[50px] items-center gap-2.5 rounded-full bg-accent-btn px-6 py-3.5 font-semibold text-white no-underline"
          >
            <Code size={18} strokeWidth={2.2} aria-hidden="true" />
            Ver projetos
            <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <a
            href="#contato"
            className="btn btn-ghost inline-flex min-h-[50px] items-center gap-2.5 rounded-full border-[1.5px] border-ink px-6 py-3.5 font-semibold text-ink no-underline"
          >
            <Mail size={18} aria-hidden="true" />
            Entrar em contato
          </a>
        </div>

        <div className="intro d5 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
          <a className="ulink inline-flex min-h-11 items-center text-ink" href="https://github.com/elizabethmp82" target="_blank" rel="noopener">GitHub</a>
          <a className="ulink inline-flex min-h-11 items-center text-ink" href="https://www.linkedin.com/in/melo-elizabeth" target="_blank" rel="noopener">LinkedIn</a>
          <a className="ulink inline-flex min-h-11 items-center text-ink" href="mailto:meloelizabethp@gmail.com">E-mail</a>
        </div>
      </div>

      {/* Palco de 662 × 738 px, escalado por --k conforme a largura da tela */}
      <div className="intro d3 hero-vis">
        <div className="hero-stage">
          <div className="absolute top-[-12.1px] left-[-15.7px] h-[818.3px] w-[698.9px]">
            <OrganicLogicHero />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[234.8px] left-[67.2px] h-[360px] w-[360px] rounded-full bg-soft"
          />
          <div className="pointer-events-none absolute top-[244.8px] left-[77.2px] h-[340px] w-[340px] overflow-hidden rounded-full border-8 border-bg bg-lilac shadow-[0_30px_60px_-30px_rgba(26,18,32,.4)]">
            <Image
              src={Foto}
              alt="Foto de Elizabeth Melo"
              fill
              sizes="(max-width: 479px) 190px, 340px"
              priority
              className="object-cover"
            />
          </div>

          <ul
            aria-label="Como eu trabalho"
            className="check absolute top-[207px] left-[-12px] m-0 flex list-none flex-col gap-3 rounded-[20px] border border-border bg-white/85 px-[22px] py-[18px] text-sm shadow-[0_10px_22px_-16px_rgba(26,18,32,.18)]"
          >
            {etapas.map((etapa) => (
              <li key={etapa} className="flex items-center gap-2.5">
                <Check size={16} strokeWidth={2.6} className="text-accent" aria-hidden="true" />
                {etapa}
              </li>
            ))}
          </ul>

          <div
            aria-hidden="true"
            className="absolute top-[99px] left-[76px] flex h-[92px] w-[92px] items-center justify-center rounded-[18px] border border-border bg-bg shadow-[0_10px_20px_-14px_rgba(224,74,34,.32)]"
          >
            <CodeXml size={40} strokeWidth={2} className="text-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
