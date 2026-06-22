import './App.css';
import Header from './components/Header.jsx';
import CalculadoraSimple from './components/CalculadoraSimple.jsx';
import CambiarColor from './components/CambiarColor.jsx';
import MostrarOcultarTexto from './components/MostrarOcultarTexto.jsx';
import SaludoPersonalizado from './components/SaludoPersonalizado.jsx';
import ContadorCaracteres from './components/ContadorCaracteres.jsx';
import RegistroAlumnos from './components/RegistroAlumnos.jsx';
import PerfilUsuario from './components/PerfilUsuario.jsx';
import TarjetaEditable from './components/TarjetaEditable.jsx';
import ListaAlumnos from './components/ListaAlumnos.jsx';

// App solo organiza la página: cada ejercicio tiene su propia lógica y su propio CSS.
export default function App() {
  return (
    <main className="page">
      <Header />

      {/* Los títulos separan los temas; los componentes de debajo funcionan de forma independiente. */}
      <h2 className="topic-title">Tema 1. Estado y eventos</h2>
      <CalculadoraSimple />
      <CambiarColor />
      <MostrarOcultarTexto />

      <h2 className="topic-title">Tema 2. Formularios</h2>
      <SaludoPersonalizado />
      <ContadorCaracteres />
      <RegistroAlumnos />

      <h2 className="topic-title">Tema 3. Estado con objetos</h2>
      <PerfilUsuario />
      <TarjetaEditable />

      <h2 className="topic-title">Tema 4. Estado con arrays</h2>
      <ListaAlumnos />
    </main>
  );
}
