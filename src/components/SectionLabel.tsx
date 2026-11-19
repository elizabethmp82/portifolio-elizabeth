export default function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <p
      className={`m-0 font-mono text-xs font-semibold tracking-[0.16em] ${dark ? 'text-coral' : 'text-accent'}`}
    >
      {children}
    </p>
  )
}
