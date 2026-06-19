export default function Home() {
  return (
    <section className="card">
      <h2>Inicio</h2>

      <p>
        This is a tiny example showing how React Router and Express work
        together.
      </p>

      <p>
        React Router controls these frontend pages:
      </p>

      <ul>
        <li>/</li>
        <li>/alumnos</li>
        <li>/alumnos/:id</li>
        <li>/contacto</li>
      </ul>

      <p>
        Express controls the backend API routes:
      </p>

      <ul>
        <li>GET /api/alumnos</li>
        <li>GET /api/alumnos/:id</li>
        <li>POST /api/mensajes</li>
      </ul>
    </section>
  );
}
