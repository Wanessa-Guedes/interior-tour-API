import { prisma } from "../config/database.js";

async function searchState(stateName: string) {
  const states = await prisma.state.findMany({
    where: {
      name: {
        startsWith: stateName,
        mode: "insensitive",
      },
    },
  });

  return states;
}

export const searchBarRepository = {
  searchState,
};
