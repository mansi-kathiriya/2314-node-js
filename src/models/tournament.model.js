const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
    {
        full_name: {
            type: String,
            trim: true,
        },
        start_date: {
            type: Date,
            default: Date.now(),
        },
        end_date: {
            type: Date,
            default: Date.now(),
        },
        location: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        organizer: {
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

const Tournament = mongoose.model("tournament", tournamentSchema);

module.exports = Tournament;