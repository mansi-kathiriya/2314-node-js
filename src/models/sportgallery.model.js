const mongoose = require("mongoose");

const sportgallerySchema = new mongoose.Schema(
    {
        sport_img: {
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

const Sportgallery = mongoose.model("sportgallery", sportgallerySchema);

module.exports = Sportgallery;