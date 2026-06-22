import Producto from './Producto';
import './ListaProductos.css';

export default function ListaProductos({ productos }) {
  return (
    <div className="lista-productos">
      {productos.map((producto) => (
        // key helps React identify each rendered item if the list changes.
        <Producto
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}
