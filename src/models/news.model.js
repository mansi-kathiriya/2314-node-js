const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        content: {
            type: String,
            trim: true,
        },
        publication_date: {
            type: Date,
            default: Date.now(),
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

const News = mongoose.model("news", newsSchema);

module.exports = News;