const { mobileService } = require("../services");

// create Mobile
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobileExists = await mobileService.getMobileByName(reqBody.mobile_name);
        if (mobileExists) {
            throw new Error(`please add other Mobile this ${mobileExists.mobile_name} Mobile already created.`);
        }

        const Mobile = await mobileService.createMobile(reqBody);

        res.status(200).json({
            success: true,
            message: "Mobile create successfully!",
            data: { Mobile }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get user list
const getMobileList = async (req, res) => {
    try {
        const getList = await mobileService.getMobileList();
        res.status(200).json({
            success: true,
            message: "Get Mobile list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Mobile details by id
const getMobileDetails = async (req, res) => {
    try {
        const getDetails = await mobileService.getMobileById(
            req.params.mobileId
        )
        if (!getDetails) {
            throw new Error("Mobile not found!");
        }

        res.status(200).json({
            success: true,
            message: "Mobile details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Mobile

const updateMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;

        const cateExists = await mobileService.getMobileById(mobileId);
        if (!cateExists) {
            throw new Error("Mobile not found!")
        }

        await mobileService.updateDetails(mobileId, req.body);

        res.status(200).json({
            success: true,
            message: "Mobile details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Mobile

const deleteRecord = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;

        const cateExists = await mobileService.getMobileById(mobileId);
        if (!cateExists) {
            throw new Error("Mobile not found!")
        }

        await mobileService.deleteMobile(mobileId);

        res.status(200).json({
            success: true,
            message: "Mobile delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createMobile,
    getMobileList,
    getMobileDetails,
    updateMobile,
    deleteRecord
};