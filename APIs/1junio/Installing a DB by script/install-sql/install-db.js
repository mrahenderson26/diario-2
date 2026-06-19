import mysql from "mysql2/promise";
import fs from "fs";

async function inicializarBD() {
    // Leer el script SQL
    const sql = fs.readFileSync("./reservas_express.sql", "utf8");

    // Conectar al servidor MySQL
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        multipleStatements: true // necesario si el archivo tiene varias sentencias
    });

    // Ejecutar el script
    await connection.query(sql);

    console.log("Base de datos inicializada correctamente");

    await connection.end();
}

inicializarBD()





