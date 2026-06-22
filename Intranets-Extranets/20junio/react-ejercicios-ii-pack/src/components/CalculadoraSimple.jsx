import { useState } from 'react';

export default function CalculadoraSimple() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultadoCalculadora, setResultadoCalculadora] = useState(null);

  function calcular(operacion) {
    // Aunque el input sea type="number", React guarda su value como texto.
    const n1 = Number(numero1);
    const n2 = Number(numero2);

    if (numero1 === '' || numero2 === '') {
      setResultadoCalculadora('Introduce los dos números');
      return;
    }

    // La operación llega desde el botón pulsado: calcular('+'), calcular('-'), etc.
    if (operacion === '+') setResultadoCalculadora(n1 + n2);
    if (operacion === '-') setResultadoCalculadora(n1 - n2);
    if (operacion === '*') setResultadoCalculadora(n1 * n2);

    if (operacion === '/') {
      if (n2 === 0) {
        setResultadoCalculadora('No se puede dividir entre 0');
      } else {
        setResultadoCalculadora(n1 / n2);
      }
    }
  }

  return (
    <>
      <div>
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
          placeholder="Primer número"
        />

        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
          placeholder="Segundo número"
        />
      </div>

      <div>
        <button onClick={() => calcular('+')}>+</button>
        <button onClick={() => calcular('-')}>-</button>
        <button onClick={() => calcular('*')}>*</button>
        <button onClick={() => calcular('/')}>/</button>
      </div>

      {/* ?? solo muestra '---' cuando el resultado es null o undefined, no cuando es 0. */}
      <p>Resultado: {resultadoCalculadora ?? '---'}</p>
    </>
  );
}
