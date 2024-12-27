import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'https://controlefinanceiro7.netlify.app', // Origem permitida
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true, // Se precisar de credenciais
};

// Aplicando o middleware CORS globalmente
app.use(cors(corsOptions));

app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World, chove em sp');
});

export default app;
