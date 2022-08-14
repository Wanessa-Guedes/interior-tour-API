import Joi from "joi";

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  userName: Joi.string().required(),
  profilepicture: Joi.string().uri().required(),
  password: Joi.string().required(),
  confirmpassword: Joi.string().valid(Joi.ref("password")).required(),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const authSchema = {
  signUpSchema,
  signInSchema,
};
