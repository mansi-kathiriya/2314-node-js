const Joi = require("joi");

// create Order
const createOrder = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        order_date: Joi.date().required(),
        status: Joi.string().required().trim(),
    }),
};

module.exports = {
    createOrder
};
