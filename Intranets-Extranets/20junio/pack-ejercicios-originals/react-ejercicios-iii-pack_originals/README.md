# Ejercicios III React: useEffect y React Router

Este paquete contiene una aplicación Vite + React con los ejercicios de:

- `useEffect`
- `document.title`
- efectos al cargar el componente
- `setInterval` y cleanup
- React Router
- rutas normales
- rutas anidadas con `Outlet`
- ruta 404
- `fetch`
- rutas dinámicas con `useParams`

## Instalar y ejecutar

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Después abre la URL que te indique Vite, normalmente:

```bash
http://localhost:5173
```

## Archivos principales

```txt
src/main.jsx                         -> Activa BrowserRouter y carga App
src/global.css                       -> Estilos globales mínimos: body, reset y fuentes
src/App.jsx                          -> Importa los componentes y define las rutas
src/App.css                          -> Estilos propios de App.jsx
src/components/Header.jsx            -> Cabecera principal
src/components/Header.css            -> Estilos propios de Header.jsx
src/components/Menu.jsx              -> Menú de navegación con NavLink
src/components/Menu.css              -> Estilos propios de Menu.jsx
src/components/ejercicios/*.jsx      -> Ejercicios de useEffect y fetch
src/components/ejercicios/*.css      -> CSS correspondiente de cada ejercicio
src/pages/*.jsx                      -> Páginas normales de la aplicación
src/pages/*.css                      -> CSS correspondiente de cada página
src/pages/usuarios/*.jsx             -> Rutas anidadas y dinámicas de usuarios
src/pages/usuarios/*.css             -> CSS correspondiente de cada componente de usuarios
```

## Rutas incluidas

```txt
/             -> Inicio con ejercicios de useEffect y APIs
/empresa      -> Página Empresa
/contacto     -> Página Contacto
/cursos       -> Página Cursos
/sobre-mi     -> Página Sobre mí
/usuarios     -> Lista de usuarios obtenida desde API
/usuarios/3   -> Detalle del usuario con id 3
*             -> Página 404
```

## Nota sobre React.StrictMode

En desarrollo, React puede ejecutar algunos efectos dos veces para ayudarte a detectar problemas. Por eso el mensaje:

```js
console.log("Componente cargado");
```

puede aparecer dos veces en la consola. En producción no ocurre igual.


## Refactor de CSS

La versión refactorizada ya no guarda todos los estilos en `App.css`. Cada componente o página importa su propio archivo CSS correspondiente. Por ejemplo:

```txt
Header.jsx -> Header.css
Menu.jsx -> Menu.css
Inicio.jsx -> Inicio.css
TituloDinamico.jsx -> TituloDinamico.css
ListaUsuarios.jsx -> ListaUsuarios.css
```

`global.css` solo contiene estilos globales mínimos que no pertenecen a ningún componente concreto, como `body`, `box-sizing` y la fuente heredada de formularios.
