const express = require("express");
const {
  registerController,
  loginController,
  fetchUsersController,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/fetchUsers", protect, fetchUsersController);



module.exports = router;
