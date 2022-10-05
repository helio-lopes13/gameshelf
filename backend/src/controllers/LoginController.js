import knex from '../database/connection.js';

class LoginController {
    async index(request, response) {
        const { usuario, senha } = request.body;

        const usuarioLogin = await knex('usuario').select('id', 'nome_usuario').whereILike('nome_usuario', usuario).andWhereILike('senha', senha).first();

        if (!usuarioLogin) {
            return response.status(400).json({ message: 'Usuário não encontrado' });
        }

        return response.status(200).json(usuarioLogin);
    }
}

export default LoginController;