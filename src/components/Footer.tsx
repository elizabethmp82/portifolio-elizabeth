import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-6 pt-2 pb-10 text-[13px] text-text-2">
      <span className="inline-flex items-center gap-3">
        <Logo className="text-base" />© {new Date().getFullYear()} Elizabeth Melo
      </span>
    </footer>
  )
}
