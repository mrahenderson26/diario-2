import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function AlumnoDetalle() {
  const { id } = useParams();

  const [alumno, setAlumno] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(function () {
    async function cargarAlumno() {
      setCargando(true);
      setError("");

      const respuesta = await fetch(`/api/alumnos/${id}`);
      const datos = await respuesta.json();

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
