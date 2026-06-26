import { useState } from 'react';
import ListaProductos from './components/ListaProductos';
import FormularioProducto from './components/FormularioProducto';
import './App.css';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="app">
      <h1>Gestión de Productos</h1>
      <FormularioProducto onProductAdded={() => setRefreshKey((prev) => prev + 1)} />
      <ListaProductos refreshKey={refreshKey} />
    </div>
  );
}

export default App;