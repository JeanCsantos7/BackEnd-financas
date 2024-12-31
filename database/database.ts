import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const Conexao = mysql.createPool({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE || 'bd_controlegastos',
    port: Number(process.env.MYSQLPORT) || 3306,
    connectTimeout: 5000, // 5 segundos é um valor mais razoável
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 50, // Limita a fila de requisições
});

export default Conexao;
