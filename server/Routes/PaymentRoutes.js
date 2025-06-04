const express = require("express");
const paymentControllers = require("../Controllers/PaymentControlers");
const router = express.Router();

router.route("/checkout").post(paymentControllers.checkout);
router.route("/verifypayment").post(paymentControllers.verifypayment);
router.route("/getkey").get(paymentControllers.getkey)

module.exports = router;