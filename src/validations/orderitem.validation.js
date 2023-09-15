const Joi = require("joi");

// create Order
const createOrder = {
    body: Joi.object().keys({
        order: Joi.string().required(),
        product: Joi.string().required().trim(),
        quantity: Joi.number().integer().required(),
    }),
};

module.exports = {
    createOrder
};
