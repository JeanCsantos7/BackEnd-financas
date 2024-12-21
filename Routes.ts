import { Router } from 'express';
import ControllerReceitas from './controller/receitasController';
import ControllerDespesas from './controller/despesasController';

const Routes = Router();

Routes.post('/adicionarReceita', ControllerReceitas.createReceitas);
Routes.post('/adicionarDespesa', ControllerDespesas.createDespesas);
Routes.get('/receitas', ControllerReceitas.findReceitas);
Routes.get('/despesas', ControllerDespesas.findDespesas);
Routes.get('/totalDespesas', ControllerDespesas.totalDespesas);
Routes.get('/totalReceitas', ControllerReceitas.totalReceitas);
Routes.put('/atualizarReceita/:id', ControllerReceitas.updateReceitas);
Routes.put('/atualizarDespesa/:id', ControllerDespesas.updateDespesas);
Routes.delete('/deletarReceita/:id', ControllerReceitas.deleteReceitas);
Routes.delete('/deletarDespesa/:id', ControllerDespesas.deleteDespesas);

export default Routes;
