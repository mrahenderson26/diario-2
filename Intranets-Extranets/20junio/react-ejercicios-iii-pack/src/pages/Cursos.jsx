import './Cursos.css';

export default function Cursos() {
  const cursos = ['React básico', 'Node y Express', 'SQL para backend'];

  return (
    <section className="cursos-page">
      <h2>Cursos</h2>
      <p>Ejemplo de página diferente para la ruta /cursos.</p>

      <ul className="cursos-list">
        {cursos.map((curso) => (
          // Aquí el texto del curso sirve como key porque no hay duplicados.
          <li key={curso}>{curso}</li>
        ))}
      </ul>
    </section>
  );
}
