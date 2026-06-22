import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode puede ejecutar algunos efectos dos veces en desarrollo. */}
    <App />
  </React.StrictMode>
);
