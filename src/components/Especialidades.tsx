import { Database, Monitor, Package, ShieldCheck } from 'lucide-react'
import RevealSection from './RevealSection'
import SectionLabel from './SectionLabel'

const especialidades = [
  { icon: Monitor, titulo: 'Interfaces web', texto: 'Aplicações responsivas e intuitivas.' },
  { icon: Database, titulo: 'Back-end e APIs', texto: 'Integrações, regras de negócio e dados.' },
  { icon: Package, titulo: 'Sistemas completos', texto: 'Arquitetura e desenvolvimento de produtos.' },
  { icon: ShieldCheck, titulo: 'Qualidade e segurança', texto: 'Boas práticas, testes e manutenção.' },
]

const tecnologias = ['React', 'TypeScript', 'Node.js', 'C# / .NET', 'PostgreSQL', 'SQL', 'Git']

export default function Especialidades() {
  return (
    <RevealSection
      id="especialidades"
      className="mx-auto flex max-w-[1200px] flex-col gap-7 px-6 pb-[clamp(72px,13vw,176px)]"
    >
      <div className="reveal flex flex-col gap-2.5">
        <SectionLabel>ESPECIALIDADES</SectionLabel>
        <h2 className="m-0 font-display text-[clamp(30px,3.6vw,42px)] font-bold tracking-[-0.025em]">
          Da ideia à implementação.
        </h2>
      </div>

      <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))]">
        {especialidades.map(({ icon: Icon, titulo, texto }) => (
          <div key={titulo} className="reveal card flex flex-col gap-2.5 rounded-[20px] border border-line bg-card p-5 sm:p-6">
            <Icon size={30} strokeWidth={1.8} className="text-accent" aria-hidden="true" />
            <h3 className="mt-1.5 mb-0 font-display text-xl font-bold tracking-[-0.01em]">{titulo}</h3>
            <p className="m-0 text-[15px] leading-normal text-muted">{texto}</p>
          </div>
        ))}
      </div>

      <div className="reveal mt-2 flex flex-wrap items-center gap-x-6 gap-y-3">
        <h3 className="m-0 font-display text-[17px] font-semibold">Tecnologias que utilizo</h3>
        <ul className="m-0 flex list-none flex-wrap gap-2 p-0 text-sm font-medium">
          {tecnologias.map((t) => (
            <li key={t} className="techchip rounded-full border border-line bg-white px-4 py-2">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}
