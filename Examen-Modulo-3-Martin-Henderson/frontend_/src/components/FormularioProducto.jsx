import { useState } from 'react';

function FormularioProducto({ onProductAdded }) {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${import.meta.env.VITE_API_URL}/api/productos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio: parseFloat(precio) })
    });

    setNombre('');
    setPrecio('');
    onProductAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Añadir Producto</h2>
      <input type="text" placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
      <input type="number" step="0.01" min="0" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} required/>
      <button type="submit">Añadir</button>
    </form>
  );
}

export default FormularioProducto;