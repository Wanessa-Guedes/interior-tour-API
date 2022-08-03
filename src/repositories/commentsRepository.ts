import { prisma } from "../config/database.js";

async function insertComment(comment: string, userId: number, cityId: number) {
  await prisma.comment.create({
    data: {
      comment,
      userId,
      cityId,
    },
  });
}


export const commentsRepository = {
    insertComment,
}