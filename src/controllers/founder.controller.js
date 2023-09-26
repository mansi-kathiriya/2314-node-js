const { founderService } = require("../services");

// Create Founder
const createFounder = async (req, res) => {
    try {
        const reqBody = req.body;

        const fonderExists = await founderService.founderByName(reqBody.name);
        if (fonderExists) {
            throw new Error("please add other founder this founder is already created.");
        }

        const founder = await founderService.cresteFounder(reqBody);

        res.status(200).json({
            success: true,
            message: "Founder create successfully!",
            data: { founder }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get fonder List
const getFonderList = async (req, res) => {
    try {
        const fonderExists = await founderService.founderByName(reqBody.name);
        if (!fonderExists) {
            throw new Error("Founder not found");
        }

        const getlist = await founderService.getFounderList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get founder list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get fonder details by id
const getFonderDetails = async (req, res) => {
    try {
        const getDetails = await founderService.getFonderById(req.params.founderId);
        if (!getDetails) {
            throw new Error("Founder not found");
        }

        res.status(200).json({
            success: true,
            message: "Founder details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update fonder
const updateFonder = async (req, res) => {
    try {
        const founderId = req.params.founderId;

        const fonderExists = await founderService.getFonderById(founderId);
        if (!fonderExists) {
            throw new Error("Founder not found");
        }

        await founderService.updateFonder(founderId,req.body);

        res.status(200).json({
            success: true,
            message: "Founder details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete fonder
const deleteFonder = async (req, res) => {
    try {
        const founderId = req.params.founderId;

        const fonderExists = await founderService.getFonderById(founderId);
        if (!fonderExists) {
            throw new Error("Founder not found");
        }

        await founderService.deleteFonder(founderId);

        res.status(200).json({
            success: true,
            message: "Founder details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createFounder,
    getFonderList,
    getFonderDetails,
    updateFonder,
    deleteFonder,
}