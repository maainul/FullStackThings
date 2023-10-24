const { createHashPassword, comparePassword } = require("../helper/authHelper");
const { formValidation } = require("../helper/validation");

const UserModel = require("../models/userModel");
const JWT = require("jsonwebtoken");

const registerctrl = async (req, res) => {
  try {
    const { name, email,answer, password, isAdmin } = req.body;

    //validation
    const vdata = [];
    if (!name) {
      vdata.push("name | required");
    }
    if (!email) {
      vdata.push("email | required");
    }
    if (!answer) {
      vdata.push("answer | required");
    }
    if (!password) {
      vdata.push("password | required");
    }
    let validations = formValidation(vdata);
    if (validations.length > 0) {
      res.send(validations);
    } else {
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
        answer,
        password: toHashPassword,
        isAdmin,
      }).save();
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    }
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

const forgotPasswordCtrl = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    const vdata = [];
    if (!email) {
      vdata.push("email | required");
    }
    if (!answer) {
      vdata.push("answer | required");
    }
    if (!newPassword) {
      vdata.push("Password | required");
    }
    let validation = formValidation(vdata);
    if (validation.length > 0) {
      return res.send(validation);
    } else {
      //check
      const user = await UserModel.findOne({ email });
      // valiation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email or Answer",
        });
      }
      const toHashPassword = await createHashPassword(newPassword);
      await UserModel.findByIdAndUpdate(user._id, { password: toHashPassword });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
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

module.exports = { registerctrl, loginCtrl, testCtrl, forgotPasswordCtrl };
