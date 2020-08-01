const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema
  .createTable('task', tbl => {
    tbl.increments();
    tbl.string('description', 256)
      .notNullable();
    tbl.string('notes', 256)
      .notNullable();
  })
    .createTable('project', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
      tbl.string('description', 256)
        .notNullable();
      tbl.boolean('completed');
      tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('task.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('project_resource', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
    .dropTableIfExists('task')
};
