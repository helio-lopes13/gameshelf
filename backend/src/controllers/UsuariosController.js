import knex from '../database/connection.js';

class UsuariosController {
    async index (request, response) {
        const usuarios = await knex('usuario').select('*');
    
        const usuariosSerializados = usuarios.map(usuario => {
            return {
                id: usuario.id,
                nome_usuario: usuario.nome_usuario
            }
        });
    
        return response.json(usuariosSerializados);
    }

    async register (request, response) {
        const {usuario, senha} = request.body;

        const novoUsuario = {
            nome_usuario: usuario,
            senha
        };

        const trx = await knex.transaction();

        const insertedIds = await trx('usuario').insert(novoUsuario);

        const usuarioId = insertedIds[0];

        await trx.commit();
        
        return response.json({
            id: usuarioId,
            usuario: novoUsuario.nome_usuario
        });
    }
}

export default UsuariosController;