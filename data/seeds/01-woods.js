
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('wood_species').insert([
        {
          wood_image:'https://images.app.goo.gl/1RKxk9WzZjAeEvB79',
          wood_name: 'Douglas Fir',
          wood_strength: 'soft',
          wood_scienctific_name: 'Pseudotsuga menziesii',
          wood_commonplaces_locations: 'western North America',
          wood_general_use: 'joinery, veneer, flooring and construction'
        },
        {
          wood_image:'https://images.app.goo.gl/ju1V9yExsE2cZi2dA',
          wood_name: 'Mahogany',
          wood_strength: 'durable',
          wood_scienctific_name: 'Swietenia macrophylla',
          wood_commonplaces_locations: 'Mexico to southern Amazonia in Brazil,',
          wood_general_use: 'cabinetery and furniture'
        },

      ]);
    });
};
