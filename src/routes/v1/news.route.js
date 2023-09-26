const express = require("express");
const { newsValidation } = require("../../validations");
const { newsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create News
router.post(
    "/create-news",
    validate(newsValidation.createNews),
    newsController.createNews
);

// Get News List
router.get(
    "/news-list",
    newsController.getNewsList
);

//  Get News details by id
router.get(
    "/news-details/:newsId",
    newsController.getNewsDetails
);

// update News
router.put(
    "/news-update/:newsId",
    newsController.updateNews
);

// delete News
router.delete(
    "/news-delete/:newsId",
    newsController.deleteNews
);

module.exports = router;