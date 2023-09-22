const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create category
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

// Get category list
router.get(
  "/list",
  // validate(categoryValidation.getCategoryList),
  categoryController.getCategoryList
);

// get category details by id
router.get(
  "/get-details/:categoryId",
  categoryController.getCategoryDetails
)

// update category
router.put(
  "/update/:categoryId",
  categoryController.updateCategory
)

// delete category
router.delete(
  "/delete/:categoryId",
  categoryController.deleteRecord
)

module.exports = router;