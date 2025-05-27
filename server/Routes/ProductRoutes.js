const express = require("express");
const router = express.Router();
const ProductControllers = require("../Controllers/ProductControllers");


router.route("/addproducts").post(ProductControllers.addproducts);
router.route("/viewproducts").get(ProductControllers.viewproducts);
router.route("/productbycategory").get(ProductControllers.viewbycategory);
router.route("/productbyid/:id").get(ProductControllers.viewbyid);
router.route("/deleteproduct/:id").delete(ProductControllers.deleteproduct);

module.exports = router;

