import Joi from "joi";

const insertCommentSchema = Joi.object({
  comment: Joi.string().required(),
});

export const commentSchema = {
  insertCommentSchema,
};
