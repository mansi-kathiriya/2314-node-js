const express = require("express");
const validate = require("../../middlewares/validate");
const { tokenValidation } = require("../../validations");
const { tokenController } = require("../../controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

/* create Token */
router.post(
    "create-token",
    validate(tokenValidation.generateToken),
    tokenController.generateToken
);

/* verify Token */
router.get("/verify-token", auth(), tokenController.verifyToken);

module.exports = router;