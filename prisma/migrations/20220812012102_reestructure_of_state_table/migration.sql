/*
  Warnings:

  - Added the required column `initials` to the `states` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "states" ADD COLUMN     "initials" TEXT NOT NULL;
