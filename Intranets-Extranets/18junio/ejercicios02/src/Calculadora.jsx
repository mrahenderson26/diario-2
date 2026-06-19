import { useState, useEffect } from "react";

export default function Calculadora() {

    return (
        <>
            <input type="text" placeholder="introduce un número" />
            <br />
            <br />

            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>

            <div></div>
            
        </>
    )
}