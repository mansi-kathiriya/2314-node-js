const express = require("express");
const { founderValidation } = require("../../validations");
const { founderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Founder
router.post(
    "/create-fonder",
    validate(founderValidation.createFounder),
    founderController.createFounder
);

// Get fonder list
router.get(
    "/fonder-list",
    founderController.getFounderList
);

// Get fonder details by id
router.get(
    "/get-details/:fonderId",
    founderController.getFounderDetails
);

// update fonder
router.put(
    "/fonder-update/:fonderId",
    founderController.updateFounder
);

// delete fonder
router.delete(
    "/fonder-delete/:fonderId",
    founderController.deleteFounder
);

module.exports = router;