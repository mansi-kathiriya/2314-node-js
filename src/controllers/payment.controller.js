const { paymentService } = require("../services");

// create Payment
const createPayment = async (req, res) => {
    try {
        const reqBody = req.body;

        const Payment = await paymentService.createPayment(reqBody);
        if (Payment) {
            throw new Error("Couldn't create Payment");
        }

        res.status(200).json({
            success: true,
            message: "Payment create successfully!",
            data: { Payment }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Payment list
const getPaymentList = async (req, res) => {
    try {
        const getList = await paymentService.getPaymentList();
        res.status(200).json({
            success: true,
            message: "Get Payment list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Payment details by id
const getPaymentDetails = async (req, res) => {
    try {
        const getDetails = await paymentService.getPaymentById(
            req.params.paymentId
        )
        if (!getDetails) {
            throw new Error("Payment not found!");
        }

        res.status(200).json({
            success: true,
            message: "Payment details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Payment

const updatePayment = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const PaymentExists = await paymentService.getPaymentById(paymentId);
        if (!PaymentExists) {
            throw new Error("Payment not found!")
        }

        await paymentService.updateDetails(paymentId, req.body);

        res.status(200).json({
            success: true,
            message: "Payment details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Payment

const deleteRecord = async (req, res) => {
    try {
        const paymentId = req.params.paymentId;

        const PaymentExists = await paymentService.getPaymentById(paymentId);
        if (!PaymentExists) {
            throw new Error("Payment not found!")
        }

        await paymentService.deletePayment(paymentId);

        res.status(200).json({
            success: true,
            message: "Payment delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createPayment,
    getPaymentList,
    getPaymentDetails,
    updatePayment,
    deleteRecord
};