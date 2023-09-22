const { sportcategoryService } = require("../services");

// create Sportcategory
const createSportcategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const SportcategoryEx = await sportcategoryService.getSportcategoryByName(reqBody.name);
        if (SportcategoryEx) {
            throw new Error(`please add other Sportcategory this ${SportcategoryEx.name} Sportcategory already created.`);
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

//  Get user list
const getSportcategoryList = async (req, res) => {
    try {
        const getList = await sportcategoryService.getSportcategoryList();
        res.status(200).json({
            success: true,
            message: "Get Sportcategory list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Sportcategory details by id
const getSportcategoryDetails = async (req, res) => {
    try {
        const getDetails = await sportcategoryService.getSportcategoryById(
            req.params.sportcategoryId
        )
        if (!getDetails) {
            throw new Error("Sportcategory not found!");
        }

        res.status(200).json({
            success: true,
            message: "Sportcategory details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Sportcategory

const updateSportcategory = async (req, res) => {
    try {
        const sportcategoryId = req.params.SportcategoryId;

        const cateExists = await sportcategoryService.getSportcategoryById(sportcategoryId);
        if (!cateExists) {
            throw new Error("Sportcategory not found!")
        }

        await sportcategoryService.updateDetails(sportcategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "Sportcategory details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Sportcategory

const deleteRecord = async (req, res) => {
    try {
        const sportcategoryId = req.params.sportcategoryId;

        const cateExists = await sportcategoryService.getSportcategoryById(sportcategoryId);
        if (!cateExists) {
            throw new Error("Sportcategory not found!")
        }

        await sportcategoryService.deleteSportcategory(sportcategoryId);

        res.status(200).json({
            success: true,
            message: "Sportcategory delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createSportcategory,
    getSportcategoryList,
    getSportcategoryDetails,
    updateSportcategory,
    deleteRecord
};