import Conexao from '../database/database';

interface Dados {
    id: number;
    descricao: string;
    valor: number;
    categoria: string;
}

class DespesasModel {
    // Método para executar as queries
    private executarQuery(sql: string, parametros: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(sql, parametros, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result);
            });
        });
    }

    // Criar despesa
    async createDespesas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO despesas (descricao, valor, categoria) VALUES(?, ?, ?)';
        return await this.executarQuery(sql, [
            bodyDetail.descricao,
            bodyDetail.valor,
            bodyDetail.categoria,
        ]);
    }

    // Buscar despesas
    async findDespesas() {
        const sql = 'SELECT * FROM despesas';
        return await this.executarQuery(sql);
    }

    // Atualizar despesa
    async updateDespesas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE despesas SET descricao=?, valor=?, categoria=? WHERE id=?';
        return await this.executarQuery(sql, [
            bodyDetail.descricao,
            bodyDetail.valor,
            bodyDetail.categoria,
            idParams,
        ]);
    }

    // Deletar despesa
    async deleteDespesas(idParam: number) {
        const sql = 'DELETE FROM despesas WHERE id=?';
        return await this.executarQuery(sql, [idParam]);
    }

    // Total das despesas
    async totalDespesas() {
        const sql = 'SELECT SUM(valor) AS total FROM despesas';
        return await this.executarQuery(sql);
    }
}

export default new DespesasModel();
