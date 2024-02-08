const User = require('../models/User');

/*
GET all users
not posting users anywhere, just test on postman/insomnia

GET a user (by id)
need for when user is logged in

CREATE(post) a user
when a user is registered

UPDATE(put) a user (by id)
when a user is logged in and wants to update their profile

DELETE a user (by id)
not using this anywhere yet, unless we want to have a user delete there own profile
just testing for now
*/

const getUsers = async (req, res) => {
  try {
    await User.find();
    res.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getUsers
};