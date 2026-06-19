# Martin Henderson CV React Site

Bilingual React/Vite frontend CV site. The content is adapted from the supplied CV and reframed for a transition from legal-financial translation into web development, data engineering and applied AI.

## Run in development

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually `http://localhost:5173/`.

## Build for production

```bash
npm run build
npm run preview
```

The Vite config uses `base: './'`, so the generated `dist` folder is easier to deploy as a static site.

## Structure

```text
src/
  App.jsx
  data/content.js
  components/
    Header.jsx
    LanguageSelector.jsx
    Profile.jsx
    Projects.jsx
    Skills.jsx
    Timeline.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
```

## Notes

- No Express backend is included.
- No Bootstrap, Reactstrap or icon libraries are used; the styling is plain CSS.
- The language selector switches all visible content between Spanish and English.
