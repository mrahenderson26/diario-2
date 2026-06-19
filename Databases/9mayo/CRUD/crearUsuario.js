let usuarios = [];

function crearUsuario(_nombre) {
    usuarios.push({
        id: usuarios.length + 1,
        nombre: _nombre
    });
};

crearUsuario(1, "Luis")
crearUsuario(2, "Ramón")
crearUsuario(3, "María")

console.log(usuarios)

