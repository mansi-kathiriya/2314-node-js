const express = require("express");
const { upload } = require("../../middlewares/upload")
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Product
router.post(
  "/create-product",
  upload.single("product_image"),
  validate(productValidation.createProduct),
  productController.createProduct
);

// Get Product list
router.get(
  "/product-list",
  productController.getProductList
);

// get Product details by id
router.get(
  "/get-details/:productId",
  productController.getProductDetails
)

// update Product
router.put(
  "/update-product/:productId",
  productController.updateProduct
)

// delete Product
router.delete(
  "/delete-product/:productId",
  productController.deleteRecord
)

module.exports = router;