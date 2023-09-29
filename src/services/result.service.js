const { Result } = require("../models");

const createResult = async (reqBody) => {
  return Result.create(reqBody);
};

const getResultList = async (filter, options) => {
  return Result.find({$or : [{ is_active: true }]})
  .populate("game")
};

const getResultById = async(resultId) => {
  return Result.findById(resultId);
}

const updateResult = async(resultId, updateBody) => {
  return Result.findByIdAndUpdate(resultId, { $set: updateBody });
}

const deleteResult = async (resultId) => {
  return Result.findByIdAndDelete(resultId);
}

module.exports = {
  createResult,
  getResultList,
  getResultById,
  updateResult,
  deleteResult,
};