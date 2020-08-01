const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findPost,
  add,
  update,
  remove
}

function find() {
  return db('users');
}

function findById(id) {
  return db('users')
    .where({id})
    .first();
}

function findPost(id) {
  return db('posts as p')
  .join('users as u', 'p.user_id', 'u.id')
  .select('p.id', 'u.username', 'p.contents')
  .where({user_id: id})
}

function add(users) {
  return db("users")
  .insert(users)
  .then(ids => {
    return findById(ids[0]);
  });
}

function update(changes, id) {
  return db("users")
  .where({ id })
  .update(changes)
  .then(count => {
    return findById(id);
  })
}

function remove(id){
  return db('users')
    .where({id})
    .del()
}