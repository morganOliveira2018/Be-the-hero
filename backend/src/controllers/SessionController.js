const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name') // o nome vai ser retornado para o 'Frontend'
            .first(); // O que significa? Como tá buscando por ID vai retornar uma única Ong se existe.
             /* firts retorna um valor único, ao invés de um array */
        if(!ong) { /* Se a Ong não existir */
            return response.status(400).json({ error: 'No ONG found with this ID'});
        }
        /* Retorna como resposta apenas o nome dela */
        return response.json(ong);
    }



}