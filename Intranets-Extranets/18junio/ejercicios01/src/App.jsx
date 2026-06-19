// import { useState } from 'react'
// import Saludo from './Saludo'
// import DatosPersonales from './DatosPersonales'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Perfil from './Perfil'

// const datosPersonales = {
//   nombre: "Ana",
//   edad: 36,
//   ciudad: "Toledo"
// }

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

function App() {
  return (
    <>

      {/* <Saludo nombre="Ana" />

      <DatosPersonales
        nombre={datosPersonales.nombre}
        edad={datosPersonales.edad}
        ciudad={datosPersonales.ciudad} /> */}

      <Header />
      <Content tecnologias={tecnologias} productos={productos} />
      <Perfil
        nombre="Juan"
        profesion="Desarrollador Web"
        empresa="Tech Solutions"
      />
      <Footer />

    </>
  )
}

export default App
