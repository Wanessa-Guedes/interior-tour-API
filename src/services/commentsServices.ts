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

export const commentsService = {
  insertComment,
  getCityComments,
};
