import { createHash } from "crypto";
import fs from "fs";

const texto = 'MiContraseñaSecreta123';
const hash = createHash('sha256').update(texto).digest('hex');

console.log(hash);


