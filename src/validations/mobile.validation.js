const Joi = require("joi");

// create Mobile
const createMobile = {
    body: Joi.object().keys({
        mobile_brand: Joi.string().required().trim(),
        mobile_name: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        stock: Joi.number().integer().required(),
    }),
};

module.exports = {
    createMobile
};