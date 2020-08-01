
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'Create Database', description: 'Creating a database for Lambda', completed: 'false'},
        {id: 2, name: 'Create React Website', description: 'Creating a react website for Lambda', completed: 'false'},
      ]);
    });
};
