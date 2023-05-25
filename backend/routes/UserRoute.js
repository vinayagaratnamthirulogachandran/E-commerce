const express = require("express");
const router = express.Router();
const {createUser, loginUser, logoutUser} = require("../controller/UserController")

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logoutUser);

module.exports = router;