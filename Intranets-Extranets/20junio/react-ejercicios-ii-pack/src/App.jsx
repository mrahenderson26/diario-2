import CalculadoraSimple from './components/CalculadoraSimple.jsx';
import CambiarColor from './components/CambiarColor.jsx';
import MostrarOcultarTexto from './components/MostrarOcultarTexto.jsx';
import SaludoPersonalizado from './components/SaludoPersonalizado.jsx';
import ContadorCaracteres from './components/ContadorCaracteres.jsx';
import RegistroAlumnos from './components/RegistroAlumnos.jsx';
import PerfilUsuario from './components/PerfilUsuario.jsx';
import TarjetaEditable from './components/TarjetaEditable.jsx';
import ListaAlumnos from './components/ListaAlumnos.jsx';

export default function App() {
  return (
    <>
      <CalculadoraSimple />
      <CambiarColor />
      <MostrarOcultarTexto />
      <SaludoPersonalizado />
      <ContadorCaracteres />
      <RegistroAlumnos />
      <PerfilUsuario />
      <TarjetaEditable />
      <ListaAlumnos />
    </>
  );
}
