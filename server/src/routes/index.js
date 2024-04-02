import booksRouter from "./book.js";
import authRouter from "./auth.js";
import roleRouter from "./role.js";

const routers = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  app.use("/books", booksRouter);
  app.use("/api", authRouter);
  app.use("/api/roles", roleRouter);


};

export default routers;