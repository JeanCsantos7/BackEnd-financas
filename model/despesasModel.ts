import Conexao from '../database/database';

interface Dados {
    id: number;
    descricao: string;
    valor: number;
    categoria: string;
}

class DespesasModel {
    createDespesas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO despesas (descricao, valor, categoria) VALUES(?,?,?)';
        return new Promise((resolve, reject) => {
            Conexao.query(
                sql,
                [bodyDetail.descricao, bodyDetail.valor, bodyDetail.categoria],
                (error, result) => {
                    if (error) {
                        reject(error);
                    }

                    return resolve(result);
                },
            );
        });
    }
    findDespesas() {
        const sql = 'SELECT * FROM despesas';
        return new Promise((resolve, reject) => {
            Conexao.query(sql, (error, result) => {
                if (error) {
                    reject(error);
                }
                return resolve(result);
            });
        });
    }
    updateDespesas(bodyDetail: Dados, idParams: Number) {
        const sql =
            'UPDATE despesas SET descricao=?, valor=?, categoria=? WHERE id=?';
        return new Promise((resolve, reject) => {
            Conexao.query(
                sql,
                [
                    bodyDetail.descricao,
                    bodyDetail.valor,
                    bodyDetail.categoria,
                    idParams,
                ],
                (error, result) => {
                    if (error) {
                        reject(error);
                    }

                    return resolve(result);
                },
            );
        });
    }
    deleteDespesas(idParam: Number) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM despesas WHERE id=?';
            Conexao.query(sql, idParam, (error, result) => {
                if (error) {
                    reject(error);
                }

                return resolve(result);
            });
        });
    }

    totalDespesas() {
        const sql = 'SELECT SUM(valor) AS total FROM railway.despesas;';
        return new Promise((resolve, reject) => {
            Conexao.query(sql, (error, result) => {
                if (error) {
                    reject(error);
                }
                return resolve(result);
            });
        });
    }
}

export default new DespesasModel();
