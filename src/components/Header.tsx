'use client'
import { useEffect, useRef, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import Logo from './Logo'

export const CURRICULO_URL = '/Curriculo-Elizabeth%20Melo.pdf'

const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'especialidades', label: 'Especialidades' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [active, setActive] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const lockUntil = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const y = window.scrollY || doc.scrollTop || 0
      const max = Math.max(1, doc.scrollHeight - window.innerHeight)
      let current = 'inicio'
      sections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 160) current = id
      })
      if (window.innerHeight + y >= doc.scrollHeight - 4) current = 'contato'

      setProgress(Math.min(100, (y / max) * 100))
      setScrolled(y > 8)
      if (Date.now() > lockUntil.current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    lockUntil.current = Date.now() + 900
    setActive(id)
    setMenuOpen(false)
  }

  const navLinks = (mobile = false) =>
    sections.map((s) => (
      <a
        key={s.id}
        href={`#${s.id}`}
        onClick={() => go(s.id)}
        aria-current={s.id === active ? 'location' : undefined}
        className={`navlink ${s.id === active ? 'is-active' : ''} ${mobile ? '!px-0 !text-lg' : ''}`}
      >
        {s.label}
      </a>
    ))

  return (
    <header
      className={`hdr sticky top-0 z-20 border-b border-border/80 bg-bg/80 backdrop-blur-md ${scrolled ? 'is-scrolled' : ''}`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-3"
      >
        <a
          href="#inicio"
          onClick={() => go('inicio')}
          className="inline-flex min-h-11 items-center gap-2.5 whitespace-nowrap text-ink no-underline"
        >
          <Logo animated className="text-[22px]" />
          <span className="font-display text-[17px] font-bold tracking-[-0.02em] min-[360px]:text-[19px]">Elizabeth Melo</span>
        </a>

        <div className="hidden items-center gap-2 min-[861px]:flex">{navLinks()}</div>

        <a
          href={CURRICULO_URL}
          target="_blank"
          rel="noopener"
          className="btn btn-ghost hidden min-h-11 items-center gap-2 rounded-full border-[1.5px] border-ink px-[18px] py-2.5 text-sm font-semibold text-ink no-underline min-[861px]:inline-flex"
        >
          <Download size={16} aria-hidden="true" />
          Currículo
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border-[1.5px] border-border bg-white text-ink min-[861px]:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-0.5 border-t border-border px-6 pt-2 pb-5 min-[861px]:hidden">
          {navLinks(true)}
          <a
            href={CURRICULO_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost mt-2.5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[1.5px] border-ink p-3 font-semibold text-ink no-underline"
          >
            Baixar currículo
          </a>
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-0.5 rounded-r-sm bg-accent"
        style={{ width: `${progress.toFixed(2)}%` }}
      />
    </header>
  )
}
