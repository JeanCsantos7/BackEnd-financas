import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
        allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    }),
);
app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;
