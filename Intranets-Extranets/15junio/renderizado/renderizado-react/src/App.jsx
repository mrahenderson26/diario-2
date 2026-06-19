import './App.css'
import Saludo from './Saludo'
import Contador from './Contador'

const amigos = ["Abel", "Mariajo", "Diego", "Gabri"]

function saludar() {
  console.log("Hola")
}

function despedir() {
  console.log("Adios")
}

function capturar(e) {
  console.log(e.target.value)
}

function App() {

  return (
    <>

      <h1>Mi Web</h1>
      <Contador />
      <button onClick={saludar}>Saludar</button>
      <button onClick={despedir}>Despedir</button>

      {amigos.map((item, index) => <Saludo key={index} nombre={item} />)}

      <input onChange={capturar} />

      <input onChange={e => console.log(e.target.value)} />

    </>
  )
}

export default App
