const express = require("express");
const router = express.Router();
const {createUser, loginUser} = require("../controller/UserController")

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

module.exports = router;