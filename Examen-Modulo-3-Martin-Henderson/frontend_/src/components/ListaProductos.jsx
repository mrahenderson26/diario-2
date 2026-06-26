import { useEffect, useState } from 'react';

function ListaProductos({ refreshKey }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/productos`);
      const data = await res.json();
      setProductos(data);
    };

    cargarProductos();
  }, [refreshKey]);

  return (
    <div>
      <h2>Lista de Productos</h2>
      {productos.length === 0 ? (
        <p className="sin-productos">No hay productos disponibles</p>
      ) : (
        <ul className="productos-lista">
          {productos.map((p) => (
            <li key={p.id} className="producto-item">
              <span className="producto-nombre">{p.nombre}</span>
              <span className="producto-precio">${Number(p.precio).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaProductos;