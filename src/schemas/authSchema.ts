import Joi from "joi";

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  userName: Joi.string().required(),
  profilePicture: Joi.string().uri().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.string().valid(Joi.ref("password")).required(),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const authSchema = {
  signUpSchema,
  signInSchema,
};
