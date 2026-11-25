# `<em/>` Elizabeth Melo — Portfólio

Portfólio pessoal de **Elizabeth Melo**, desenvolvedora Full Stack. Uma página única, rápida e
responsiva que apresenta quem eu sou, os projetos que desenvolvi e como entrar em contato.

🔗 **[elizabethmelo.com](https://elizabethmelo.com)**

> **O conceito:** `<em>` é a tag HTML de *ênfase*, e também as minhas iniciais. Uma marca que
> fala a língua de quem programa e diz: "presta atenção nesse trabalho".

---

## ✨ Destaques

- **Página única** com as seções Início, Sobre, Projetos, Especialidades e Contato
- **Responsiva**: o layout se adapta do celular ao desktop
- **Animações só com CSS**: digitação no hero, revelação ao rolar e microinterações,
  respeitando `prefers-reduced-motion`
- **Navegação inteligente**: o menu destaca a seção visível e mostra uma barra de progresso de leitura
- **Acessível**: HTML semântico, foco visível, `aria-*` nos controles e alvos de toque de 44px
- **Leve**: página estática, com apenas 4 dependências de produção

## 🛠️ Tecnologias

| Camada      | Ferramenta                                   |
|-------------|----------------------------------------------|
| Framework   | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI          | React 19 + TypeScript                        |
| Estilos     | Tailwind CSS v4                              |
| Ícones      | [Lucide](https://lucide.dev)                 |
| Fontes      | Space Grotesk, Inter e JetBrains Mono (`next/font`) |
| Analytics   | Google Tag Manager                           |

## 🎨 Identidade visual

| Cor        | Hex       | Uso                         |
|------------|-----------|-----------------------------|
| Tinta      | `#1F1720` | Texto e fundo do contato    |
| Acento     | `#C2391B` | Links, botões e destaques   |
| Pêssego    | `#FBD3C9` | Favicon e superfícies       |
| Lilás      | `#D9CBF5` | Detalhes decorativos        |
| Creme      | `#FFF7F4` | Fundo da página             |

Os tokens ficam no bloco `@theme` de [`src/app/globals.css`](src/app/globals.css) e viram
classes do Tailwind (`bg-cream`, `text-accent`, `border-line`...).

## 📁 Estrutura

```
public/
├── avatar.png                    # Foto do hero
├── Curriculo-Elizabeth Melo.pdf  # Currículo (botão "Currículo")
└── projetos/                     # Screenshots dos projetos
src/
├── app/
│   ├── layout.tsx       # Layout global: fontes, metadados, GTM, Header e Footer
│   ├── page.tsx         # Composição das seções
│   ├── globals.css      # Tema (cores e fontes) e animações
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
```

## 🚀 Como rodar

Pré-requisito: **Node.js 20.9+**.

```bash
git clone https://github.com/elizabethmp82/portifolio-elizabeth.git
cd portifolio-elizabeth
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

| Comando         | Descrição                                 |
|-----------------|-------------------------------------------|
| `npm run dev`   | Servidor de desenvolvimento com Turbopack |
| `npm run build` | Build de produção                         |
| `npm run start` | Inicia o servidor de produção             |
| `npm run lint`  | Verifica o código com ESLint              |

## ➕ Adicionando um projeto

1. Salve a screenshot em `public/projetos/` (de preferência em proporção 16:10).
2. Adicione um item na lista `outros` em [`src/components/Projetos.tsx`](src/components/Projetos.tsx):

```ts
{
  nome: 'Meu Projeto',
  descricao: 'O que ele faz, em uma frase.',
  tags: ['React', 'Node.js'],
  imagem: '/projetos/meu-projeto.png',
  link: 'https://meuprojeto.com', // opcional: sem link, o card fica sem a seta
},
```

## 📬 Contato

- **LinkedIn:** [melo-elizabeth](https://www.linkedin.com/in/melo-elizabeth)
- **GitHub:** [elizabethmp82](https://github.com/elizabethmp82)
- **E-mail:** meloelizabethp@gmail.com

---

<sub>© Elizabeth Melo</sub>
