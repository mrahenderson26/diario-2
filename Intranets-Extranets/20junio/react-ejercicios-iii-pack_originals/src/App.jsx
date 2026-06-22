import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Menu from './components/Menu.jsx';
import Inicio from './pages/Inicio.jsx';
import Empresa from './pages/Empresa.jsx';
import Contacto from './pages/Contacto.jsx';
import Cursos from './pages/Cursos.jsx';
import SobreMi from './pages/SobreMi.jsx';
import Pagina404 from './pages/Pagina404.jsx';
import UsuariosLayout from './pages/usuarios/UsuariosLayout.jsx';
import ListaUsuarios from './pages/usuarios/ListaUsuarios.jsx';
import DetalleUsuario from './pages/usuarios/DetalleUsuario.jsx';

/*
  App.jsx monta la estructura fija de la aplicación y decide
  qué componente se muestra según la URL.
*/

export default function App() {
  return (
    <div className="app-shell">
      {/* Header y Menu se quedan visibles aunque cambie la ruta. */}
      <Header />
      <Menu />

      <main>
        {/* Routes funciona como un selector: renderiza la primera ruta que coincide. */}
        <Routes>
          <Route path="/" element={<Inicio />} />

          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="/cursos" element={<Cursos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />

          {/* Ruta padre: UsuariosLayout contiene el <Outlet /> para sus rutas hijas. */}
          <Route path="/usuarios" element={<UsuariosLayout />}>
            {/* index significa: cuando la URL sea exactamente /usuarios. */}
            <Route index element={<ListaUsuarios />} />

            {/* :id es un parámetro dinámico; su valor se lee con useParams(). */}
            <Route path=":id" element={<DetalleUsuario />} />
          </Route>

          {/* El asterisco captura cualquier URL que no coincida antes. */}
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>
    </div>
  );
}
