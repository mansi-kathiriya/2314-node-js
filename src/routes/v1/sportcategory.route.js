const express = require("express");
const { sportcategoryValidation } = require("../../validations");
const { sportcategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Sportcategory
router.post(
  "/create-Sportcategory",
  validate(sportcategoryValidation.createSportcategory),
  sportcategoryController.createSportcategory
);

// Get Sportcategory list
router.get(
  "/list",
  sportcategoryController.getSportcategoryList
);

// get Sportcategory details by id
router.get(
  "/get-details/:sportcategoryId",
  sportcategoryController.getSportcategoryDetails
)

// update Sportcategory
router.put(
  "/update/:sportcategoryId",
  sportcategoryController.updateSportcategory
)

// delete Sportcategory
router.delete(
  "/delete/:sportcategoryId",
  sportcategoryController.deleteRecord
)

module.exports = router;