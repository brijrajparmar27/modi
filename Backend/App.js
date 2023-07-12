const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./route");
require("dotenv").config();
const db = require("./Config/Database");
app.use(
  cors({
    origin: "*",
    methods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
port = 5000;
app.use("/", route);
app.listen(port, () => {
  console.log(`App running on ${process.env.HOST} ${port}.`);
});
db();
