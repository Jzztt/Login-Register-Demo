import express from "express";
import dotenv from "dotenv";
import routers from "./routes/index.js";
import connectMongoDB from "./config/dbConfig.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
const { PORT, DB_URL } = process.env;
connectMongoDB(DB_URL);
routers(app);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
