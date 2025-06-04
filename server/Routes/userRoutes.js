const express = require("express");
const router = express.Router();
const userControllers = require("../Controllers/userControllers");
const verify = require("../Middleware/auths");

router.route("/register").post(userControllers.register);
router.route("/login").post(userControllers.login);
router.route("/viewusers").get(userControllers.viewusers);
router.route("/viewuserbyid/:id").get(userControllers.usersbyid);
router.route("/deleteuser/:id").delete(userControllers.deleteuser);
router.route("/verify").get(verify,userControllers.verify);
router.route("/currentuser").get(userControllers.getcurrentuser);


module.exports = router;