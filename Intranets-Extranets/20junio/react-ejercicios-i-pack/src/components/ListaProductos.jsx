import Producto from './Producto';

export default function ListaProductos({ productos }) {
  return (
    <div>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}
