const express = require("express");
const router = express.Router();
const funcs = require("../controllers/userControllers.js");
const protect = require("../middleware/authMiddleware.js");

router.post("/register", funcs.registerUser);
router.post("/login", funcs.authUser);
router.post("/logout", funcs.logoutUser);
router
  .route("/dashboard/profile-settings")
  .get(protect, funcs.getUserProfile)
  .put(protect, funcs.updateUserProfile);

module.exports = router;
