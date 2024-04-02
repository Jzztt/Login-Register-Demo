import express from "express";
import BookController from "../controllers/bookController.js";
const booksRouter = express.Router();

const bookController = new BookController();


booksRouter.get("/", bookController.getAllBook);
booksRouter.post("/", bookController.createBook);
booksRouter.get("/:id", bookController.getBookDetail);
booksRouter.put("/:id", bookController.updateBook);
booksRouter.delete("/:id", bookController.deleteBook);

export default booksRouter;