const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const db = require("./Config/Database");
const CSVRouter = require("./Router/Csv.Router");
const fileUpload = require("express-fileupload");

app.use(
  cors({
    origin: "*",
    methods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload())

port = 5000;

app.use("/csv", CSVRouter);

app.listen(port, () => {
  console.log(`App running on ${port}.`);
});
db();
