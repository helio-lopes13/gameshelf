import express from 'express';
import { celebrate, Joi } from 'celebrate';
import UsuariosController from './controllers/UsuariosController.js';
import LoginController from './controllers/LoginController.js';

const routes = express.Router();

const usuariosController = new UsuariosController();
const loginController = new LoginController();

routes.get('/users', usuariosController.index);
routes.post(
    '/users/register',
    celebrate({
        body: Joi.object().keys({
            usuario: Joi.string().required(),
            senha: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    usuariosController.register
);

routes.post('/login', loginController.index);

export default routes;