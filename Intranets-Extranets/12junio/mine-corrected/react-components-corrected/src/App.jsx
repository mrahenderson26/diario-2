import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const datosInteres = [
    'Carnet B1',
    'Coche propio',
    'Don de gentes',
  ];

  const skills = [
    {
      skill: 'HTML',
      value: 89,
      color: 'success',
    },
    {
      skill: 'CSS',
      value: 70,
      color: 'info',
    },
    {
      skill: 'JavaScript',
      value: 60,
      color: 'warning',
    },
  ];

  return (
    <div className="app">
      <Header
        nombre="Martin Henderson"
        profesion="Traductor"
        retrato="https://placehold.co/300x300"
      />

      <Main datosInteres={datosInteres} skills={skills} />

      <Footer
        linkedin="https://linkedin.com"
        github="https://github.com"
        nombre="Martin Henderson"
      />
    </div>
  );
}

export default App;