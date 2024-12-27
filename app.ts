import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://controlefinanceiro7.netlify.app',
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization',
    );
    next();
});

app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World, chove em sp');
});

export default app;
