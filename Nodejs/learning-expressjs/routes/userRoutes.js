const express = require("express");
const { getUser, addUser, createUser } = require("../controllers/userCtrl");

// router object
const router = express.Router();

//routes
router.get("/", getUser);
router.post("/add-user",addUser)

// CRUD OPERATION 
router.post('/create-user',createUser)

//export routes
module.exports = router;
