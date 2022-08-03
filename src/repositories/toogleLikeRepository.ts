import { prisma } from "../config/database.js";

async function postLike(cityId: number, userId: number) {
  await prisma.like.create({ data: { userId, cityId } });
}

async function postDislike(cityId: number, userId: number) {
  await prisma.like.delete({
    where: {
      userId_cityId: {
        userId,
        cityId,
      },
    },
  });
}

async function findCity(cityId: number) {
  const isCityRegistered = await prisma.city.findUnique({
    where: { id: cityId },
  });

  return isCityRegistered;
}

export const toogleLikeRepository = {
  postLike,
  findCity,
  postDislike,
};
