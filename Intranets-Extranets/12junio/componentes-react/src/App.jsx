import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import BarraProgreso from "./components/BarraProgreso"

function App() {

  return (
    <>
      <BarraProgreso
        skill="html"
        value="99"
        color="primary"
      />

      <BarraProgreso
        skill="css"
        value="60"
        color="info"
      />

      <BarraProgreso
        skill="js"
        value="80"
        color="danger"
      />

      <Header
        nombre="Martin Henderson"
        profesion="Traductor"
        retrato="https://placehold.co/300x200"
      />

      <Main

      />

      <Footer
        linkedin="https://linkedin.com"
        github="https://github.com"
        nombre="Martin Henderson"
      />

    </>
  )
}

export default App

