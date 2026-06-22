import { useState } from "react";

export default function Calculadora2() {
  const [firstNum, setFirstNum] = useState("");
  const [currentNum, setCurrentNum] = useState("");
  const [sign, setSign] = useState("");
  const [resultado, setResultado] = useState(null);

  function elegirOperacion(operacion) {
    setFirstNum(currentNum);
    setSign(operacion);
    setCurrentNum("");
    setResultado(null);
  }

  function calcular() {
    const num1 = Number(firstNum);
    const num2 = Number(currentNum);

    let total;

    if (sign === "+") {
      total = num1 + num2;
    } else if (sign === "-") {
      total = num1 - num2;
    } else if (sign === "*") {
      total = num1 * num2;
    } else if (sign === "/") {
      total = num1 / num2;
    }

    setResultado(total);
    setCurrentNum(String(total));
  }

  function limpiar() {
    setFirstNum("");
    setCurrentNum("");
    setSign("");
    setResultado(null);
  }

  return (
    <>
      <input
        value={currentNum}
        onChange={(e) => setCurrentNum(e.target.value)}
        type="text"
        placeholder="introduce un número"
      />

      <br />
      <br />

      <button onClick={() => elegirOperacion("+")}>+</button>
      <button onClick={() => elegirOperacion("-")}>-</button>
      <button onClick={() => elegirOperacion("*")}>*</button>
      <button onClick={() => elegirOperacion("/")}>/</button>

      <button onClick={calcular}>=</button>

      <button onClick={limpiar}>C</button>

      <div>
        {firstNum && sign && (
          <p>
            Operación: {firstNum} {sign} {currentNum}
          </p>
        )}

        {resultado !== null && <p>Resultado: {resultado}</p>}
      </div>
    </>
  );
}