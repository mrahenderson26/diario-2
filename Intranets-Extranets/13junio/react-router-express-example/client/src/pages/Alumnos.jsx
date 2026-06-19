import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(function () {
    async function cargarAlumnos() {
      const respuesta = await fetch("/api/alumnos");
      const datos = await respuesta.json();

      setAlumnos(datos);
      setCargando(false);
    }

    cargarAlumnos();
  }, []);

  if (cargando) {
    return <p>Cargando alumnos...</p>;
  }

  return (
    <section className="card">
      <h2>Alumnos</h2>

      <p>
        This page uses React Router for the page URL, then fetches data from
        the Express GET route <code>/api/alumnos</code>.
      </p>

      <ul className="student-list">
        {alumnos.map(function (alumno) {
          return (
            <li key={alumno.id}>
              <Link to={`/alumnos/${alumno.id}`}>
                {alumno.nombre}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
