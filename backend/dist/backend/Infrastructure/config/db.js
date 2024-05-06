"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const Via_1 = require("../../Domain/entities/Via");
const Usuario_1 = require("../../Domain/entities/Usuario");
const Croqui_1 = require("../../Domain/entities/Croqui");
const Face_1 = require("../../Domain/entities/Face");
const Montanha_1 = require("../../Domain/entities/Montanha");
const Fonte_1 = require("../../Domain/entities/Fonte");
const Colecao_1 = require("../../Domain/entities/Colecao");
const Escalada_1 = require("../../Domain/entities/Escalada");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: path_1.default.join(__dirname, "../../../database/sqlite/cumes_brasil.db"),
    synchronize: true,
    logging: false,
    entities: [
        Via_1.Via,
        Usuario_1.Usuario,
        Croqui_1.Croqui,
        Face_1.Face,
        Montanha_1.Montanha,
        Fonte_1.Fonte,
        Colecao_1.Colecao,
        Escalada_1.Escalada
    ]
});
