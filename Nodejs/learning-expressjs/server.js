// import
const express = require("express");

//rest object
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the world</h1>");
});

//port number
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`);
});

