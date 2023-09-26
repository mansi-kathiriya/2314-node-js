const mongoose = require("mongoose");

const founderSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            trim: true,
        },
        nationality: {
            type: String,
            trim: true,
        },
        contact_info: {
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

const Founder = mongoose.model("founder", founderSchema);

module.exports = Founder;