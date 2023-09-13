const { Category } = require("../models");

const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

const getCategoryList = async (filter, options) => {
  return Category.find({$or : [{ is_active: true }]})
};

const getCategoryById = async(categoryId) => {
  return Category.findById(categoryId);
}

const updateDetails = async(categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
}

const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
}

const getCategoryByName = async (category_name) => {
  return Category.findOne({ category_name });
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateDetails,
  deleteCategory,
  getCategoryByName
};