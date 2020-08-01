
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'Computer', description: 'Use your work computer.'},
        {id: 2, name: 'VS Code', description: 'VS Code to write and create code.'},
        {id: 3, name: 'Postman', description: 'Postman test you endpoints of your database'},
        {id: 4, name: 'SQLiteStudio', description: 'SQLite Studio will test you database and allow you to change it without changing code.'},
        {id: 5, name: 'Browser', description: 'Have a browser installed so you can watch the changes of your code.'}
      ]);
    });
};
