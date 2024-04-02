import NotFoundException from "../exceptions/errors/NotFoundException.js";
import Book from "../models/BookModel.js";
class BookController {
  async getAllBook(req, res) {
    try {
      const books = await Book.find();
      if (!books) {
        throw NotFoundException("No book found");
      }
      res.status(200).json({
        data: books,
        success: true,
        message: "Get all books successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async getBookDetail(req, res) {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Book not found",
        });
      }
      res.status(200).json({
        data: book,
        success: true,
        message: "Get book successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async createBook(req, res) {
    try {
      const newBooks = new Book(req.body);
      const saveBook = await newBooks.save();
      res.status(201).json({
        data: [saveBook],
        success: true,
        message: "Create book successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async updateBook(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const updateBook = await Book.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updateBook) {
        throw NotFoundException("Book not found");
      }
      res.status(200).json({
        data: updateBook,
        success: true,
        message: "Update book successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
  async deleteBook(req, res) {
    try {
      const { id } = req.params;
      const deleteBook = await Book.findByIdAndDelete(id);
      if (!deleteBook) {
        throw NotFoundException("Book not found");
      }
      res.status(200).json({
        data: deleteBook,
        success: true,
        message: "Delete book successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default BookController;
