import { useEffect, useState } from 'react';
import { content } from './data/content';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Section from './components/Section';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [lang, setLang] = useState('es');
  const page = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = page.meta.title;
  }, [lang, page.meta.title]);

  return (
    <div className="app">
      <Header content={page} lang={lang} setLang={setLang} />
      <main>
        <Profile profile={page.profile} />
        <Projects projects={page.projects} />
        <Skills skills={page.skills} />
        <Section id={page.experience.id} title={page.experience.title}>
          <Timeline items={page.experience.items} />
        </Section>
        <Education education={page.education} languages={page.languages} />
        <Contact contact={page.contact} />
      </main>
      <Footer footer={page.footer} name={page.hero.name} />
    </div>
  );
}

export default App;
