// import
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
//rest object
const app = express();

//middlewares
app.use(express.json()) // Parse into json data through middleware from express js framework
app.use(morgan('dev'))

// routes
app.use('/api/v1/user',require('./routes/userRoutes'))

//port number
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`.bgMagenta);
});

