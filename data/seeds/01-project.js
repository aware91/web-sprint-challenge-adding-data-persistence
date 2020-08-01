
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'Create Database', description: 'Creating a database for Lambda', complete: 'false'},
      ]);
    });
};
