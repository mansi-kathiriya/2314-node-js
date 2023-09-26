const Joi = require("joi");

// create News
const createNews = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        publication_date: Joi.date(),
    }),
};

module.exports = {
    createNews
};