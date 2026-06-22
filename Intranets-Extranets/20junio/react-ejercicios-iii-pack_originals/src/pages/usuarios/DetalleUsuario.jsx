import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DetalleUsuario.css';

export default function DetalleUsuario() {
  // useParams lee el valor dinámico de la URL: /usuarios/3 -> id = "3".
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function obtenerUsuario() {
      try {
        const respuesta = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const datos = await respuesta.json();

        // JSONPlaceholder devuelve {} si no encuentra el usuario.
        if (!datos.id) {
          setError('Usuario no encontrado.');
          return;
        }

        setUsuario(datos);
      } catch (error) {
        setError('No se pudo cargar el usuario.');
      } finally {
        setCargando(false);
      }
    }

    obtenerUsuario();
  }, [id]); // Si cambia el id de la URL, se pide otro usuario.

  // Estos returns cortan el renderizado normal hasta tener datos válidos.
  if (cargando) return <p>Cargando usuario...</p>;
  if (error) {
    return (
      <div>
        <p className="detalle-usuario-error">{error}</p>
        <Link className="detalle-usuario-link" to="/usuarios">
          Volver a usuarios
        </Link>
      </div>
    );
  }

  return (
    <div className="detalle-usuario-card">
      <h3>{usuario.name}</h3>
      <p>
        <strong>Email:</strong> {usuario.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {usuario.phone}
      </p>
      <p>
        <strong>Web:</strong> {usuario.website}
      </p>
      <p>
        <strong>Empresa:</strong> {usuario.company.name}
      </p>

      <Link className="detalle-usuario-link" to="/usuarios">
        Volver a la lista
      </Link>
    </div>
  );
}
