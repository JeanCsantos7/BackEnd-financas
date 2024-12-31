import { Request, Response } from 'express';
import ReceitasModel from '../model/receitasModel';

class ControllerReceitas {
    async createReceitas(req: Request, res: Response) {
        try {
            const bodyDetail = req.body;
            const createEntradas =
                await ReceitasModel.createEntradas(bodyDetail);
            res.json(createEntradas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao criar entrada.' });
        }
    }

    async findReceitas(req: Request, res: Response) {
        try {
            const findReceitas = await ReceitasModel.findReceitas();
            res.json(findReceitas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar receitas.' });
        }
    }

    async updateReceitas(req: Request, res: Response) {
        try {
            const idParams = parseInt(req.params.id);
            const bodyDetail = req.body;
            const updateModel = await ReceitasModel.updateReceitas(
                bodyDetail,
                idParams,
            );
            res.json(updateModel);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao atualizar receita.' });
        }
    }

    async deleteReceitas(req: Request, res: Response) {
        try {
            const idParams = parseInt(req.params.id);
            const deleteModel = await ReceitasModel.deleteReceitas(idParams); // Adicionado o await
            res.json(deleteModel);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao excluir receita.' });
        }
    }

    async totalReceitas(req: Request, res: Response) {
        try {
            const totalReceita = await ReceitasModel.totalReceitas();
            res.json(totalReceita);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Erro ao calcular total de receitas.',
            });
        }
    }
}

export default new ControllerReceitas();
