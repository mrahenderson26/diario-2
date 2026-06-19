import Section from './Section';
import './Profile.css';

export default function Profile({ profile }) {
  return (
    <Section id={profile.id} title={profile.title} className="profile-section">
      <div className="profile-grid">
        <div className="profile-text">
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="highlight-list">
          {profile.highlights.map((item) => (
            <article key={item.title} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
