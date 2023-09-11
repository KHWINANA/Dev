const Book = require('../models/book');

exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: `the book has not been created` });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Implement other CRUD operations (getBookById, updateBook, deleteBook) here...
exports.getBookById = async (req, res) => {
    try {
        //Access the book ID from the URL parameters
        let id = req.params.id;

        //Query the database to retrieve a book by a specified ID
        let book = await Book.findById(id);

        if (!book) {
            res.status(201).json({ error: 'Book not found' })
            return
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

}
//update a book

exports.updateBook = async (req, res) => {
    const id = req.params.id;

    const book = await Book.findIdAndUpdate(id, req.body, { useFindAndModify: false })

    if (!book) {
        res.status(404).json({ error: 'Book can not be edited' });
    } else res.status(201).send({ msg: 'Book was edited' })

}

//delete a book
