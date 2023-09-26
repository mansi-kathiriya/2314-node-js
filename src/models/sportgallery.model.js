const mongoose = require("mongoose");

const sportgallerySchema = new mongoose.Schema(
    {
        sport_img: {
            type: String,
            trim: true,
        },
        sport_name: {
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
        versionkey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.sport_img) {
                    data.sport_img = `${config.base_url}sport_img/${data.sport_img}`;
                }
            },
        },
    }
);

const Sportgallery = mongoose.model("sportgallery", sportgallerySchema);

module.exports = Sportgallery;