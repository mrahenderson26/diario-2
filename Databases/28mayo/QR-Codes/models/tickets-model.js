import pool from "../config/conexion-db.js"

export const obtenerTickets = async () => {
  const [rows] = await pool.query("SELECT * FROM tickets ORDER BY id DESC")
  return rows
}

export const crearTicket = async ({ nombre, email, token }) => {
  await pool.query(
    "INSERT INTO tickets (nombre, email, token) VALUES (?, ?, ?)",
    [nombre, email, token]
  )
}

export const obtenerTicketPorToken = async (token) => {
  const [rows] = await pool.query(
    "SELECT * FROM tickets WHERE token = ? LIMIT 1",
    [token]
  )

  return rows[0]
}

export const marcarTicketComoUsado = async (token) => {
  await pool.query(
    "UPDATE tickets SET usada = TRUE WHERE token = ?",
    [token]
  )
}
