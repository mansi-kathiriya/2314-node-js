const express = require("express");
const { gameValidation } = require("../../validations");
const { gameController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// Create Game
router.post(
    "/create-game",
    validate(gameValidation.createGame),
    gameController.createGame
);

// get Game list
router.get(
    "/game-list",
    gameController.getGameList
);

// Get Game details by id
router.get(
    "/game-details/:gameId",
    gameController.getGameDetails
);

// update Game
router.put(
    "/update-game/:gameId",
    gameController.updateGame
);

// delete Game
router.delete(
    "/game-delete/:gameId",
    gameController.deleteGame
);

module.exports = router;