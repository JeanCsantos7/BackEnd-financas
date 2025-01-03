import pool from '../database/database';

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
            pool.query(
                sql,
                [bodyDetail.descricao, bodyDetail.valor, bodyDetail.categoria],
                (error, result) => {
                    if (error) {
                        return reject(error);
                    }

                    const conversaoJSON = JSON.parse(JSON.stringify(result));
                    return resolve(conversaoJSON);
                },
            );
        });
    }

    findReceitas() {
        const sql = 'SELECT * FROM receitas';
        return new Promise((resolve, reject) => {
            pool.query(sql, (error, result) => {
                if (error) {
                    return reject(error);
                }

                const conversaoJSON = JSON.parse(JSON.stringify(result));
                return resolve(conversaoJSON);
            });
        });
    }

    updateReceitas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE receitas SET descricao=?, valor=?, categoria=? WHERE id=?';
        return new Promise((resolve, reject) => {
            pool.query(
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

                    const conversaoJSON = JSON.parse(JSON.stringify(result));
                    return resolve(conversaoJSON);
                },
            );
        });
    }

    deleteReceitas(idParams: number) {
        const sql = 'DELETE FROM receitas WHERE id=?';
        return new Promise((resolve, reject) => {
            pool.query(sql, idParams, (error, result) => {
                if (error) {
                    reject(error);
                }

                const conversaoJSON = JSON.parse(JSON.stringify(result));
                resolve(conversaoJSON);
            });
        });
    }

    totalReceitas() {
        const sql = 'SELECT SUM(valor) AS total FROM railway.receitas;';
        return new Promise((resolve, reject) => {
            pool.query(sql, (error, result) => {
                if (error) {
                    reject(error);
                }

                const conversaoJSON = JSON.parse(JSON.stringify(result));
                resolve(conversaoJSON);
            });
        });
    }
}

export default new ReceitasModel();
