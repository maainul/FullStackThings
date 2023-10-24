const { createHashPassword, comparePassword } = require("../helper/authHelper");
const UserModel = require("../models/userModel");
const JWT = require("jsonwebtoken");

const registerctrl = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }
    // check User
    const existingUser = await UserModel.findOne({ email });
    // existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Register Please Login",
      });
    }
    // register user
    const toHashPassword = await createHashPassword(password);
    //save
    const user = await new UserModel({
      name,
      email,
      password: toHashPassword,
      isAdmin,
    }).save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

const loginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token create
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// Protected URL For Middleware
const testCtrl = (req, res) => {
  console.log("Protected Route");
  res.status(200).send({
    success: true,
    message: "You are In Protedted Route",
  });
};

module.exports = { registerctrl, loginCtrl, testCtrl };
