import express from "express";
import BookController from "../controllers/bookController.js";
import { verifyToken } from "../middlewares/auth.js";
const booksRouter = express.Router();

const bookController = new BookController();

booksRouter.get("/", verifyToken, bookController.getAllBook);
booksRouter.post("/",verifyToken, bookController.createBook);
booksRouter.get("/:id",verifyToken, bookController.getBookDetail);
booksRouter.put("/:id",verifyToken, bookController.updateBook);
booksRouter.delete("/:id",verifyToken, bookController.deleteBook);

export default booksRouter;
