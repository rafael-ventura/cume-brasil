"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const Usuario_1 = require("../../Domain/entities/Usuario");
const db_1 = require("../config/db");
class UsuarioRepository {
    constructor() {
        this.repository = db_1.AppDataSource.getRepository(Usuario_1.Usuario);
    }
    async getById(id) {
        return this.repository.createQueryBuilder("usuario")
            .leftJoinAndSelect("usuario.foto_perfil", "foto_perfil")
            .where("usuario.id = :id", { id })
            .getOne();
    }
    async getAll() {
        return this.repository.createQueryBuilder("usuario")
            .leftJoinAndSelect("usuario.foto_perfil", "foto_perfil")
            .getMany();
    }
    async create(nome, email, senhaHash) {
        await this.repository.insert({
            nome: nome,
            email: email,
            password_hash: senhaHash
        });
    }
    async update(id, usuarioData) {
        await this.repository.update(id, usuarioData);
    }
    async delete(id) {
        await this.repository.delete(id);
    }
    async findByEmail(email) {
        const user = await this.repository.findOne({ where: { email } });
        return user ?? null;
    }
    async getPerfil(id) {
        return this.repository.createQueryBuilder("usuario")
            .leftJoinAndSelect("usuario.foto_perfil", "foto_perfil")
            .where("usuario.id = :id", { id })
            .getOne();
    }
}
exports.UsuarioRepository = UsuarioRepository;
