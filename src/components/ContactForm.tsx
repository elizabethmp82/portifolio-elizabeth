'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from './SocialLinks';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('enviando...');

    emailjs.send('service_g7czj5i', 'template_cypm5eb', formData, '1wzUe8UQzU0YKdJaQ')
      .then(() => {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error(err);
        setStatus('Erro ao enviar. Tente novamente.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl shadow-soft max-w-lg mx-auto">
      <h2 className="text-xl font-title text-dark">Contato</h2>

      <input
        type="text"
        name="name"
        placeholder="Nome"
        required
        onChange={handleChange}
        value={formData.name}
        className="w-full border border-gray-light px-4 py-2 rounded-xl focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        onChange={handleChange}
        value={formData.email}
        className="w-full border border-gray-light px-4 py-2 rounded-xl focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        rows={4}
        required
        onChange={handleChange}
        value={formData.message}
        className="w-full border border-gray-light px-4 py-2 rounded-xl focus:outline-none resize-none"
      ></textarea>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 rounded-xl transition duration-300">
        Enviar
      </button>

      <p className="text-sm text-gray-dark">{status}</p>
    </form>
  );
}
