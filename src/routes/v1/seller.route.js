const express = require("express");
const { sellerValidation } = require("../../validations");
const { sellerController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Seller
router.post(
  "/create-seller",
  validate(sellerValidation.createSeller),
  sellerController.createSeller
);

// Get Seller list
router.get(
  "/seller-list",
  sellerController.getSellerList
);

// get Seller details by id
router.get(
  "/get-details/:sellerId",
  sellerController.getSellerDetails
)

// update Seller
router.put(
  "/update-seller/:sellerId",
  sellerController.updateSeller
)

// delete Seller
router.delete(
  "/delete-seller/:sellerId",
  sellerController.deleteRecord
)

module.exports = router;