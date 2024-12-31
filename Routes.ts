import { Router } from 'express';
import cors from 'cors';
import ControllerReceitas from './controller/receitasController';
import ControllerDespesas from './controller/despesasController';

const Routes = Router();

// CORS específico para as rotas
const corsOptions = {
    origin: '*', // Defina sua origem permitida
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
Routes.get('/receitas', cors(corsOptions), ControllerReceitas.findReceitas);
Routes.get('/despesas', cors(corsOptions), ControllerDespesas.findDespesas);
Routes.get(
    '/totalDespesas',
    cors(corsOptions),
    ControllerDespesas.totalDespesas,
);
Routes.get(
    '/totalReceitas',
    cors(corsOptions),
    ControllerReceitas.totalReceitas,
);
Routes.put(
    '/atualizarReceita/:id',
    cors(corsOptions),
    ControllerReceitas.updateReceitas,
);
Routes.put(
    '/atualizarDespesa/:id',
    cors(corsOptions),
    ControllerDespesas.updateDespesas,
);
Routes.delete(
    '/deletarReceita/:id',
    cors(corsOptions),
    ControllerReceitas.deleteReceitas,
);
Routes.delete(
    '/deletarDespesa/:id',
    cors(corsOptions),
    ControllerDespesas.deleteDespesas,
);

export default Routes;
