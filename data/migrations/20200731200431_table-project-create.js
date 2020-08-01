const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.string('name', 128);
      tbl.string('description', 256);
    })
};

exports.down = function(knex) {
  
};
