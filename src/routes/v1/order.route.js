const express = require("express");
const { orderValidation } = require("../../validations");
const { orderController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Order
router.post(
  "/create-order",
  validate(orderValidation.createOrder),
  orderController.createOrder
);

// Get Order list
router.get(
  "/order-list",
  orderController.getOrderList
);

// get Order details by id
router.get(
  "/get-details/:orderId",
  orderController.getOrderDetails
)

// update Order
router.put(
  "/update-order/:orderId",
  orderController.updateOrder
)

// delete Order
router.delete(
  "/delete-order/:orderId",
  orderController.deleteRecord
)

module.exports = router;