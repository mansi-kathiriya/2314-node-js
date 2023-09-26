const express = require("express");
const { teamValidation } = require("../../validations");
const { teamController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Team
router.post(
    "/create-team",
    validate(teamValidation.createTeam),
    teamController.createTeam
);

// Get Team List
router.get(
    "/team-list",
    teamController.getTeamList
);

//  Get Team details by id
router.get(
    "/team-details/:teamId",
    teamController.getTeamDetails
);

// update Team
router.put(
    "/team-update/:teamId",
    teamController.updateTeam
);

// delete Team
router.delete(
    "/team-delete/:teamId",
    teamController.deleteTeam
);

module.exports = router;