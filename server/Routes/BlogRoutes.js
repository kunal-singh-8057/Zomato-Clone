const express = require("express");
const router = express.Router();
const BlogControllers = require("../Controllers/BlogControllers");


router.route("/addblogs").post(BlogControllers.addblogs);
router.route("/viewblogs").get(BlogControllers.viewblogs);
router.route("/viewblogsbyid/:id").get(BlogControllers.viewblogsbyid);
router.route("/deleteblogs/:id").delete(BlogControllers.deleteblogs);

module.exports = router;