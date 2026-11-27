import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import PcbDivider from './PcbDivider'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

const GITHUB = 'https://github.com/elizabethmp82'

type Fato = { rotulo: string; texto: string; destaque?: boolean }

type Projeto = {
  nome: string
  descricao: string
  fatos: Fato[]
  tags: string[]
  imagem: string
  link?: string
  codigo?: string
}

const destaque: Projeto = {
  nome: 'IgrejaSync',
  descricao:
    'Plataforma SaaS de gestão para igrejas, com painel administrativo, aplicativo para membros e dados isolados por igreja.',
  fatos: [
    {
      rotulo: 'Problema',
      texto:
        'Cada igreja precisa organizar membros e rotinas com segurança, sem misturar seus dados com os de outras igrejas na mesma plataforma.',
    },
    {
      rotulo: 'Solução',
      texto:
        'Monorepo com API REST em Node.js, painel em Next.js e PWA para membros. Multi-tenancy com isolamento por igreja via JWT e NextAuth.js.',
    },
    {
      rotulo: 'Minha contribuição',
      texto: 'Projeto autoral, da arquitetura e modelagem do banco ao front-end e ao deploy com Docker.',
    },
  ],
  tags: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'JWT', 'Docker'],
  imagem: '/projetos/igrejasync.png',
  link: 'https://igrejasync.com.br/',
  codigo: GITHUB,
}

const outros: Projeto[] = [
  {
    nome: 'WebAgendamento',
    descricao:
      'Agendamento online de atendimentos para estudantes, com regras de negócio e validações por posto.',
    fatos: [
      { rotulo: 'Problema', texto: 'Filas presenciais para atendimento de estudantes.' },
      { rotulo: 'Solução', texto: 'Agendamento online com API em Node.js e interface em React e Tailwind CSS.' },
      {
        rotulo: 'Resultado',
        texto: '+70% de adesão a atendimentos remotos, com o fim das filas presenciais.',
        destaque: true,
      },
      { rotulo: 'Minha contribuição', texto: 'Desenvolvimento full stack, na SETRANSBEL.' },
    ],
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Oracle'],
    imagem: '/projetos/agendamento.png',
    link: 'https://webagendamentobelem.reglus.com.br/',
  },
  {
    nome: 'BurgerMatch',
    descricao:
      'Descoberta de hamburguerias com geolocalização, mapa interativo e navegação por gestos.',
    fatos: [
      {
        rotulo: 'Problema',
        texto:
          'Encontrar hamburguerias por perto e decidir onde comer leva tempo, com informações espalhadas.',
      },
      {
        rotulo: 'Solução',
        texto:
          'Experiência no estilo “match”: geolocalização, mapa interativo e cards que se navegam com gestos.',
      },
      {
        rotulo: 'Minha contribuição',
        texto: 'Projeto pessoal: interface, integração com mapas e experiência de uso.',
      },
    ],
    tags: ['React', 'TypeScript', 'Mapas', 'Geolocalização'],
    imagem: '/projetos/burgermatch.png',
    link: 'https://burgermatch.vercel.app/',
    codigo: GITHUB,
  },
]

/** Trilha que contorna o canto superior direito do card no hover. */
function CardTrace() {
  return (
    <svg className="card-trace" aria-hidden="true" viewBox="0 0 150 96" width="150" height="96">
      <path d="M0 .75H131.25A18 18 0 0 1 149.25 18.75V82" pathLength="100" />
      <circle cx="149.25" cy="86" r="3.25" />
    </svg>
  )
}

function ArrowLink({ href, nome, className = '' }: { href: string; nome: string; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={`Abrir o ${nome}`}
      className={`arrow absolute flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-accent ${className}`}
    >
      <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
    </a>
  )
}

function Fatos({ fatos, compact = false }: { fatos: Fato[]; compact?: boolean }) {
  return (
    <dl className={`pfacts ${compact ? 'compact text-sm' : 'text-[15px]'}`}>
      {fatos.map((f) => (
        <div key={f.rotulo} className={f.destaque ? 'pres' : undefined}>
          <dt>{f.rotulo}</dt>
          <dd>{f.texto}</dd>
        </div>
      ))}
    </dl>
  )
}

function Links({ p, small = false }: { p: Projeto; small?: boolean }) {
  return (
    <div className={`flex flex-wrap text-sm font-semibold ${small ? 'gap-x-[18px]' : 'gap-x-5 gap-y-1'}`}>
      {p.link && (
        <a className="ulink inline-flex min-h-11 items-center text-accent-text" href={p.link} target="_blank" rel="noopener">
          Ver projeto ↗
        </a>
      )}
      {p.codigo && (
        <a className="ulink inline-flex min-h-11 items-center text-ink" href={p.codigo} target="_blank" rel="noopener">
          Código
        </a>
      )}
    </div>
  )
}

function Tags({ tags, small = false }: { tags: string[]; small?: boolean }) {
  return (
    <ul
      aria-label="Tecnologias"
      className={`m-0 flex list-none flex-wrap p-0 font-mono font-medium ${small ? 'mt-0.5 gap-1.5' : 'mt-1 gap-2'} text-xs`}
    >
      {tags.map((t) => (
        <li key={t} className={`rounded-full bg-soft ${small ? 'px-3 py-1.5' : 'px-3.5 py-[7px]'}`}>
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
      className="mx-auto flex max-w-[1280px] flex-col gap-7 px-6 pb-[clamp(76px,8.5vw,116px)]"
    >
      <PcbDivider />
      <div className="reveal flex flex-wrap items-end justify-between gap-3">
        <div className="flex flex-col gap-2.5">
          <SectionLabel num="03">PROJETOS EM DESTAQUE</SectionLabel>
          <h2 className="m-0 font-display text-[clamp(30px,3.6vw,42px)] font-bold tracking-[-0.025em]">
            Algumas ideias que ganharam <span className="serif text-[1.12em] text-accent-text">forma.</span>
          </h2>
        </div>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener"
          className="ulink inline-flex min-h-11 items-center gap-1.5 text-[15px] font-semibold text-accent-text hover:text-accent-deep"
        >
          Ver todos os projetos
          <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
        </a>
      </div>

      {/* Projeto principal */}
      <article className="reveal card grid items-center gap-x-10 gap-y-3.5 rounded-[18px] border border-border bg-card p-3.5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <CardTrace />
        <div className="shot flex aspect-[16/10] flex-col rounded-[10px] bg-soft">
          <div aria-hidden="true" className="flex gap-1.5 bg-blush-dark px-3.5 py-3">
            <span className="h-[9px] w-[9px] rounded-full bg-bg" />
            <span className="h-[9px] w-[9px] rounded-full bg-bg" />
            <span className="h-[9px] w-[9px] rounded-full bg-bg" />
          </div>
          <div className="relative flex-1">
            <Image
              src={destaque.imagem}
              alt={`Tela do ${destaque.nome}`}
              fill
              sizes="(max-width: 700px) 100vw, 600px"
              className="object-cover object-left-top"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3.5 pt-3 pr-4 pb-4 pl-1">
          <h3 className="m-0 pr-14 font-display text-[30px] font-bold tracking-[-0.02em]">{destaque.nome}</h3>
          <p className="m-0 max-w-[440px] text-[17px] leading-[1.6] text-text-2">{destaque.descricao}</p>
          <Fatos fatos={destaque.fatos} />
          <Links p={destaque} />
          <Tags tags={destaque.tags} />
        </div>
        <ArrowLink href={destaque.link!} nome={destaque.nome} className="top-[22px] right-[22px]" />
      </article>

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr))]">
        {outros.map((p) => (
          <article
            key={p.nome}
            className="reveal card grid content-start items-start gap-4 rounded-[18px] border border-border bg-card p-3"
          >
            <CardTrace />
            <div className="shot aspect-[16/10] rounded-[10px] bg-soft">
              <Image
                src={p.imagem}
                alt={`Tela do ${p.nome}`}
                fill
                sizes="(max-width: 700px) 100vw, 600px"
                className="object-cover object-left-top"
              />
            </div>
            <div className="flex flex-col gap-2.5 px-2.5 pt-1 pb-3">
              <h3 className="m-0 pr-12 font-display text-[21px] leading-[1.2] font-bold tracking-[-0.015em]">
                {p.nome}
              </h3>
              <p className="m-0 text-[15px] leading-[1.55] text-text-2">{p.descricao}</p>
              <Fatos fatos={p.fatos} compact />
              <Links p={p} small />
              <Tags tags={p.tags} small />
            </div>
            {p.link && <ArrowLink href={p.link} nome={p.nome} className="top-[18px] right-[18px]" />}
          </article>
        ))}
      </div>
    </RevealSection>
  )
}
