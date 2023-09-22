const { Sportcategory } = require("../models");

const createSportcategory = async (reqBody) => {
  return Sportcategory.create(reqBody);
};

const getSportcategoryList = async (filter, options) => {
  return Sportcategory.find({$or : [{ is_active: true }]})
};

const getSportcategoryById = async(sportcategoryId) => {
  return Sportcategory.findById(sportcategoryId);
}

const updateDetails = async(sportcategoryId, updateBody) => {
  return Sportcategory.findByIdAndUpdate(sportcategoryId, { $set: updateBody });
}

const deleteSportcategory = async (sportcategoryId) => {
  return Sportcategory.findByIdAndDelete(sportcategoryId);
}

const getSportcategoryByName = async (name) => {
  return Sportcategory.findOne({ name });
};

module.exports = {
  createSportcategory,
  getSportcategoryList,
  getSportcategoryById,
  updateDetails,
  deleteSportcategory,
  getSportcategoryByName
};