import type { Metadata } from 'next'
import { Instrument_Serif, Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'

const GTM_ID = 'GTM-K94PCPDX'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-jetbrains-mono',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elizabethmelo.com'),

  title: {
    default: 'Elizabeth Melo | Desenvolvedora Full Stack',
    template: '%s | Elizabeth Melo',
  },

  description:
    'Desenvolvedora Full Stack em Belém, PA. Conheça minha trajetória, projetos e soluções em desenvolvimento web, APIs e tecnologia.',

  authors: [{ name: 'Elizabeth Melo' }],

  creator: 'Elizabeth Melo',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://elizabethmelo.com',
    siteName: 'Elizabeth Melo',
    title: 'Elizabeth Melo | Desenvolvedora Full Stack',
    description:
      'Desenvolvedora Full Stack em Belém, PA. Transformo ideias em soluções digitais, unindo tecnologia, criatividade e experiências intuitivas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Elizabeth Melo — Desenvolvedora Full Stack',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Elizabeth Melo | Desenvolvedora Full Stack',
    description:
      'Desenvolvedora Full Stack em Belém, PA. Transformo ideias em soluções digitais, unindo tecnologia, criatividade e experiências intuitivas.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
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
      {/* suppressHydrationWarning: extensões do navegador injetam atributos no <html>/<body> */}
      <body className="font-sans text-ink bg-bg" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd />
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
