const Joi = require("joi");

// create user
const createBook = {
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_desc: Joi.string().required().trim(),
    }),
};

module.exports = {
    createBook
};