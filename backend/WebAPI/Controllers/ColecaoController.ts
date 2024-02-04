import { ColecaoService } from "../../Application/services/ColecaoService";
import { Colecao} from "../../Domain/models/Colecao";
import {Request, Response} from "express";
import { ViaService } from "../../Application/services/ViaService";

export class ColecaoController {
    private service: ColecaoService;
    private viaService: ViaService;

    constructor(colecaoaService: ColecaoService, viaService: ViaService) {
        this.service = colecaoaService;
        this.viaService = viaService;
    }

    /**
     * @route GET /Colecaoes/:id
     * @group Colecaoes - Operações relacionadas a Colecaoes
     * @returns {Colecao.model} 200 - Colecao encontrada
     * @returns {object} 404 - Colecao não encontrada
     * @returns {Error} 500 - Erro desconhecido
     */
    getColecaoById = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const colecao = await this.service.getColecaoById(id);
            if (!colecao) {
                return res.status(404).json({message: "Colecao não encontrada."});
            }
            res.json(colecao);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({error: error.message});
            } else {
                res.status(500).json({error: "Ocorreu um erro desconhecido"});
            }
        }
    }

    /**
     * @route GET /Colecaos
     * @group Colecaos - Operações relacionadas a Colecaos
     * @returns {Array.<Colecao>} 200 - Colecaos encontradas
     * @returns {Error} 500 - Erro desconhecido
     * @returns {object} 404 - Colecao não encontrada
     * @returns {Error} 500 - Erro desconhecido
     */
    getAllColecao = async (req: Request, res: Response) => {
        try {
            const result = await this.service.getColecoes();
            res.json(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({error: error.message});
            } else {
                res.status(500).json({error: "Ocorreu um erro desconhecido"});
            }
        }
    }

    /**
     * @route GET /colecoes-do-usuario/:usuarioId
     * @group Colecoes - Operações relacionadas a Colecoes
     * @returns {object} 201 - Colecoes encontradas com sucesso
     * @returns {Error} 500 - Erro desconhecido
     */
    getColecoesByUsuarioId = async (req: Request, res: Response) => {
        try {
            const usuarioId = Number(req.params.usuarioId);

            if (!usuarioId || isNaN(usuarioId)) {
                return res.status(400).json({ error: 'ID do usuário inválido' });
            }

            const colecoes = await this.service.getColecoesByUsuarioId(usuarioId);

            if (colecoes === null) {
                return res.status(404).json({ message: 'Nenhuma coleção encontrada para o usuário com ID fornecido' });
            }

            res.status(200).json(colecoes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Ocorreu um erro ao buscar coleções do usuário' });
        }
    };

    getViasByColecao = async (req: Request, res: Response) => {
        try {
            
        } catch (error) {
            
        }
    }

    /**
     * @route POST /Colecaos
     * @group Colecoes - Operações relacionadas a Colecoes
     * @returns {object} 201 - Colecao criada com sucesso
     * @returns {Error} 500 - Erro desconhecido
     */
    createColecao = async (req: Request, res: Response) => {
        try {
            const colecao: Colecao = req.body;
            await this.service.createColecao(colecao);
            res.status(201).json({message: "Colecao criada com sucesso."});
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({error: error.message});
            } else {
                res.status(500).json({error: "Ocorreu um erro desconhecido"});
            }
        }
    }

    /**
     * @route PUT /Colecoes
     * @group Colecoes - Operações relacionadas a colecoes
     * @returns {object} 200 - Colecao atualizada com sucesso
     * @returns {Error} 500 - Erro desconhecido
     */
    updateColecao = async (req: Request, res: Response) => {
        const colecao: Colecao = req.body;
        await this.service.updateColecao(colecao);
        res.status(200).send();
    }

    /**
     * @route DELETE /Colecoes/:id
     * @group Colecoes - Operações relacionadas a colecoes
     * @returns {object} 200 - Colecao deletada com sucesso
     * @returns {Error} 500 - Erro desconhecido
     * @returns {object} 404 - Colecao não encontrada
     */
    deleteColecao = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        await this.service.deleteColecao(id);
        res.status(200).send();
    }


    /**
     * @route ADD Via /Colecoes/addVia
     * @group Colecoes - Operações relacionadas a colecoes
     * @returns {object} 200 - Via adicionada com sucesso
     * @returns {Error} 500 - Erro desconhecido
     * @returns {object} 404 - Colecao não encontrada
     */
    addVia = async (req: Request, res: Response) => {
        try {

            const { colecao_id, via_id } = req.body; // Obtenha os dados do corpo da solicitação
            const colecaoId: number = (colecao_id);
            const viaId: number = (via_id);
        

            if(!colecaoId || !viaId){
                return res.status(400).json({error: 'Id da coleção e/ou dados da via inválidos'});
            }

            const colecao = await this.service.getColecaoById(colecaoId);

            if(!colecao){
                return res.status(404).json({message: 'Coleção não encontrada.'});
            }

            const via = await this.viaService.getViaById(viaId);

            if(!via){
                return res.status(404).json({message: 'Via não encontrada.'});
            }

            await this.service.addVia(viaId , colecaoId);
    
            res.status(201).json({ message: 'Via adicionada à coleção com sucesso.' });

        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({error: error.message});
            } else {
                res.status(500).json({error: "Ocorreu um erro desconhecido"});
            }
        }
    }

    removeVia = async (req: Request, res: Response) => {
        console.log('Entrou na função removeVia');

        try {
            const colecaoId = Number(req.params.colecaoId);
            const viaId = Number(req.params.viaId);
            
            console.log(colecaoId, viaId);

            if (!colecaoId || !viaId) {
                return res.status(400).json({ error: 'Id da coleção e/ou dados da via inválidos' });
            }
    
            await this.service.removeVia(viaId, colecaoId);
    
            res.status(200).json({ message: 'Via removida da coleção com sucesso.' });
    
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Ocorreu um erro desconhecido' });
            }
        }
    }

    
}