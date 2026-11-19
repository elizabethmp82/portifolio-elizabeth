import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

type Projeto = {
  nome: string
  descricao: string
  tags: string[]
  imagem: string
  link?: string
}

const destaque: Projeto = {
  nome: 'IgrejaSync',
  descricao:
    'Plataforma SaaS multi-igreja, com módulos de gestão, controle de acesso e experiências integradas.',
  tags: ['SaaS', 'Full Stack', 'PostgreSQL', 'Segurança'],
  imagem: '/projetos/igrejasync.png',
  link: 'https://igrejasync.com.br/',
}

const outros: Projeto[] = [
  {
    nome: 'Agendamento de Estudantes',
    descricao: 'Sistema de agendamento com API multi-posto, validações e regras de negócio.',
    tags: ['API', 'Node.js', 'PostgreSQL'],
    imagem: '/projetos/agendamento.png',
    link: 'https://webagendamentobelem.reglus.com.br/',
  },
  {
    nome: 'BurgerMatch',
    descricao:
      'Descoberta de hamburguerias com geolocalização, mapas interativos e navegação por gestos.',
    tags: ['React', 'TypeScript', 'Mapas', 'UX'],
    imagem: '/projetos/burgermatch.png',
    link: 'https://burgermatch.vercel.app/',
  },
]

function ArrowLink({ href, label, className = '' }: { href: string; label: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className={`arrow flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-line bg-white text-accent ${className}`}
    >
      <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
    </a>
  )
}

function Tags({ tags, small = false }: { tags: string[]; small?: boolean }) {
  return (
    <ul
      aria-label="Tecnologias"
      className={`m-0 flex list-none flex-wrap p-0 font-medium ${small ? 'mt-0.5 gap-1.5 text-xs' : 'mt-1 gap-2 text-[13px]'}`}
    >
      {tags.map((t) => (
        <li key={t} className={`rounded-full bg-blush ${small ? 'px-3 py-1.5' : 'px-3.5 py-[7px]'}`}>
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function Projetos() {
  return (
    <RevealSection
      id="projetos"
      className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-[clamp(72px,13vw,176px)]"
    >
      <div className="reveal flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-2.5">
          <SectionLabel>PROJETOS EM DESTAQUE</SectionLabel>
          <h2 className="m-0 font-display text-[clamp(30px,3.6vw,42px)] font-bold tracking-[-0.025em]">
            Algumas ideias que ganharam forma.
          </h2>
        </div>
        <a
          href="https://github.com/elizabethmp82"
          target="_blank"
          rel="noopener"
          className="ulink inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-accent hover:text-accent-deep"
        >
          Ver todos os projetos
          <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>

      {/* Projeto principal */}
      <article className="reveal card relative grid items-center gap-x-10 gap-y-3.5 rounded-3xl border border-line bg-card p-3 sm:rounded-[28px] sm:p-3.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div className="flex aspect-[16/10] flex-col overflow-hidden rounded-[18px] bg-blush">
          <div aria-hidden="true" className="flex gap-1.5 bg-blush-dark px-3.5 py-3">
            <span className="h-[9px] w-[9px] rounded-full bg-cream" />
            <span className="h-[9px] w-[9px] rounded-full bg-cream" />
            <span className="h-[9px] w-[9px] rounded-full bg-cream" />
          </div>
          <div className="relative flex-1">
            <Image
              src={destaque.imagem}
              alt={`Tela do ${destaque.nome}`}
              fill
              sizes="(max-width: 700px) 100vw, 580px"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 px-2 pt-1 pb-3 sm:pt-3 sm:pr-4 sm:pb-4 sm:pl-1">
          <h3 className="m-0 font-display text-[26px] font-bold sm:pr-14 sm:text-[30px] tracking-[-0.02em]">{destaque.nome}</h3>
          <p className="m-0 max-w-[440px] text-base leading-[1.6] text-body sm:text-[17px]">{destaque.descricao}</p>
          <Tags tags={destaque.tags} />
        </div>
        <ArrowLink href={destaque.link!} label={`Abrir o ${destaque.nome}`} className="absolute top-[22px] right-[22px] shadow-sm" />
      </article>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]">
        {outros.map((p) => (
          <article
            key={p.nome}
            className="reveal card grid items-center gap-x-[22px] gap-y-3 rounded-3xl border border-line bg-card p-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr))]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-blush">
              <Image
                src={p.imagem}
                alt={`Tela do ${p.nome}`}
                fill
                sizes="(max-width: 700px) 100vw, 280px"
                className="object-cover object-left-top"
              />
            </div>
            <div className="flex flex-col gap-2.5 px-2 pb-2.5 sm:pt-1.5 sm:pl-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="m-0 font-display text-[21px] leading-[1.2] font-bold tracking-[-0.015em]">
                  {p.nome}
                </h3>
                {p.link && <ArrowLink href={p.link} label={`Abrir o ${p.nome}`} className="-mt-1 shadow-sm" />}
              </div>
              <p className="m-0 text-[15px] leading-[1.55] text-body">{p.descricao}</p>
              <Tags tags={p.tags} small />
            </div>
          </article>
        ))}
      </div>
    </RevealSection>
  )
}
