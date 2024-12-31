import { Request, Response } from 'express';
import despesasModel from '../model/despesasModel';

class ControllerDespesas {
    async createDespesas(req: Request, res: Response) {
        try {
            const bodyDetail = req.body;

            // Verifique se os dados necessários estão presentes
            if (!bodyDetail.valor || !bodyDetail.descricao) {
                return res
                    .status(400)
                    .json({ message: 'Campos obrigatórios ausentes.' });
            }

            const createDespesas =
                await despesasModel.createDespesas(bodyDetail);
            res.status(201).json(createDespesas); // Status 201 para criação
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    }

    async findDespesas(req: Request, res: Response) {
        try {
            const findDespesas = await despesasModel.findDespesas();
            res.status(200).json(findDespesas); // Status 200 para sucesso
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    }

    async updateDespesas(req: Request, res: Response) {
        try {
            const idParams = parseInt(req.params.id);
            const bodyDetail = req.body;

            // Verifique se o id foi fornecido corretamente
            if (isNaN(idParams)) {
                return res.status(400).json({ message: 'ID inválido.' });
            }

            // Verifique se os dados necessários estão presentes
            if (!bodyDetail.valor && !bodyDetail.descricao) {
                return res
                    .status(400)
                    .json({ message: 'Nenhum dado para atualizar.' });
            }

            const updateDespesas = await despesasModel.updateDespesas(
                bodyDetail,
                idParams,
            );
            res.status(200).json(updateDespesas); // Status 200 para sucesso
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    }

    async deleteDespesas(req: Request, res: Response) {
        try {
            const idParams = parseInt(req.params.id);

            // Verifique se o id foi fornecido corretamente
            if (isNaN(idParams)) {
                return res.status(400).json({ message: 'ID inválido.' });
            }

            const deleteDespesas = await despesasModel.deleteDespesas(idParams);
            if (!deleteDespesas) {
                return res
                    .status(404)
                    .json({ message: 'Despesa não encontrada.' });
            }

            res.status(200).json({ message: 'Despesa excluída com sucesso.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    }

    async totalDespesas(req: Request, res: Response) {
        try {
            const totalDespesa = await despesasModel.totalDespesas();
            res.status(200).json(totalDespesa); // Status 200 para sucesso
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro interno no servidor.' });
        }
    }
}

export default new ControllerDespesas();
