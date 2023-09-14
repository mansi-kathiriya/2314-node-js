const Joi = require("joi");

// create product
const createProduct = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        Payment_method: Joi.string().required().trim(),
        amount: Joi.number().integer().required(),
        transaction_date: Joi.date().required(),
    }),
};

module.exports = {
    createProduct
};
