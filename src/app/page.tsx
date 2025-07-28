// "use client";
import Hero from "../components/Hero";
import SobreMim from "@/components/SobreMim";
import Habilidades from "@/components/Habilidades";
import Projetos from "@/components/Projetos";
import TrajetoriaSection from "@/components/TrajetoriaSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <>
      <Hero/>
        <SobreMim />
        <Habilidades />
        <Projetos />
        <TrajetoriaSection/>
        <ContactSection/>
    
      
    </>
  );
}
