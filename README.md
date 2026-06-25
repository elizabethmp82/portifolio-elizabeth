# Portfólio — Elizabeth Melo

Portfólio pessoal desenvolvido com Next.js, apresentando projetos, habilidades, trajetória profissional e formulário de contato.

## Tecnologias

- **Next.js 15** com App Router e Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animações
- **EmailJS** — envio de e-mails pelo formulário de contato
- **Lucide React** e **React Icons** — ícones

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            # Layout global, metadados e Navbar
│   ├── page.tsx              # Página principal (composição das seções)
│   └── globals.css           # Estilos globais
└── components/
    ├── Hero.tsx              # Seção inicial com apresentação
    ├── SobreMim.tsx          # Sobre mim
    ├── Habilidades.tsx       # Stack de tecnologias
    ├── Projetos.tsx          # Projetos em destaque
    ├── TrajetoriaSection.tsx # Trajetória profissional
    ├── ContactSection.tsx    # Seção de contato
    ├── ContactForm.tsx       # Formulário de contato (EmailJS)
    ├── Navbar.tsx            # Navegação
    ├── SocialLinks.tsx       # Links para redes sociais
    └── Toast.tsx             # Notificações de feedback
```

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando         | Descrição                              |
|-----------------|----------------------------------------|
| `npm run dev`   | Servidor de desenvolvimento com Turbopack |
| `npm run build` | Build de produção                      |
| `npm run start` | Inicia o servidor de produção          |
| `npm run lint`  | Verifica linting com ESLint            |

## Contato

- **E-mail:** meloelizabethp@gmail.com
