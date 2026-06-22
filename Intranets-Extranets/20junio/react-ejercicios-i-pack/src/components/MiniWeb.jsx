import Cabecera from './Cabecera';
import Contenido from './Contenido';
import PiePagina from './PiePagina';
import './MiniWeb.css';

// Composition: this component is made by combining three smaller components.
export default function MiniWeb() {
  return (
    <div className="mini-web">
      <Cabecera />
      <Contenido />
      <PiePagina />
    </div>
  );
}
