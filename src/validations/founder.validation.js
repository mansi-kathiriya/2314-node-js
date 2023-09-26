const Joi = require("joi");

// create Founder
const createFounder = {
    body: Joi.object().keys({
        full_name: Joi.string().required().trim(),
        nationality: Joi.string().required().trim(),
        contact_info: Joi.string().required().trim(),
    }),
};

module.exports = {
    createFounder
};