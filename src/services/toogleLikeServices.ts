import { toogleLikeRepository } from "../repositories/toogleLikeRepository.js";

// TODO: CONFERIR SE O ID DA CIDADE E DO USUÁRIO EXISTEM
async function postLike(cityId: number, userId: number) {
  const isCityRegistered = await toogleLikeRepository.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await toogleLikeRepository.postLike(cityId, userId);
}

async function postDislike(cityId: number, userId: number) {
  const isCityRegistered = await toogleLikeRepository.findCity(cityId);
  if (!isCityRegistered) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }
  await toogleLikeRepository.postDislike(cityId, userId);
}

export const toogleLikeServices = {
  postLike,
  postDislike,
};
