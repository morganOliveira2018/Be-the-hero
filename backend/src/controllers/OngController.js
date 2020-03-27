const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    /* Método para listagem */
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },     
    /* Método para criação */
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        /* Deixa somente o id que vai permitir se conectar a aplicação */
        return response.json({  id  });
    }
};