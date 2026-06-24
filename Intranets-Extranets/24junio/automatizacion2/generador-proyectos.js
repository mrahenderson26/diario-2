const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const nombreProyecto = process.argv[2]

if (!nombreProyecto) {
  console.log('Uso: node generador-proyectos.js nombre-del-proyecto')
  process.exit(1)
}

const ruta = path.resolve(nombreProyecto)

if (fs.existsSync(ruta)) {
  console.log(`Error: La carpeta "${nombreProyecto}" ya existe.`)
  process.exit(1)
}

fs.mkdirSync(path.join(ruta, 'css'), { recursive: true })
fs.mkdirSync(path.join(ruta, 'js'), { recursive: true })

// --- index.html ---
const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Proyecto ${nombreProyecto}">
  <link rel="stylesheet" href="css/style.css">
  <title>${nombreProyecto}</title>
</head>
<body>
  <header>
    <div class="container">
      <h1>${nombreProyecto}</h1>
    </div>
  </header>

  <main>
    <div class="container">
      <h2>Hola Mundo</h2>
      <p>Proyecto creado con el generador de plantillas.</p>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>&copy; <span id="year"></span> ${nombreProyecto}</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
`

// --- css/style.css ---
const css = `:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --max-width: 1200px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  font-weight: 600;
}

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

header {
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid #e5e7eb;
}

main {
  flex: 1;
  padding: var(--spacing-lg) 0;
}

footer {
  padding: var(--spacing-md) 0;
  border-top: 1px solid #e5e7eb;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-light);
}

@media (max-width: 768px) {
  html {
    font-size: 90%;
  }

  .container {
    padding: 0 var(--spacing-sm);
  }
}
`

// --- js/main.js ---
const js = `const APP = {
  name: '${nombreProyecto}',
  version: '1.0.0',
}

function updateYear() {
  const el = document.getElementById('year')
  if (el) el.textContent = new Date().getFullYear()
}

function init() {
  updateYear()
  console.log(APP.name + ' v' + APP.version + ' iniciada')
}

document.addEventListener('DOMContentLoaded', init)
`

// --- package.json ---
const pkg = JSON.stringify(
  {
    name: nombreProyecto,
    version: '1.0.0',
    description: 'Plantilla base para proyectos web',
    main: 'js/main.js',
    scripts: {
      dev: 'npx serve .',
      start: 'npx serve .',
    },
    keywords: [],
    author: '',
    license: 'MIT',
  },
  null,
  2
)

// --- README.md ---
const readme = `# ${nombreProyecto}

Plantilla base para proyectos web.

## Requisitos

- Node.js (opcional, para el servidor de desarrollo)

## Uso

\`\`\`bash
npm run dev
\`\`\`

O abre \`index.html\` directamente en el navegador.

## Estructura

\`\`\`
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
├── package.json
└── README.md
\`\`\`

## Licencia

MIT
`

// --- Escribir archivos ---
fs.writeFileSync(path.join(ruta, 'index.html'), html)
fs.writeFileSync(path.join(ruta, 'css', 'style.css'), css)
fs.writeFileSync(path.join(ruta, 'js', 'main.js'), js)
fs.writeFileSync(path.join(ruta, 'package.json'), pkg)
fs.writeFileSync(path.join(ruta, 'README.md'), readme)

// --- Git init ---
try {
  execSync('git init', { cwd: ruta, stdio: 'inherit' })
} catch {
  console.log('  (git no disponible, se omite git init)')
}

console.log(`\nProyecto "${nombreProyecto}" creado correctamente en:`)
console.log(`  ${ruta}\n`)
console.log('Siguientes pasos:')
console.log(`  cd ${nombreProyecto}`)
console.log('  npm run dev')
