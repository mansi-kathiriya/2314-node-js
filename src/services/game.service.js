const { Game } = require("../models");

const createGame = async (reqBody) => {
  return Game.create(reqBody);
};

const getGameList = async (filter, options) => {
  return Game.find({$or : [{ is_active: true }]})
  .populate("team")
};

const getGameById = async(gameId) => {
  return Game.findById(gameId);
}

const updateGame = async(gameId, updateBody) => {
  return Game.findByIdAndUpdate(gameId, { $set: updateBody });
}

const deleteGame = async (gameId) => {
  return Game.findByIdAndDelete(gameId);
}

const GameByName = async (game_name) => {
  return Game.findOne({ game_name });
};

module.exports = {
  createGame,
  getGameList,
  getGameById,
  updateGame,
  deleteGame,
  GameByName
};