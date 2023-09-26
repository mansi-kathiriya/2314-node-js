const express = require("express");
const { playerValidation } = require("../../validations");
const { playerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Player
router.post(
    "/create-player",
    validate(playerValidation.createPlayer),
    playerController.createPlayer
);

// Get Player List
router.get(
    "/player-list",
    playerController.getPlayerList
);

//  Get Player details by id
router.get(
    "/player-details/:playerId",
    playerController.getPlayerDetails
);

// update Player
router.put(
    "/player-update/:playerId",
    playerController.updatePlayer
);

// delete Player
router.delete(
    "/player-delete/:playerId",
    playerController.deletePlayer
);

module.exports = router;