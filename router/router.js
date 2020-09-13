const express = require('express');

const db = require('../data/dbHelpers.js');

const router = express.Router();
// const { authenticate } = require('../auth/restricted-middleware.js')


router.get('/wood', async (req, res) => {
    try {
        const allWood = await db.getAllWoodSpecies(req.query)
        res.status(200).json(allWood);
    } catch(error) {
        res.status(404).json({ message: "can get data" })
    }
})

router.get('/wood/:id', async(req, res) => {
    try {
        const singleWood = await db.getOneWoodSpecies(req.params.id)
        res.status(200).json(singleWood)
    } catch(errror) {
        console.log(error)
        res.status(500).json({
            message: "cannot find requested wood"
        })
    }
})