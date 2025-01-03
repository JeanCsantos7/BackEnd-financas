import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());

// Configurações CORS
const corsOptions = {
    origin: [
        'http://localhost:3000',
        'https://controlefinanceiro7.netlify.app/',
    ], // Permite apenas essas origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true, // Se precisar de credenciais
};

// Aplicando o middleware CORS globalmente
app.use(cors(corsOptions));

app.use(Routes);

app.get('/', (req, res) => {
    console.log('Rota inicial acessada');
    res.send('Hello World, chove em SP');
});

export default app;
