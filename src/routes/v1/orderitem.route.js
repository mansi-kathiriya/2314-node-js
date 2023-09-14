const express = require("express");
const { orderitemValidation } = require("../../validations");
const { orderitemController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Orderitem
router.post(
  "/create-orderitem",
  validate(orderitemValidation.createOrderitem),
  orderitemController.createOrderitem
);

// Get Orderitem list
router.get(
  "/orderitem-list",
  orderitemController.getOrderitemList
);

// get Orderitem details by id
router.get(
  "/get-details/:orderitemId",
  orderitemController.getOrderitemDetails
)

// update Orderitem
router.put(
  "/update-orderitem/:orderitemId",
  orderitemController.updateOrderitem
)

// delete Orderitem
router.delete(
  "/delete-orderitem/:orderitemId",
  orderitemController.deleteRecord
)

module.exports = router;