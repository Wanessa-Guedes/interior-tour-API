import { mainPageRepository } from "../repositories/mainPageRepository.js";

async function getCities() {
  const cities = await mainPageRepository.getCities();
  return cities;
}

async function getCityAndUser(id: number) {
  const infoCitiesAndUser = await mainPageRepository.getCityAndUser(id);
  return infoCitiesAndUser;
}

export const mainPageServices = {
  getCities,
  getCityAndUser,
};
