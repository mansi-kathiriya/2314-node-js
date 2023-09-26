const express = require("express");
const { resultValidation } = require("../../validations");
const { resultController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Result
router.post(
    "/create-result",
    validate(resultValidation.createResult),
    resultController.createResult
);

// Get Result List
router.get(
    "/result-list",
    resultController.getResultList
);

//  Get Result details by id
router.get(
    "/result-details/:resultId",
    resultController.getResultDetails
);

// update Result
router.put(
    "/result-update/:resultId",
    resultController.updateResult
);

// delete Result
router.delete(
    "/result-delete/:resultId",
    resultController.deleteResult
);

module.exports = router;