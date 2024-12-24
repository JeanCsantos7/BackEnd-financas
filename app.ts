import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://controlefinanceiro7.netlify.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
     res.header('Access-Control-Allow-Origin', 'https://controlefinanceiro7.netlify.app'),
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'),
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
}));
app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;
