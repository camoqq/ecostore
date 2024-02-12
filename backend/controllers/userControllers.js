const asyncHandler = require("../middleware/asyncHandler.js");
const User = require("../models/User.js");
const generateToken = require("../utils/generateToken.js");

// desc - auth user & get token
//route - POST/users/login
//access - Public
const authUser = asyncHandler(async (req, res) => {
  // console.log(req.body);

  //instead of saying req.body.email or req.body.password we deconstruct here
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  //added the await for the password authentication AND CHECK THE USER MODEL
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
//
//
//
//
//

// desc - auth user & get token
//route - POST/users
//access - Public
const registerUser = asyncHandler(async (req, res) => {
  // res.send("register user");
  const { firstname, lastname, email, password } = req.body;
  //if user exists
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(401);
    throw new Error("User already exists");
  }
  //if user doesnt exist,create user
  const user = await User.create({
    firstname,
    lastname,
    email,
    password,
  });
  if (user) {
    //CREATE TOKEN when registering same as when you login
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("invalid user data");
  }
});
//
//
//
//
//

// desc - Logout user/ clear cookie
//route - POST/users/logout
//access - Private
const logoutUser = asyncHandler(async (req, res) => {
  // res.send("logout user");
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out succesfully" });
});
//
//
//
//
//
//

// desc - Get user Profile
//route - GET/users/profile
//access - Private
const getUserProfile = asyncHandler(async (req, res) => {
  //we can use req.user here because we are already logged in
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
//
//
//
//
//
//

// desc - Update user profile
//route - PUT/users/profile
//access - Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.firstname = req.body.firstname || user.firstname;
    user.lastname = req.body.lastname || user.lastname;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      //do password like this because it is hashed
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      firstname: updatedUser.firstname,
      lastname: updatedUser.lastname,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});
//
//
//
//
//
module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
