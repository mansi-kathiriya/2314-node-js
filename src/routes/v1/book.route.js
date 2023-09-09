const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create book
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  bookController.createBookRecord
);

// Get book list
router.get(
  "/list",
  bookController.getBooksList
);

// get book details by id
router.get(
  "/get-details/:bookId",
  bookController.getBookDetails
)

// update book
router.put(
  "/update-book/:bookId",
  bookController.updateBook
)

// delete book
router.delete(
  "/delete-book/:bookId",
  bookController.deleteRecord
)

module.exports = router;