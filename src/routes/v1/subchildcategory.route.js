const express = require("express");
const { subchildcategoryValidation } = require("../../validations");
const { subchildcategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create subchildCategory
router.post(
  "/create-subchildcategory",
  validate(subchildcategoryValidation.createsubchildCategory),
  subchildcategoryController.createsubchildCategory
);

// Get subchildCategory list
router.get(
  "/subchildcategory-list",
  subchildcategoryController.getsubchildCategoryList
);

// get subchildCategory details by id
router.get(
  "/get-details/:subchildcategoryId",
  subchildcategoryController.getsubchildCategoryDetails
)

// update subchildCategory
router.put(
  "/update-subchildcategory/:subchildcategoryId",
  subchildcategoryController.updatesubchildCategory
)

// delete subchildCategory
router.delete(
  "/delete-subchildcategory/:subchildcategoryId",
  subchildcategoryController.deleteRecord
)

module.exports = router;