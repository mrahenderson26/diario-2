import { useState } from "react";

export default function Calculadora() {
    const [firstNum, setFirstNum] = useState("")
    const [secondNum, setSecondNum] = useState("")
    const [sign, setSign] = useState("")
    const [resultado, setResultado ] = useState("")

    return (
        <>
            <input onChange={(e) => { setFirstNum(e.target.value) }} type="text" placeholder="introduce un número" />
            <input onChange={(e) => { setSecondNum(e.target.value) }} type="text" placeholder="introduce un número" />

            <br />
            <br />

            <button onClick={() => { setSign("+") }}>+</button>
            <button onClick={() => { setSign("-") }}>-</button>
            <button onClick={() => { setSign("*") }}>*</button>
            <button onClick={() => { setSign("/") }}>/</button>
            <button onClick={() => {

                if (sign === "+") {
                    setResultado(Number(firstNum) + Number(secondNum))
                }
                else if (sign === "-") {
                    setResultado(Number(firstNum) - Number(secondNum))
                }
                else if (sign === "*") {
                    setResultado(Number(firstNum) * Number(secondNum))
                }
                else if (sign === "/") {
                    setResultado(Number(firstNum) / Number(secondNum))
                }

                return resultado;

            }}>=</button>

            <div>{resultado}</div>

        </>
    )
}