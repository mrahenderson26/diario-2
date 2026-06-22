import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode puede ejecutar algunos efectos dos veces en desarrollo. */}
    {/* BrowserRouter permite que toda la app use rutas, links y NavLinks. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
