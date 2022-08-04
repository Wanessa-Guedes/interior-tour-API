import { Comment, User } from "@prisma/client";

export type CreateDataUser = Omit<User, "id" | "creat_at">;
export type CreteInfoSignIn = Omit<
  User,
  "id" | "profile_picture" | "user_name" | "creat_at"
>;

export type CreateComment = Omit<Comment, "id" | "creat_at">;
