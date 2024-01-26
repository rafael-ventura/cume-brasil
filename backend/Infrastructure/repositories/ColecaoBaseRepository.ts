import { Database } from 'sqlite3';
import { ColecaoBase } from '../../Domain/models/ColecaoBase';

export class ColecaoBaseRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async getColecaoBaseById(id: number): Promise<ColecaoBase | null> {
        return new Promise((resolve, reject) => {
            this.db.get(`SELECT * FROM ColecaoBase WHERE id = ?`, [id], (err, row: ColecaoBase) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (row) {
                        const colecaoBase = new ColecaoBase(
                            row.id,
                            row.nome,
                            row.descricao,
                            row.usuario_id
                        );
                        resolve(colecaoBase);
                    } else {
                        resolve(null);
                    }
                });
            });
    }

    async getColecoesBase(): Promise<ColecaoBase[] | null> {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM ColecaoBase`, (err, rows: ColecaoBase[]) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (rows) {
                        const colecoesBase = rows.map((row) => new ColecaoBase(
                            row.id,
                            row.nome,
                            row.descricao,
                            row.usuario_id
                        ));
                        resolve(colecoesBase);
                    } else {
                        resolve(null);
                    }
                });
            });

    }

    async getColecoesBaseByUsuarioId(usuarioId: number): Promise<ColecaoBase[] | null> {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM ColecaoBase WHERE usuario_id = ?`, [usuarioId], (err, rows: ColecaoBase[]) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (rows) {
                        const colecoesBase = rows.map((row) => new ColecaoBase(
                            row.id,
                            row.nome,
                            row.descricao,
                            row.usuario_id
                        ));
                        resolve(colecoesBase);
                    } else {
                        resolve(null);
                    }
                });
            });
    }

    async createColecaoBase(colecaoBase: ColecaoBase): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO ColecaoBase (nome, descricao, usuario_id) VALUES (?,?,?)`,
                    [colecaoBase.nome, colecaoBase.descricao, colecaoBase.usuario_id],
                    (err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve();
                    });
            });
    }

    async updateColecaoBase(colecaoBase: ColecaoBase): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE ColecaoBase SET nome = ?, descricao = ?, usuario_id = ? WHERE id = ?`,
                    [colecaoBase.nome, colecaoBase.descricao, colecaoBase.usuario_id, colecaoBase.id],
                    (err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve();
                    });
            });

    }

    async deleteColecaoBase(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM ColecaoBase WHERE id = ?`,
                    [id],
                    (err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        resolve();
                    });
            });
    }

}