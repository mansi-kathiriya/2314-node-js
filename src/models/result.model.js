const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
        team_score: {
            type: Number,
            trim: true,
        },
        player_stats: {
            type: Number,
            trim: true,
        },
        highlights: {
            type: String,
            trim: true,
        },
        game: {
            type: mongoose.Types.ObjectId,
            ref: "game",
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

const Result = mongoose.model("result", resultSchema);

module.exports = Result;