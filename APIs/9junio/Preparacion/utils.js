import fs from "fs";
const aficiones = [];

function agregarAficion(aficion) {
    aficiones.push(aficion)
    return aficiones
}

agregarAficion("Natación")
console.log(aficiones)

agregarAficion("Correr")
console.log(aficiones)

agregarAficion("Ajedrez")
console.log(aficiones)

function leerAficiones() {
    

}

