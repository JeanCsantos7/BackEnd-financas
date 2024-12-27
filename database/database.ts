import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const Conexao = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: Number(process.env.MYSQLPORT),
<<<<<<< HEAD
    connectTimeout: 50000,
=======
    connectTimeout: 70000,
>>>>>>> 0d937bbf30141dedf7b423dc29643c6dcd4df107
});

Conexao.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
        return;
    }
    console.log('Conexão ao MySQL bem-sucedida');
});

export default Conexao;
