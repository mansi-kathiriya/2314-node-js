const Joi = require("joi");

// create Sportgallery
const createSporetgallery = {
    body: Joi.object().keys({
        sport_img: Joi.string().required(),
        sport_name: Joi.string().required().trim(),
    })
};

module.exports = {
     createSporetgallery
}