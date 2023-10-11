const { Blog } = require("../models");

/**
 * Create Blog
 * @param {object} reqBody
 * @returns {Promise<Blog>}
 */
const createBlog = async (reqBody) => {
    return Blog.create(reqBody);
};

/** get Blog List */
const getBlogList = async (filter, options) => {
    return Blog.find()
};

/** Get Blog by email */
const getBlogByEmail = async (email) => {
    return Blog.findOne({ email });
};

/** Get Blog deatils by id */
const getBlogById = async (blogId) => {
    return Blog.findById(blogId);
}

/** Blog details update by id */
const updateDetails = async (blogId, updateBody) => {
    return Blog.findByIdAndUpdate(blogId, { $set: updateBody });
}

/** Delete Blog */
const deleteBlog = async (blogId) => {
    return Blog.findByIdAndDelete(blogId);
}

module.exports = {
    createBlog,
    getBlogList,
    getBlogByEmail,
    getBlogById,
    updateDetails,
    deleteBlog,
};