import { useState, useEffect } from 'react';

export default function RecuperarRecetas() {

    const [recetas, setRecetas] = useState([]);

    useEffect(() => {
        async function obtenerRecetas() {
            const url = "/recetas.json";
            const response = await fetch(url);
            const data = await response.json();
            setRecetas(data);
        }
        obtenerRecetas();
    }, [])

    return (
        <>
            <h1>Recetas</h1>
            {recetas.map((item, index) => (
                <div key={index}>
                    <p >Nombre de la Receta: {item.receta}</p>
                    <p>Origen de la Receta: {item.origen}</p>
                </div>
            ))}
        </>
    )
}

