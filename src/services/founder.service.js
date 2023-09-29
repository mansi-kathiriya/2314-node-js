const { Founder } = require("../models");

const createFounder = async (reqBody) => {
  return Founder.create(reqBody);
};

const getFounderList = async (filter, options) => {
  return Founder.find({$or : [{ is_active: true }]})
};

const getFounderById = async(founderId) => {
  return Founder.findById(founderId);
}

const updateFounder = async(founderId, updateBody) => {
  return Founder.findByIdAndUpdate(founderId, { $set: updateBody });
}

const deleteFounder = async (founderId) => {
  return Founder.findByIdAndDelete(founderId);
}

const FounderByName = async (full_name) => {
  return Founder.findOne({ full_name });
};

module.exports = {
  createFounder,
  getFounderList,
  getFounderById,
  updateFounder,
  deleteFounder,
  FounderByName
};