import Role from "../models/RoleModel.js";
import { roleSchemaValidation } from "../validations/role.js";

class RoleController {
  async createRole(req, res) {
    try {
      const { name, description, status } = req.body;
      const { error } = roleSchemaValidation.validate(
        { name, description, status },
        {
          abortEarly: false,
        }
      );
      if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
          success: false,
          message: errors[0],
        });
      }

      const checkRole = await Role.findOne({ name });
      if (checkRole) {
        throw new Error("Role already exists");
      }
      const newRole = await Role.create({
        name,
        description,
        status,
      });
      res.status(201).json({
        data: [newRole],
        success: true,
        message: "Create role successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllRole(req, res) {
    try {
      const roles = await Role.find();
      if (!roles) {
        throw NotFoundException("No role found");
      }
      res.status(200).json({
        data: roles,
        success: true,
        message: "Get all roles successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default RoleController;
