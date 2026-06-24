const fs = require('fs');
const { execSync } = require('child_process');

const nombreProyecto = process.argv[2] || "in-nombre";

if (!nombreProyecto) {
    console.log('Uso: node generador-proyectos.js nombre-del-proyecto');
    process.exit(1);
}

fs.mkdirSync(nombreProyecto);
process.chdir(nombreProyecto);

execSync('git init', { stdio: 'inherit' });
execSync('npm init -y', { stdio: 'inherit' });

fs.mkdirSync('css');
fs.mkdirSync('js');

fs.writeFileSync(
    'index.html',
    `<!DOCTYPE html>\n
    <html lang="en">\n
    <head>\n
    <meta charset="UTF-8">\n
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
    <link rel="stylesheet" href="css/style.css">\n
    <title>Document</title>\n
    </head>\n
    <body>\n
    <h1>Hola Mundo. Mi app se llama ${nombreProyecto}</h1>\n
    <script src="js/main.js"></script>\n
    </body>\n
    </html>`
);

fs.writeFileSync(
    'css/style.css',
    `*{margin: 0; padding: 0; box-sizing: border-box;}`
);

fs.writeFileSync(
    'js/index.js',
    `console.log('Hello World');`
);

fs.writeFileSync(
    'README.md',
    `# ${nombreProyecto}\n`
);

console.log('Proyecto creado correctamente');