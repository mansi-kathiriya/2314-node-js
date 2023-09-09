const { Product } = require("../models");


//  Create Product

const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

const getProductList = async (filter, options) => {
  return Product.find().populate("category")
};

const getProductById = async(productId) => {
  return Product.findById(productId);
}

const updateDetails = async(productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, { $set: updateBody });
}

const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
}

const getProductByName = async (product_name) => {
  return Product.findOne({ product_name })
};

module.exports = {
  createProduct,
  getProductList,
  getProductById,
  updateDetails,
  deleteProduct,
  getProductByName
};