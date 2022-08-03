import { prisma } from "../config/database.js";

async function postVisited(cityId: number, userId: number) {
  await prisma.visited.create({ data: { userId, cityId } });
}

async function postUnvisited(cityId: number, userId: number) {
  await prisma.visited.delete({
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

export const toogleVisitedRepository = {
  postVisited,
  findCity,
  postUnvisited,
};
