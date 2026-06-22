import { useState } from 'react';
import ExerciseCard from './ExerciseCard.jsx';
import './ListaAlumnos.css';

export default function ListaAlumnos() {
  const [nombreListaAlumno, setNombreListaAlumno] = useState('');
  const [listaAlumnos, setListaAlumnos] = useState([]);

  function anadirAlumnoLista(e) {
    // Sin esto, el submit del formulario recargaría la página.
    e.preventDefault();

    // trim evita añadir nombres vacíos hechos solo con espacios.
    if (nombreListaAlumno.trim() === '') return;

    const nuevoAlumno = {
      // Usamos un id para que React identifique cada <li> al renderizar la lista.
      id: Date.now(),
      nombre: nombreListaAlumno
    };

    // Creamos un array nuevo; no modificamos listaAlumnos directamente.
    setListaAlumnos([...listaAlumnos, nuevoAlumno]);
    setNombreListaAlumno('');
  }

  function eliminarAlumno(id) {
    // filter devuelve un nuevo array sin el alumno cuyo id coincida.
    const alumnosFiltrados = listaAlumnos.filter((alumno) => alumno.id !== id);
    setListaAlumnos(alumnosFiltrados);
  }

  return (
    <ExerciseCard
      className="lista-alumnos"
      number="9 y 10"
      title="Lista de alumnos y eliminar elementos"
      objective="Trabajar con arrays, renderizado y eliminación de elementos"
    >
      <form onSubmit={anadirAlumnoLista} className="lista-alumnos__form">
        <input
          type="text"
          value={nombreListaAlumno}
          onChange={(e) => setNombreListaAlumno(e.target.value)}
          placeholder="Nombre del alumno"
        />

        <button type="submit">Añadir alumno</button>
      </form>

      <ul className="lista-alumnos__list">
        {listaAlumnos.map((alumno) => (
          <li key={alumno.id}>
            <span>{alumno.nombre}</span>
            <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {listaAlumnos.length === 0 && (
        <p className="lista-alumnos__empty">Añade alumnos para verlos en la lista.</p>
      )}
    </ExerciseCard>
  );
}
