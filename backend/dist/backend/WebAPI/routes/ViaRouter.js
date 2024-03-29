"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../../Infrastructure/config/db"));
const ViaController_1 = require("../Controllers/ViaController");
const ViaService_1 = require("../../Application/services/ViaService");
const ViaRepository_1 = require("../../Infrastructure/repositories/ViaRepository");
const CroquiRepository_1 = require("../../Infrastructure/repositories/CroquiRepository");
const CroquiService_1 = require("../../Application/services/CroquiService");
const croquiRepository = new CroquiRepository_1.CroquiRepository(db_1.default);
const croquiService = new CroquiService_1.CroquiService(croquiRepository);
const viaRepository = new ViaRepository_1.ViaRepository(db_1.default, croquiRepository);
const viaService = new ViaService_1.ViaService(viaRepository, croquiRepository);
const viaController = new ViaController_1.ViaController(viaService);
const ViaRouter = (0, express_1.Router)();
ViaRouter.get('/:id', viaController.getViaById);
ViaRouter.get('/', viaController.getAllVia);
ViaRouter.post('/', viaController.createVia);
ViaRouter.put('/:id', viaController.updateVia);
ViaRouter.delete('/:id', viaController.deleteVia);
ViaRouter.get('/:id/croquis', viaController.getCroquisByViaId);
exports.default = ViaRouter;
