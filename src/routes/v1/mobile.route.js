const express = require("express");
const { mobileValidation } = require("../../validations");
const { mobileController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Mobile
router.post(
  "/create-mobile",
  validate(mobileValidation.createMobile),
  mobileController.createMobile
);

// Get Mobile list
router.get(
  "/list",
  mobileController.getMobileList
);

// get Mobile details by id
router.get(
  "/get-details/:mobileId",
  mobileController.getMobileDetails
)

// update Mobile
router.put(
  "/update/:mobileId",
  mobileController.updateMobile
)

// delete Mobile
router.delete(
  "/delete/:mobileId",
  mobileController.deleteRecord
)

module.exports = router;