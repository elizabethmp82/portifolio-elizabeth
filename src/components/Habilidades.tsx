
"use client";
import { motion } from "framer-motion";

const habilidades = [
  { nome: "React", icone: "/icons/react.svg" },
  { nome: "Next.js", icone: "/icons/nextjs.svg" },
  { nome: "TypeScript", icone: "/icons/typescript.svg" },
  { nome: "Tailwind CSS", icone: "/icons/tailwind_css.svg" },
  { nome: "HTML", icone: "/icons/html.svg" },
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
              <img
                src={hab.icone}
                alt={hab.nome}
                className="w-12 h-12 mx-auto mb-2"
              />
              <p className="text-sm font-medium">{hab.nome}</p>
            </div>
          ))}
        </motion.div>  
      </div>
    </section>
  );
}
