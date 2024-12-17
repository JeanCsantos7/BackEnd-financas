import mysql from 'mysql2'; // Recomendado usar mysql2 para melhor compatibilidade e desempenho.
import dotenv from 'dotenv';
dotenv.config();

const Conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // Porta padrão do MySQL (mude para 3001, se necessário)
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

Conexao.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
        return;
    }
    console.log('Conexão ao MySQL bem-sucedida');
});

export default Conexao;
