const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },
        shop_name: {
            type: String,
            trim: true,
        },
        shop_desc: {
            type: String,
            trim: true,
        },
        contact_no: {
            type: Number,
            trim: true,
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

const Shop = mongoose.model("shop",shopSchema);

module.exports = Shop;