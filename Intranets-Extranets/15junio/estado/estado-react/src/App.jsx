import { useState } from 'react'
import './App.css'

function App() {
  // const [nombre, setNombre] = useState("")
  // const [size, setSize] = useState(100)
  // const [visible, setVisible] = useState(false)
  const [cifrado, setCifrado] = useState(true)

  // function capturarTexto(e) {
  //   setNombre(e.target.value)
  // }

  // if (nombre === "") {
  //   setNombre("Martin")
  // }

  // function aumentar() {
  //   setSize(size * 2)
  // }

  return (

    <>
      <h1>El estado en React</h1>

      {/* <div>
        <input onChange={capturarTexto} type="text" />
        <div>{nombre}</div>
      </div>

      <div>
        <p>Tamaño: {size}</p>
        <button onClick={aumentar}>Aumentar</button>
      </div>

      <div>
        <button onClick={() => { setVisible(!visible) }}>{visible ? "Ocultar" : "Mostrar"}</button>
        <div>
          {visible && <p>Esto es un div oculto</p>}
        </div>
      </div> */}

      <div>
        <input type={cifrado ? "password" : "text"} />
        <button onClick={() => setCifrado(!cifrado)}>{cifrado ? "Mostrar Password" : "Ocultar Password"}</button>
      </div>
      
    </>

  )
}

export default App