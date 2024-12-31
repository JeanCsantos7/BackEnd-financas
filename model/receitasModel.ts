import Conexao from '../database/database';

interface Dados {
    descricao: string;
    valor: number;
    categoria: string;
}

class ReceitasModel {
    async createEntradas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO receitas (descricao, valor, categoria) VALUES (?, ?, ?)';
        try {
            const [result] = await Conexao.query(sql, [
                bodyDetail.descricao,
                bodyDetail.valor,
                bodyDetail.categoria,
            ]);
            return JSON.parse(JSON.stringify(result));
        } catch (error) {
            throw error;
        }
    }

    async findReceitas() {
        const sql = 'SELECT * FROM receitas';
        try {
            const [result] = await Conexao.query(sql);
            return JSON.parse(JSON.stringify(result));
        } catch (error) {
            throw error;
        }
    }

    async updateReceitas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE receitas SET descricao = ?, valor = ?, categoria = ? WHERE id = ?';
        try {
            const [result] = await Conexao.query(sql, [
                bodyDetail.descricao,
                bodyDetail.valor,
                bodyDetail.categoria,
                idParams,
            ]);
            return JSON.parse(JSON.stringify(result));
        } catch (error) {
            throw error;
        }
    }

    async deleteReceitas(idParams: number) {
        const sql = 'DELETE FROM receitas WHERE id = ?';
        try {
            const [result] = await Conexao.query(sql, [idParams]);
            return JSON.parse(JSON.stringify(result));
        } catch (error) {
            throw error;
        }
    }

    async totalReceitas() {
        const sql = 'SELECT SUM(valor) AS total FROM receitas';
        try {
            const [result] = await Conexao.query(sql);
            return JSON.parse(JSON.stringify(result));
        } catch (error) {
            throw error;
        }
    }
}

export default new ReceitasModel();
