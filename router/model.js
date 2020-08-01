const db = require('../data/db-config.js');

module.exports = {
  findProject,
  findResource,
  findByIdP,
  findByIdR,
  addProject,
  addResource
}

// Projects
function findProject() {
  return db('project');
}

function findByIdP(id) {
  return db('projects')
    .where({id})
    .first();
}

function addProject(projects) {
  return db("project")
  .insert(projects)
  .then(ids => {
    return findByIdP(ids[0]);
  });
}

// Resources
function findResource(id) {
  return db('resource')
}

function findByIdR(id) {
  return db('resource')
    .where({id})
    .first();
}

function addResource(resources) {
  return db("resource")
  .insert(resources)
  .then(ids => {
    return findByIdR(ids[0]);
  });
}