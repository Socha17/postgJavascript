let args = process.argv.slice(2)


var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'development',
    password : 'development',
    database : 'vagrant',
    port : 5432
  }

});


  knex('famous_people').returning('*').insert({first_name: args[0], last_name: args[1], birthdate: args[2]}).then(function(result) {
    console.log(result);
  });
