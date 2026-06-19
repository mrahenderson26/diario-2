import crypto from "crypto";

export const algoritmo = "aes-256-cbc";

export const clave = crypto.randomBytes(32);
// const clave = "pajaro";


export const iv = crypto.randomBytes(16);
// const iv = "loco";


const cipher = crypto.createCipheriv(
    algoritmo,
    clave,
    iv
);

export let cifrado = cipher.update(
    "Prueba de cifrado simétrico",
    "utf8",
    "hex"
);

cifrado += cipher.final("hex");

console.log(cifrado);
// console.log(clave);
// console.log(iv);

// const decipher = crypto.createDecipheriv(
//     algoritmo,
//     clave,
//     iv
// );

// let texto = decipher.update(
//     cifrado,
//     "hex",
//     "utf8"
// );

// texto += decipher.final("utf8");

// console.log(texto);
