const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1} = request.query;

        /*  Contador de Casos */
        const [count] = await connection('incidents').count();
        /*console.log(count);*/

        const incidents = await connection('incidents')
        .join('ongs', 'ongs_id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((parseInt(page) - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    async create(request , response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        /* Pega na destruturação o 'id' para indicar o id da ong que foi criada*/
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
         .where('id', id) 
         .select('ong_id') 
         .first(); // Retorna o id como único valor, ao invés de um array

        if(incident.ong_id !== ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }
        await connection('incidents').where('id', id).delete();

        /* 204 -> No content */
        return response.status(204).send();

    }
};