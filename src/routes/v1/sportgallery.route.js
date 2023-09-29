const express = require("express");
const { upload } = require("../../middlewares/upload")
const { sportgalleryValidation } = require("../../validations");
const { sportgalleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create Sportgallery
router.post(
    "/create-sportgallery",
    upload.single("sport_img"),
    validate(sportgalleryValidation.createSportgallery),
    sportgalleryController.createSportgallery
);

// Get Sportgallery List
router.get(
    "/sportgallery-list",
    sportgalleryController.getSportgalleryList
);

//  Get Sportgallery details by id
router.get(
    "/sportgallery-details/:sportgalleryId",
    sportgalleryController.getSportgalleryDetails
);

// update Sportgallery
router.put(
    "/sportgallery-update/:sportgalleryId",
    sportgalleryController.updateSportgallery
);

// delete Sportgallery
router.delete(
    "/sportgallery-delete/:sportgalleryId",
    sportgalleryController.deleteSportgallery
);

module.exports = router;