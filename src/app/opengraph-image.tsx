import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const alt = 'Elizabeth Melo — Desenvolvedora Full Stack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const colors = {
  ink: '#1F1720',
  accent: '#C2391B',
  cream: '#FFF7F4',
  blush: '#F6E3DC',
  peach: '#F6D3C7',
  lilac: '#D9CBF5',
  muted: '#5E5260',
}

/** Baixa do Google Fonts só os caracteres usados (formato TTF, aceito pelo ImageResponse). */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)
  if (!src) throw new Error(`Fonte não encontrada: ${family}`)
  return (await fetch(src[1])).arrayBuffer()
}

export default async function OpengraphImage() {
  const name = 'Elizabeth Melo'
  const role = 'Desenvolvedora Full Stack'
  const tagline = 'Transformo ideias em soluções digitais.'
  const logo = '<em/>'
  const domain = 'elizabethmelo.com'

  const [grotesk, groteskRegular, mono, avatar] = await Promise.all([
    loadGoogleFont('Space+Grotesk', 700, name + role),
    loadGoogleFont('Space+Grotesk', 400, tagline),
    loadGoogleFont('JetBrains+Mono', 700, logo + domain + role.toUpperCase()),
    readFile(join(process.cwd(), 'public/avatar.png')),
  ])
  const avatarSrc = `data:image/png;base64,${avatar.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
          background: colors.cream,
          fontFamily: 'Space Grotesk',
          color: colors.ink,
        }}
      >
        {/* Texto */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div style={{ display: 'flex', fontFamily: 'JetBrains Mono', fontSize: 56, letterSpacing: -2 }}>
            <span style={{ color: colors.accent }}>&lt;</span>
            <span>em</span>
            <span style={{ color: colors.accent }}>/&gt;</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 48,
              fontFamily: 'JetBrains Mono',
              fontSize: 22,
              letterSpacing: 3,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, background: colors.accent }} />
            {role.toUpperCase()}
          </div>

          <div style={{ display: 'flex', marginTop: 18, fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {name}
          </div>

          <div style={{ display: 'flex', marginTop: 22, fontSize: 30, fontWeight: 400, color: colors.muted }}>
            {tagline}
          </div>

          <div style={{ display: 'flex', marginTop: 56, fontFamily: 'JetBrains Mono', fontSize: 24, color: colors.accent }}>
            {domain}
          </div>
        </div>

        {/* Foto */}
        <div style={{ display: 'flex', position: 'relative', width: 400, height: 440, alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 0,
              width: 380,
              height: 420,
              background: colors.blush,
              borderRadius: '42% 58% 63% 37% / 45% 41% 59% 55%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 30,
              left: 0,
              width: 110,
              height: 110,
              borderRadius: 30,
              background: colors.lilac,
              opacity: 0.7,
            }}
          />
          <img
            src={avatarSrc}
            alt=""
            width={300}
            height={300}
            style={{ borderRadius: 999, border: `10px solid ${colors.cream}`, objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: 30,
              right: 0,
              width: 96,
              height: 96,
              borderRadius: 26,
              background: colors.peach,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />
            </svg>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Space Grotesk', data: grotesk, weight: 700, style: 'normal' },
        { name: 'Space Grotesk', data: groteskRegular, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 700, style: 'normal' },
      ],
    },
  )
}
