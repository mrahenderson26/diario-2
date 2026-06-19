import { useState } from "react";

export default function Contador() {

    let [contador, setContador] = useState(0);

    function aumentar() {
        setContador(contador + 1);
    };

    function decrementar() {
        setContador(contador - 1);
    };

    function reset() {
        setContador(0);
    };

    return (
        <>
            <div>{contador}</div>
            <button onClick={aumentar}>Aumentar + 1</button>
            <button onClick={decrementar}>Decrementar - 1</button>
            <button onClick={reset}>Restear a 0</button>
        </>
    );
};
