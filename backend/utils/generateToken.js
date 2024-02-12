const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  //   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
  const token = jwt.sign({ userId }, "x32", {
    expiresIn: "30d",
  });
  //set JWT  as cookie in the server as HTTP -only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", //prevents attacks
    maxAge: 30 * 24 * 60 * 60 * 100, //30 days
  });
};

module.exports = generateToken;
