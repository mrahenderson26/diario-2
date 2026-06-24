const APP = {
  name: 'mi-app',
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
