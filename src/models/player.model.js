const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        birthdate: {
            type: Date,
            default: Date.now(),
        },
        position: {
            type: String,
            trim: true,
        },
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team",
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

const Player = mongoose.model("player", playerSchema);

module.exports = Player;