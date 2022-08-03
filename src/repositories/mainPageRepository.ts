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
  const favorite = await prisma.like.findMany({
    where: { userId: id },
    include: { city: true },
  });
  const visited = await prisma.like.findMany({
    where: { userId: id },
    include: { city: true },
  });
  return [{ cities, like, favorite, visited }];
}

export const mainPageRepository = {
  getCities,
  getCityAndUser,
};
