import { NavLink } from 'react-router-dom';
import './Menu.css';

export default function Menu() {
  return (
    <nav className="top-menu">
      {/* NavLink añade automáticamente la clase "active" cuando su ruta coincide. */}
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/empresa">Empresa</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <NavLink to="/cursos">Cursos</NavLink>
      <NavLink to="/sobre-mi">Sobre mí</NavLink>
      <NavLink to="/usuarios">Usuarios</NavLink>

      {/* Esta URL no existe para probar la ruta comodín path="*". */}
      <NavLink to="/ruta-inventada">Probar 404</NavLink>
    </nav>
  );
}
