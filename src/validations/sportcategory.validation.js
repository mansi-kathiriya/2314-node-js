const Joi = require("joi");

// create Sportcategory
const createSportcategory = {
    body: Joi.object().keys({
        name: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
    }),
};

module.exports = {
    createSportcategory
};