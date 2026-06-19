import Section from './Section';
import './Skills.css';

export default function Skills({ skills }) {
  return (
    <Section id={skills.id} title={skills.title}>
      <div className="skills-layout">
        <div className="skill-groups">
          {skills.groups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="focus-panel">
          <h3>{skills.barsTitle}</h3>
          {skills.bars.map((skill) => (
            <div className="bar-item" key={skill.label}>
              <div className="bar-label">
                <span>{skill.label}</span>
                <strong>{skill.value}%</strong>
              </div>
              <div className="bar-track" aria-hidden="true">
                <div className="bar-fill" style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </aside>
      </div>
    </Section>
  );
}
