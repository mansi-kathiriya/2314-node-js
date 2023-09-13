const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        sub_category_name: {
            type: String,
            trim: true,
        },
        sub_category_desc: {
            type: String,
            trim: true,
        },
        price: {
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

const subCategory = mongoose.model("subcategory", subcategorySchema);

module.exports = subCategory;