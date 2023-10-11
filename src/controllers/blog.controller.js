const { blogService } = require("../services");

/** create Blog */
const createBlog = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.blog_image = req.file.filename;
        } else {
            throw new Error("image is required!");
        }

        const blog = await blogService.createBlog(reqBody);
        if (!blog) {
            throw new Error("something went wrong, please try again on later!");
        }

        res.status(200).json({
            success: true,
            message: "Blog create successfully!",
            data: { blog },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** get Blog List */
const getBlogList = async (req, res) => {
    try {
        const blogList = await blogService.getBlogList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get Blog list successfully!",
            data: blogList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get Blog deatils by id */
const getBlogDetails = async (req, res) => {
    try {
        const getDetails = await blogService.getBlogById(req.params.blogId);
        if (!getDetails) {
            throw new Error("Blog not found!");
        }

        res.status(200).json({
            success: true,
            message: "Blog details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Update Blog */
const updateDetails = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blogExists = await blogService.getBlogById(blogId);
        if (!blogExists) {
            throw new Error("Blog not found!");
        }

        await blogService.updateDetails(blogId, req.body);

        res
            .status(200)
            .json({ success: true, message: "Blog details update successfully!" });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete Blog */
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blogExists = await blogService.getBlogById(blogId);
        if (!blogExists) {
            throw new Error("Blog not found!");
        }

        await blogService.deleteBlog(blogId);

        res.status(200).json({
            success: true,
            message: "Blog delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBlog,
    getBlogList,
    getBlogDetails,
    updateDetails,
    deleteBlog
}