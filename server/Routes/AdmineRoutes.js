const express = require("express");
const router = express.Router();
const admineControllers = require("../Controllers/AdmineControllers");

router.route("/adadmine").post(admineControllers.addAdmine);
router.route("/adminelogin").post(admineControllers.loginAdmine);


module.exports = router;