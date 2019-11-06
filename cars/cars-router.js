const express = require('express');

const Cars = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    Cars.select('*').from('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to get cars from the database'});
        })
})

router.post('/', (req, res) => {
    Cars.insert(req.body, 'id')
        .into('cars')
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to insert car' })
        })
})

module.exports = router;