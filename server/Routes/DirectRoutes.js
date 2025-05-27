const express = require("express");
const router = express.Router();
const directuserControllers = require("../Controllers/DirectusersControllers");

router.route("/direct/:id").get(directuserControllers.userwithoutjwt);


module.exports = router;