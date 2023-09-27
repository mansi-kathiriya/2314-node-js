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
    
}