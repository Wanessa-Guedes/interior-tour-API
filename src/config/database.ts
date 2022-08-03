import pkg from "@prisma/client";

const { PrismaClient } = pkg;

// eslint-disable-next-line import/prefer-default-export
export const prisma = new PrismaClient();
