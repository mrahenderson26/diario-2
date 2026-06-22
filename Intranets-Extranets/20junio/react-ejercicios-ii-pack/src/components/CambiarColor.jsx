import { useState } from 'react';
import './CambiarColor.css';

export default function CambiarColor() {
  const [colorCuadrado, setColorCuadrado] = useState('red');

  return (
    <>
      <p>Color actual: {colorCuadrado}</p>

      <div className={`cuadrado cuadrado--${colorCuadrado}`}></div>

      <div>
        <button onClick={() => setColorCuadrado('red')}>Rojo</button>
        <button onClick={() => setColorCuadrado('green')}>Verde</button>
        <button onClick={() => setColorCuadrado('blue')}>Azul</button>
      </div>
    </>
  );
}