const { newsService } = require("../services");

// Create News
const createNews = async (req, res) => {
    try {
        const reqBody = req.body;

        const newsExists = await newsService.NewsByName(reqBody.name);
        if (newsExists) {
            throw new Error("please add other News this News is already created.");
        }

        const News = await newsService.cresteNews(reqBody);

        res.status(200).json({
            success: true,
            message: "News create successfully!",
            data: { News }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get News List
const getNewsList = async (req, res) => {
    try {
        const newsExists = await newsService.NewsByName(reqBody.name);
        if (!newsExists) {
            throw new Error("News not found");
        }

        const getlist = await newsService.getNewsList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get News list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get News details by id
const getNewsDetails = async (req, res) => {
    try {
        const getDetails = await newsService.getNewsById(req.params.newsId);
        if (!getDetails) {
            throw new Error("News not found");
        }

        res.status(200).json({
            success: true,
            message: "News details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update News
const updateNews = async (req, res) => {
    try {
        const newsId = req.params.newsId;

        const newsExists = await newsService.getNewsById(newsId);
        if (!newsExists) {
            throw new Error("News not found");
        }

        await newsService.updateNews(newsId,req.body);

        res.status(200).json({
            success: true,
            message: "News details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete News
const deleteNews = async (req, res) => {
    try {
        const newsId = req.params.newsId;

        const newsExists = await newsService.getNewsById(newsId);
        if (!newsExists) {
            throw new Error("News not found");
        }

        await newsService.deleteNews(newsId);

        res.status(200).json({
            success: true,
            message: "News details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createNews,
    getNewsList,
    getNewsDetails,
    updateNews,
    deleteNews,
}