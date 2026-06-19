# Proyecto ejemplo: localStorage

Este proyecto está basado en el contenido del archivo sobre `localStorage`.

## Qué demuestra

1. **Variables JS**
   - Desaparecen al recargar la página.

2. **sessionStorage**
   - Permanece al recargar.
   - Desaparece al cerrar la pestaña.

3. **localStorage**
   - Permanece incluso después de cerrar y volver a abrir el navegador.
   - Guarda valores como cadenas de texto.
   - Para objetos y arrays usamos:
     - `JSON.stringify()` para guardar.
     - `JSON.parse()` para recuperar.

4. **fetch + localStorage**
   - Pide un usuario a una API de prueba.
   - Lo guarda en `localStorage`.
   - Lo reutiliza sin hacer otra petición.

## Estructura

```txt
proyecto-localstorage/
├─ index.html
├─ css/
│  └─ styles.css
└─ js/
   └─ app.js
```

## Cómo usarlo

Abre `index.html` directamente en el navegador.

Para probar bien el proyecto:

1. Añade varias tareas.
2. Recarga la página.
3. Verás que las tareas siguen ahí.
4. Cierra y abre el navegador.
5. Las tareas seguirán guardadas porque están en `localStorage`.

## Importante

No guardes en `localStorage`:

- contraseñas;
- tokens sensibles;
- datos personales delicados.

Cualquier JavaScript que se ejecute en la página puede leer `localStorage`.
