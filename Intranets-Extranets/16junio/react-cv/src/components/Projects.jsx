import Section from './Section';
import './Projects.css';

export default function Projects({ projects }) {
  return (
    <Section id={projects.id} title={projects.title} intro={projects.intro}>
      <div className="project-grid">
        {projects.items.map((project) => (
          <article key={project.title} className="project-card">
            <p className="status">{project.status}</p>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
