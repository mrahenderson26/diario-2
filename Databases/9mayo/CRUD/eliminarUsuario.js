// Array.filter() returns a new array, which we reassign to the old array thus overwritting it

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

function eliminarUsuario(_id) {
    usuarios = usuarios.filter((item) => item.id !== _id)
    return usuarios
    }

eliminarUsuario(1)

console.log(usuarios)




