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
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the world</h1>");
});

//post
app.post('/contact-form-normal',(req,res)=>{
    res.send("Form Data Submitted");
})

//send through json object
app.post("/contact-form-json", (req, res) => {
  const {inputData} = req.body;
    res.json({
    success:true,
    message:`Welcome ${inputData}`
  });
});


//port number
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}`.bgMagenta);
});

