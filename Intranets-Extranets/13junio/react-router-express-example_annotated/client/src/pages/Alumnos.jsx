// =============================================================
// ALUMNOS PAGE
// =============================================================
// This page demonstrates a GET request from React to Express.
//
// Frontend route handled by React Router:
//   /alumnos
//
// Backend route handled by Express:
//   GET /api/alumnos

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Alumnos() {
  // alumnos stores the array received from Express.
  const [alumnos, setAlumnos] = useState([]);

  // cargando controls whether we show a loading message.
  const [cargando, setCargando] = useState(true);

  // useEffect runs after the component first appears on screen.
  // The empty dependency array [] means: run this effect once.
  useEffect(function () {
    async function cargarAlumnos() {
      // React asks Express for data.
      // Because vite.config.js has a proxy, this request goes to:
      // http://localhost:3000/api/alumnos
      const respuesta = await fetch("/api/alumnos");

      // Convert the JSON response into normal JavaScript data.
      const datos = await respuesta.json();

      // Store the data in state. This makes React re-render the page.
      setAlumnos(datos);

      // Loading has finished.
      setCargando(false);
    }

    // We define the async function above, then call it here.
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
              {/*
                This Link creates a frontend React Router URL.
                Example: /alumnos/2
                It does NOT directly call Express.
              */}
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
