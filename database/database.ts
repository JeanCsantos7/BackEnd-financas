import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Criação do pool de conexões
const Conexao = mysql.createPool({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD || 'Sccp1910',
    database: process.env.MYSQLDATABASE || 'bd_controlegastos',
    port: Number(process.env.MYSQLPORT) || 3306,
    connectTimeout: 70000,
    waitForConnections: true,
    connectionLimit: 10, // Número máximo de conexões simultâneas
    queueLimit: 0, // Sem limite na fila de requisições
});

export default Conexao;
