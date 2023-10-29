const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = () => {
  try {
    console.log("Trying to Connect MongoDB".bgCyan);
  } catch (error) {
    console.log(`Mongodb Error ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDB;
