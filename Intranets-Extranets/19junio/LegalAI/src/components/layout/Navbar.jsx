import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../utils/constants'

export default function Navbar({ theme, toggleTheme }) {
  const { pathname } = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-brand-dark sticky-top" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          CriterIA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAV_LINKS.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link${pathname === path ? ' active' : ''}`}
                  aria-current={pathname === path ? 'page' : undefined}
                  to={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: 40, height: 40 }}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'}`} />
          </button>
        </div>
      </div>
    </nav>
  )
}
