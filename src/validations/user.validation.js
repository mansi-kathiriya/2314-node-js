const Joi = require("joi");

/** Create user */
const createUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        contact: Joi.number().integer().required(),
        password: Joi.string().required().trim(),
    }),
};

/** Get user */
const userList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow("").default(10),
        page: Joi.number().integer().allow("").default(1),
    }),
};

/** Get user deatils by id */
const getDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
};

/** Update user */
const updateDetails = {
    params: Joi.object().keys({
        userId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        first_name: Joi.string().trim(),
        last_name: Joi.string().trim(),
    }),
};

module.exports = {
    createUser,
    userList,
    getDetails,
    updateDetails
}