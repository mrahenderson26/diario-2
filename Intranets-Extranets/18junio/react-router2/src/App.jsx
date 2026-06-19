import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router"

import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Servicios from './pages/Servicios'

function App() {
  return (
    <>
      <h1>Mi App Con React Router</h1>

      <BrowserRouter>

        <nav>
          <Link to="/">Home</Link> |
          <Link to="/servicios">Servicios</Link> |
          <Link to="/contacto">Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App