const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
    {
        token: {
            type: String,
        },
        expire_time: {
            type: Date,
            default: null,
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },
    },
    {
        timestamps: true,
        versionkey: false
    }
);

const Token = mongoose.model("token", tokenSchema);

module.exports = Token;