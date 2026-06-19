import './App.css'
import CajaElegante from './CajaElegante'

function Cuadro() {
  return (
    <div>Foto de mi padre</div>
  )
}

function App() {

  return (
    <>
      <CajaElegante>
        <Cuadro></Cuadro>
      </CajaElegante>
    </>
  )
}

export default App
