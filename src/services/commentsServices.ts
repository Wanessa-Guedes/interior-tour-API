import { CreateComment } from "../interfaces/createData.js";
import { commentsRepository } from "../repositories/commentsRepository.js";

// TODO: CONFIRMAR SE O USUÁRIO EXISTE, OU VER O PARAMS RECEBIDO É NÚMERO...
async function insertComment(commentData: CreateComment) {
  await commentsRepository.insertComment(commentData);
}

export const commentsService = {
  insertComment,
};
