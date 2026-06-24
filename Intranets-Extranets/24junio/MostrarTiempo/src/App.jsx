import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import MostrarUsuarios from './components/MostrarUsuarios'
import MostrarTiempo from './components/MostrarTiempo'
import MostrarOcultar from './components/MostrarOcultar'

function App() {

  return (
    <>
      <div className="container">
        <h1>Api Fetch en React</h1>
        <MostrarOcultar
          children={<MostrarTiempo />}
        />
      </div>
    </>
  )
}

export default App
