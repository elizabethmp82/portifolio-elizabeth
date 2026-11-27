'use client'
import { useInView } from './RevealSection'

/**
 * Divisória entre seções desenhada como uma trilha de circuito.
 * Quando a própria linha fica visível (classe "on"), um pulso percorre a linha e acende o terminal.
 * Ela observa a si mesma, e não a seção, para a animação não acontecer antes de aparecer na tela.
 */
export default function PcbDivider({ dir = 'rtl' }: { dir?: 'rtl' | 'ltr' }) {
  const [ref, on] = useInView<HTMLDivElement>('0px 0px -10% 0px')

  return (
    <div ref={ref} className={`pcb-div ${dir} ${on ? 'on' : ''}`} aria-hidden="true">
      <svg
        className="el stroke-line"
        viewBox="0 0 40 40"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M34 0V14L9.25 38.75H0" />
      </svg>
      <span className="ln" />
      <span className="pl" />
      <span className="tm" />
    </div>
  )
}
