# Ejercicios I React

Paquete de práctica para los primeros ejercicios de React.

## Qué contiene

- Componentes funcionales
- JSX básico
- Composición de componentes
- Listas con `map()`
- Componentes reutilizables
- Props simples
- Varias props en un mismo componente
- Componentes separados en archivos individuales
- CSS separada por componente

## Archivos principales

```text
src/
  main.jsx                 Punto de entrada de React
  index.css                Estilos globales mínimos
  App.jsx                  Componente principal de la aplicación
  App.css                  Estilos propios de App
  components/
    Alumno.jsx
    Alumno.css
    Cabecera.jsx
    Cabecera.css
    Contenido.jsx
    Contenido.css
    Ejercicio.jsx
    Ejercicio.css
    ListaProductos.jsx
    ListaProductos.css
    ListaSaludos.jsx
    ListaSaludos.css
    ListaTecnologias.jsx
    ListaTecnologias.css
    MiniWeb.jsx
    MiniWeb.css
    Perfil.jsx
    Perfil.css
    PiePagina.jsx
    PiePagina.css
    Presentacion.jsx
    Presentacion.css
    Producto.jsx
    Producto.css
    Saludo.jsx
    Saludo.css
```

## Idea principal del refactor

Antes, casi toda la CSS estaba en `App.css`.

Ahora cada componente importa su propia hoja de estilos. Por ejemplo:

```jsx
import './Producto.css';

export default function Producto({ nombre, precio }) {
  return (
    <article className="producto">
      <span>{nombre}</span>
      <strong>{precio} €</strong>
    </article>
  );
}
```

Esto hace que cada componente sea responsable de su estructura y de su aspecto visual.

`App.css` se ha dejado solo para los estilos del componente `App`, como el ancho general de la página y el título principal. Los estilos globales mínimos, como `body` y `box-sizing`, están en `index.css`.

## Cómo ejecutarlo

Primero instala las dependencias:

```bash
npm install
```

Después inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre la URL que aparezca en la terminal, normalmente:

```text
http://localhost:5173
```

## Nota sobre el componente Presentación

El enunciado usa el nombre `Presentación`.

En el código se usa `Presentacion`, sin tilde, porque es una práctica común evitar tildes en nombres de variables, funciones y componentes.
