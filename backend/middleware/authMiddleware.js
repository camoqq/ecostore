const jwt = require("jsonwebtoken");
const asyncHandler = require("../middleware/asyncHandler.js");
const User = require("../models/User.js");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  //read jwt from the cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, "x32");
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("not Authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized,no token");
  }
});

module.exports = protect;
