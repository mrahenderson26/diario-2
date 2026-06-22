import TituloDinamico from '../components/ejercicios/TituloDinamico.jsx';
import MensajeAlCargar from '../components/ejercicios/MensajeAlCargar.jsx';
import RelojDigital from '../components/ejercicios/RelojDigital.jsx';
import ApiUsuariosSimple from '../components/ejercicios/ApiUsuariosSimple.jsx';
import ApiPosts from '../components/ejercicios/ApiPosts.jsx';
import './Inicio.css';

export default function Inicio() {
  return (
    <section className="inicio-page">
      <h2>Inicio</h2>
      <p>
        Esta es la página principal. Aquí están los ejercicios de useEffect,
        fetch y una explicación visual de las rutas.
      </p>

      {/* Cada ejercicio está separado para que App/Inicio no acumulen demasiada lógica. */}
      <div className="exercise-grid">
        <TituloDinamico />
        <MensajeAlCargar />
        <RelojDigital />
        <ApiUsuariosSimple />
        <ApiPosts />
      </div>
    </section>
  );
}
