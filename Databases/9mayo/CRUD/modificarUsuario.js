let usuarios = [
    {
        id: 1,
        nombre: "Félix"
    },
    {
        id: 2,
        nombre: "Ana"
    },
    {
        id: 3,
        nombre: "Luis"
    }
]

function modificarUsuario(_id, _nombre) {

    let found = usuarios.find(item => item.id === _id) // finds the object

    found.nombre = _nombre // then modiffies the property of the object
}

modificarUsuario(3, "María Jose")
modificarUsuario(2, "Roberto")


console.log(usuarios)


