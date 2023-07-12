const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DBHOST,
    database: process.env.DATABASE,
    user: "postgres",
    password: process.env.DBPASS,
    PORT: process.env.DBPORT,
  },
});

if (db) {
  console.log("Database connected successfully");
} else {
  throw new Error("Unable to connect with the Database");
}
module.exports = db;
