exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();

        table.string('ong_id').notNullable();
        /**Chave estrangeira
         * Toda vez que o 'ong_id' tiver preenchido precisa ser um id que esteja
         * cadastrado na tabela 'ongs'
         * A table 'ong_id' referencia a coluna 'id' na tabela 'ongs'
        */

        table.foreign('ong_id').references('id').inTable('ongs');
       });
};

exports.down = function(knex) {
  return knex.schema.droptable('incidents');
};
