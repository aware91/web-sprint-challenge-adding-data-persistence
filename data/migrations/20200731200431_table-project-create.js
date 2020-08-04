const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema
    .createTable('project', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
      tbl.string('description', 256);
      tbl.boolean('completed')
        .notNullable();
    })
    .createTable('task', tbl => {
      tbl.increments();
      tbl.string('descriptions', 256)
        .notNullable();
      tbl.string('notes', 256);
      tbl.boolean('complete')
        .notNullable();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .notNullable()
        .unique();
      tbl.string('description', 256);
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
    .createTable('project_task', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.integer('task_id')
        .unique()
        .unsigned()
        .notNullable()
        .references('task.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_task')
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project')
};
