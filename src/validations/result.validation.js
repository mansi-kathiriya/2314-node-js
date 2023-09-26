const Joi = require("joi");

//  create Result
const createResult = {
    body: Joi.object().keys({
        team_score: Joi.string().required().trim(),
        player_stats: Joi.number().integer(),
        highlights: Joi.string().required().trim(),
    })
};

module.exports = {
    createResult
}