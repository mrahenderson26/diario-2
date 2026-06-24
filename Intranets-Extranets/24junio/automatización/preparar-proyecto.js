const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('.git')) {
   console.log('Este directorio no es un repositorio Git');
   process.exit(1);
}

if (!fs.existsSync('.gitignore')) {
   fs.writeFileSync('.gitignore', 'node_modules/\n');
   console.log('.gitignore creado');
}

execSync('git add .', { stdio: 'inherit' });
execSync('git commit -m "Primer commit"', { stdio: 'inherit' });

console.log('Repositorio preparado');