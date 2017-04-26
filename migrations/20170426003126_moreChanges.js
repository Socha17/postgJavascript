
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('famous_people_ids', function (table) {

      table.integer('famous_person_id').unsigned()
      table.foreign('famous_person_id').references('famous_person_id')
      table.timestamps();
    })
  ])
};



exports.down = function(knex, Promise) {
return Promise.all([
  knex.schema.dropTable('famous_people_details')
])
};
