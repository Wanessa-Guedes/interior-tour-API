/*
  Warnings:

  - The primary key for the `comments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `favorites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `visits` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "comments" DROP CONSTRAINT "comments_pkey",
ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("userId", "cityId");

-- AlterTable
ALTER TABLE "favorites" DROP CONSTRAINT "favorites_pkey",
ADD CONSTRAINT "favorites_pkey" PRIMARY KEY ("userId", "cityId");

-- AlterTable
ALTER TABLE "visits" DROP CONSTRAINT "visits_pkey",
ADD CONSTRAINT "visits_pkey" PRIMARY KEY ("userId", "cityId");
