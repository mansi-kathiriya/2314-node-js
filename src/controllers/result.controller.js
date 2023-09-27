const { resultService } = require("../services");

// Create Result
const createResult = async (req, res) => {
    try {
        const reqBody = req.body;

        const resultExists = await resultService.ResultByName(reqBody.name);
        if (resultExists) {
            throw new Error("please add other Result this Result is already created.");
        }

        const Result = await resultService.cresteResult(reqBody);

        res.status(200).json({
            success: true,
            message: "Result create successfully!",
            data: { Result }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Result List
const getResultList = async (req, res) => {
    try {
        const resultExists = await resultService.ResultByName(reqBody.name);
        if (!resultExists) {
            throw new Error("Result not found");
        }

        const getlist = await resultService.getResultList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get Result list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Result details by id
const getResultDetails = async (req, res) => {
    try {
        const getDetails = await resultService.getResultById(req.params.resultId);
        if (!getDetails) {
            throw new Error("Result not found");
        }

        res.status(200).json({
            success: true,
            message: "Result details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update Result
const updateResult = async (req, res) => {
    try {
        const resultId = req.params.resultId;

        const resultExists = await resultService.getResultById(resultId);
        if (!resultExists) {
            throw new Error("Result not found");
        }

        await resultService.updateResult(resultId,req.body);

        res.status(200).json({
            success: true,
            message: "Result details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Result
const deleteResult = async (req, res) => {
    try {
        const resultId = req.params.resultId;

        const resultExists = await resultService.getResultById(resultId);
        if (!resultExists) {
            throw new Error("Result not found");
        }

        await resultService.deleteResult(resultId);

        res.status(200).json({
            success: true,
            message: "Result details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createResult,
    getResultList,
    getResultDetails,
    updateResult,
    deleteResult,
}