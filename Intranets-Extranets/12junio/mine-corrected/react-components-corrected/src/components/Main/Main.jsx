import './Main.css';
import BarraProgreso from '../BarraProgreso';

export default function Main({ datosInteres = [], skills = [] }) {
  return (
    <main className="main-container">
      <section className="main-section">
        <h2>Datos Personales</h2>
      </section>

      <section className="main-section">
        <h2>Vida Académica</h2>
      </section>

      <section className="main-section">
        <h2>Experiencia Profesional</h2>
      </section>

      <section className="main-section">
        <h2>Otros Datos</h2>
        <ul className="main-list">
          {datosInteres.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="main-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((item, index) => (
            <BarraProgreso
              key={index}
              skill={item.skill}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
