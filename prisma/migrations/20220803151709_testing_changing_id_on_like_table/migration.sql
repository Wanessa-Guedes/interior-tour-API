/*
  Warnings:

  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "likes" DROP CONSTRAINT "likes_pkey",
ADD CONSTRAINT "likes_pkey" PRIMARY KEY ("userId", "cityId");
