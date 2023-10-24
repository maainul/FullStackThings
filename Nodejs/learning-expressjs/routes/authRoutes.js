const express = require("express");
const {
  registerctrl,
  loginCtrl,
  testCtrl,
} = require("../controllers/authCtrl");
const { requiredSignIn, isAdmin } = require("../middlewares/authMiddleware");
//router object
const router = express.Router();

// REGISTER || METHOD POST
router.post("/register", registerctrl);

// LOGIN || METHOD POST
router.post("/login", loginCtrl);

// TEST || METHOD GET
router.get("/test", requiredSignIn, isAdmin, testCtrl);

module.exports = router;
