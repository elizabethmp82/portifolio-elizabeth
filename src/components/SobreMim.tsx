
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
          Sou <strong>Elizabeth Melo</strong>, desenvolvedora Full Stack apaixonada por construir aplicações web modernas, escaláveis e de alta performance. Tenho experiência com <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> e <strong>Tailwind</strong> no front-end, e <strong>Node.js</strong>, <strong>Python</strong> e <strong>PostgreSQL</strong> no back-end. Gosto de atuar em todo o ciclo de desenvolvimento — do levantamento de requisitos à entrega — sempre com foco em qualidade, boas práticas e soluções que geram valor real para o usuário.
        </motion.p>
      </div>
    </section>
  );
}

