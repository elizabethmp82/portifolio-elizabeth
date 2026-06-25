
"use client";
import Image from "next/image";
import { motion } from "framer-motion";


const projetos = [
  {
    nome: "IgrejaSync",
    descricao: "Plataforma SaaS multi-tenant de gestão e comunicação para igrejas, desenvolvida do zero. Centraliza administração, comunicação interna, gestão financeira, escalas, células e eventos, com painel web e app do membro (PWA).",
    imagem: "/imagem/igrejasync.png",
    link: "https://igrejasync.com.br/login",
    tecnologias: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "TanStack Query", "NextAuth.js", "Docker"],
  },
  {
    nome: "FitClub",
    descricao: "Landing page moderna para uma academia. Desenvolvida com Next.js e Tailwind, apresentando serviços, equipe e planos.",
    imagem: "/imagem/fitclub.png",
    link: "https://fitclubdb.vercel.app/",
    tecnologias: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    nome: "PetClin",
    descricao: "Landing page moderna para uma clínica veterinária. Desenvolvida com Next.js e Tailwind, apresentando serviços, equipe e agendamento rápido.",
    imagem: "/imagem/petclin.png",
    link: "https://petclin.vercel.app/",
    tecnologias: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    nome: "WebAgendamento",
    descricao: "Sistema de agendamento online, garantindo uma experiência fluida e responsiva para os usuários.",
    imagem: "/imagem/agendamento.png",
    link: "https://webagendamentobelem.reglus.com.br/",
    tecnologias: ["React", "TypeScript", "Material UI", "Node.js"],
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="py-16 bg-surface  text text-text-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-32">
        <motion.h2 
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} 
        >Projetos</motion.h2>
        <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} >
          {projetos.map((projeto) => (
            <div
              key={projeto.nome}
              className="bg-white rounded-2xl overflow-hidden shadow-card transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col"
            >
              <div className="overflow-hidden h-48">
                {projeto.imagem ? (
                  <img
                    src={projeto.imagem}
                    alt={projeto.nome}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold tracking-wide">{projeto.nome}</span>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold">{projeto.nome}</h3>
                <p className="text-sm text-[--color-text-muted] mt-1">{projeto.descricao}</p>
                {projeto.tecnologias.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {projeto.tecnologias.map((tec) => (
                      <span key={tec} className="text-xs bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full">
                        {tec}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto pt-4">
                  {projeto.link ? (
                    <a
                      href={projeto.link}
                      target="_blank"
                      className="text-[--color-primary] font-semibold hover:underline"
                    >
                      Ver projeto →
                    </a>
                  ) : (
                    <span className="text-sm text-muted italic">Em desenvolvimento</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

