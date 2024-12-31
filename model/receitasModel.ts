import Conexao from '../database/database';

interface Dados {
    descricao: string;
    valor: number;
    categoria: string;
}

class ReceitasModel {
    createEntradas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO receitas (descricao, valor, categoria) VALUES(?, ?, ?)';
        return new Promise((resolve, reject) => {
            Conexao.query(
                sql,
                [bodyDetail.descricao, bodyDetail.valor, bodyDetail.categoria],
                (error, result) => {
                    if (error) {
                        return reject(error);
                    }

                    return resolve(result); // O result já é um objeto, não precisa de JSON.parse
                },
            );
        });
    }

    findReceitas() {
        const sql = 'SELECT * FROM receitas';
        return new Promise((resolve, reject) => {
            Conexao.query(sql, (error, result) => {
                if (error) {
                    return reject(error);
                }

                return resolve(result); // O result já é um objeto
            });
        });
    }

    updateReceitas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE receitas SET descricao=?, valor=?, categoria=? WHERE id=?';
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
                        return reject(error);
                    }

                    return resolve(result); // O result já é um objeto
                },
            );
        });
    }

    deleteReceitas(idParams: number) {
        const sql = 'DELETE FROM receitas WHERE id=?';
        return new Promise((resolve, reject) => {
            Conexao.query(sql, idParams, (error, result) => {
                if (error) {
                    return reject(error);
                }

                return resolve(result); // O result já é um objeto
            });
        });
    }

    totalReceitas() {
        const sql = 'SELECT SUM(valor) AS total FROM railway.receitas;';
        return new Promise((resolve, reject) => {
            Conexao.query(sql, (error, result) => {
                if (error) {
                    return reject(error);
                }

                return resolve(result); // O result já é um objeto
            });
        });
    }
}

export default new ReceitasModel();
