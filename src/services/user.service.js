const { User } = require("../models");

const createUser = async (reqBody) => {
  return User.create(reqBody);
};

const getUserList = async (filter, options) => {
  return User.find()
};

const getUserById = async(userId) => {
  return User.findById(userId);
}

const updateDetails = async(userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
}

const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
}

const getUserByName = async (first_name) => {
  return User.findOne({ first_name });
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  deleteUser,
  getUserByName
};