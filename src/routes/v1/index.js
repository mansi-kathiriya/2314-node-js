const express = require("express");

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require("./book.route");
const productRoute = require("./product.route");
const mobileRoute = require("./mobile.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/book", bookRoute);
router.use("/product", productRoute);
router.use("/mobile", mobileRoute);

module.exports = router;

