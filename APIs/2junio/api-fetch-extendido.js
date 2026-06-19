/*
FETCH API — EXTENDED EXAMPLES
Single-file version with light commentary.

These examples use JSONPlaceholder:
https://jsonplaceholder.typicode.com

Note:
- GET requests usually do not have a body.
- POST/PUT usually send a JSON body.
- fetch() only rejects for network-level errors, not for HTTP 404/500.
  That is why we check response.ok manually.
*/

// ================================================================
// 1. COMPLETE EXAMPLE — GET USERS WITH HEADERS + ERROR HANDLING
// ================================================================

async function obtenerUsuarios() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const opciones = {
        method: 'GET', // Can also be POST, PUT, DELETE, etc.
        headers: {
            'Accept': 'application/json', // We expect JSON back
            'Content-Type': 'application/json', // We are sending JSON
            'Authorization': 'Bearer TU_TOKEN_AQUI' // Example token
        }

        // For methods with a body, you could add:
        // body: JSON.stringify({ nombre: 'Juan' })
    };

    try {
        const respuesta = await fetch(url, opciones);

        // --------------------------------------------------------
        // Check HTTP status
        // --------------------------------------------------------
        // fetch() does not reject the promise for 4xx or 5xx errors.
        // So we manually check respuesta.ok.
        if (!respuesta.ok) {
            const errorText = await respuesta.text();
            throw new Error(`Error ${respuesta.status}: ${errorText}`);
        }

        // --------------------------------------------------------
        // Process response body
        // --------------------------------------------------------
        const datos = await respuesta.json();
        return datos;

    } catch (error) {
        // This catches both network errors and errors thrown manually above.
        console.error('Error en la petición:', error);
        throw error;
    }
}


// ================================================================
// 2. USING THE FUNCTION
// ================================================================

obtenerUsuarios()
    .then(usuarios => {
        console.log('Usuarios obtenidos:', usuarios);
    })
    .catch(error => {
        console.error('No se pudo obtener los usuarios:', error.message);
    });


// ================================================================
// 3. POST — CREATE A RESOURCE
// ================================================================
// POST is normally used to create something on the server.

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        title: 'Hola',
        body: 'Este es un post',
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log('Creado:', data));


// ================================================================
// 4. PUT — UPDATE A RESOURCE
// ================================================================
// PUT is normally used to replace/update an existing resource.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        id: 1,
        title: 'Post actualizado',
        body: 'Contenido actualizado',
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log('Actualizado:', data));


// ================================================================
// 5. DELETE — DELETE A RESOURCE
// ================================================================
// DELETE is normally used to remove something from the server.

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
})
.then(res => {
    if (res.ok) {
        console.log('Eliminado correctamente');
    } else {
        console.error(`No se pudo eliminar. Estado HTTP: ${res.status}`);
    }
})
.catch(err => console.error(err));


// ================================================================
// 6. FETCH WITH TIMEOUT
// ================================================================
// fetch() does not have a built-in timeout option.
// AbortController lets us cancel the request manually.

const controller = new AbortController();

const timeoutId = setTimeout(() => controller.abort(), 5000);

fetch('https://jsonplaceholder.typicode.com/users', {
    signal: controller.signal
})
.then(res => res.json())
.then(data => console.log('Datos con timeout:', data))
.catch(error => {
    if (error.name === 'AbortError') {
        console.error('La petición tardó demasiado y fue cancelada.');
    } else {
        console.error('Error en fetch con timeout:', error);
    }
})
.finally(() => clearTimeout(timeoutId));


// ================================================================
// 7. QUICK REFERENCE
// ================================================================

/*
Common methods:

GET     = get/read data
POST    = create new data
PUT     = replace/update existing data
PATCH   = partially update existing data
DELETE  = delete data

Common response checks:

response.ok       true if status is 200–299
response.status   HTTP status code, e.g. 200, 404, 500
response.json()   parse response body as JSON
response.text()   read response body as plain text
*/