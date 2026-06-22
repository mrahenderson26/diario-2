import './App.css';

// App imports the components and decides how they are combined on the page.
import Presentacion from './components/Presentacion';
import Alumno from './components/Alumno';
import MiniWeb from './components/MiniWeb';
import ListaTecnologias from './components/ListaTecnologias';
import ListaProductos from './components/ListaProductos';
import ListaSaludos from './components/ListaSaludos';
import Perfil from './components/Perfil';
import Ejercicio from './components/Ejercicio';

/*
  EJERCICIOS I REACT

  Cada componente está separado en su propio archivo dentro de src/components/.

  También se ha separado la CSS:
  - App.css contiene solamente estilos propios de App.
  - Cada componente importa su propio archivo .css.
  - index.css contiene únicamente estilos globales mínimos.

  Nota:
  El enunciado habla de un componente "Presentación".
  En código usamos "Presentacion" sin tilde para evitar problemas
  y mantener nombres de componentes simples.
*/

export default function App() {
  // Estos datos viven en App porque App se los pasa a otros componentes mediante props.
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React'];

  // Cada producto tiene un id para poder usarlo como key cuando hagamos map().
  const productos = [
    { id: 1, nombre: 'Portátil', precio: 799 },
    { id: 2, nombre: 'Ratón', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 50 },
  ];

  // El mismo componente Saludo se reutiliza cambiando solo la prop nombre.
  const nombres = ['María', 'Luis', 'Carmen'];

  return (
    <div className="app">
      <h1 className="app__title">Ejercicios I React</h1>
      <p className="app__intro">
        Componentes, JSX, composición, listas y props.
      </p>

      {/* Lo que va entre <Ejercicio>...</Ejercicio> llega como children. */}
      <Ejercicio
        titulo="Ejercicio 1. Mi primer componente"
        objetivo="Objetivo: crear un componente funcional."
      >
        <Presentacion />
      </Ejercicio>

      <Ejercicio
        titulo="Ejercicio 2. Mostrar información personal"
        objetivo="Objetivo: practicar JSX."
      >
        <Alumno />
      </Ejercicio>

      <Ejercicio
        titulo="Ejercicio 3. Crear varios componentes"
        objetivo="Objetivo: entender la composición de componentes."
      >
        <MiniWeb />
      </Ejercicio>

      <Ejercicio
        titulo="Ejercicio 4. Mostrar una lista simple"
        objetivo="Objetivo: insertar expresiones JavaScript en JSX."
      >
        <ListaTecnologias tecnologias={tecnologias} />
      </Ejercicio>

      <Ejercicio
        titulo="Ejercicio 5. Tarjeta de producto"
        objetivo="Objetivo: crear componentes reutilizables."
      >
        <ListaProductos productos={productos} />
      </Ejercicio>

      <Ejercicio
        titulo="Ejercicio 6. Introducción a las props"
        objetivo="El mismo componente Saludo muestra datos diferentes según la prop nombre."
      >
        <ListaSaludos nombres={nombres} />
      </Ejercicio>

      <Ejercicio
        titulo="Ejercicio 7. Perfil de usuario"
        objetivo="Objetivo: usar varias props."
      >
        <Perfil
          nombre="Juan"
          profesion="Desarrollador Web"
          empresa="Tech Solutions"
        />
      </Ejercicio>
    </div>
  );
}
