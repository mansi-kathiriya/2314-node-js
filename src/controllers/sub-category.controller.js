const { sub_categoryService } = require("../services");

// create sub-category
const createsubCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const subCategoryExists = await sub_categoryService.getsubCategoryByName(reqBody.sub_category_name);
        if (subCategoryExists) {
            throw new Error(`please add other sub-category this ${subCategoryExists.sub_category_name} sub-category already created.`);
        }

        const subCategory = await sub_categoryService.createsubCategory(reqBody);

        res.status(200).json({
            success: true,
            message: "sub-category create successfully!",
            data: { subCategory }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get sub-category list
const getsubCategoryList = async (req, res) => {
    try {
        const getList = await sub_categoryService.getsubCategoryList();
        res.status(200).json({
            success: true,
            message: "Get sub-category list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get sub-category details by id
const getsubCategoryDetails = async (req, res) => {
    try {
        const getDetails = await sub_categoryService.getsubCategoryById(
            req.params.subcategoryId
        )
        if (!getDetails) {
            throw new Error("sub-Category not found!");
        }

        res.status(200).json({
            success: true,
            message: "sub-Category details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update sub-category

const updatesubCategory = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;

        const subCategoryExists = await sub_categoryService.getsubCategoryById(subcategoryId);
        if (!subCategoryExists) {
            throw new Error("sub-Category not found!")
        }

        await sub_categoryService.updateDetails(subcategoryId, req.body);

        res.status(200).json({
            success: true,
            message: "sub-Category details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete sub-category

const deleteRecord = async (req, res) => {
    try {
        const subcategoryId = req.params.subcategoryId;

        const subCategoryExists = await sub_categoryService.getsubCategoryById(subcategoryId);
        if (!subCategoryExists) {
            throw new Error("sub-Category not found!")
        }

        await sub_categoryService.deletesubCategory(subcategoryId);

        res.status(200).json({
            success: true,
            message: "sub-Category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createsubCategory,
    getsubCategoryList,
    getsubCategoryDetails,
    updatesubCategory,
    deleteRecord
};