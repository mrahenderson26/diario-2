import crypto from "crypto";

const claves =
    crypto.generateKeyPairSync(
        "rsa",
        {
            modulusLength: 2048
        }
    );

console.log(
    claves.publicKey
);

console.log(
    claves.privateKey
);

//////////////////////////////////////////////////

const cifrado =
    crypto.publicEncrypt(
        claves.publicKey,
        Buffer.from("Prueba de asimetrico")
    );

//////////////////////////////////////////////////

const descifrado =
    crypto.privateDecrypt(
        claves.privateKey,
        cifrado
    );

console.log(
    descifrado.toString()
);


