const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./router/project-router.js');
const resourceRouter = require('./router/resource-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/project', projectRouter);
server.use('/api/resource', resourceRouter);

server.get('/', (req, res) => {
  res.send(`<h2>File for starting</h2>`);
});

module.exports = server;
