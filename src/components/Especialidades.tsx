import { Database, Monitor, Package, ShieldCheck } from 'lucide-react'
import PcbDivider from './PcbDivider'
import RevealSection, { RevealDiv } from './RevealSection'
import SectionLabel from './SectionLabel'

const especialidades = [
  {
    icon: Monitor,
    titulo: 'Interfaces web',
    texto: 'React, Next.js e Tailwind CSS, com interfaces responsivas e componentizadas.',
  },
  {
    icon: Database,
    titulo: 'Back-end e APIs',
    texto: 'APIs REST em Node.js, com contratos validados, Prisma e SQL.',
  },
  {
    icon: Package,
    titulo: 'Sistemas completos',
    texto: 'Do banco ao deploy: PostgreSQL, Oracle, Docker, CI/CD e AWS.',
  },
  {
    icon: ShieldCheck,
    titulo: 'Qualidade e segurança',
    texto: 'Code review, refatoração, testes funcionais e autenticação com JWT e OAuth2.',
  },
]

const etapas = [
  { titulo: 'Planejamento', texto: 'Entendo o problema, as pessoas e as regras de negócio.' },
  { titulo: 'Desenvolvimento', texto: 'Defino a arquitetura e construo com código limpo.' },
  { titulo: 'Entrega', texto: 'Testo, publico e deixo tudo documentado.' },
  { titulo: 'Evolução', texto: 'Acompanho, ajusto e faço o sistema crescer.' },
]

const tecnologias = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Prisma',
  'PostgreSQL',
  'Oracle',
  'C#',
  'Tailwind CSS',
  'Docker',
  'AWS',
  'Git',
]

/** Barramento que liga os quatro cards: "DESENVOLVIMENTO FULL STACK". */
function Barramento() {
  return (
    <div className="esp-bus" aria-hidden="true">
      <span className="eb-v eb-v1" />
      <span className="eb-v eb-v2" />
      <span className="eb-v eb-v3" />
      <span className="eb-v eb-v4" />
      <svg className="eb-c eb-c1" viewBox="0 0 12 12">
        <path d="M.75 0L12 11.25" />
      </svg>
      <svg className="eb-c eb-c4" viewBox="0 0 12 12">
        <path d="M.75 0L12 11.25" />
      </svg>
      <span className="eb-h" />
      <span className="eb-x eb-xl" />
      <span className="eb-x eb-xr" />
      <span className="eb-pl" />
      <span className="eb-n eb-n2" />
      <span className="eb-n eb-n3" />
      <span className="eb-t eb-tl" />
      <span className="eb-t eb-tr" />
      <span className="eb-label">DESENVOLVIMENTO FULL STACK</span>
    </div>
  )
}

export default function Especialidades() {
  return (
    <RevealSection
      id="especialidades"
      className="mx-auto flex max-w-[1280px] flex-col gap-7 px-6 pb-[clamp(76px,8.5vw,116px)]"
    >
      <PcbDivider dir="ltr" />
      <div className="reveal flex flex-col gap-2.5">
        <SectionLabel num="04">ESPECIALIDADES</SectionLabel>
        <h2 className="m-0 font-display text-[clamp(30px,3.6vw,42px)] font-bold tracking-[-0.025em]">
          Da <span className="serif text-[1.12em] text-accent-text">ideia</span> à implementação.
        </h2>
      </div>

      <div className="esp-grid grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
        {especialidades.map(({ icon: Icon, titulo, texto }, i) => (
          <div key={titulo} className="reveal card flex flex-col gap-2.5 rounded-[14px] border border-border bg-card p-6">
            <Icon size={30} strokeWidth={1.8} className="text-accent" aria-hidden="true" />
            <span aria-hidden="true" className="absolute top-[22px] right-6 font-mono text-xs text-[#B79D95]">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-1.5 mb-0 font-display text-xl font-bold tracking-[-0.01em]">{titulo}</h3>
            <p className="m-0 text-[15px] leading-normal text-text-2">{texto}</p>
          </div>
        ))}
      </div>

      <Barramento />

      <RevealDiv className="reveal steps-wrap mt-7 flex flex-col gap-5">
        <h3 className="m-0 font-display text-[17px] font-semibold">Como eu trabalho</h3>
        <ol className="steps m-0 grid list-none gap-7 p-0 [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
          {etapas.map((e, i) => (
            <li key={e.titulo} className="flex flex-col gap-2">
              {i > 0 && (
                <svg className="jog" aria-hidden="true" viewBox="0 0 14 12">
                  <path d="M0 .75L14 11.25" />
                </svg>
              )}
              <span className="trk" aria-hidden="true" />
              <span className="font-mono text-[13px] font-semibold text-accent-text">
                {String(i + 1).padStart(2, '0')}
              </span>
              <strong className="font-display text-xl font-semibold">{e.titulo}</strong>
              <span className="text-[15px] leading-[1.55] text-text-2">{e.texto}</span>
            </li>
          ))}
        </ol>
      </RevealDiv>

      <div className="reveal mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
        <h3 className="m-0 font-display text-[17px] font-semibold">Tecnologias que utilizo</h3>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0 font-mono text-[13px] font-medium">
          {tecnologias.map((t) => (
            <li key={t} className="techchip rounded-full border border-border bg-white px-4 py-2">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}
