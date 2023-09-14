const { orderitemService } = require("../services");

// create Orderitem
const createOrderitem = async (req, res) => {
    try {
        const reqBody = req.body;

        const Orderitem = await orderitemService.createOrderitem(reqBody);
        if (Orderitem) {
            throw new Error("Couldn't create Orderitem");
        }

        res.status(200).json({
            success: true,
            message: "Orderitem create successfully!",
            data: { Orderitem }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Orderitem list
const getOrderitemList = async (req, res) => {
    try {
        const getList = await orderitemService.getOrderitemList();
        res.status(200).json({
            success: true,
            message: "Get Orderitem list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Orderitem details by id
const getOrderitemDetails = async (req, res) => {
    try {
        const getDetails = await orderitemService.getOrderitemById(
            req.params.orderitemId
        )
        if (!getDetails) {
            throw new Error("Orderitem not found!");
        }

        res.status(200).json({
            success: true,
            message: "Orderitem details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Orderitem

const updateOrderitem = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;

        const OrderitemExists = await orderitemService.getOrderitemById(orderitemId);
        if (!OrderitemExists) {
            throw new Error("Orderitem not found!")
        }

        await orderitemService.updateDetails(orderitemId, req.body);

        res.status(200).json({
            success: true,
            message: "Orderitem details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Orderitem

const deleteRecord = async (req, res) => {
    try {
        const orderitemId = req.params.orderitemId;

        const OrderitemExists = await orderitemService.getOrderitemById(orderitemId);
        if (!OrderitemExists) {
            throw new Error("Orderitem not found!")
        }

        await orderitemService.deleteOrderitem(orderitemId);

        res.status(200).json({
            success: true,
            message: "Orderitem delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOrderitem,
    getOrderitemList,
    getOrderitemDetails,
    updateOrderitem,
    deleteRecord
};