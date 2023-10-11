const Joi = require("joi");

/** Create Blog */
const createBlog = {
    body: Joi.object().keys({
        category: Joi.string().required().trim(),
        blog_name: Joi.string().required().trim(),
        blog_image: Joi.string().required().trim(),
        blog_desc: Joi.string().required().trim(),
    }),
};


module.exports = {
    createBlog,
}