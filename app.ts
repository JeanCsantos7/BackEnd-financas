import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());

// Configurações CORS
const corsOptions = {
    origin: ['https://controlefinanceiro7.netlify.app'], // Definindo as origens permitidas
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true, // Se precisar de credenciais
};

// Aplicando o middleware CORS com as opções
app.use(cors(corsOptions));

// Rota principal para teste
app.get('/', (req, res) => {
    console.log('Rota inicial acessada');
    res.send('Hello World, chove em SP');
});

// Rotas da aplicação
app.use(Routes);

export default app;
