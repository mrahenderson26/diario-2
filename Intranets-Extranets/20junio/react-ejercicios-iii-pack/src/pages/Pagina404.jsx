import { Link } from 'react-router-dom';
import './Pagina404.css';

export default function Pagina404() {
  return (
    <section className="pagina404-page">
      <h2>Error 404</h2>
      <p>Página no encontrada.</p>

      {/* Link navega con React Router sin recargar la página completa. */}
      <Link className="pagina404-link" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}
