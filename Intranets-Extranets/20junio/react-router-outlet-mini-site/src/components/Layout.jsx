import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">React Router demo</p>
          <h1>Mini Site with Layout + Outlet</h1>
        </div>

        <nav className="main-nav">
          {/*
            Link changes the URL without doing a full page reload.
            It is the React Router replacement for simple internal <a href="..."> links.
          */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="page-panel">
        {/*
          This is the key idea:
          Outlet is the placeholder where the matched CHILD route appears.

          /             -> Home appears here
          /about        -> About appears here
          /services     -> ServicesLayout appears here
          /contact      -> Contact appears here
        */}
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>This footer is in Layout, so it stays visible on every page.</p>
      </footer>
    </div>
  )
}