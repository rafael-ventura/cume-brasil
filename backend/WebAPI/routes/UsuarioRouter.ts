import {Router} from 'express';
import dbConnection from '../../Infrastructure/config/db';
import {UsuarioController} from '../Controllers/UsuarioController';
import {UsuarioService} from '../../Application/services/UsuarioService';
import {UsuarioRepository} from '../../Infrastructure/repositories/UsuarioRepository';
import {authorizationMiddleware} from "../Middlewares/AuthorizationMiddleware";

const usuarioService = new UsuarioService(new UsuarioRepository(dbConnection));
const usuarioController = new UsuarioController(usuarioService)
const authenticateToken = require('../Middlewares/AuthenticateMiddleware');

const UsuarioRouter = Router();

UsuarioRouter.get('/:id', usuarioController.getUsuarioById);
UsuarioRouter.get('/', usuarioController.getAllUsuario);
UsuarioRouter.put('/:id', usuarioController.updateUsuario);
UsuarioRouter.delete('/:id', usuarioController.deleteUsuario);

export default UsuarioRouter;