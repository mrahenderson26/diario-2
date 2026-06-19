import './LanguageSelector.css';

export default function LanguageSelector({ lang, setLang, labels }) {
  return (
    <div className="language-selector" aria-label={labels.label}>
      <span>{labels.label}</span>
      <button
        type="button"
        className={lang === 'es' ? 'active' : ''}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        {labels.spanish}
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        {labels.english}
      </button>
    </div>
  );
}
