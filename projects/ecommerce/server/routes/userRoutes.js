const express = require("express");
const {
  getUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  createUser,
} = require("../controllers/userCtrl");

// routes router object
const router = express.Router();

// USER
route.post("/create-user", createUser);
route.post("/get-user/:id", getSingleUser);
route.post("/get-users", getUsers);
route.post("/update-user/:id", updateSingleUser);
route.post("/delete-user/:id", deleteSingleUser);

module.exports = router;
