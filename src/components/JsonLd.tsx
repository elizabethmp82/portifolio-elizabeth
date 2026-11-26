const SITE_URL = 'https://elizabethmelo.com'
const HOME_URL = `${SITE_URL}/`

const PERSON_ID = `${HOME_URL}#person`
const WEBSITE_ID = `${HOME_URL}#website`
const PROFILE_ID = `${HOME_URL}#profilepage`

const NAME = 'Elizabeth Melo'
const JOB_TITLE = 'Desenvolvedora Full Stack'

const DESCRIPTION =
  'Desenvolvedora Full Stack em Belém, PA. Transformo ideias em soluções digitais, unindo tecnologia, criatividade e experiências intuitivas.'

/**
 * Dados estruturados (Schema.org).
 *
 * Person: identidade profissional.
 * WebSite: site oficial.
 * ProfilePage: página dedicada ao perfil profissional.
 *
 * As entidades são relacionadas por identificadores @id.
 */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: NAME,
      url: HOME_URL,
      image: `${SITE_URL}/avatar.png`,
      jobTitle: JOB_TITLE,
      description: DESCRIPTION,
      email: 'mailto:meloelizabethp@gmail.com',

      mainEntityOfPage: {
        '@id': PROFILE_ID,
      },

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

      sameAs: [
        'https://github.com/elizabethmp82',
        'https://www.linkedin.com/in/melo-elizabeth',
      ],
    },

    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: HOME_URL,
      name: NAME,
      inLanguage: 'pt-BR',

      author: {
        '@id': PERSON_ID,
      },
    },

    {
      '@type': 'ProfilePage',
      '@id': PROFILE_ID,
      url: HOME_URL,
      name: `${NAME} | ${JOB_TITLE}`,
      description: DESCRIPTION,
      inLanguage: 'pt-BR',

      isPartOf: {
        '@id': WEBSITE_ID,
      },

      mainEntity: {
        '@id': PERSON_ID,
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para que o conteúdo não feche a tag <script> antes da hora.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  )
}
