const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
        },
        phone_number: {
            type: Number,
            trim: true,
        },
        payment_information: {
            type: String,
            trim: true,
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

const User = mongoose.model("users",userSchema);

module.exports = User;