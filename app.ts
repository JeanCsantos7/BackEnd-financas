import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: "https://controlefinanceiro7.netlify.app"
}));
app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;
