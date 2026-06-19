import LanguageSelector from './LanguageSelector';
import './Header.css';

export default function Header({ content, lang, setLang }) {
  return (
    <header className="site-header">
      <nav className="top-nav" aria-label={content.nav.label}>
        <a className="brand" href="#top" aria-label="Martin Henderson home">
          MH
        </a>

        <div className="nav-links">
          {content.nav.items.map((item) => (
            <a key={item.href} href={item.href}>
              {item.text}
            </a>
          ))}
        </div>

        <LanguageSelector
          lang={lang}
          setLang={setLang}
          labels={content.languageSelector}
        />
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.name}</h1>
          <h2>{content.hero.role}</h2>
          <p className="hero-summary">{content.hero.summary}</p>
          <p className="location">{content.hero.location}</p>

          <div className="hero-actions" aria-label="Main actions">
            <a className="button primary" href={`#${content.contact.id}`}>
              {content.hero.ctaPrimary}
            </a>
            <a className="button secondary" href={`#${content.projects.id}`}>
              {content.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Profile snapshot">
          <div className="avatar" aria-hidden="true">
            <span>MH</span>
          </div>
          <div className="tag-cloud">
            {content.hero.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </aside>
      </section>
    </header>
  );
}
