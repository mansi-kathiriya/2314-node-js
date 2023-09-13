const express = require("express");
const { cartValidation } = require("../../validations");
const { cartController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Cart
router.post(
  "/create-cart",
  validate(cartValidation.createCart),
  cartController.createCart
);

// Get Cart list
router.get(
  "/cart-list",
  cartController.getCartList
);

// get Cart details by id
router.get(
  "/get-details/:cartId",
  cartController.getCartDetails
)

// update Cart
router.put(
  "/update-cart/:cartId",
  cartController.updateCart
)

// delete Cart
router.delete(
  "/delete-cart/:cartId",
  cartController.deleteRecord
)

module.exports = router;