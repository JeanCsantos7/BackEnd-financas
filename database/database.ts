import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Cria o pool de conexões
const pool = mysql.createPool({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD || 'Sccp1910',
    database: process.env.MYSQLDATABASE || 'bd_controlegastos',
    port: Number(process.env.MYSQLPORT) || 3306,
    waitForConnections: true, // Aguarda conexões caso todas estejam ocupadas
    connectionLimit: 10, // Limite de conexões simultâneas no pool
    queueLimit: 0, // Sem limite de fila para requisições pendentes
});

// Testa a conexão inicial
pool.getConnection((error, connection) => {
    if (error) {
        console.error('Deu um erro ao conectar ao MySQL:', error);
        return;
    }
    console.log('Conexão ao MySQL bem-sucedida');
    connection.release(); // Libera a conexão de volta para o pool
});

export default pool;
