const express = require('express');
const helmet = require('helmet') // third-party secure middleware


const carsRouter = require('./cars/cars-router.js');

const server = express();

server.use(helmet()); // security first
server.use(express.json()); // JSON formatting

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('<h3>WEBDB-2-CHALLENGE</h3>');
});

module.exports = server;