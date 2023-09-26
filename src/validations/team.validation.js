const Joi = require("joi");

// create Team
const createTeam = {
    body: Joi.object().keys({
        team_name: Joi.string().required().trim(),
        logo_url: Joi.string().required().trim(),
        description: Joi.string().required().trim(),
    })
};

module.exports = {
    createTeam
}