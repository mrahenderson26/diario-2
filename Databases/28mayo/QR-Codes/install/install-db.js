import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config({ quiet: true })

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const sqlPath = path.join(__dirname, "tickets-qr.sql")

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true
})

try {
  const sql = await fs.readFile(sqlPath, "utf8")
  await connection.query(sql)
  console.log("Base de datos instalada correctamente.")
} catch (error) {
  console.error("No se pudo instalar la base de datos:")
  console.error(error.message)
  process.exitCode = 1
} finally {
  await connection.end()
}
