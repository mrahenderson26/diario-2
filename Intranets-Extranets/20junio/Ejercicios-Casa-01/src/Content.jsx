import Presentacion from "./Presentacion"
import Alumno from "./Alumno"

export default function Content({ detalles }) {
    return (
        <>
            <p>Welcome to my application</p>

            <Presentacion />

            {/* <Alumno 
        nombre={detalles.nombre}
        edad={detalles.edad}
        ciudad={detalles.ciudad}
      /> */}

            {/* You can use the spread operator to do it too */}

            <Alumno {...detalles} />

        </>
    )
}
