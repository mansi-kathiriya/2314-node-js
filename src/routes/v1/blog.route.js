const express = require("express");
const { blogValidation } = require("../../validations");
const { blogController } = require("../../controllers");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Blog */
router.post(
    "/create-blog",
    upload.single("blog_image"),
    validate(blogValidation.createBlog),
    blogController.createBlog
);

/** Get Blog */
router.get(
    "/blog-list",
    blogController.getBlogList
);

/** Get Blog deatils by id */
router.get(
    "/blog-details/:blogId",
    blogController.getBlogDetails
);

/** Update Blog */
router.put(
    "/update-details/:blogId",
    blogController.updateDetails
);

/** Delete Blog */
router.delete(
    "/blog-delete/:blogId",
    blogController.deleteBlog
);

module.exports = router;