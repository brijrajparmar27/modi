const express = require("express");
let csvToJson = require("convert-csv-to-json");

const CSVRouter = express.Router();

CSVRouter.post("/convert", (req, res) => {
  console.log(req.files);
  const file = req.files.csvfile;

  let json = csvToJson.fieldDelimiter(",").getJsonFromCsv(file.name);
  console.log(json);

  res.json(json);
});

module.exports = CSVRouter;
