"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscaladaController = void 0;
class EscaladaController {
    constructor(escaladaService) {
        /**
         * @route GET /escaladas/:id
         * @group Escaladas - Operações relacionadas a escaladas
         * @returns {Escalada.model} 200 - Escalada encontrada
         * @returns {object} 404 - Escalada não encontrada
         * @returns {Error} 500 - Erro desconhecido
         */
        this.getEscaladaById = async (req, res) => {
            try {
                const id = parseInt(req.params.id);
                const result = await this.service.getById(id);
                res.json(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "Escalada não encontrada") {
                        res.status(404).json({ error: error.message });
                    }
                    else {
                        res.status(500).json({ error: error.message });
                    }
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        /**
         * @route GET /escaladas
         * @group Escaladas - Operações relacionadas a escaladas
         * @returns {Array.<Escalada>} 200 - Escaladas encontradas
         * @returns {object} 404 - Escalada não encontrada
         * @returns {Error} 500 - Erro desconhecido
         */
        this.getAllEscalada = async (_, res) => {
            try {
                const escaladas = await this.service.get();
                res.json(escaladas);
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "Nenhuma escalada encontrada") {
                        return res.status(404).json({ message: error.message });
                    }
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        /**
         * @route POST /escaladas
         * @group Escaladas - Operações relacionadas a escaladas
         * @returns {object} 201 - Escalada criada com sucesso
         * @returns {Error} 500 - Erro desconhecido
         */
        this.createEscalada = async (req, res) => {
            try {
                const escalada = req.body;
                await this.service.create(escalada);
                res.status(201).json({ message: "Escalada criada com sucesso" });
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "É necessário informar uma via válida para criar uma escalada") {
                        res.status(400).json({ error: error.message });
                    }
                    else if (error.message === "É necessário informar um usuário válido para criar uma escalada") {
                        res.status(400).json({ error: error.message });
                    }
                    else {
                        return res.status(404).json({ message: error.message });
                    }
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        /**
         * @route PUT /escaladas
         * @group Escaladas - Operações relacionadas a Escaladas
         * @returns {object} 200 - Escalada atualizada com sucesso
         * @returns {Error} 500 - Erro desconhecido
         */
        this.updateEscalada = async (req, res) => {
            try {
                const escalada = req.body;
                await this.service.update(escalada);
                res.status(200).json({ message: "Escalada atualizada com sucesso" });
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "Escalada não encontrada") {
                        res.status(404).json({ error: error.message });
                    }
                    else {
                        res.status(500).json({ error: error.message });
                    }
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        /**
         * @route DELETE /escaladas/:id
         * @group Escaladas - Operações relacionadas a Escaladas
         * @returns {object} 200 - Escalada deletada com sucesso
         * @returns {Error} 500 - Erro desconhecido
         * @returns {object} 404 - Escalada não encontrada
         */
        this.deleteEscalada = async (req, res) => {
            try {
                const id = parseInt(req.params.id);
                await this.service.delete(id);
                res.status(200).json({ message: "Escalada deletada com sucesso" });
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "Escalada não encontrada") {
                        res.status(404).json({ error: error.message });
                    }
                    else {
                        res.status(500).json({ error: error.message });
                    }
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        /**
         * @route GET /escaladas/:id
         * @group Escaladas - Operações relacionadas a escaladas
         * @returns {Array.<Escalada>} 200 - Escaladas encontradas
         * @returns {object} 404 - Escalada não encontrada
         * @returns {Error} 500 - Erro desconhecido
         */
        this.getByUsuarioId = async (req, res) => {
            try {
                const usuarioId = parseInt(req.params.id);
                const result = await this.service.getEscaladasDoUsuario(usuarioId);
                res.json(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "Nenhuma escalada encontrada para este usuário") {
                        res.status(404).json({ error: error.message });
                    }
                    else {
                        res.status(500).json({ error: error.message });
                    }
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        this.getByViaId = async (req, res) => {
            try {
                const viaId = parseInt(req.params.id);
                const result = await this.service.getEscaladasDaVia(viaId);
                res.json(result);
            }
            catch (error) {
                if (error instanceof Error) {
                    if (error.message === "Nenhuma escalada encontrada para esta via") {
                        res.status(404).json({ error: error.message });
                    }
                    else {
                        res.status(500).json({ error: error.message });
                    }
                }
                else {
                    res.status(500).json({ error: "Ocorreu um erro desconhecido" });
                }
            }
        };
        this.service = escaladaService;
    }
}
exports.EscaladaController = EscaladaController;
