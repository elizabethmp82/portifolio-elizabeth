import type { Metadata } from 'next'

import localFont from 'next/font/local'
import './globals.css'

// Importando nosso novo componente Header
import Navbar from '../components/Navbar'

const horizonFont = localFont({
  src: '../assets/fonts/Horizon.otf',
  variable: '--font-principal',
})

export const metadata: Metadata = {
  title: 'Elizabeth Melo | Desenvolvedora Front-end',
  description: 'Portfólio Elizabeth Melo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${horizonFont.variable} font-sans text-text-light`}>
        {/* Adicionamos o Header aqui. Ele aparecerá em todas as páginas. */}
        <Navbar />
        
        {/* O 'children' representa o conteúdo de cada página (page.tsx) */}
        <main>{children}</main>
      </body>
    </html>
  )
}
