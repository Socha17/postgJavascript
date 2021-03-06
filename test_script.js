

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  let someName = process.argv[2];
  if (err) {
    return console.error("Connection Error", err);
  }

  client.query('SELECT * FROM famous_people WHERE first_name LIKE $1::text OR last_name LIKE $1::text;', [`${someName}`], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching...");
    console.log(`Found result by the name of ${someName}:`);

    console.log(`- ${result.rows[0].id}  ${result.rows[0].first_name} born ${result.rows[0].birthdate.getFullYear()}-${result.rows[0].birthdate.getDay()}-${result.rows[0].birthdate.getMonth()}`);

    // console.log(result.row); //output: 1
    client.end();
  });
});
