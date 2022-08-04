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

async function getComments(userId: number) {
  const comments = await prisma.comment.findMany({ where: { userId } });
  return comments;
}

async function updateComment(commentId: number, comment: string) {
  await prisma.comment.update({ where: { id: commentId }, data: { comment } });
}

async function deleteComment(commentId: number) {
  await prisma.comment.delete({ where: { id: commentId } });
}

async function findComment(commentId: number) {
  const isComment = await prisma.comment.findUnique({
    where: { id: commentId },
  });

  return isComment;
}

export const commentsRepository = {
  insertComment,
  getCityComments,
  findCity,
  updateComment,
  findComment,
  deleteComment,
  getComments,
};
