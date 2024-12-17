import { Request, Response } from 'express';
import despesasModel from '../model/despesasModel';

class ControllerDespesas {
    async createDespesas(req: Request, res: Response) {
        try {
            const bodyDetail = req.body;
            const createDespesas =
                await despesasModel.createDespesas(bodyDetail);
            res.json(createDespesas);
        } catch (error) {
            console.error(error);
        }
    }
    async findDespesas(req: Request, res: Response) {
        try {
            const findDespesas = await despesasModel.findDespesas();
            res.json(findDespesas);
        } catch (error) {
            console.error(error);
        }
    }
    async updateDespesas(req: Request, res: Response) {
        try {
            const idParams = parseInt(req.params.id);
            const bodyDetail = req.body;
            const updateDespesas = await despesasModel.updateDespesas(
                bodyDetail,
                idParams,
            );

            res.json(updateDespesas);
        } catch (error) {
            console.error(error);
        }
    }
    async deleteDespesas(req: Request, res: Response) {
        try {
            const idParams = parseInt(req.params.id);
            const deleteDespesas = await despesasModel.deleteDespesas(idParams);

            res.json(deleteDespesas);
        } catch (error) {
            console.error(error);
        }
    }

    async totalDespesas(req: Request, res: Response) {
        try {
            const totalDespesa = await despesasModel.totalDespesas();
            res.json(totalDespesa);
        } catch (error) {
            console.error(error);
        }
    }
}

export default new ControllerDespesas();
