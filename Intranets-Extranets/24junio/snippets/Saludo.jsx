import { useState } from 'react'

function Saludo() {
    const [nombre, setNombre] = useState('')

    return (
        <>
            <div>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
                <p>Hola, {nombre}!</p>
            </div>
        </>
    )
}

export default Saludo