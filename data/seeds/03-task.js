
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'Start Application', notes: 'You will need to start VS Code to start you database creation.'},
        {id: 2, description: 'Create Program', notes: 'Run you npm to install your packages'},
        {id: 3, description: 'index.js', notes: 'Create you index.js file to get you server started.'},
        {id: 4, description: 'server.js', notes: 'Create a server.js as a middleware for routers.'},
        {id: 5, description: 'router file', notes: 'Create files for you routers and models you will be using.'},
        {id: 6, description: 'create react', notes: 'Create you react app.'}
      ]);
    })
};
