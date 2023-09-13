const Joi = require("joi");

// create Order
const createOrder = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        product: Joi.string().required(),
        totalprice: Joi.number().integer().required(),
        status: Joi.string().required().trim(),
        category: Joi.string().required(),
        subcategory: Joi.string().required(),
        subchildcategory: Joi.string().required(),
    }),
};

module.exports = {
    createOrder
};
