const express = require("express");
const csvRoutes = require("./Router/csvtojson.Route");
const AuthRoute = require("./Router/Auth.Route");
const router = express.Router();

router.use("/csv-to-json", csvRoutes);
router.use("/auth", AuthRoute);
module.exports = router;
