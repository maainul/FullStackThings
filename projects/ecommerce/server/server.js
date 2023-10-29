const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const colors = require("colors");


// env file read
dotenv.config();

// connect to mongodb
connectDb();

// rest object
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));

// port number
const PORT = process.env.PORT || 8080;

// listen port
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgGreen
  );
});
