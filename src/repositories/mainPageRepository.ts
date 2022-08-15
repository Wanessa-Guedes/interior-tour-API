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

async function getCitiesByState(stateId: number) {
  const cities = await prisma.state.findMany({
    where: {
      id: stateId,
    },
    include: {
      cities: {
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

export const mainPageRepository = {
  getCities,
  getCitiesByState,
};
