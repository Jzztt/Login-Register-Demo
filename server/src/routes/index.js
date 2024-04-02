import booksRouter from "./books.js";
import authRouter from "./auth.js";

const routers = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/books", booksRouter);
  app.use("/api", authRouter);

};

export default routers;