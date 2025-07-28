import SocialLinks from "@/components/SocialLinks"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-background-light">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-title text-dark mb-6">Entre em Contato</h2>
        <p className="text-gray-dark mb-6">Você pode me chamar pelas redes abaixo ou enviar um e-mail pelo formulário.</p>

        {/* Formulário */}
        <ContactForm />

        {/* Redes Sociais */}
        <SocialLinks />
      </div>
    </section>
  )
}
