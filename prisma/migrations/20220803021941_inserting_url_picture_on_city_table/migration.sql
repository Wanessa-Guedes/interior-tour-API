/*
  Warnings:

  - Added the required column `url_picture` to the `cities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cities" ADD COLUMN     "url_picture" TEXT NOT NULL;
