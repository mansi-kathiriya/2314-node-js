const { orderService } = require("../services");

// create Order
const createOrder = async (req, res) => {
    try {
        const reqBody = req.body;

        const Order = await orderService.createOrder(reqBody);
        if (Order) {
            throw new Error("Couldn't create order");
        }

        res.status(200).json({
            success: true,
            message: "Order create successfully!",
            data: { Order }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Order list
const getOrderList = async (req, res) => {
    try {
        const getList = await orderService.getOrderList();
        res.status(200).json({
            success: true,
            message: "Get Order list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Order details by id
const getOrderDetails = async (req, res) => {
    try {
        const getDetails = await orderService.getOrderById(
            req.params.orderId
        )
        if (!getDetails) {
            throw new Error("Order not found!");
        }

        res.status(200).json({
            success: true,
            message: "Order details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Order

const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const OrderExists = await orderService.getOrderById(orderId);
        if (!OrderExists) {
            throw new Error("Order not found!")
        }

        await orderService.updateDetails(orderId, req.body);

        res.status(200).json({
            success: true,
            message: "Order details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Order

const deleteRecord = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const OrderExists = await orderService.getOrderById(orderId);
        if (!OrderExists) {
            throw new Error("Order not found!")
        }

        await orderService.deleteOrder(orderId);

        res.status(200).json({
            success: true,
            message: "Order delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createOrder,
    getOrderList,
    getOrderDetails,
    updateOrder,
    deleteRecord
};