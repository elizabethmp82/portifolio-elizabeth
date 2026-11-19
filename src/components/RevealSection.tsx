'use client'
import { useEffect, useRef, useState } from 'react'

type RevealSectionProps = React.ComponentPropsWithoutRef<'section'>

/**
 * <section> que recebe a classe "in" ao entrar na tela,
 * disparando a animação dos filhos marcados com "reveal".
 */
export default function RevealSection({ className = '', children, ...rest }: RevealSectionProps) {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className={`sec ${visible ? 'in' : ''} ${className}`} {...rest}>
      {children}
    </section>
  )
}
