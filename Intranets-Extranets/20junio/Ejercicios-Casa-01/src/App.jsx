import './App.css'
import Header from './Header'
import Content from './Content'
import Skills from './Skills'
import Producto from './Producto'
import Footer from './Footer'

function App() {
  const detalles = {
    nombre: "Martin",
    edad: 46,
    ciudad: "Madrid"
  }

  const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const productos = [
    {
      id: 1,
      nombre: "Portátil",
      precio: 799
    },
    {
      id: 2,
      nombre: "Ratón",
      precio: 25
    },
    {
      id: 3,
      nombre: "Teclado",
      precio: 50
    }
  ]

  return (
    <>
      <Header />
      <Content detalles={detalles} />
      <Skills tecnologias={tecnologias} />
      <Producto productos={productos} />
      <Footer />
    </>
  )
}

export default App
