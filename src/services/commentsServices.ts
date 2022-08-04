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

async function updateComment(commentId: number, comment: string) {
  const isComment = await commentsRepository.findComment(commentId);
  if (!isComment) {
    throw {
      type: "not_found",
      message: "Comment do not exist!",
    };
  }

  await commentsRepository.updateComment(commentId, comment);
}

export const commentsService = {
  insertComment,
  getCityComments,
  updateComment,
};
