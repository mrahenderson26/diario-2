import { useState } from 'react';

export default function ListaAlumnos() {
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [listaAlumnos, setListaAlumnos] = useState([]);

  function anadirAlumnoLista(e) {
    e.preventDefault();

    if (nombreAlumno.trim() === '') return;

    const nuevoAlumno = {
      id: Date.now(),
      nombre: nombreAlumno
    };

    setListaAlumnos([...listaAlumnos, nuevoAlumno]);
    setNombreAlumno('');
  }

  function eliminarAlumno(id) {
    const alumnosFiltrados = listaAlumnos.filter((alumno) => alumno.id !== id);
    setListaAlumnos(alumnosFiltrados);
  }

  return (
    <>
      <form onSubmit={anadirAlumnoLista}>
        <input type="text" value={nombreAlumno} onChange={(e) => setNombreAlumno(e.target.value)} placeholder="Nombre del alumno" />

        <button type="submit">Añadir alumno</button>
      </form>

      <ul>
        {listaAlumnos.map((alumno) => (
          <li key={alumno.id}>
            <span>{alumno.nombre}</span>

            <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {listaAlumnos.length === 0 && (
        <p>Añade alumnos para verlos en la lista.</p>
      )}
    </>
  );
}

