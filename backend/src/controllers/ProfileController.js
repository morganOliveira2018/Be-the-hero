const connection = require('../database/connection');

/* Perfil de uma entidade(ong) */
module.exports = {
    /* Listar casos especifícos de um Ong */
    async index (request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id) /*Buscando todos 'incidents' que foi esse 'ong_id' que criou*/
            .select('*');

        return response.json(incidents); 
    }
}