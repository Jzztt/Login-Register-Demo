import express from "express";
import RoleController from "../controllers/RoleController.js";
const roleRouter = express.Router();
const roleController = new RoleController();

roleRouter.get("/", roleController.getAllRole);
roleRouter.post("/", roleController.createRole);

export default roleRouter;