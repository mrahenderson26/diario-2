import mysql from 'mysql2/promise';

// Crea el pool de conexiones usando promesas
const pool = mysql.createPool({
  host: 'localhost',      // o la IP de tu servidor MySQL
  user: 'root',
  password: '',
  database: 'peliculas_p',
  waitForConnections: true,
  connectionLimit: 10,    // conexiones simultáneas
  queueLimit: 0
});

export default pool;