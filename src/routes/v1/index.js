const express = require("express");

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/token", tokenRoute);

module.exports = router;

