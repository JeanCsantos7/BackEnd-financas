import express from 'express';
import cors from 'cors';
import Routes from './Routes';

const app = express();

app.use(express.json());
<<<<<<< HEAD
app.use(
    cors({
        origin: 'https://backend-financas-mauve.vercel.app',
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
        allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    }),
);
=======
app.use(cors({
    origin: "https://controlefinanceiro7.netlify.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
   allowedHeaders: ['Content-Type', 'Authorization'], 

}));
>>>>>>> 0d937bbf30141dedf7b423dc29643c6dcd4df107
app.use(Routes);
app.get('/', (req, res) => {
    res.send('Hello World');
});

export default app;
