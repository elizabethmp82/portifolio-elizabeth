'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Fica `true` (uma vez só) quando o elemento chega perto da área visível.
 * Por padrão dispara um pouco antes de entrar na tela (12% abaixo da borda);
 * passe outra `rootMargin` para disparar só quando ele já estiver visível.
 */
export function useInView<T extends Element>(rootMargin = '0px 0px 12% 0px') {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return [ref, visible] as const
}

type RevealSectionProps = React.ComponentPropsWithoutRef<'section'>

/**
 * <section> que recebe a classe "in" ao entrar na tela,
 * disparando a animação dos filhos marcados com "reveal".
 */
export default function RevealSection({ className = '', children, ...rest }: RevealSectionProps) {
  const [ref, visible] = useInView<HTMLElement>()

  return (
    <section ref={ref} className={`sec ${visible ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </section>
  )
}

/** <div> com o mesmo comportamento, para blocos com animação própria dentro de uma seção. */
export function RevealDiv({ className = '', children, ...rest }: React.ComponentPropsWithoutRef<'div'>) {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <div ref={ref} className={`${className} ${visible ? 'in' : ''}`} {...rest}>
      {children}
    </div>
  )
}
