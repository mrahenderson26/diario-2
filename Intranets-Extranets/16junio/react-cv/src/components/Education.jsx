import Section from './Section';
import './Education.css';

export default function Education({ education, languages }) {
  return (
    <Section id={education.id} title={education.title}>
      <div className="education-layout">
        <ul className="education-list">
          {education.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <aside className="languages-card">
          <h3>{languages.title}</h3>
          <ul>
            {languages.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
