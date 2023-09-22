const Joi = require("joi");

/* create token */
const generateToken = {
    body: Joi.object({
        user:  Joi.object({
            user: Joi.string().required().trim(),
        }),
    }),
};

module.exports = {
    generateToken,
}