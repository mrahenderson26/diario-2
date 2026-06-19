import crypto from "crypto";
import fs from "fs";

// 1. Generar y guardar claves en archivos (formato PEM)
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: { type: "spki", format: "pem" },
  privateKeyEncoding: { type: "pkcs8", format: "pem" },
});
fs.writeFileSync("clave_publica.pem", publicKey);
fs.writeFileSync("clave_privada.pem", privateKey);

// ==========================================
// PARTE 1: CIFRAR Y GUARDAR EN UN ARCHIVO
// ==========================================

// Leer la clave pública para cifrar
const clavePublica = fs.readFileSync("clave_publica.pem", "utf8");

// Cifrar el mensaje (devuelve un Buffer binario)
const datosCifrados = crypto.publicEncrypt(
  clavePublica,
  Buffer.from("Este es un mensaje secreto guardado en un archivo")
);

// Guardar el Buffer cifrado directamente como un archivo binario
fs.writeFileSync("mensaje.enc", datosCifrados);
console.log("¡Archivo 'mensaje.enc' generado con éxito listo para intercambiar!");

// ==========================================
// PARTE 2: LEER EL ARCHIVO Y DESCIFRAR
// ==========================================

// El receptor lee el archivo binario (sin especificar 'utf8' para obtener el Buffer original)
const archivoCifrado = fs.readFileSync("mensaje.enc");

// Leer la clave privada para descifrar
const clavePrivada = fs.readFileSync("clave_privada.pem", "utf8");
// Descifrar el contenido del archivo
const datosDescifrados = crypto.privateDecrypt(
  clavePrivada,
  archivoCifrado
);

console.log("Contenido del archivo descifrado:", datosDescifrados.toString());


