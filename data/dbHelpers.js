require('dotenv').config();

const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

// const dbEnv = process.env-DB_ENV || 'development';


module.exports = {
    getAllWoodSpecies,
    getOneWoodSpecies
}

    function getAllWoodSpecies() {
        return db('wood_species')
            .select(
                'wood_image',
                'wood_name',
                'wood_strength',
                'wood_scientific_name',
                'wood_commonplaces_locations',
                'wood_general_use'
            )
    }

    function getOneWoodSpecies(id) {
        return db('wood_species')
        .where({ id })
        .first()
    }