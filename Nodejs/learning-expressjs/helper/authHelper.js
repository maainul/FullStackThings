const bcrypt = require("bcrypt");

const createHashPassword = async (pass) => {
  try {
    const saltRounds = 10;
    const passFromUserToString = pass.toString();
    const toHashedPass = await bcrypt.hash(passFromUserToString, saltRounds);
    return toHashedPass;
  } catch (error) {
    console.log("error", error);
  }
};

const comparePassword = async (pass, toHashedPass) => {
  return bcrypt.compare(pass, toHashedPass);
};

module.exports = { createHashPassword, comparePassword };
