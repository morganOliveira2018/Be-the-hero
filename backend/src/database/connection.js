/*http://knexjs.org/#Installation-migrations*/

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

/* Exportando a conexão com o BD */
module.exports = connection;