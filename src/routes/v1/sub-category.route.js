const express = require("express");
const { sub_categoryValidation } = require("../../validations");
const { sub_categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create sub-category
router.post(
  "/create-subcategory",
  validate(sub_categoryValidation.createsubCategory),
  sub_categoryController.createsubCategory
);

// Get sub-category list
router.get(
  "/subcategory-list",
  sub_categoryController.getsubCategoryList
);

// get sub-category details by id
router.get(
  "/get-details/:subcategoryId",
  sub_categoryController.getsubCategoryDetails
)

// update sub-category
router.put(
  "/subcategory-update/:subcategoryId",
  sub_categoryController.updatesubCategory
)

// delete sub-category
router.delete(
  "/subcategory-delete/:subcategoryId",
  sub_categoryController.deleteRecord
)

module.exports = router;