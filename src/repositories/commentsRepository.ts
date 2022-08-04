import { prisma } from "../config/database.js";
import { CreateComment } from "../interfaces/createData.js";

// TODO: ROTAS -  GET COMMENTS FROM A SPECIFIC CITY, INSERT COMMENT, UPDATE COMMENT, DELETE COMMENT

async function insertComment(commentData: CreateComment) {
  await prisma.comment.create({
    data: commentData,
  });
}

async function getCityComments(cityId: number) {
  const comments = await prisma.comment.findMany({ where: { cityId } });

  return comments;
}

async function findCity(cityId: number) {
  const isCityRegistered = await prisma.city.findUnique({
    where: { id: cityId },
  });

  return isCityRegistered;
}

export const commentsRepository = {
  insertComment,
  getCityComments,
  findCity,
};
