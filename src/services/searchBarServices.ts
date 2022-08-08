import { searchBarRepository } from "../repositories/searchBarRepository.js";

async function searchState(stateName: string) {
  const states = await searchBarRepository.searchState(stateName);
  return states;
}

export const searchBarServices = {
  searchState,
};
