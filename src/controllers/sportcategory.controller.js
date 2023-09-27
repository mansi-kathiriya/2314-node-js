const { sportcategoryService } = require("../services");

// Create Sportcategory
const createSportcategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const sportcategoryExists = await sportcategoryService.SportcategoryByName(reqBody.name);
        if (sportcategoryExists) {
            throw new Error("please add other Sportcategory this Sportcategory is already created.");
        }

        const Sportcategory = await sportcategoryService.createSportcategory(reqBody);

        res.status(200).json({
            success: true,
            message: "Sportcategory create successfully!",
            data: { Sportcategory }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Sportcategory List
const getSportcategoryList = async (req, res) => {
    try {
        const sportcategoryExists = await sportcategoryService.SportcategoryByName(reqBody.name);
        if (!sportcategoryExists) {
            throw new Error("Sportcategory not found");
        }

        const getlist = await sportcategoryService.getSportcategoryList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get Sportcategory list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Sportcategory details by id
const getSportcategoryDetails = async (req, res) => {
    try {
        const getDetails = await sportcategoryService.getSportcategoryById(req.params.sportcategoryId);
        if (!getDetails) {
            throw new Error("Sportcategory not found");
        }

        res.status(200).json({
            success: true,
            message: "Sportcategory details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update Sportcategory
const updateSportcategory = async (req, res) => {
    try {
        const sportcategoryId = req.params.sportcategoryId;

        const sportcategoryExists = await sportcategoryService.getSportcategoryById(sportcategoryId);
        if (!sportcategoryExists) {
            throw new Error("Sportcategory not found");
        }

        await sportcategoryService.updateSportcategory(sportcategoryId,req.body);

        res.status(200).json({
            success: true,
            message: "Sportcategory details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Sportcategory
const deleteSportcategory = async (req, res) => {
    try {
        const sportcategoryId = req.params.sportcategoryId;

        const sportcategoryExists = await sportcategoryService.getSportcategoryById(sportcategoryId);
        if (!sportcategoryExists) {
            throw new Error("Sportcategory not found");
        }

        await sportcategoryService.deleteSportcategory(sportcategoryId);

        res.status(200).json({
            success: true,
            message: "Sportcategory details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createSportcategory,
    getSportcategoryList,
    getSportcategoryDetails,
    updateSportcategory,
    deleteSportcategory,
}