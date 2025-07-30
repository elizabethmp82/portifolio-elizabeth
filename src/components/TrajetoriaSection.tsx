
"use client";
import { motion } from "framer-motion";

export default function TrajetoriaSection() {
  const timelineItems = [
    {
      tipo: "educacao",
      titulo: "Bacharelado em Sistemas de Informação",
      local: "Faculdade Ideal",
      periodo: "2018 - 2021",
      descricao: "Foco em HTML, CSS, JavaScript moderno e React.",
    },
        {
      tipo: "experiencia",
      titulo: "Desenvolvedora",
      local: "Laboratório de Empreendedorismo",
      periodo: "2020 - 2021",
      descricao: "Desenvolvimento do sistema SIAAR (Sistema Inteligente de Automação de Água para Regar), voltado à automação de irrigação em pequenos cultivos.",
    },
     {
      tipo: "experiencia",
      titulo: "Auxiliar de Programação",
      local: "Sindicato das Empresas de Transporte de Passageiros de Belém-SETRANSBEL",
      periodo: "2021 - Atual",
      descricao: "Atuo no suporte ao cliente interno além de realizar a manutenção de sistemas legados e no desenvolvimento de interfaces modernas com React, Next.js e Tailwind.",
    },
    {
      tipo: "educacao",
      titulo: "Pós-graduação em Engenharia de Software",
      local: "UniFavip",
      periodo: "2024 - 2025",
      descricao: "Abordagem prática em arquitetura de software, bancos de dados e DevOps.",
    },
 
  ];

  return (
    <section id="trajetoria" className="py-16 bg-surface text-text-dark">
      <div className="container mx-auto px-6">
        <motion.h2 className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} 
        >Minha Trajetória</motion.h2>

        <motion.div 
        className="relative border-l-4 border-primary pl-6"
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} >
          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className="mb-10 ml-4 relative group hover:scale-[1.01] transition-transform"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[1.1rem] top-1.5 border-white border-4 shadow-md" />
              <h3 className="text-xl font-semibold">{item.titulo}</h3>
              <span className="text-sm text-muted">{item.local} • {item.periodo}</span>
              <p className="mt-2 text-base text-text-light">{item.descricao}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

