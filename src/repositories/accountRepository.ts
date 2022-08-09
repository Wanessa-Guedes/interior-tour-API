import { prisma } from "../config/database.js";

async function getUserInfoById(userId: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  return user;
}

export const accountRepository = {
  getUserInfoById,
};
