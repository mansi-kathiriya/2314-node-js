const { founderService } = require("../services");

// Create Founder
const cresteFounder = async (req,res) => {
    try {
        const reqBody = req.body;

        const fonderExists = await founderService.founderByName(reqBody.name);
    } catch (error) {
        
    }
};