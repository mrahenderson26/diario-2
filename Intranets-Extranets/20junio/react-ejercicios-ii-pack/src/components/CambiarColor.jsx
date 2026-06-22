import { useState } from 'react';

export default function CambiarColor() {
  const [colorCuadrado, setColorCuadrado] = useState('red');

  return (
    <>
      <p>Color actual: {colorCuadrado}</p>

      <div>
        <button onClick={() => setColorCuadrado('red')}>Rojo</button>
        <button onClick={() => setColorCuadrado('green')}>Verde</button>
        <button onClick={() => setColorCuadrado('blue')}>Azul</button>
      </div>
    </>
  );
}
