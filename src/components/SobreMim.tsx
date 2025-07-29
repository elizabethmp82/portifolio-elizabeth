
"use client";
import { motion } from "framer-motion";

export default function SobreMim() {
  return (
    <section id="sobre" className="bg-surface text-text-dark py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-32">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} 
        >
          Sobre Mim
        </motion.h2>

        <motion.p
          className="text-base md:text-lg leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}}
        >
          Sou <strong>Elizabeth Melo</strong>, desenvolvedora Front-end apaixonada por transformar ideias em experiências digitais envolventes. Tenho experiência com tecnologias modernas como <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>, com foco em performance, responsividade e design intuitivo. Estou sempre em busca de evoluir, criar soluções criativas e entregar interfaces que realmente conectam com as pessoas.
        </motion.p>
      </div>
    </section>
  );
}

