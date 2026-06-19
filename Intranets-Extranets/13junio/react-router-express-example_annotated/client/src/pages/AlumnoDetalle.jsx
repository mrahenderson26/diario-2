// =============================================================
// ALUMNO DETAIL PAGE
// =============================================================
// This page demonstrates a dynamic React Router route and a dynamic
// Express API route.
//
// Frontend route handled by React Router:
//   /alumnos/:id
//   Example: /alumnos/2
//
// Backend route handled by Express:
//   GET /api/alumnos/:id
//   Example: /api/alumnos/2

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AlumnoDetalle() {
  // useParams() captures dynamic values from the frontend URL.
  // If the browser URL is /alumnos/2, then id will be "2".
  const { id } = useParams();

  // alumno stores the object received from Express.
  const [alumno, setAlumno] = useState(null);

  // error stores a possible error message from Express.
  const [error, setError] = useState("");

  // cargando controls the loading state.
  const [cargando, setCargando] = useState(true);

  // This effect runs when the component first appears and whenever id changes.
  useEffect(function () {
    async function cargarAlumno() {
      setCargando(true);
      setError("");

      // React uses the id captured by React Router to call Express.
      // Example: if id is 2, this fetches /api/alumnos/2
      const respuesta = await fetch(`/api/alumnos/${id}`);
      const datos = await respuesta.json();

      // respuesta.ok is false for HTTP errors like 404 or 400.
      if (!respuesta.ok) {
        setError(datos.mensaje);
        setAlumno(null);
      } else {
        setAlumno(datos);
      }

      setCargando(false);
    }

    cargarAlumno();
  }, [id]);

  if (cargando) {
    return <p>Cargando alumno...</p>;
  }

  if (error) {
    return (
      <section className="card">
        <h2>Error</h2>
        <p>{error}</p>
        <Link to="/alumnos">Volver a alumnos</Link>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>{alumno.nombre}</h2>

      <p>
        React Router captured this frontend URL parameter:
      </p>

      <pre>/alumnos/{id}</pre>

      <p>
        Then React fetched this Express API route:
      </p>

      <pre>/api/alumnos/{id}</pre>

      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Ciudad:</strong> {alumno.ciudad}</p>

      <Link to="/alumnos">Volver a alumnos</Link>
    </section>
  );
}
