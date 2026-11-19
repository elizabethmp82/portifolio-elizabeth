'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, Code, CodeXml, Mail } from 'lucide-react'
import Foto from '../../public/avatar.png'

const phrases = [
  'Transformo ideias em soluções digitais.',
  'Crio interfaces simples e intuitivas.',
  'Construo APIs seguras e bem estruturadas.',
  'Desenvolvo sistemas pensados para evoluir.',
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
      className="mx-auto grid max-w-[1200px] items-center gap-[clamp(24px,6vw,72px)] px-6 pt-[clamp(32px,7vw,88px)] pb-[clamp(72px,13vw,176px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))]"
    >
      <div className="flex flex-col gap-[22px]">
        <p className="intro d1 m-0 inline-flex items-center gap-2.5 font-mono text-[13px] font-semibold tracking-[0.12em] text-ink">
          <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent" />
          DESENVOLVEDORA FULL STACK
        </p>

        <h1 className="intro d2 m-0 font-display text-[clamp(36px,4vw_+_20px,72px)] leading-[1.02] font-bold tracking-[-0.035em]">
          Olá, eu sou
          <br />
          <span className="text-accent">Elizabeth Melo.</span>
        </h1>

        <p className="intro d3 relative m-0 min-h-[2.3em] font-display text-[clamp(22px,2vw_+_14px,36px)] leading-[1.15] font-normal tracking-[-0.02em]">
          <span className="sr-only">{phrases[0]}</span>
          <span aria-hidden="true">
            {typed}
            <span className="cursor ml-0.5 font-light text-accent">|</span>
          </span>
        </p>

        <p className="intro d3 m-0 max-w-[500px] text-base sm:text-[17px] leading-[1.65] text-muted">
          Desenvolvo aplicações web que unem tecnologia, organização e experiências intuitivas. Do
          planejamento à implementação, gosto de transformar desafios em soluções que fazem sentido.
        </p>

        <div className="intro d4 mt-1.5 flex flex-wrap gap-3">
          <a
            href="#projetos"
            className="btn btn-primary inline-flex min-h-[50px] items-center justify-center gap-2.5 max-[479px]:w-full rounded-full bg-accent px-6 py-3.5 font-semibold text-white no-underline"
          >
            <Code size={18} strokeWidth={2.2} aria-hidden="true" />
            Ver projetos
            <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
          </a>
          <a
            href="#contato"
            className="btn btn-ghost inline-flex min-h-[50px] items-center justify-center gap-2.5 max-[479px]:w-full rounded-full border-[1.5px] border-ink px-6 py-3.5 font-semibold text-ink no-underline"
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

      <div className="intro d3 relative flex flex-col items-center justify-center gap-6 pt-6 sm:min-h-[480px] sm:pt-0">
        <div aria-hidden="true" className="blob absolute top-[4%] right-[6%] h-[92%] w-[76%] bg-blush" />
        <div aria-hidden="true" className="absolute bottom-[10%] left-[8%] h-20 w-20 rounded-3xl sm:left-[14%] sm:h-[120px] sm:w-[120px] sm:rounded-[32px] bg-lilac opacity-70" />
        <svg aria-hidden="true" width="64" height="56" viewBox="0 0 64 56" className="absolute top-0 left-[22%] w-12 sm:left-[30%] sm:w-16">
          <path d="M8 40 22 26M30 30l2-22M40 34l18-10" stroke="#C2391B" strokeWidth="4" strokeLinecap="round" />
        </svg>

        <div className="floaty relative aspect-square w-[min(340px,68vw)] overflow-hidden rounded-full border-[6px] sm:border-8 border-cream bg-lilac shadow-[0_30px_60px_-30px_rgba(31,23,32,.4)]">
          <Image
            src={Foto}
            alt="Foto de Elizabeth Melo"
            fill
            sizes="(max-width: 640px) 68vw, 340px"
            priority
            className="object-cover"
          />
        </div>

        <ul
          aria-label="Como eu trabalho"
          className="check relative z-10 m-0 grid list-none grid-cols-2 gap-x-5 gap-y-2.5 rounded-[20px] border border-line bg-white/85 px-5 py-4 text-sm sm:absolute sm:top-[18%] sm:left-0 sm:flex sm:flex-col sm:gap-3 sm:px-[22px] sm:py-[18px] shadow-[0_16px_32px_-20px_rgba(31,23,32,.25)]"
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
          className="tile absolute top-[6%] right-[2%] flex h-16 w-16 items-center justify-center rounded-[20px] sm:top-[12%] sm:right-0 sm:h-[92px] sm:w-[92px] sm:rounded-[26px] bg-peach shadow-[0_16px_30px_-18px_rgba(194,57,27,.5)]"
        >
          <CodeXml strokeWidth={2} className="h-7 w-7 text-accent sm:h-10 sm:w-10" />
        </div>
      </div>
    </section>
  )
}
