import { Router } from "express";
import {
  deleteComment,
  getCityComments,
  insertComments,
  updateComment,
} from "../controllers/commentsController.js";
import { schemaValidator } from "../middlewares/schemaValidator.js";
import { validateToken } from "../middlewares/tokenValidator.js";
import { commentSchema } from "../schemas/commentSchema.js";

const commentsRouter = Router();

commentsRouter.post(
  "/infocity/insertComment/:cityId",
  validateToken,
  schemaValidator(commentSchema.insertCommentSchema),
  insertComments
);
commentsRouter.get("/infocity/comments/:cityId", getCityComments);
commentsRouter.put(
  "/infocity/update/:commentId",
  validateToken,
  schemaValidator(commentSchema.insertCommentSchema),
  updateComment
);
commentsRouter.delete(
  "/infocity/delete/:commentId",
  validateToken,
  deleteComment
);

export default commentsRouter;
