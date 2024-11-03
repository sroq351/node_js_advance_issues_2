const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({
      staus: "success",
      results: book.length,
      message: "All books retrieved successfully",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err.message,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      staus: "success",
      message: "Book created successfully",
      data: newBook,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      message: "Book deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "not found",
      message: err.message,
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: "not_found",
      message: err.message,
    });
  }
};
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    res.status(404).json({
      status: "not_found",
      message: err.message,
    });
  }
};
