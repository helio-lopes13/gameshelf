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
        console.log(usuario, senha);
        return;
    }
}

export default UsuariosController;