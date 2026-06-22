import Presentacion from './components/Presentacion';
import Alumno from './components/Alumno';
import MiniWeb from './components/MiniWeb';
import ListaTecnologias from './components/ListaTecnologias';
import ListaProductos from './components/ListaProductos';
import ListaSaludos from './components/ListaSaludos';
import Perfil from './components/Perfil';

export default function App() {
  const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React'];

  const productos = [
    { id: 1, nombre: 'Portátil', precio: 799 },
    { id: 2, nombre: 'Ratón', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 50 },
  ];

  const nombres = ['María', 'Luis', 'Carmen'];

  return (
    <>
      <Presentacion />
      <Alumno />
      <MiniWeb />
      <ListaTecnologias tecnologias={tecnologias} />
      <ListaProductos productos={productos} />
      <ListaSaludos nombres={nombres} />
      <Perfil
        nombre="Juan"
        profesion="Desarrollador Web"
        empresa="Tech Solutions"
      />
    </>
  );
}
