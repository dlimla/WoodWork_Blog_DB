
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wood_species', wood => {
      wood.increments();
      wood.binary('wood_image', 250)
      wood.string('wood_name').notNullable();
      wood.string('wood_strength').notNullable();
      wood.string('wood_scienctific_name')
      wood.string('wood_commonplaces_locations').notNullable();
      wood.string('wood_general_use').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('wood_species')
};
