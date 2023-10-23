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
module.exports = { getUser, addUser };
