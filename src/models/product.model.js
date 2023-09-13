const mongoose = require("mongoose");
const config = require("../config/config")

const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
        },
        product_desc: {
            type: String,
            trim: true,
        },
        product_image: {
            type: String,
            trim: true,

        },
        price: {
            type: Number,
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
        toJSON: {
            transform: function (doc, data) {
                if(data?.product_image){
                    data.product_image = `${config.base_url}product_image/${data.product_image}`;
                }
            },
        },
    }
);

const product = mongoose.model("product",productSchema);

module.exports = product;