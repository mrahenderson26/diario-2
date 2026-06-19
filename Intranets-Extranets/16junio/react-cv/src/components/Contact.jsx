import Section from './Section';
import './Contact.css';

export default function Contact({ contact }) {
  return (
    <Section id={contact.id} title={contact.title} intro={contact.intro}>
      <div className="contact-grid">
        {contact.links.map((link) => (
          <a key={link.href} className="contact-card" href={link.href} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </div>
    </Section>
  );
}
