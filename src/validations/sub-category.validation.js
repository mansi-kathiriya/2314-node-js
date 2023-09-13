const Joi = require("joi");

// create sub-Category
const createsubCategory = {
    body: Joi.object().keys({
        sub_category_name: Joi.string().required().trim(),
        sub_category_desc: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        category: Joi.string().required(),
    }),
};

module.exports = {
    createsubCategory
};