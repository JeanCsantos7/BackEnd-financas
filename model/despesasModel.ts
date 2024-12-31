import Conexao from '../database/database';

interface Dados {
    id: number;
    descricao: string;
    valor: number;
    categoria: string;
}

class DespesasModel {
    async createDespesas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO despesas (descricao, valor, categoria) VALUES (?, ?, ?)';
        try {
            const [result] = await Conexao.query(sql, [
                bodyDetail.descricao,
                bodyDetail.valor,
                bodyDetail.categoria,
            ]);
            if (!(result as any).affectedRows) {
                throw new Error('Erro ao criar despesa.');
            }
            return result;
        } catch (error) {
            console.error('Erro ao criar despesa:', error);
            throw new Error('Falha ao criar despesa no banco de dados.');
        }
    }

    async findDespesas() {
        const sql = 'SELECT * FROM despesas';
        try {
            const [result] = await Conexao.query(sql);
            if (Array.isArray(result) && result.length === 0) {
                throw new Error('Nenhuma despesa encontrada.');
            }
            return result;
        } catch (error) {
            console.error('Erro ao buscar despesas:', error);
            throw new Error('Falha ao buscar despesas no banco de dados.');
        }
    }

    async updateDespesas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE despesas SET descricao = ?, valor = ?, categoria = ? WHERE id = ?';
        try {
            const [result] = await Conexao.query(sql, [
                bodyDetail.descricao,
                bodyDetail.valor,
                bodyDetail.categoria,
                idParams,
            ]);
            if ((result as any).affectedRows === 0) {
                throw new Error('Despesa não encontrada para atualização.');
            }
            return result;
        } catch (error) {
            console.error('Erro ao atualizar despesa:', error);
            throw new Error('Falha ao atualizar despesa no banco de dados.');
        }
    }

    async deleteDespesas(idParam: number) {
        const sql = 'DELETE FROM despesas WHERE id = ?';
        try {
            const [result] = await Conexao.query(sql, [idParam]);
            if ((result as any).affectedRows === 0) {
                throw new Error('Despesa não encontrada para exclusão.');
            }
            return result;
        } catch (error) {
            console.error('Erro ao excluir despesa:', error);
            throw new Error('Falha ao excluir despesa no banco de dados.');
        }
    }

    async totalDespesas() {
        const sql = 'SELECT SUM(valor) AS total FROM despesas';
        try {
            const [result] = await Conexao.query(sql);
            if ((result as any)[0].total === null) {
                throw new Error('Não há despesas registradas.');
            }
            return (result as any)[0].total;
        } catch (error) {
            console.error('Erro ao calcular total de despesas:', error);
            throw new Error('Falha ao calcular total de despesas.');
        }
    }
}

export default new DespesasModel();
