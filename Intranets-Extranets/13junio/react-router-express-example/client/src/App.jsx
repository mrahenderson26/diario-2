import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1>React Router + Express</h1>

        <nav className="main-nav">
          <Link to="/">Inicio</Link>
          <Link to="/alumnos">Alumnos</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
