import { useEffect, useState } from 'react';

export default function ApiUsuariosSimple() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // La función es async, pero se llama desde dentro del efecto.
    async function obtenerUsuarios() {
      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (error) {
        setError('No se pudieron cargar los usuarios.');
      } finally {
        // Evita que el mensaje de carga se quede visible para siempre.
        setCargando(false);
      }
    }

    obtenerUsuarios();
  }, []);

  return (
    <section>
      <h3>API de usuarios</h3>
      {cargando && <p>Cargando usuarios...</p>}
      {error && <p>{error}</p>}
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.name} - {usuario.email}
          </li>
        ))}
      </ul>
    </section>
  );
}
