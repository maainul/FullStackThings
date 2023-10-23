const mongoose = require("mongoose");
const colors = require("colors");

const conString = "mongodb://localhost:27017/expressjs";
//function connect mongobd database
const connectDB = async () => {
  try {
    console.log("Trying To Connected Mongo DB Server".bgGreen);
    const conn = await mongoose.connect(conString);
    console.log(
      `Successfully Connected to Mongo DB ${conn.connection.host}`.bgGreen
    );
  } catch (error) {
    console.error(`Mongo db Error ${error.message}`.bgRed);
    process.exit(1)
  }
};

module.exports = connectDB;
