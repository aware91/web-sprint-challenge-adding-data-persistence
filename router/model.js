const db = require('../data/db-config.js');

module.exports = {
  findProject,
  findResource,
  findTask,
  findByIdP,
  findByIdR,
  findByIdT,
  addProject,
  addResource,
  addTask
}

// Projects
function findProject() {
  return db('project');
}

function findByIdP(id) {
  return db('project')
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

// Task
function findTask(id) {
  return db('task')
}

function findByIdT(id) {
  return db('task')
    .where({id})
    .first();
}

function addTask(tasks) {
  return db("task")
  .insert(tasks)
  .then(ids => {
    return findByIdT(ids[0]);
  });
}