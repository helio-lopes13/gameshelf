import express from "express";

import UsuariosController from "./controllers/UsuariosController.js";

const routes = express.Router();

const usuariosController = new UsuariosController();

routes.get('/users', usuariosController.index);

routes.post('/users/register', usuariosController.register);

export default routes;