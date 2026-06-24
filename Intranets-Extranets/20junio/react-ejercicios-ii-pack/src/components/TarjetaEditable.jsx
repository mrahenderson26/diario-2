import { useState } from 'react';

export default function TarjetaEditable() {
  const [producto, setProducto] = useState({
    nombre: 'Portátil',
    precio: 800
  });

  function actualizarProducto(propiedad, valor) {
    setProducto({
      // El spread conserva la propiedad que no estamos editando.
      ...producto,
      [propiedad]: valor
    });
  }

  return (
    <>
      <div>
        <h3>Producto: {producto.nombre}</h3>
        <p>Precio: {producto.precio}€</p>
      </div>

      <div>
        <input type="text" value={producto.nombre} onChange={(e) => actualizarProducto('nombre', e.target.value)} placeholder="Producto"/>
        <input type="number" value={producto.precio} onChange={(e) => actualizarProducto('precio', e.target.value)} placeholder="Precio"/>
      </div>
    </>
  );
}
