import { prisma } from "../config/database.js";

async function postFavorites(cityId: number, userId: number) {
  await prisma.favorite.create({ data: { userId, cityId } });
}

async function postUnfavorites(cityId: number, userId: number) {
  await prisma.favorite.delete({
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

async function getFavoriteCities(userId: number) {
  const cities = await prisma.favorite.findMany({
    where: { userId },
    include: {
      city: {
        include: {
          likes: true,
          favorites: true,
          visits: true,
        },
      },
    },
  });

  return cities;
}

export const toogleFavoriteRespoitory = {
  postFavorites,
  findCity,
  postUnfavorites,
  getFavoriteCities,
};
