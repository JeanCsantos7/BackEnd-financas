import Conexao from '../database/database';

interface Dados {
    descricao: string;
    valor: number;
    categoria: string;
}

class ReceitasModel {
    // Método genérico para execução das queries
    private executarQuery(sql: string, parametros: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            Conexao.query(sql, parametros, (error, result) => {
                if (error) {
                    return reject(error);
                }
                return resolve(result); // O result já é um objeto
            });
        });
    }

    // Criar receita
    async createEntradas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO receitas (descricao, valor, categoria) VALUES(?, ?, ?)';
        return await this.executarQuery(sql, [
            bodyDetail.descricao,
            bodyDetail.valor,
            bodyDetail.categoria,
        ]);
    }

    // Buscar receitas
    async findReceitas() {
        const sql = 'SELECT * FROM receitas';
        return await this.executarQuery(sql);
    }

    // Atualizar receita
    async updateReceitas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE receitas SET descricao=?, valor=?, categoria=? WHERE id=?';
        return await this.executarQuery(sql, [
            bodyDetail.descricao,
            bodyDetail.valor,
            bodyDetail.categoria,
            idParams,
        ]);
    }

    // Deletar receita
    async deleteReceitas(idParams: number) {
        const sql = 'DELETE FROM receitas WHERE id=?';
        return await this.executarQuery(sql, [idParams]);
    }

    // Total das receitas
    async totalReceitas() {
        const sql = 'SELECT SUM(valor) AS total FROM receitas';
        return await this.executarQuery(sql);
    }
}

export default new ReceitasModel();
