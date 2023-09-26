const Joi = require("joi");

//  create Player
const createPlayer = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        birthdate: Joi.date(),
        position: Joi.string().required().trim(),
    })
};

module.exports = {
    createPlayer
}