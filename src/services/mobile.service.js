const { Mobile } = require("../models");

const createMobile = async (reqBody) => {
  return Mobile.create(reqBody);
};

const getMobileList = async (filter, options) => {
  return Mobile.find({$or : [{ is_active: true }]})
};

const getMobileById = async(mobileId) => {
  return Mobile.findById(mobileId);
}

const updateDetails = async(mobileId, updateBody) => {
  return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
}

const deleteMobile = async (mobileId) => {
  return Mobile.findByIdAndDelete(mobileId);
}

const getMobileByName = async (mobile_name) => {
  return Mobile.findOne({ mobile_name });
};

module.exports = {
  createMobile,
  getMobileList,
  getMobileById,
  updateDetails,
  deleteMobile,
  getMobileByName
};