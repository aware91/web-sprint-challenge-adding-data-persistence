
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, descriptions: 'Start Application', notes: 'You will need to start VS Code to start you database creation.', complete: 'true', project_id: 1},
        {id: 2, descriptions: 'Create Program', notes: 'Run you npm to install your packages', complete: 'false', project_id: 1},
        {id: 3, descriptions: 'index.js', notes: 'Create you index.js file to get you server started.', complete: 'false', project_id: 1},
        {id: 4, descriptions: 'server.js', notes: 'Create a server.js as a middleware for routers.', complete: 'false', project_id: 1},
        {id: 5, descriptions: 'router file', notes: 'Create files for you routers and models you will be using.', complete: 'false', project_id: 1},
        {id: 6, descriptions: 'Start Application', notes: 'You will need to start VS Code to start you database creation.', complete: 'true', project_id: 2},
        {id: 7, descriptions: 'Create Program', notes: 'Run you npm to install your packages', complete: 'false', project_id: 2},
        {id: 8, descriptions: 'create react', notes: 'Create you react app.', complete: 'false', project_id: 2}
      ]);
    })
};
