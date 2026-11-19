# Portfólio — Elizabeth Melo

Portfólio pessoal de Elizabeth Melo, desenvolvedora Full Stack, construído com Next.js.

## Tecnologias

- **Next.js 16** com App Router e Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** — ícones

As animações são feitas apenas com CSS (`globals.css`) e respeitam `prefers-reduced-motion`.

## Estrutura

```
public/
├── avatar.png                    # Foto do hero
├── Curriculo-Elizabeth Melo.pdf  # Currículo (botão "Currículo")
└── projetos/                     # Screenshots dos projetos
src/
├── app/
│   ├── layout.tsx       # Layout global, fontes, metadados e GTM
│   ├── page.tsx         # Composição das seções
│   ├── globals.css      # Tema (cores, fontes) e animações
│   └── icon.svg         # Favicon (marca e/m)
└── components/
    ├── Header.tsx         # Navegação fixa, menu mobile e barra de progresso
    ├── Hero.tsx           # Apresentação com efeito de digitação
    ├── Sobre.tsx          # Sobre mim
    ├── Projetos.tsx       # Projetos em destaque
    ├── Especialidades.tsx # Especialidades e tecnologias
    ├── Contato.tsx        # Chamada para contato
    ├── Footer.tsx         # Rodapé
    ├── Logo.tsx           # Marca <em/>
    ├── SectionLabel.tsx   # Rótulo das seções
    └── RevealSection.tsx  # Seção com animação ao entrar na tela
doc/design/                # Referência de design (mockup e identidade visual)
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando         | Descrição                                 |
|-----------------|-------------------------------------------|
| `npm run dev`   | Servidor de desenvolvimento com Turbopack |
| `npm run build` | Build de produção                         |
| `npm run start` | Inicia o servidor de produção             |
| `npm run lint`  | Verifica o código com ESLint              |

## Contato

- **E-mail:** meloelizabethp@gmail.com
