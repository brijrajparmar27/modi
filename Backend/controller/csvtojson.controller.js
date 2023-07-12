const express = require("express");
const fileUpload = require("express-fileupload");
const csvService = require("../Services/csvtojson.service");

const app = express();

app.use(fileUpload());

const convertCsvToJson = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files.csvFile).length === 0) {
      return res.status(400).json({ error: "No CSV file provided" });
    }
    const csvFile = req.files.csvFile;

    const csvFilePath = `./uploads/${csvFile.name}`;

    await csvFile.mv(csvFilePath);

    const targetUser = req.query.name;
    const targetHours = parseFloat(req.query.hours);
    const Date = req.query.date;

    const jsonResponse = await csvService.convertCsvToJson(
      targetUser,
      targetHours,
      Date,
      csvFilePath
    );
    res.json(jsonResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  convertCsvToJson,
};
