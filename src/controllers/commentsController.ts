/* eslint-disable array-callback-return */
import { Request, Response } from "express";
import { commentsService } from "../services/commentsServices.js";

export async function insertComments(req: Request, res: Response) {
  const { userInfo } = res.locals;

  const cityId = +req.params.cityId;

  const { comment } = req.body;

  const commentData = {
    comment,
    userId: userInfo.userId,
    cityId,
  };

  await commentsService.insertComment(commentData);

  res.sendStatus(201);
}

export async function getCityComments(req: Request, res: Response) {
  const cityId = +req.params.cityId;

  const comments = await commentsService.getCityComments(cityId);

  comments.map((comment) => {
    delete comment.user.passwordHash;
  });

  res.send(comments).status(200);
}

export async function updateComment(req: Request, res: Response) {
  const { userInfo } = res.locals;
  const commentId = +req.params.commentId;

  const { comment } = req.body;

  await commentsService.updateComment(commentId, comment, userInfo.userId);

  res.sendStatus(200);
}

export async function deleteComment(req: Request, res: Response) {
  const { userInfo } = res.locals;
  const commentId = +req.params.commentId;

  await commentsService.deleteComment(commentId, userInfo.userId);

  res.sendStatus(200);
}
