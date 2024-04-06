import Joi from "joi";

const roleSchemaValidation = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  description: Joi.string(),
  status: Joi.string().valid("active", "inactive").required(),
});


export { roleSchemaValidation };
