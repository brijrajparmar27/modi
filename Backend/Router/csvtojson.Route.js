// routes/csvRoutes.js
const express = require("express");
const csvController = require("../controller/csvtojson.controller");

const router = express.Router();

router.post("/upload", csvController.convertCsvToJson);

module.exports = router;
