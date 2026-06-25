import TituloDinamico from './components/ejercicios/TituloDinamico.jsx';
import MensajeAlCargar from './components/ejercicios/MensajeAlCargar.jsx';
import RelojDigital from './components/ejercicios/RelojDigital.jsx';
import ApiUsuariosSimple from './components/ejercicios/ApiUsuariosSimple.jsx';
import ApiPosts from './components/ejercicios/ApiPosts.jsx';

export default function App() {
  return (
    <div>
      <TituloDinamico />
      <MensajeAlCargar />
      <RelojDigital />
      <ApiUsuariosSimple />
      <ApiPosts />
    </div>
  );
}
