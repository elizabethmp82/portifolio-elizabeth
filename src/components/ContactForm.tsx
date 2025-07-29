"use client";
import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import emailjs from "@emailjs/browser";
import Toast from "../components/Toast";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState<{ type: "success" | "error" | "loading"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({ type: "loading", message: "Enviando..." });

    emailjs
      .send("service_nwsmgq7", "template_cypm5eb", formData, "1wzUe8UQzU0YKdJaQ")
      .then(() => {
        setToast({ type: "success", message: "Mensagem enviada com sucesso!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setToast({ type: "error", message: "Erro ao enviar. Tente novamente." });
      });
  };

  return (
    <section id="contato" className="py-20 ">
      {toast && <Toast message={toast.message} type={toast.type} />}

      <motion.div className="max-w-3xl mx-auto px-4"
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1}} 
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Entre em Contato</h2>
        <p className="text-center text-base text-gray-600 mb-10">Fico feliz em conversar! Você pode me chamar pelas redes abaixo ou enviar um e-mail pelo formulário.</p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl p-8 rounded-2xl space-y-6 transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            placeholder="Sua mensagem..."
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary focus:outline-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 bg-primary hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
          >
            Enviar Mensagem <SendHorizonal size={18} />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
