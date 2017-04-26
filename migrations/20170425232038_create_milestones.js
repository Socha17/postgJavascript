
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('famous_people_details', function (table) {
      table.increments('id').primary();
      table.string('description');
      table.date(date);
      table.timestamps();
    })
  ])
};



exports.down = function(knex, Promise) {
return Promise.all([
  knex.schema.dropTable('famous_people_details')
])
};
