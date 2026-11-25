const SITE_URL = 'https://elizabethmelo.com'

/** Dados estruturados (schema.org) para buscadores: quem é a pessoa e qual é o site. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Elizabeth Melo',
      url: SITE_URL,
      image: `${SITE_URL}/avatar.png`,
      jobTitle: 'Desenvolvedora Full Stack',
      description:
        'Desenvolvedora Full Stack em Belém, PA. Transformo ideias em soluções digitais, unindo tecnologia, criatividade e experiências intuitivas.',
      email: 'mailto:meloelizabethp@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Belém',
        addressRegion: 'PA',
        addressCountry: 'BR',
      },
      knowsAbout: [
        'Desenvolvimento Web',
        'APIs',
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'C# / .NET',
        'PostgreSQL',
        'SQL',
      ],
      sameAs: ['https://github.com/elizabethmp82', 'https://www.linkedin.com/in/melo-elizabeth'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Elizabeth Melo',
      inLanguage: 'pt-BR',
      author: { '@id': `${SITE_URL}/#person` },
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para que o conteúdo não feche a tag <script> antes da hora.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
  )
}
