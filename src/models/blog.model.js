const mongoose = require("mongoose");
const config = require("../config/config")

const blogSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        blog_name: {
            type: String,
            trim: true,
        },
        blog_image: {
            type: String,
            trim: true,
        },
        blog_desc: {
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
            transform: function (doc, data){
                if(data?.blog_image){
                    data.blog_image = `${config.base_url}blog_image/${data.blog_image}`
                }
            }
        }
    }
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;