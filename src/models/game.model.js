const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
    {
        game_name: {
            type: String,
            trim: true,
        },
        date_time: {
            type: Date,
            default: Date.now(),
        },
        location: {
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

const Game = mongoose.model("game", gameSchema);

module.exports = Game;