const { News } = require("../models");

const createNews = async (reqBody) => {
  return News.create(reqBody);
};

const getNewsList = async (filter, options) => {
  return News.find({$or : [{ is_active: true }]})
};

const getNewsById = async(newsId) => {
  return News.findById(newsId);
}

const updateNews = async(newsId, updateBody) => {
  return News.findByIdAndUpdate(newsId, { $set: updateBody });
}

const deleteNews = async (newsId) => {
  return News.findByIdAndDelete(newsId);
}

const NewsByName = async (title) => {
  return News.findOne({ title });
};

module.exports = {
  createNews,
  getNewsList,
  getNewsById,
  updateNews,
  deleteNews,
  NewsByName
};