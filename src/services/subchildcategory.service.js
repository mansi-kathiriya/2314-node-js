const { subchildCategory } = require("../models");


//  Create subchildCategory

const createsubchildCategory = async (reqBody) => {
  return subchildCategory.create(reqBody);
};

const getsubchildCategoryList = async (filter, options) => {
  return subchildCategory.find()
  .populate("category")
  .populate("subcategory")
};

const getsubchildCategoryById = async(subchildcategoryId) => {
  return subchildCategory.findById(subchildcategoryId);
}

const updateDetails = async(subchildcategoryId, updateBody) => {
  return subchildCategory.findByIdAndUpdate(subchildcategoryId, { $set: updateBody });
}

const deletesubchildCategory = async (subchildcategoryId) => {
  return subchildCategory.findByIdAndDelete(subchildcategoryId);
}

const getsubchildCategoryByName = async (subchildcategory_name) => {
  return subchildCategory.findOne({ subchildcategory_name })
};

module.exports = {
  createsubchildCategory,
  getsubchildCategoryList,
  getsubchildCategoryById,
  updateDetails,
  deletesubchildCategory,
  getsubchildCategoryByName
};