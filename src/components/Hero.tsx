'use client'
import Image from "next/image";

import Foto from "../../public/avatar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section
      id="inicio"
      className="bg-surface text-text-dark px-4 md:px-12 lg:px-32 py-36">
      <div  ref={ref} className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-1440px mx-auto">
         <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left">
       <div  className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-medium">Olá, eu sou</h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-title mt-2">
            ELIZABETH MELO
          </h1>
          <p className="mt-4 text-lg">Desenvolvedora Front-end</p>
        <a href="/Curriculo-Elizabeth Melo.pdf"  download className="inline-block mt-6 px-6 py-2 bg-primary !text-white font-semibold rounded-xl hover:opacity-90 transition">
          Conheça Minha Trajetória
           </a>
        </div>
       </motion.div>
       
         <motion.div style={{ y }} 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           className="flex-1 flex justify-center">
          <Image
            src={Foto}
            alt="Foto de Elizabeth Melo"
            width={350}
            height={250}
            className="rounded-full shadow-lg object-cover"
            priority />
        </motion.div>
      </div>
    </section>
  );
}

