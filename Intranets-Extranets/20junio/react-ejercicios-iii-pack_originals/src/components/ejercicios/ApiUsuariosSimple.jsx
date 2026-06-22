import { useEffect, useState } from 'react';
import './ApiUsuariosSimple.css';

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
    <article className="api-usuarios-card">
      <h3>7. API de usuarios</h3>
      <p>Consume una API y muestra nombre y email.</p>

      {/* Estos renderizados condicionales dependen del estado actual. */}
      {cargando && <p>Cargando usuarios...</p>}
      {error && <p className="api-usuarios-error">{error}</p>}

      <div className="api-usuarios-table-wrapper">
        <table className="api-usuarios-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
