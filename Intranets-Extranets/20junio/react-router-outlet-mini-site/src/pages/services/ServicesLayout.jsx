import { Link, Outlet } from 'react-router-dom'

export default function ServicesLayout() {
  return (
    <section>
      <h2>Services section</h2>
      <p>
        This is a nested layout inside the main layout. It has its own menu and
        its own <code>{'<Outlet />'}</code>.
      </p>

      <nav className="sub-nav">
        {/*
          These are relative links because we are already inside /services.
          to="web-development" means /services/web-development
          to="translation" means /services/translation
        */}
        <Link to="/services">Services home</Link>
        <Link to="web-development">Web development</Link>
        <Link to="translation">Translation</Link>
      </nav>

      <div className="nested-panel">
        {/*
          Second Outlet:
          /services                 -> ServicesIndex appears here
          /services/web-development -> WebDev appears here
          /services/translation     -> Translation appears here
        */}
        <Outlet />
      </div>
    </section>
  )
}