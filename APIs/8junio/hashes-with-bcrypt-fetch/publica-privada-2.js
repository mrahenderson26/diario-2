import crypto from "crypto";
import fs from "fs";

// 1. Generar la pareja de claves y exportarlas directamente como texto (PEM)
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",       // Formato estándar para claves públicas
    format: "pem",      // Guarda como cadena de texto PEM
  },
  privateKeyEncoding: {
    type: "pkcs8",      // Formato estándar para claves privadas
    format: "pem",      // Guarda como cadena de texto PEM
  },
});

// 2. Guardar las claves en archivos locales
fs.writeFileSync("clave_publica.pem", publicKey);
fs.writeFileSync("clave_privada.pem", privateKey);
console.log("¡Claves guardadas con éxito en archivos .pem!");

// 3. Leer las claves desde los archivos (para simular un proceso real)
const clavePublicaGuardada = fs.readFileSync("clave_publica.pem", "utf8");
const clavePrivadaGuardada = fs.readFileSync("clave_privada.pem", "utf8");

// 4. Cifrar utilizando la clave pública leída del archivo
const cifrado = crypto.publicEncrypt(
  clavePublicaGuardada,
  Buffer.from("Hola")
);

// 5. Descifrar utilizando la clave privada leída del archivo
const descifrado = crypto.privateDecrypt(
  clavePrivadaGuardada,
  cifrado
);

console.log("Texto descifrado:", descifrado.toString());



