const Joi = require("joi");

// create subchildCategory
const createsubchildCategory = {
    body: Joi.object().keys({
        subchildcategory_name: Joi.string().required().trim(),
        subchildcategory_desc: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        category: Joi.string().required(),
        subcategory: Joi.string().required(),
    }),
};

module.exports = {
    createsubchildCategory
};
