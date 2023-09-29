const { playerService } = require("../services");

// Create Player
const createPlayer = async (req, res) => {
    try {
        const reqBody = req.body;

        const playerExists = await playerService.PlayerByName(reqBody);
        if (playerExists) {
            throw new Error("please add other Player this Player is already created.");
        }

        const Player = await playerService.crestePlayer(reqBody);

        res.status(200).json({
            success: true,
            message: "Player create successfully!",
            data: { Player }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Player List
const getPlayerList = async (req, res) => {
    try {
        const playerExists = await playerService.PlayerByName();
        if (!playerExists) {
            throw new Error("Player not found");
        }

        const getlist = await playerService.getPlayerList();

        res.status(200).json({
            success: true,
            message: "Get Player list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Player details by id
const getPlayerDetails = async (req, res) => {
    try {
        const getDetails = await playerService.getPlayerById(req.params.playerId);
        if (!getDetails) {
            throw new Error("Player not found");
        }

        res.status(200).json({
            success: true,
            message: "Player details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update Player
const updatePlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;

        const playerExists = await playerService.getPlayerById(playerId);
        if (!playerExists) {
            throw new Error("Player not found");
        }

        await playerService.updatePlayer(playerId,req.body);

        res.status(200).json({
            success: true,
            message: "Player details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Player
const deletePlayer = async (req, res) => {
    try {
        const playerId = req.params.playerId;

        const playerExists = await playerService.getPlayerById(playerId);
        if (!playerExists) {
            throw new Error("Player not found");
        }

        await playerService.deletePlayer(playerId);

        res.status(200).json({
            success: true,
            message: "Player details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createPlayer,
    getPlayerList,
    getPlayerDetails,
    updatePlayer,
    deletePlayer,
}