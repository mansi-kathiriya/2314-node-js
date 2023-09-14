const { Seller } = require("../models");


//  Create Seller

const createSeller = async (reqBody) => {
  return Seller.create(reqBody);
};

const getSellerList = async (filter, options) => {
  return Seller.find()
  .populate("user")
};

const getSellerById = async(sellerId) => {
  return Seller.findById(sellerId);
}

const updateDetails = async(sellerId, updateBody) => {
  return Seller.findByIdAndUpdate(sellerId, { $set: updateBody });
}

const deleteSeller = async (sellerId) => {
  return Seller.findByIdAndDelete(sellerId);
}

module.exports = {
  createSeller,
  getSellerList,
  getSellerById,
  updateDetails,
  deleteSeller,
};