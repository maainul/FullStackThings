const { comparePassword } = require("../helpers/authHelper");
const UserModel = require("../models/userModel");

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
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};
