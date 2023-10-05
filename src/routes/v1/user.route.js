const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create user */
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

/** Get user */
router.get(
    "/user-list",
    validate(userValidation.userList),
    userController.getUserList
);

/** Get user deatils by id */
router.get(
    "/user-details/:userId",
    validate(userValidation.getDetails),
    userController.getUserDetails
);

/** Update user */
router.put(
    "/update-details/:userId",
    validate(userValidation.updateDetails),
    userController.updateDetails
);

/** Delete user */
router.delete(
    "/user-delete/:userId",
    validate(userValidation.getDetails),
    userController.deleteUser
);

module.exports = router;