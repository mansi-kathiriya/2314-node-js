const { sportgalleryService } = require("../services");

// Create Sportgallery
const createSportgallery = async (req, res) => {
    try {
        const reqBody = req.body;

        const galleryExists = await sportgalleryService.SportgalleryByName(reqBody);
        if (galleryExists) {
            throw new Error("please add other Sportgallery this Sportgallery is already created.");
        }

        const Sportgallery = await sportgalleryService.cresteSportgallery(reqBody);

        res.status(200).json({
            success: true,
            message: "Sportgallery create successfully!",
            data: { Sportgallery }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Sportgallery List
const getSportgalleryList = async (req, res) => {
    try {
        const galleryExists = await sportgalleryService.SportgalleryByName();
        if (!galleryExists) {
            throw new Error("Sportgallery not found");
        }

        const getlist = await sportgalleryService.getSportgalleryList();

        res.status(200).json({
            success: true,
            message: "Get Sportgallery list successfully!",
            data: getlist,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Get Sportgallery details by id
const getSportgalleryDetails = async (req, res) => {
    try {
        const getDetails = await sportgalleryService.getSportgalleryById(req.params.sportgalleryId);
        if (!getDetails) {
            throw new Error("Sportgallery not found");
        }

        res.status(200).json({
            success: true,
            message: "Sportgallery details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// update Sportgallery
const updateSportgallery = async (req, res) => {
    try {
        const sportgalleryId = req.params.sportgalleryId;

        const galleryExists = await sportgalleryService.getSportgalleryById(sportgalleryId);
        if (!galleryExists) {
            throw new Error("Sportgallery not found");
        }

        await sportgalleryService.updateSportgallery(sportgalleryId,req.body);

        res.status(200).json({
            success: true,
            message: "Sportgallery details Update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// Delete Sportgallery
const deleteSportgallery = async (req, res) => {
    try {
        const sportgalleryId = req.params.sportgalleryId;

        const galleryExists = await sportgalleryService.getSportgalleryById(sportgalleryId);
        if (!galleryExists) {
            throw new Error("Sportgallery not found");
        }

        await sportgalleryService.deleteSportgallery(sportgalleryId);

        res.status(200).json({
            success: true,
            message: "Sportgallery details delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

module.exports = {
    createSportgallery,
    getSportgalleryList,
    getSportgalleryDetails,
    updateSportgallery,
    deleteSportgallery,
}