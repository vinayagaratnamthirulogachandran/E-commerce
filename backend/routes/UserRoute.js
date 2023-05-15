const express = require("express");
const router = express.Router();
const {createUser} = require("../controller/UserController")

router.route("/registration").post(createUser);

module.exports = router;