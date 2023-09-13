const { subchildcategoryService } = require("../services");

// create subchildCategory
const createsubchildCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const childcategoryExists = await subchildcategoryService.getsubchildCategoryByName(reqBody.subchild_category);
        if (childcategoryExists) {
            throw new Error(`please add other subchildCategory this ${childcategoryExists.subchild_category} subchildCategory already created.`);
        }

        const subchildCategory = await subchildcategoryService.createsubchildCategory(reqBody);

        res.status(200).json({
            success: true,
            message: "subchildCategory create successfully!",
            data: { subchildCategory }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get subchildCategory list
const getsubchildCategoryList = async (req, res) => {
    try {
        const getList = await subchildcategoryService.getsubchildCategoryList();
        res.status(200).json({
            success: true,
            message: "Get subchildCategory list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get subchildCategory details by id
const getsubchildCategoryDetails = async (req, res) => {
    try {
        const getDetails = await subchildcategoryService.getsubchildCategoryById(
            req.params.subchildcategoryId
        )
        if (!getDetails) {
            throw new Error("subchildCategory not found!");
        }

        res.status(200).json({
            success: true,
            message: "subchildCategory details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update subchildCategory

const updatesubchildCategory = async (req, res) => {
    try {
        const childcategoryId = req.params.subchildcategoryId;

        const childcategoryExists = await subchildcategoryService.getsubchildCategoryById(subchildcategoryId);
        if (!childcategoryExists) {
            throw new Error("subchildCategory not found!")
        }

        await subchildcategoryService.updateDetails(subchildcategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "subchildCategory details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete subchildCategory

const deleteRecord = async (req, res) => {
    try {
        const childcategoryId = req.params.subchildcategoryId;

        const childcategoryExists = await subchildcategoryService.getsubchildCategoryById(subchildcategoryId);
        if (!childcategoryExists) {
            throw new Error("subchildCategory not found!")
        }

        await subchildcategoryService.deletesubchildCategory(subchildcategoryId);

        res.status(200).json({
            success: true,
            message: "subchildCategory delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createsubchildCategory,
    getsubchildCategoryList,
    getsubchildCategoryDetails,
    updatesubchildCategory,
    deleteRecord
};