const { Team } = require("../models");

const createTeam = async (reqBody) => {
  return Team.create(reqBody);
};

const getTeamList = async (filter, options) => {
  return Team.find({$or : [{ is_active: true }]})
};

const getTeamById = async(teamId) => {
  return Team.findById(teamId);
}

const updateTeam = async(teamId, updateBody) => {
  return Team.findByIdAndUpdate(teamId, { $set: updateBody });
}

const deleteTeam = async (teamId) => {
  return Team.findByIdAndDelete(teamId);
}

const TeamByName = async (team_name) => {
  return Team.findOne({ team_name });
};

module.exports = {
  createTeam,
  getTeamList,
  getTeamById,
  updateTeam,
  deleteTeam,
  TeamByName
};