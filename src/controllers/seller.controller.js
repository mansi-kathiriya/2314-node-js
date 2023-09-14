const { sellerService } = require("../services");

// create Seller
const createSeller = async (req, res) => {
    try {
        const reqBody = req.body;

        const sellerExists = await sellerService.getSellerByName(reqBody);
        if (sellerExists) {
            throw new Error(`please add other Seller this Seller already created.`);
        }

        const Seller = await sellerService.createSeller(reqBody);

        res.status(200).json({
            success: true,
            message: "Seller create successfully!",
            data: { Seller }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Seller list
const getSellerList = async (req, res) => {
    try {
        const getList = await sellerService.getSellerList();
        res.status(200).json({
            success: true,
            message: "Get Seller list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Seller details by id
const getSellerDetails = async (req, res) => {
    try {
        const getDetails = await sellerService.getSellerById(
            req.params.sellerId
        )
        if (!getDetails) {
            throw new Error("Seller not found!");
        }

        res.status(200).json({
            success: true,
            message: "Seller details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Seller

const updateSeller = async (req, res) => {
    try {
        const sellerId = req.params.sellerId;

        const sellerExists = await sellerService.getSellerById(sellerId);
        if (!sellerExists) {
            throw new Error("Seller not found!")
        }

        await sellerService.updateDetails(sellerId, req.body);

        res.status(200).json({
            success: true,
            message: "Seller details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Seller

const deleteRecord = async (req, res) => {
    try {
        const sellerId = req.params.sellerId;

        const sellerExists = await sellerService.getSellerById(sellerId);
        if (!sellerExists) {
            throw new Error("Seller not found!")
        }

        await sellerService.deleteSeller(sellerId);

        res.status(200).json({
            success: true,
            message: "Seller delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createSeller,
    getSellerList,
    getSellerDetails,
    updateSeller,
    deleteRecord
};