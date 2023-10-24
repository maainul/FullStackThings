const UserModel = require("../models/userModel");

const getUser = (req, res) => {
  res.send({
    success: true,
    message: "Data Coming From MVC Pattern",
  });
};

const addUser = (req, res) => {
  const { inputData } = req.body;
  res.json({
    success: true,
    message: `Welcome ${inputData}`,
  });
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      message: "success",
      user,
    });
  } catch (error) {
    console.log(`errro in create user ctrl = ${error}`);
    res.status(400).json({
      message: false,
      error,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({
      success: true,
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "get all user error",
      error: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.status(200).json({
        status: true,
        user,
      });
    } else {
      res.status(400).send("User Not Found");
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "get all user error",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(201).json({
      success: true,
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not Found");
  }
};
const deleteUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  if (user) {
    await user.deleteOne();
    res.status(200).json({
      success: true,
      message: "User Deleted",
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
};

module.exports = {
  getUser,
  addUser,
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
