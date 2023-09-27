const { gameService } = require("../services");

// create game
const createGame = async (req, res) => {
    try {
        const reqBody = req.body;

        const gameExists = await gameService.gameByName(reqBody.name);
        if(gameExists){
            throw new Error("please add other game this game is alredy craeted.");
        };

        const game = await gameService.createGame(reqBody);

        res.status(200).json({
            success: true,
            message: "Game create successfully!",
            data: { game }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

// Get game List
const getGameList = async (req, res) => {
    try {
        const gameExists = await gameService.GameByName(reqBody.name);
        if (!gameExists) {
            throw new Error("Game not found");
        }

        const getlist = await gameService.getGameList(reqBody);

        res.status(200).json({
            success: true,
            message: "Get Game list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Game details by id
const getGameDetails = async (req, res) => {
    try {
        const getDetails = await gameService.getGameById(req.params.gameId);
        if (!getDetails) {
            throw new Error("Game not found");
        }

        res.status(200).json({
            success: true,
            message: "Game details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update Game
const updateGame = async (req, res) => {
    try {
        const gameId = req.params.gameId;

        const gameExists = await gameService.getGameById(gameId);
        if (!gameExists) {
            throw new Error("Game not found");
        }

        await gameService.updateGame(gameId,req.body);

        res.status(200).json({
            success: true,
            message: "Game details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Game
const deleteGame = async (req, res) => {
    try {
        const gameId = req.params.gameId;

        const gameExists = await gameService.getGameById(gameId);
        if (!gameExists) {
            throw new Error("Game not found");
        }

        await gameService.deleteGame(gameId);

        res.status(200).json({
            success: true,
            message: "Game details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createGame,
    getGameList,
    getGameDetails,
    updateGame,
    deleteGame,
}