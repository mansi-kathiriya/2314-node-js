const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
        mobile_brand: {
            type: String,
            trim: true,
        },
        mobile_name: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            default: 0,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionkey: false
    }
);

const Mobile = mongoose.model("mobile",mobileSchema);

module.exports = Mobile;