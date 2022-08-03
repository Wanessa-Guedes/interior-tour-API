import { toogleVisitedRepository } from "../repositories/toogleVisitedRepository.js";

// TODO: CONFERIR SE O ID DA CIDADE E DO USUÁRIO EXISTEM
async function postVisited(cityId: number, userId: number) {
  const isCityRegistered = await toogleVisitedRepository.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await toogleVisitedRepository.postVisited(cityId, userId);
}

async function postUnvisited(cityId: number, userId: number) {
  const isCityRegistered = await toogleVisitedRepository.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await toogleVisitedRepository.postUnvisited(cityId, userId);
}

export const toogleVisitedServices = {
  postVisited,
  postUnvisited,
};
