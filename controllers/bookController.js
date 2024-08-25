import Book from '../models/Book.js';

export async function createBook(req, res, next) {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    }
    catch (err) {
        next(err);
    }
}

export async function getBooks(req, res, next) {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    }
    catch (err) {
        next(err);
    }
}

export async function getBookById(req, res, next) {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json('Book not found.');
        res.status(200).json(book);
    }
    catch (err) {
        next(err);
    }
}

export async function updateBook(req, res, next) {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,
            { new: true, runValidators: true }
        );
        if (!book) return res.status(404).json('Book not found.');
        res.status(200).json(book);
    }
    catch (err) {
        next(err);
    }
}

export async function deleteBook(req, res, next) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json('Book not found.');
        res.status(200).json(book);
    }
    catch (err) {
        next(err);
    }
}

