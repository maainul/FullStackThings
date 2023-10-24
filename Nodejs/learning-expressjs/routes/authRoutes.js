const express = require("express");
const { registerctrl,loginCtrl } = require("../controllers/authCtrl");
//router object
const router = express.Router();

// REGISTER || METHOD POST
router.post("/register", registerctrl);

// LOGIN || METHOD POST
router.post("/login",loginCtrl)

module.exports = router;
