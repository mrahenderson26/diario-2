import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`btn btn-primary rounded-circle position-fixed d-flex align-items-center justify-content-center shadow${
        visible ? '' : ' invisible'
      }`}
      style={{ bottom: 30, right: 30, width: 48, height: 48, zIndex: 1050 }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up fs-5" />
    </button>
  )
}
