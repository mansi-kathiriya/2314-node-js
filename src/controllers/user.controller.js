const { userService } = require("../services");

// create User
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;

        const userExists = await userService.getUserByName(reqBody.first_name);
        if (userExists) {
            throw new Error(`please add other User this ${userExists.first_name} User already created.`);
        }

        const User = await userService.createUser(reqBody);

        res.status(200).json({
            success: true,
            message: "User create successfully!",
            data: { User }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get User list
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList();
        res.status(200).json({
            success: true,
            message: "Get User list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get User details by id
const getUserDetails = async (req, res) => {
    try {
        const getDetails = await userService.getUserById(
            req.params.userId
        )
        if (!getDetails) {
            throw new Error("User not found!");
        }

        res.status(200).json({
            success: true,
            message: "User details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update User

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("User not found!")
        }

        await userService.updateDetails(userId, req.body);

        res.status(200).json({
            success: true,
            message: "User details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete User

const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("User not found!")
        }

        await userService.deleteUser(userId);

        res.status(200).json({
            success: true,
            message: "User delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createUser,
    getUserList,
    getUserDetails,
    updateUser,
    deleteRecord
};