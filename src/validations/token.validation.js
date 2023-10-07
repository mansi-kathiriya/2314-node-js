const Joi = require("joi");

/** Create jsonwebtoken */
const generateToken = {
    body: Joi.object({
        user: Joi.string().required().trim(),
    }),
};

module.exports = {
    generateToken,
};