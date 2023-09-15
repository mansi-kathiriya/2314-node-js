const { Payment } = require("../models");


//  Create Payment

const createPayment = async (reqBody) => {
  return Payment.create(reqBody);
};

const getPaymentList = async (filter, options) => {
  return Payment.find({$or : [{ Payment_method: "online"}]})
  .populate("user")
  .populate("order")
};

const getPaymentById = async(paymentId) => {
  return Payment.findById(paymentId);
}

const updateDetails = async(paymentId, updateBody) => {
  return Payment.findByIdAndUpdate(paymentId, { $set: updateBody });
}

const deletePayment = async (paymentId) => {
  return Payment.findByIdAndDelete(paymentId);
}

module.exports = {
  createPayment,
  getPaymentList,
  getPaymentById,
  updateDetails,
  deletePayment,
};