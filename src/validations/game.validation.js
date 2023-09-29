const Joi = require("joi");

// create Game
const createGame = {
    body: Joi.object().keys({
        game_name: Joi.string().required().trim(),
        date_time: Joi.string().required().trim(),
        location: Joi.date(),
        team: Joi.string().required().trim(),
    }),
};

module.exports = {
    createGame
};