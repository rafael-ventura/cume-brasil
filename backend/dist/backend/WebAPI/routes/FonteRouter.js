"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FonteController_1 = require("../Controllers/FonteController");
const FonteService_1 = require("../../Application/services/FonteService");
const FonteRepository_1 = require("../../Infrastructure/repositories/FonteRepository");
const fonteService = new FonteService_1.FonteService(new FonteRepository_1.FonteRepository());
const fonteController = new FonteController_1.FonteController(fonteService);
const FonteRouter = (0, express_1.Router)();
FonteRouter.get("/:id", fonteController.getFonteById);
FonteRouter.get("/", fonteController.getAllFonte);
FonteRouter.post("/", fonteController.createFonte);
FonteRouter.put("/:d", fonteController.updateFonte);
FonteRouter.delete('/:id', fonteController.deleteFonte);
exports.default = FonteRouter;
