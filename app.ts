import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }),
);

app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World, chove em sp');
});

export default app;
