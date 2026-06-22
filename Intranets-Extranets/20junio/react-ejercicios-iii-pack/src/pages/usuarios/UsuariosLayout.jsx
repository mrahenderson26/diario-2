import { Outlet } from 'react-router-dom';
import './UsuariosLayout.css';

export default function UsuariosLayout() {
  return (
    <section className="usuarios-layout">
      <h2>Usuarios</h2>
      <p>
        Esta sección combina React Router, fetch y rutas dinámicas. La lista está
        en <code>/usuarios</code> y cada detalle en <code>/usuarios/:id</code>.
      </p>

      {/* Outlet muestra aquí la ruta hija: ListaUsuarios o DetalleUsuario. */}
      <Outlet />
    </section>
  );
}
