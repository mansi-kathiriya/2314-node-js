const { sub_Category } = require("../models");

const createsubCategory = async (reqBody) => {
  return sub_Category.create(reqBody);
};

const getsubCategoryList = async (filter, options) => {
  return sub_Category.find({$or : [{ is_active: true }]})
  .populate("category")
};

const getsubCategoryById = async(subcategoryId) => {
  return sub_Category.findById(subcategoryId);
}

const updateDetails = async(subcategoryId, updateBody) => {
  return sub_Category.findByIdAndUpdate(subcategoryId, { $set: updateBody });
}

const deletesubCategory = async (subcategoryId) => {
  return sub_Category.findByIdAndDelete(subcategoryId);
}

const getsubCategoryByName = async (sub_category_name) => {
  return sub_Category.findOne({ sub_category_name });
};

module.exports = {
  createsubCategory,
  getsubCategoryList,
  getsubCategoryById,
  updateDetails,
  deletesubCategory,
  getsubCategoryByName
};