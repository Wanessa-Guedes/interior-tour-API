import { prisma } from "../config/database.js";

async function getCities() {
  const cities = await prisma.city.findMany({
    include: {
      likes: true,
      favorites: true,
      visits: true,
    },
  });
  return cities;
}

async function getCityAndUser(id: number) {
  const cities = await prisma.city.findMany();
  const like = await prisma.like.findMany({
    where: { userId: id },
    include: { city: true },
  });
  const favorite = await prisma.favorite.findMany({
    where: { userId: id },
    include: { city: true },
  });
  const visited = await prisma.visited.findMany({
    where: { userId: id },
    include: { city: true },
  });
  return [{ cities, like, favorite, visited }];
}

async function getCitiesByState(stateId: number) {
  const cities = await prisma.city.findMany({
    where: {
      stateId,
    },
    include: {
      state: true,
    },
  });

  return cities;
}

export const mainPageRepository = {
  getCities,
  getCityAndUser,
  getCitiesByState,
};
