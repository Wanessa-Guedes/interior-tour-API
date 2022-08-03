import { toogleFavoriteRespoitory } from "../repositories/toogleFavoriteRepository.js";

// TODO: CONFERIR SE O ID DA CIDADE E DO USUÁRIO EXISTEM
async function postFavorite(cityId: number, userId: number) {
  const isCityRegistered = await toogleFavoriteRespoitory.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await toogleFavoriteRespoitory.postFavorites(cityId, userId);
}

async function postUnfavorite(cityId: number, userId: number) {
  const isCityRegistered = await toogleFavoriteRespoitory.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await toogleFavoriteRespoitory.postUnfavorites(cityId, userId);
}

export const toogleFavoriteService = {
  postFavorite,
  postUnfavorite,
};
