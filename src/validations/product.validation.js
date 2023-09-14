const Joi = require("joi");

// create product
const createProduct = {
    body: Joi.object().keys({
        category: Joi.string().required(),
        product_name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        stock_quantity: Joi.number().integer().required(),
    }),
};

module.exports = {
    createProduct
};
