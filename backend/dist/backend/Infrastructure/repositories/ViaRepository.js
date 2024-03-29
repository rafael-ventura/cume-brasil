"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaRepository = void 0;
const Via_1 = require("../../Domain/models/Via");
const Croqui_1 = require("../../Domain/models/Croqui");
class ViaRepository {
    constructor(db, croquiRepository) {
        this.db = db;
        this.croquiRepository = croquiRepository;
    }
    async getViaById(id) {
        const query = `SELECT * FROM Via WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.db.get(query, [id], async (err, row) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (!row) {
                    resolve(null);
                    return;
                }
                const via = new Via_1.Via(row.id, row.nome, row.grau, row.crux, row.artificial, row.duracao, row.exposicao, row.extensao, JSON.parse(row.conquistadores), row.detalhes, row.data, row.montanha_id, row.face_id, row.via_principal_id, row.fonte_id);
                resolve(via);
            });
        });
    }
    async getVias() {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM Via`, (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (rows) {
                    const vias = rows.map((row) => new Via_1.Via(row.id, row.nome, row.grau, row.crux, row.artificial, row.duracao, row.exposicao, row.extensao, row.conquistadores, row.detalhes, row.data, row.montanha_id, row.face_id, row.via_principal_id, row.fonte_id));
                    resolve(vias);
                }
                else {
                    resolve(null);
                }
            });
        });
    }
    async createVia(via) {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO Via (nome, grau, crux, artificial, duracao, exposicao, extensao, conquistadores, detalhes, data, montanha_id, face_id, via_principal_id, fonte_id) 
            VALUES (?, ? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,? ,?)`, [
                via.nome,
                via.grau,
                via.crux,
                via.artificial,
                via.duracao,
                via.exposicao,
                via.extensao,
                JSON.stringify(via.conquistadores),
                via.detalhes,
                via.data,
                via.montanha_id,
                via.face_id,
                via.via_principal_id,
                via.fonte_id,
            ], (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async updateVia(via) {
        return new Promise((resolve, reject) => {
            this.db.run(`UPDATE Via SET nome = ?, grau = ?, crux = ?, artificial = ?, duracao = ?, exposicao = ?, extensao = ?, conquistadores = ?, detalhes = ?, data = ?, montanha_id = ?, face_id = ?, via_principal_id = ?, fonte_id = ? WHERE id = ?`, [
                via.nome,
                via.grau,
                via.crux,
                via.artificial,
                via.duracao,
                via.exposicao,
                via.extensao,
                JSON.stringify(via.conquistadores),
                via.detalhes,
                via.data,
                via.montanha_id,
                via.face_id,
                via.via_principal_id,
                via.fonte_id,
                via.id,
            ], (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async deleteVia(id) {
        return new Promise((resolve, reject) => {
            this.db.run(`DELETE FROM Via WHERE id = ?`, [id], (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async getCroquisByViaId(viaId) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT c.* FROM Croqui c
                INNER JOIN ViasCroquis vc ON c.id = vc.croqui_id
                WHERE vc.via_id = ?`, [viaId], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (rows) {
                    const croquis = rows.map((row) => new Croqui_1.Croqui(row.id, row.nome, row.imagemUrl, row.autor, row.descricao, row.fonte_id));
                    resolve(croquis);
                }
                else {
                    resolve(null);
                }
            });
        });
    }
    async getCroquiIdsByViaId(viaId) {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT croqui_id FROM ViasCroquis WHERE via_id = ?`, [viaId], (err, rows) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (rows) {
                    const croquiIds = rows.map((row) => row.croqui_id);
                    resolve(croquiIds);
                }
                else {
                    resolve(null);
                }
            });
        });
    }
}
exports.ViaRepository = ViaRepository;
