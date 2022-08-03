import Joi from "joi";

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordConfirmation: Joi.string().valid(Joi.ref("password")).required(),
  profilePicture: Joi.string().uri().required(),
  userName: Joi.string().required(),
});

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const authSchema = {
  signUpSchema,
  signInSchema,
};
