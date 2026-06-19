import { useState, useEffect } from "react";
import Buscador from "./Buscador";

const ApiRender = function () {
    const [datosApi, setDatosApi] = useState({})
    useEffect(() => {
        async function obtenerDatos() {
            const url = "https://api-render-vvdo.onrender.com"
            const respuesta = await fetch(url)
            const datos = await respuesta.json()
            setDatosApi(datos)

        }
        obtenerDatos()
    })

    return (
        <>
            <div>
                <p>{datosApi.nombre}</p>
                <p>{datosApi.email}</p>

            </div>


        </>
    )
}

export default ApiRender