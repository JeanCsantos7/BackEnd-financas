import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const Conexao = mysql.createConnection({
    host: process.env.MYSQLHOST || 'localhost',
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD || 'Sccp1910',
    database: process.env.MYSQLDATABASE || 'bd_controlegastos',
    port: Number(process.env.MYSQLPORT) || 3306,
    connectTimeout: 70000,
});

Conexao.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error.code); // Exibe o código do erro
        console.error('Erro completo:', error); // Exibe detalhes completos
        return;
    }
    console.log('Conexão ao MySQL bem-sucedida');
});

export default Conexao;
