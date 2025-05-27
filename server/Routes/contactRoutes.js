const express = require("express");
const router = express.Router();
const messageControllers = require("../Controllers/MessageControllers");

router.route("/addmessage").post(messageControllers.addmessage);
router.route("/viewmessage").get(messageControllers.viewmessage);

module.exports = router;