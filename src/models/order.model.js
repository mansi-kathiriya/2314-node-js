const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },
        product: {
            type: mongoose.Types.ObjectId,
            ref: "product"
        },
        totalprice: {
            type: Number,
        },
        status: {
            type: String,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        },
        subcategory: {
            type: mongoose.Types.ObjectId,
            ref: "subcategory",
        },
        subchildcategory: {
            type: mongoose.Types.ObjectId,
            ref: "subchildcategory",
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;