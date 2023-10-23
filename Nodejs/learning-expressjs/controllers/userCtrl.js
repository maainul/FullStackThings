const UserModel = require("../models/userModel");

const getUser = (req, res) => {
  res.send({
    success: true,
    message: "data comming from mvc",
  });
};

const addUser = (req, res) => {
  const { inputData } = req.body;
  res.json({
    success: "true",
    message: `Welcome to ${inputData}`,
  });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //create user in db
    const user = await UserModel.
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(`Error In Create User Controller = ${error}`);
    res.status(400).json({
      message: false,
      error,
    });
  }
};

module.exports = { getUser, addUser, createUser };
