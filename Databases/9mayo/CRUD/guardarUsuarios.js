import fs from "fs";

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

function guardarUsuario(usuarios) {
    const parsed = JSON.stringify(usuarios, null, 2)
    fs.writeFileSync("./data.json", parsed)
}

guardarUsuario(usuarios)