"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../../Infrastructure/config/db"));
const CroquiService_1 = require("../../Application/services/CroquiService");
const CroquiRepository_1 = require("../../Infrastructure/repositories/CroquiRepository");
const ViaService_1 = require("../../Application/services/ViaService");
const ViaRepository_1 = require("../../Infrastructure/repositories/ViaRepository");
const CroquiController_1 = require("../Controllers/CroquiController");
const croquiRepository = new CroquiRepository_1.CroquiRepository(db_1.default);
const croquiService = new CroquiService_1.CroquiService(new CroquiRepository_1.CroquiRepository(db_1.default));
const viaRepository = new ViaRepository_1.ViaRepository(db_1.default, croquiRepository);
const viaService = new ViaService_1.ViaService(viaRepository, croquiRepository);
const croquiController = new CroquiController_1.CroquiController(croquiService, viaService);
const CroquiRouter = (0, express_1.Router)();
CroquiRouter.get('/:id', croquiController.getCroquiById);
CroquiRouter.get('/', croquiController.getAllCroqui);
CroquiRouter.post('/', croquiController.createCroqui);
CroquiRouter.put('/:id', croquiController.updateCroqui);
CroquiRouter.delete('/:id', croquiController.deleteCroqui);
CroquiRouter.post('/associarVia', croquiController.associarVia);
CroquiRouter.post('/desassociarVia/:viaId/:croquiId', croquiController.desassociar);
exports.default = CroquiRouter;
