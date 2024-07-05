/*
  Warnings:

  - You are about to drop the `English` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Espanyol` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `France` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Italy` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lang` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "lang" TEXT NOT NULL;

-- DropTable
DROP TABLE "English";

-- DropTable
DROP TABLE "Espanyol";

-- DropTable
DROP TABLE "France";

-- DropTable
DROP TABLE "Italy";
