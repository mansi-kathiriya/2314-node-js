const express = require("express");
const userRoute = require("./user.route");
const tokenRoute = require("./token.route");
const blogRoute = require("./blog.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/blog", blogRoute);

module.exports = router;