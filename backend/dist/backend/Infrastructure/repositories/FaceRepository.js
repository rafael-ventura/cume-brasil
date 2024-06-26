"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceRepository = void 0;
const Face_1 = require("../../Domain/entities/Face");
const db_1 = require("../config/db");
class FaceRepository {
    constructor() {
        this.repository = db_1.AppDataSource.getRepository(Face_1.Face);
    }
    async getById(id) {
        return this.repository.createQueryBuilder("face")
            .leftJoinAndSelect("face.montanha", "montanha")
            .leftJoinAndSelect("face.fonte", "fonte")
            .where("face.id = :id", { id })
            .getOne();
    }
    async getAll() {
        return this.repository.createQueryBuilder("face")
            .leftJoinAndSelect("face.montanha", "montanha")
            .leftJoinAndSelect("face.fonte", "fonte")
            .getMany();
    }
    async create(face) {
        await this.repository.insert(face);
    }
    async update(id, faceData) {
        await this.repository.update(id, faceData);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
}
exports.FaceRepository = FaceRepository;
