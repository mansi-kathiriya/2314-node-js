const { teamService } = require("../services");

// Create Team
const createTeam = async (req, res) => {
    try {
        const reqBody = req.body;

        const teamExists = await teamService.TeamByName(reqBody.name);
        if (teamExists) {
            throw new Error("please add other Team this Team is already created.");
        }

        const Team = await teamService.cresteTeam(reqBody);

        res.status(200).json({
            success: true,
            message: "Team create successfully!",
            data: { Team }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Team List
const getTeamList = async (req, res) => {
    try {
        const teamExists = await teamService.TeamByName(reqBody.name);
        if (!teamExists) {
            throw new Error("Team not found");
        }

        const getlist = await teamService.getTeamList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get Team list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Team details by id
const getTeamDetails = async (req, res) => {
    try {
        const getDetails = await teamService.getTeamById(req.params.teamId);
        if (!getDetails) {
            throw new Error("Team not found");
        }

        res.status(200).json({
            success: true,
            message: "Team details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update Team
const updateTeam = async (req, res) => {
    try {
        const teamId = req.params.teamId;

        const teamExists = await teamService.getTeamById(teamId);
        if (!teamExists) {
            throw new Error("Team not found");
        }

        await teamService.updateTeam(teamId,req.body);

        res.status(200).json({
            success: true,
            message: "Team details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Team
const deleteTeam = async (req, res) => {
    try {
        const teamId = req.params.teamId;

        const teamExists = await teamService.getTeamById(teamId);
        if (!teamExists) {
            throw new Error("Team not found");
        }

        await teamService.deleteTeam(teamId);

        res.status(200).json({
            success: true,
            message: "Team details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createTeam,
    getTeamList,
    getTeamDetails,
    updateTeam,
    deleteTeam,
}