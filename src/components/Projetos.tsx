// components/Projetos.tsx
import Image from "next/image";

const projetos = [
  {
    nome: "ClimaFácil",
    descricao: "Aplicativo web de previsão do tempo, que permite aos usuários buscar o clima de uma cidade e exibir as informações detalhadas.Tecnologias: Javascript, HTML,CSS",
    imagem: "/imagem/clima.png",
    link: "https://climafacil.vercel.app/",
  },
  {
    nome: "Boletim Online",
    descricao: "É um site PWA leve e responsivo que exibe aniversariantes, eventos e mensagens do mês da igreja.Tecnologias:Next.js,React,TypeScript,Material UI,Google Sheets",
    imagem: "/imagem/boletim.png",
    link: "https://boletimiap.vercel.app/",
  },
  {
    nome: "WebAgendamento",
    descricao: "Sistema de agendamento online, garantindo uma experiência fluida e responsiva para os usuários.Tecnologias:React,TypeScript,Material UI,Node.js",
    imagem: "/imagem/agendamento.png",
    link: "https://webagendamentobelem.reglus.com.br/",
  },

];

export default function Projetos() {
  return (
    <section id="projetos" className="py-16 bg-surface  text text-text-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-32">
        <h2 className="text-3xl font-bold mb-10">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.nome}
              className="bg-white rounded-2xl overflow-hidden shadow-card transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col justify-between h-[180px]">
                <div>
                  <h3 className="text-xl font-semibold">{projeto.nome}</h3>
                  <p className="text-sm text-[--color-text-muted]">{projeto.descricao}</p>
                </div>
                <a
                  href={projeto.link}
                  target="_blank"
                  className="mt-4 text-[--color-primary] font-semibold hover:underline"
                >
                  Ver projeto →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
