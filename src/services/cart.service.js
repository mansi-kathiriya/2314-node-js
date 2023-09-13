const { Cart } = require("../models");


//  Create Cart

const createCart = async (reqBody) => {
  return Cart.create(reqBody);
};

const getCartList = async (filter, options) => {
  return Cart.find()
  .populate("category")
  .populate("subchildcategory")
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