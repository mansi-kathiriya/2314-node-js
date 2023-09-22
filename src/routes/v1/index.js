const express = require("express");

const userRoute = require("./user.route");
const sportcategoryRoute = require("./sportcategory.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/sport-category", sportcategoryRoute);
router.use("/token", tokenRoute);

module.exports = router;

