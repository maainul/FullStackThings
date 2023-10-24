const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

//Protected Routes Token Based
const requiredSignIn = async (req, res, next) => {
  try {
    const decode = await JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      success: false,
      error,
    });
  }
};

// Admin Access
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.isAdmin !== true) {
      res.status(401).send({
        success: false,
        message: "Unauthorized Access",
        error,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error", error);
    res.status(401).send({
      success: false,
      messagae: "Error in Admin Middleware",
      error,
    });
  }
};

module.exports = { requiredSignIn, isAdmin };
