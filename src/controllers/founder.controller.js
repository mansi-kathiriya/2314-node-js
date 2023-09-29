const { founderService } = require("../services");

// Create Founder
const createFounder = async (req, res) => {
    try {
        const reqBody = req.body;

        const founderExists = await founderService.FounderByName(reqBody);
        if (founderExists) {
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

// Get Founder List
const getFounderList = async (req, res) => {
    try {
        const founderExists = await founderService.FounderByName();
        if (!founderExists) {
            throw new Error("Founder not found");
        }

        const getlist = await founderService.getFounderList();

        res.status(200).json({
            success: true,
            message: "Get founder list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Founder details by id
const getFounderDetails = async (req, res) => {
    try {
        const getDetails = await founderService.getFounderById(req.params.founderId);
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

// update Founder
const updateFounder = async (req, res) => {
    try {
        const founderId = req.params.founderId;

        const founderExists = await founderService.getFounderById(founderId);
        if (!founderExists) {
            throw new Error("Founder not found");
        }

        await founderService.updateFounder(founderId,req.body);

        res.status(200).json({
            success: true,
            message: "Founder details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Founder
const deleteFounder = async (req, res) => {
    try {
        const founderId = req.params.founderId;

        const founderExists = await founderService.getFounderById(founderId);
        if (!founderExists) {
            throw new Error("Founder not found");
        }

        await founderService.deleteFounder(founderId);

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
    getFounderList,
    getFounderDetails,
    updateFounder,
    deleteFounder,
}