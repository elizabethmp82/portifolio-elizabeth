"use client";
import Logo from "../../public/logoEM.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-surface text-text-dark shadow-sm fixed top-0 w-full z-50">
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-12 lg:px-32 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo Elizabeth Melo"
            width={110}
            height={30}
            className="h-auto w-auto"
          />
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative group transition duration-300"
              >
                <span className="group-hover:text-primary transition">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Botão de menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 bg-surface">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition duration-300 text-text-dark hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
