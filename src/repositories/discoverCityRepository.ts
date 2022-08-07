import { prisma } from "../config/database.js";

async function getCityById(cityId: number) {
  const city = prisma.city.findUnique({
    where: { id: cityId },
    include: {
      attractions: {
        include: {
          type: true,
        },
      },
      comments: true,
      state: true,
    },
  });

  return city;
}

export const discoverCityRepository = {
  getCityById,
};
