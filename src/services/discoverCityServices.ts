import { discoverCityRepository } from "../repositories/discoverCityRepository.js";

async function getCityById(cityId: number) {
  const city = await discoverCityRepository.getCityById(cityId);
  if (!city) {
    throw {
      type: "not_found",
      message: "City not registered!",
    };
  }

  return city;
}

export const discoverCityServices = {
  getCityById,
};
