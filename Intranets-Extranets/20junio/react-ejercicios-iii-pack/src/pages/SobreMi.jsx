import './SobreMi.css';

export default function SobreMi() {
  return (
    <section className="sobre-mi-page">
      <h2>Sobre mí</h2>
      <p>
        Esta página representa el perfil de un alumno. Sirve para practicar cómo
        mostrar contenido diferente según la ruta.
      </p>

      <div className="profile-box">
        <p>
          <strong>Nombre:</strong> Alumno de React
        </p>
        <p>
          <strong>Objetivo:</strong> Aprender componentes, estados, efectos y rutas
        </p>
        <p>
          <strong>Nivel:</strong> Inicial/intermedio
        </p>
      </div>
    </section>
  );
}
