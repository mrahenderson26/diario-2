const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('.git')) {
  console.log('Este directorio no es un repositorio Git');
  process.exit(1);
}

if (!fs.existsSync('.gitignore')) {
  fs.writeFileSync('.gitignore', 'node_modules/\n');
  console.log('.gitignore creado');
} else {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');

  if (!gitignore.includes('node_modules/')) {
    fs.appendFileSync('.gitignore', '\nnode_modules/\n');
    console.log('node_modules/ añadido a .gitignore');
  }
}

try {
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Primer commit"', { stdio: 'inherit' });

  console.log('Repositorio preparado');
} catch {
  console.log('No se pudo hacer el commit. Puede que no haya cambios o que Git no esté configurado.');
}