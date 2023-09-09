const { bookService } = require("../services");

// create book
const createBookRecord = async (req,res) => {
    try {
        const reqBody = req.body;

        const bookEx = await bookService.getBookByName(reqBody.book_name);
        if (bookEx) {
            throw new Error(`please add other book this ${bookEx.book_name} book already created.`);
        }

        const book = await bookService.createBook(reqBody);

        res.status(200).json({
            success: true,
            message: "Book create successfully!",
            data: { book }
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

//  Get book list
const getBooksList = async(req, res) => {
    try {
        const getList = await bookService.getBookList();
        res.status(200).json({
            success: true,
            message: "Get Book list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success:false, message: error.message })
    }
};

// get book details by id
const getBookDetails = async (req, res) => {
    try {
        const getDetails = await bookService.getBookById(
            req.params.bookId
        )
        if (!getDetails) {
            throw new Error("Book not found!");
        }

        res.status(200).json({
            success: true,
            message: "Book details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update book

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;

        const bookExists = await bookService.getCategoryById(categoryId);
        if (!bookExists) {
            throw new Error("book not found!")
        }

        await bookService.updateDetails(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "book details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete category

const deleteRecord = async (req, res) => {
    try {
        const bookId = req.params.bookId;

        const bookExists = await bookService.getBookById(bookId);
        if (!bookExists) {
            throw new Error("Book not found!")
        }

        await bookService.deleteBook(bookId);

        res.status(200).json({
            success: true,
            message: "Book delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createBookRecord,
    getBooksList,
    getBookDetails,
    updateBook,
    deleteRecord
};