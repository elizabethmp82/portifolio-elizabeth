import PcbDivider from './PcbDivider'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

const resultados = [
  { valor: '50%+', texto: 'de redução no tempo de atendimento do cadastro estudantil' },
  { valor: '+70%', texto: 'de adesão a atendimentos remotos, com o WebAgendamento' },
  { valor: '5+', texto: 'anos em produção, do back-end ao deploy' },
]

type Etapa = {
  tipo: string
  periodo: string
  titulo: string
  local: string
  descricao?: string
  /** A trilha faz um desvio em diagonal antes deste nó. */
  jog?: boolean
}

const trajetoria: Etapa[] = [
  {
    tipo: 'ATUAL',
    periodo: 'jul 2021 — hoje',
    titulo: 'Desenvolvedora Full Stack Pleno',
    local: 'SETRANSBEL · Belém, PA',
    descricao:
      'Aplicações web corporativas com Node.js, React e Next.js, APIs REST, SQL em PostgreSQL e Oracle, code review e deploys do desenvolvimento à produção.',
  },
  {
    tipo: 'ANTERIOR',
    periodo: 'out 2020 — mai 2021',
    titulo: 'Desenvolvedora · Projeto de Automação',
    local: 'Laboratório de Empreendedorismo · Wyden',
    descricao:
      'Interface web com JavaScript e Firebase para controlar, a distância, um sistema de irrigação inteligente com Arduino.',
    jog: true,
  },
  {
    tipo: 'EM CURSO',
    periodo: 'conclusão em 2026',
    titulo: 'Pós-graduação em Engenharia de Software',
    local: 'Centro Universitário UniFavip',
    jog: true,
  },
  {
    tipo: 'FORMAÇÃO',
    periodo: '2022',
    titulo: 'Bacharelado em Sistemas de Informação',
    local: 'Faculdade Ideal',
    descricao: 'Também: Formação Desenvolvedora Full Stack, Coders4Future (2021).',
  },
]

export default function Sobre() {
  return (
    <RevealSection id="sobre" className="mx-auto max-w-[1280px] px-6 pb-[clamp(76px,8.5vw,116px)]">
      <PcbDivider />
      <div className="reveal sobre-grid">
        <div className="sobre-intro">
          <SectionLabel num="01">SOBRE MIM</SectionLabel>
          <h2 className="m-0 font-display text-[clamp(28px,3.2vw,38px)] leading-[1.15] font-bold tracking-[-0.025em]">
            Mais do que código, gosto de construir soluções que{' '}
            <span className="serif text-[1.12em] text-accent-text">funcionam.</span>
          </h2>
          <div className="sobre-text">
            <p className="m-0 font-display text-xl leading-[1.45] text-ink">
              <strong className="font-bold text-accent-text">Desde 2021</strong> desenvolvendo aplicações
              web corporativas, com foco em{' '}
              <strong className="font-semibold">APIs REST, sistemas SaaS e regras de negócio</strong>.
            </p>
            <p className="m-0 text-base leading-[1.7] text-text-2">
              Atuo de ponta a ponta: no back-end com Node.js, APIs REST, Prisma e PostgreSQL, e no
              front-end com React, Next.js, TypeScript e Tailwind CSS. Trabalho em times ágeis, com
              Docker, Git, CI/CD e serviços AWS.
            </p>
            <p className="m-0 text-base leading-[1.7] text-text-2">
              Acredito em código limpo, seguro e reutilizável. Faço code review, refatoro código
              legado e acompanho cada entrega até a produção.
            </p>
            <ul className="sobre-stats" aria-label="Resultados em produção">
              {resultados.map((r) => (
                <li key={r.valor}>
                  <strong>{r.valor}</strong>
                  <span>{r.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="traj-wrap">
          <h3 className="traj-h">MINHA TRAJETÓRIA</h3>
          <ol className="traj">
            {trajetoria.map((e, i) => (
              <li key={e.titulo} className={`tj tj${i + 1}`}>
                <span className="tj-spine" aria-hidden="true" />
                {e.jog && (
                  <svg className="tj-jog" aria-hidden="true" viewBox="0 0 14 14" width="14" height="14">
                    <path d="M1 0L13 12" />
                  </svg>
                )}
                <span className="tj-stub" aria-hidden="true" />
                <span className="tj-node" aria-hidden="true" />
                <p className="tj-k">
                  <span>{e.tipo}</span> · {e.periodo}
                </p>
                <p className="tj-t">{e.titulo}</p>
                <p className="tj-s">{e.local}</p>
                {e.descricao && <p className="tj-d">{e.descricao}</p>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </RevealSection>
  )
}
