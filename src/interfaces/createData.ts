/* eslint-disable camelcase */
import {
  Attraction,
  Attraction_type,
  City,
  Comment,
  State,
  User,
} from "@prisma/client";

export type CreateDataUser = Omit<User, "id" | "creat_at">;
export type CreteInfoSignIn = Omit<
  User,
  "id" | "profile_picture" | "user_name" | "creat_at"
>;
export type CreateComment = Omit<Comment, "id" | "creat_at">;
export type CreateCities = Omit<City, "id" | "creat_at">;
export type CreateStates = Omit<State, "id" | "creat_at">;
export type CreateAttractionsType = Omit<Attraction_type, "id" | "creat_at">;
export type CreateAttractions = Omit<Attraction, "id" | "creat_at">;
