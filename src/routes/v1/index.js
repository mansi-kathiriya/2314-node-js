const express = require("express");

const userRoute = require("./user.route");
const sportcategoryRoute = require("./sportcategory.route");
const tokenRoute = require("./token.route");
const founderRoute = require("./fonder.route");
const gameRoute = require("./game.route");
const newsRoute = require("./news.route");
const playerRoute = require("./player.route");
const resultRoute = require("./result.route");
const sportgalleryRoute = require("./sportgallery.route");
const teamRoute = require("./team.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/sport-category", sportcategoryRoute);
router.use("/token", tokenRoute);
router.use("/founder", founderRoute);
router.use("/game", gameRoute);
router.use("/news", newsRoute);
router.use("/player", playerRoute);
router.use("/result", resultRoute);
router.use("/sportgallery", sportgalleryRoute);
router.use("/team", teamRoute);

module.exports = router;

