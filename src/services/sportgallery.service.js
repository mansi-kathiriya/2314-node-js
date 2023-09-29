const { Sportgallery } = require("../models");

const createSportgallery = async (reqBody) => {
  return Sportgallery.create(reqBody);
};

const getSportgalleryList = async (filter, options) => {
  return Sportgallery.find({$or : [{ is_active: true }]})
};

const getSportgalleryById = async(sportgalleryId) => {
  return Sportgallery.findById(sportgalleryId);
}

const updateSportgallery = async(sportgalleryId, updateBody) => {
  return Sportgallery.findByIdAndUpdate(sportgalleryId, { $set: updateBody });
}

const deleteSportgallery = async (sportgalleryId) => {
  return Sportgallery.findByIdAndDelete(sportgalleryId);
}

const SportgalleryByName = async (sport_name) => {
  return Sportgallery.findOne({ sport_name });
};

module.exports = {
  createSportgallery,
  getSportgalleryList,
  getSportgalleryById,
  updateSportgallery,
  deleteSportgallery,
  SportgalleryByName
};