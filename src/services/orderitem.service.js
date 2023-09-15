const { Order } = require("../models");


//  Create Order

const createOrder = async (reqBody) => {
  return Order.create(reqBody);
};

const getOrderList = async (filter, options) => {
  return Order.find({$or : [{ quantity: 5 , is_active: false }]})
  .populate("order")
  .populate("product")
};

const getOrderById = async(orderId) => {
  return Order.findById(orderId);
}

const updateDetails = async(orderId, updateBody) => {
  return Order.findByIdAndUpdate(orderId, { $set: updateBody });
}

const deleteOrder = async (orderId) => {
  return Order.findByIdAndDelete(orderId);
}

module.exports = {
  createOrder,
  getOrderList,
  getOrderById,
  updateDetails,
  deleteOrder,
};