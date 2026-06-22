import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ListaUsuarios.css';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function obtenerUsuarios() {
      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const datos = await respuesta.json();
        setUsuarios(datos);
      } catch (error) {
        setError('No se pudieron cargar los usuarios.');
      } finally {
        setCargando(false);
      }
    }

    obtenerUsuarios();
  }, []);

  if (cargando) return <p>Cargando usuarios...</p>;
  if (error) return <p className="lista-usuarios-error">{error}</p>;

  return (
    <div>
      <h3>Lista de usuarios</h3>
      <div className="user-grid">
        {usuarios.map((usuario) => (
          // La URL incluye el id para que DetalleUsuario pueda leerlo con useParams().
          <Link className="user-card" key={usuario.id} to={`/usuarios/${usuario.id}`}>
            <strong>{usuario.name}</strong>
            <span>{usuario.email}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
