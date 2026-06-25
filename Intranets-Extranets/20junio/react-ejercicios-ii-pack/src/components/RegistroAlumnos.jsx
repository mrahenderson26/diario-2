import { useState } from 'react';

export default function RegistroAlumnos() {
  const [nombreAlumno, setNombreAlumno] = useState('');
  const [apellidosAlumno, setApellidosAlumno] = useState('');
  const [emailAlumno, setEmailAlumno] = useState('');
  const [alumnosRegistrados, setAlumnosRegistrados] = useState([]);

  function registrarAlumno(e) {
    e.preventDefault();

    if (nombreAlumno.trim() === '' || apellidosAlumno.trim() === '' || emailAlumno.trim() === '') {
      alert('Rellena nombre, apellidos y email');
      return;
    }

    const nuevoAlumno = {
      id: Date.now(),
      nombre: nombreAlumno,
      apellidos: apellidosAlumno,
      email: emailAlumno
    };

    setAlumnosRegistrados([...alumnosRegistrados, nuevoAlumno]);

    setNombreAlumno('');
    setApellidosAlumno('');
    setEmailAlumno('');
  }

  return (
    <>
      <form onSubmit={registrarAlumno}>
        <input type="text" value={nombreAlumno} onChange={(e) => setNombreAlumno(e.target.value)} placeholder="Nombre"/>

        <input type="text" value={apellidosAlumno} onChange={(e) => setApellidosAlumno(e.target.value)} placeholder="Apellidos"/>

        <input type="email" value={emailAlumno} onChange={(e) => setEmailAlumno(e.target.value)} placeholder="Email"/>

        <button type="submit">Registrar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {alumnosRegistrados.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellidos}</td>
              <td>{alumno.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {alumnosRegistrados.length === 0 && (
        <p>Todavía no hay alumnos registrados.</p>
      )}
    </>
  );
}
