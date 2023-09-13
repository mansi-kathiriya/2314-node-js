const Joi = require("joi");

// create product
const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_desc: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        category: Joi.string().required(),
        subcategory: Joi.string().required(),
        subchildcategory: Joi.string().required(),
    }),
};

module.exports = {
    createProduct
};
