import { useEffect, useRef } from 'react'

export default function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    )

    const el = ref.current
    if (el) {
      const targets = el.querySelectorAll('.hidden-anim, .hidden-left, .hidden-right, .hidden-scale')
      targets.forEach((t) => observer.observe(t))
    }

    return () => observer.disconnect()
  }, [])

  return ref
}
