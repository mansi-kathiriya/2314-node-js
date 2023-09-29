const { Player } = require("../models");

const createPlayer = async (reqBody) => {
  return Player.create(reqBody);
};

const getPlayerList = async (filter, options) => {
  return Player.find({$or : [{ is_active: true }]})
  .populate("team")
};

const getPlayerById = async(playerId) => {
  return Player.findById(playerId);
}

const updatePlayer = async(playerId, updateBody) => {
  return Player.findByIdAndUpdate(playerId, { $set: updateBody });
}

const deletePlayer = async (playerId) => {
  return Player.findByIdAndDelete(playerId);
}

const PlayerByName = async (first_name) => {
  return Player.findOne({ first_name });
};

module.exports = {
  createPlayer,
  getPlayerList,
  getPlayerById,
  updatePlayer,
  deletePlayer,
  PlayerByName
};