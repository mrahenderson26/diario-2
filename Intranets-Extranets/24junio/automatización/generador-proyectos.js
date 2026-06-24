const fs = require('fs');
const { execSync } = require('child_process');

const nombreProyecto = process.argv[2];

if (!nombreProyecto) {
  console.log('Uso: node generador-proyectos.js nombre-del-proyecto');
  process.exit(1);
}

if (fs.existsSync(nombreProyecto)) {
  console.log(`Error: la carpeta "${nombreProyecto}" ya existe.`);
  process.exit(1);
}

fs.mkdirSync(nombreProyecto);
process.chdir(nombreProyecto);

try {
  execSync('git init', { stdio: 'inherit' });
  execSync('npm init -y', { stdio: 'inherit' });
} catch {
  console.log('Git o npm no disponible. Se continúa igualmente.');
}

fs.mkdirSync('css');
fs.mkdirSync('js');

fs.writeFileSync(
  'index.html',
  `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title>${nombreProyecto}</title>
</head>
<body>
  <h1>Hola Mundo. Mi app se llama ${nombreProyecto}</h1>

  <script src="js/main.js"></script>
</body>
</html>`
);

fs.writeFileSync(
  'css/style.css',
  `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  padding: 2rem;
}`
);

fs.writeFileSync(
  'js/main.js',
  `console.log('Proyecto iniciado');`
);

fs.writeFileSync(
  'README.md',
  `# ${nombreProyecto}
`
);

console.log(`Proyecto "${nombreProyecto}" creado correctamente`);