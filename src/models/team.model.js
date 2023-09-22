const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
    {
        team_name: {
            type: String,
            trim: true,
        },
        logo_url: {
            type: String,
            trim: true,
        },
        description: {
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

const Team = mongoose.model("team", teamSchema);

module.exports = Team;