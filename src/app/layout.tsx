import type { Metadata } from 'next'

import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

const GTM_ID = 'GTM-K94PCPDX'

// Importando nosso novo componente Header
import Navbar from '../components/Navbar'

const horizonFont = localFont({
  src: '../assets/fonts/Horizon.otf',
  variable: '--font-principal',
})

export const metadata: Metadata = {
  title: 'Elizabeth Melo | Desenvolvedora Full Stack',
  description: 'Portfólio Elizabeth Melo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className={`${horizonFont.variable} font-sans text-text-light`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Adicionamos o Header aqui. Ele aparecerá em todas as páginas. */}
        <Navbar />
        
        {/* O 'children' representa o conteúdo de cada página (page.tsx) */}
        <main>{children}</main>
      </body>
    </html>
  )
}
