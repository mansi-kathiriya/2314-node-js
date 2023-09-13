const { cartService } = require("../services");

// create Cart
const createCart = async (req, res) => {
    try {
        const reqBody = req.body;

        const Cart = await cartService.createCart(reqBody);

        if (CartExists) {
            throw new Error("Couldn't create Cart");
        }

        res.status(200).json({
            success: true,
            message: "Cart create successfully!",
            data: { Cart }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Cart list
const getCartList = async (req, res) => {
    try {
        const getList = await cartService.getCartList();
        res.status(200).json({
            success: true,
            message: "Get Cart list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Cart details by id
const getCartDetails = async (req, res) => {
    try {
        const getDetails = await cartService.getCartById(
            req.params.cartId
        )
        if (!getDetails) {
            throw new Error("Cart not found!");
        }

        res.status(200).json({
            success: true,
            message: "Cart details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Cart

const updateCart = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const CartExists = await cartService.getCartById(cartId);
        if (!CartExists) {
            throw new Error("Cart not found!")
        }

        await cartService.updateDetails(cartId, req.body);

        res.status(200).json({
            success: true,
            message: "Cart details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Cart

const deleteRecord = async (req, res) => {
    try {
        const cartId = req.params.cartId;

        const CartExists = await cartService.getCartById(cartId);
        if (!CartExists) {
            throw new Error("Cart not found!")
        }

        await cartService.deleteCart(cartId);

        res.status(200).json({
            success: true,
            message: "Cart delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createCart,
    getCartList,
    getCartDetails,
    updateCart,
    deleteRecord
};