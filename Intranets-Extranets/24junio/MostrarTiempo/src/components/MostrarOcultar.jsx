import { useState } from 'react'

const MostrarOcultar = ({children}) => {
    const [mostrar, setMostrar] = useState(true)

    return (
        <>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? 'Ocultar' : 'Mostrar'}
            </button>

            <div>
                {mostrar && <p>{children}</p>}
            </div>
        </>
    )
}

export default MostrarOcultar
