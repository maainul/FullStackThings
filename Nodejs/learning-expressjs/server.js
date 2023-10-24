// import
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

//env file read
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json()); // Parse into json data through middleware from express js framework
app.use(morgan("dev")); // enable request / URL information in the console

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

//port number
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgMagenta
  );
});
