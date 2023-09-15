const { Cart } = require("../models");


//  Create Cart

const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

const getCartList = async (filter, options) => {
  return Cart.find({$or : [{ quantity:10, is_active: true }]})
  .populate("user")
  .populate("product")
};

const getCartById = async(cartId) => {
  return Cart.findById(cartId);
}

const updateDetails = async(cartId, updateBody) => {
  return Cart.findByIdAndUpdate(cartId, { $set: updateBody });
}

const deleteCart = async (cartId) => {
  return Cart.findByIdAndDelete(cartId);
}

module.exports = {
  createCart,
  getCartList,
  getCartById,
  updateDetails,
  deleteCart,
};