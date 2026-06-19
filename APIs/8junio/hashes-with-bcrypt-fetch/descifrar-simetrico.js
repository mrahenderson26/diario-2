import crypto from "crypto";

import { algoritmo } from "./cifrar-simetrico.js";
import { clave } from "./cifrar-simetrico.js";
import { iv } from "./cifrar-simetrico.js";
import { cifrado } from "./cifrar-simetrico.js";


const decipher = crypto.createDecipheriv(
    algoritmo,
    clave,
    iv
);

let texto = decipher.update(
    cifrado,
    "hex",
    "utf8"
);

texto += decipher.final("utf8");

console.log(texto);
