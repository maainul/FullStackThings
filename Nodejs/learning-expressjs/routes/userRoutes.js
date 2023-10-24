const express = require("express");
const {
  getUser,
  addUser,
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userCtrl");

//routes router object
const router = express.Router();

//routes

//CREATE NEW USER
router.post("/create-user", createUser);

//GET USER ||  METHOD = GET
router.get("/", getUser);

//POST USER || METHOD POST
router.post("/add-user", addUser);

//GET ALL USER || METHOD GET
router.get("/get-users", getAllUser);

//GET SINGLE USER || METHOD GET
router.get("/get-user/:id", getSingleUser);

//UPDATE SINGLE USER || METHOD PUT
router.put("/update-user/:id", updateUser);

//DELTE SINGLE USER || METHOD DELETE
router.delete("/delete-user/:id", deleteUser);

//export routes
module.exports = router;
