import { Router } from 'express';
import cors from 'cors';
import ControllerReceitas from './controller/receitasController';
import ControllerDespesas from './controller/despesasController';

const Routes = Router();

// CORS específico para as rotas
const corsOptions = {
    origin: 'https://controlefinanceiro7.netlify.app', // Defina sua origem permitida
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

// Aplicando CORS nas rotas
Routes.post(
    '/adicionarReceita',
    cors(corsOptions),
    ControllerReceitas.createReceitas,
);
Routes.post(
    '/adicionarDespesa',
    cors(corsOptions),
    ControllerDespesas.createDespesas,
);
Routes.get(
    'https://backend-financas-mauve.vercel.app/receitas',
    cors(corsOptions),
    ControllerReceitas.findReceitas,
);
Routes.get(
    'https://backend-financas-mauve.vercel.app/despesas',
    cors(corsOptions),
    ControllerDespesas.findDespesas,
);
Routes.get(
    'https://backend-financas-mauve.vercel.app/totalDespesas',
    cors(corsOptions),
    ControllerDespesas.totalDespesas,
);
Routes.get(
    'https://backend-financas-mauve.vercel.app/totalReceitas',
    cors(corsOptions),
    ControllerReceitas.totalReceitas,
);
Routes.put(
    'https://backend-financas-mauve.vercel.app/atualizarReceita/:id',
    cors(corsOptions),
    ControllerReceitas.updateReceitas,
);
Routes.put(
    'https://backend-financas-mauve.vercel.app/atualizarDespesa/:id',
    cors(corsOptions),
    ControllerDespesas.updateDespesas,
);
Routes.delete(
    'https://backend-financas-mauve.vercel.app/deletarReceita/:id',
    cors(corsOptions),
    ControllerReceitas.deleteReceitas,
);
Routes.delete(
    'https://backend-financas-mauve.vercel.app/deletarDespesa/:id',
    cors(corsOptions),
    ControllerDespesas.deleteDespesas,
);

export default Routes;
