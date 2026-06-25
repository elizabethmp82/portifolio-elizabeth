
"use client";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiNodedotjs, SiPython, SiPostgresql, SiGit, SiDocker } from "react-icons/si";

const habilidades = [
  { nome: "React", icone: SiReact, cor: "#61DAFB" },
  { nome: "Next.js", icone: SiNextdotjs, cor: "#000000" },
  { nome: "TypeScript", icone: SiTypescript, cor: "#3178C6" },
  { nome: "Tailwind CSS", icone: SiTailwindcss, cor: "#06B6D4" },
  { nome: "HTML", icone: SiHtml5, cor: "#E34F26" },
  { nome: "Node.js", icone: SiNodedotjs, cor: "#339933" },
  { nome: "Python", icone: SiPython, cor: "#3776AB" },
  { nome: "PostgreSQL", icone: SiPostgresql, cor: "#4169E1" },
  { nome: "Git", icone: SiGit, cor: "#F05032" },
  { nome: "Docker", icone: SiDocker, cor: "#2496ED" },
];

export default function Habilidades() {
  return (
    <section className="py-16 bg-primary-light text-text-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-32">

        <motion.h2 className="text-3xl font-bold mb-10"
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}}
        >Habilidades </motion.h2>
        <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} >
          {habilidades.map((hab) => (
            <div
              key={hab.nome}
              className="bg-white rounded-xl p-4 shadow-card text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            >
              <hab.icone
                size={48}
                color={hab.cor}
                className="mx-auto mb-2"
              />
              <p className="text-sm font-medium">{hab.nome}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
