const mongoose = require("mongoose");
const colors = require("colors");

//function connect mongodb database

const connectDb = async () => {
  try {
    console.log("Trying to Connect MongoDB".bgGreen);
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to mongodb ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Mongodb Errro ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
