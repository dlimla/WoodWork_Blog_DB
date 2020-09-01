
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wood_species', wood => {
      wood.increments();

      wood.string('wood_name').notNullable();
      wood.string('wood_strength').notNullable();
      wood.string('wood_origin').notNullable();
      wood.string('wood_general_use').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wood_species')
};
