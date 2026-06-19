// =============================================================
// MAIN REACT LAYOUT
// =============================================================
// This component is used as the parent layout in main.jsx.
// It contains the navigation menu that appears on every page.

import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>React Router + Express</h1>

        <nav className="main-nav">
          {/*
            Link is React Router's version of <a> for internal navigation.
            It changes the frontend page without doing a full browser reload.
          */}
          <Link to="/">Inicio</Link>
          <Link to="/alumnos">Alumnos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main className="main-content">
        {/*
          Outlet is where the selected child page appears.

          For example:
          /          -> Home appears here
          /alumnos   -> Alumnos appears here
          /contacto  -> Contacto appears here
        */}
        <Outlet />
      </main>
    </div>
  );
}
