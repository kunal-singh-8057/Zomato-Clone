const express = require("express");
const router = express.Router();
const orderControllers = require("../Controllers/OrderControllers");

router.route("/addorder").post(orderControllers.addorder);
router.route("/vieworders").get(orderControllers.vieworder);
router.route("/vieworderbyid/:id").get(orderControllers.vieworderbyid);

module.exports = router;

