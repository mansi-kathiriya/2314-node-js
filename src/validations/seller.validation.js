const Joi = require("joi");

// create Seller
const createSeller = {
    body: Joi.object().keys({
        user: Joi.string().required(),
        shop_name: Joi.string().required().trim(),
        shop_desc: Joi.string().required().trim(),
        contact_no: Joi.number().integer().required(),
    }),
};

module.exports = {
    createSeller
};
