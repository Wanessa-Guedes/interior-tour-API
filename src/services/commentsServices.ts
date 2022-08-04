/* eslint-disable array-callback-return */
import { CreateComment } from "../interfaces/createData.js";
import { commentsRepository } from "../repositories/commentsRepository.js";

// TODO: CONFIRMAR SE O USUÁRIO EXISTE, OU VER O PARAMS RECEBIDO É NÚMERO...
async function insertComment(commentData: CreateComment) {
  const isCityRegistered = await commentsRepository.findCity(
    commentData.cityId
  );
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await commentsRepository.insertComment(commentData);
}

async function getCityComments(cityId: number) {
  const isCityRegistered = await commentsRepository.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  const comments = await commentsRepository.getCityComments(cityId);

  return comments;
}

async function updateComment(
  commentId: number,
  comment: string,
  userId: number
) {
  const isComment = await commentsRepository.findComment(commentId);
  if (!isComment) {
    throw {
      type: "not_found",
      message: "Comment do not exist!",
    };
  }
  let commentBelongsToUser = false;
  const comments = await commentsRepository.getComments(userId);
  comments.map((item) => {
    if (item.id === commentId) {
      commentBelongsToUser = true;
    }
  });
  if (commentBelongsToUser) {
    await commentsRepository.updateComment(commentId, comment);
  } else {
    throw {
      type: "unauthorized",
      message: "Comment do not belongs to user!",
    };
  }
}

async function deleteComment(commentId: number, userId: number) {
  const isComment = await commentsRepository.findComment(commentId);
  if (!isComment) {
    throw {
      type: "not_found",
      message: "Comment do not exist!",
    };
  }
  let commentBelongsToUser = false;
  const comments = await commentsRepository.getComments(userId);
  comments.map((item) => {
    if (item.id === commentId) {
      commentBelongsToUser = true;
    }
  });
  if (commentBelongsToUser) {
    await commentsRepository.deleteComment(commentId);
  } else {
    throw {
      type: "unauthorized",
      message: "Comment do not belongs to user!",
    };
  }
}

export const commentsService = {
  insertComment,
  getCityComments,
  updateComment,
  deleteComment,
};
