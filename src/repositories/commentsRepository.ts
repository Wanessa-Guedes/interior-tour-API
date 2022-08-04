import { prisma } from "../config/database.js";
import { CreateComment } from "../interfaces/createData.js";

// TODO: ROTAS -  GET COMMENTS FROM A SPECIFIC CITY, INSERT COMMENT, UPDATE COMMENT, DELETE COMMENT

async function insertComment(commentData: CreateComment) {
  await prisma.comment.create({
    data: commentData,
  });
}

export const commentsRepository = {
  insertComment,
};
