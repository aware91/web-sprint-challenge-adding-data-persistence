const express = require('express');
const helmet = require('helmet');

const Router = require('./router/project-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/project', Router);

server.get('/', (req, res) => {
  res.send(`<h2>File for starting</h2>`);
});

module.exports = server;
