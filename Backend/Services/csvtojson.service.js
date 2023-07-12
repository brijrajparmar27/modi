const csv = require("csv-parser");
const fs = require("fs");
const csvFilePath = "D:/Time-sheet-generator/Backend/csvdata.csv";

const convertCsvToJson = (targetUser, targetHours,date) => {
  return new Promise((resolve, reject) => {
    let totalHours = 0;
    const newUserData = [];
    const oldUserData = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (row) => {
        if (
          row.name === targetUser &&
          row.date ===date
        ) {
          const hours = parseFloat(row.hours);
          if (totalHours + hours <= targetHours) {
            totalHours += hours;
            if (row.type === "new") {
              newUserData.push(row);
            } else if (row.type === "old") {
              oldUserData.push(row);
            }
          }
        }
      })
      .on("end", () => {
        const jsonResponse = {
          user: targetUser,
          total_hours: totalHours,
          new_data: newUserData,
          old_data: oldUserData,
        };
        resolve(jsonResponse);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

module.exports = {
  convertCsvToJson,
};
