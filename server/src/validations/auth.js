import Joi from "joi";

const registerSchemaValidation = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required().messages({
    "string.empty": "Email not empty",
    "string.email": "Email is not valid",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Password not empty",
    "string.min": "Password must be at least 8 characters",
    "any.required": "Password is required",
  }),
  roleId: Joi.string().required().messages({
    "string.empty": "Role not empty",
    "any.required": "Role is required, Please select a role to display",
  }),
  gender: Joi.string().required().messages({
    "string.empty": "Gender not empty",
    "any.required": "Gender is required, Please select a gender to display",
  }),
  phone:Joi.string().optional().allow(""),
  address: Joi.string().optional().allow("").messages({
    "any.required": "Address is required",
  }),
});

const loginSchemaValidation = Joi.object({
  email: registerSchemaValidation.extract("email"),
  password: registerSchemaValidation.extract("password"),
});

export { registerSchemaValidation, loginSchemaValidation };
