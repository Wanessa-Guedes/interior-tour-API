import { mainPageRepository } from "../repositories/mainPageRepository.js";

async function getCities() {
  const cities = await mainPageRepository.getCities();
  return cities;
}

async function getCityAndUser(id: number) {
  const infoCitiesAndUser = await mainPageRepository.getCityAndUser(id);
  return infoCitiesAndUser;
}

async function getCitiesByState(stateId: number) {
  const cities = await mainPageRepository.getCitiesByState(stateId);
  if (cities.length === 0) {
    throw {
      type: "not_found",
      message: "Any city found!",
    };
  }

  return cities;
}

export const mainPageServices = {
  getCities,
  getCityAndUser,
  getCitiesByState,
};
