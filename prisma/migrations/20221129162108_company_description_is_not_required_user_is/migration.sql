/*
  Warnings:

  - Made the column `user` on table `Company` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "user" SET NOT NULL;
