# Ejercicios II React

Pack de ejercicios de React resuelto con Vite.

## Qué incluye

- Tema 1: Estado y eventos
  - Calculadora simple
  - Cambiar color
  - Mostrar y ocultar texto
- Tema 2: Formularios
  - Saludo personalizado
  - Contador de caracteres
  - Registro de alumnos en tabla
- Tema 3: Estado con objetos
  - Perfil de usuario
  - Tarjeta editable
- Tema 4: Estado con arrays
  - Lista de alumnos
  - Eliminar elementos

## Refactor CSS

El CSS ya no está concentrado en `src/App.css`.

Ahora cada componente importa su propio archivo CSS:

```txt
src/App.jsx                         -> src/App.css
src/components/Header.jsx           -> src/components/Header.css
src/components/ExerciseCard.jsx     -> src/components/ExerciseCard.css
src/components/CalculadoraSimple.jsx -> src/components/CalculadoraSimple.css
src/components/CambiarColor.jsx     -> src/components/CambiarColor.css
src/components/MostrarOcultarTexto.jsx -> src/components/MostrarOcultarTexto.css
src/components/SaludoPersonalizado.jsx -> src/components/SaludoPersonalizado.css
src/components/ContadorCaracteres.jsx -> src/components/ContadorCaracteres.css
src/components/RegistroAlumnos.jsx  -> src/components/RegistroAlumnos.css
src/components/PerfilUsuario.jsx    -> src/components/PerfilUsuario.css
src/components/TarjetaEditable.jsx  -> src/components/TarjetaEditable.css
src/components/ListaAlumnos.jsx     -> src/components/ListaAlumnos.css
```

Los estilos globales mínimos están en:

```txt
src/index.css
```

## Cómo ejecutarlo

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Después abre la URL que indique Vite, normalmente:

```txt
http://localhost:5173
```

## Cómo crear la versión de producción

```bash
npm run build
```

La carpeta generada será:

```txt
dist/
```
