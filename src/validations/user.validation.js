const Joi = require("joi");

// create user
const createUser = {
    body: Joi.object().keys({
        username: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().required().trim(),
        phone_number: Joi.number().integer().required(),
        payment_information: Joi.string().required().trim(),
    }),
};

module.exports = {
    createUser
};