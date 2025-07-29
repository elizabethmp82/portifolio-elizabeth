import SocialLinks from "@/components/SocialLinks"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-background-light">
      <div className="max-w-3xl mx-auto text-center">
        <ContactForm />
        <SocialLinks />
      </div>
    </section>
  )
}
